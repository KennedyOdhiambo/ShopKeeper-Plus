import { InsertSales, sales } from '@/server/db/schema/sales';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { z } from 'zod';
import { and, asc, between, eq, gt, sql } from 'drizzle-orm';
import { customers } from '@/server/db/schema/customers';
import { users } from '@/server/db/schema/users';
import { inventory } from '@/server/db/schema/inventory';
import { InsertSalesItem, salesItems } from '@/server/db/schema/salesItems';
import { creditDebt, InsertCreditDebt } from '@/server/db/schema/creditDebt';

export const salesRouter = createTRPCRouter({
   listSales: publicProcedure
      .input(
         z.object({
            startDate: z.string().optional(),
            endDate: z.string().optional(),
            paymentMethod: z.enum(['cash', 'credit', 'mpesa']).optional(),
         }),
      )
      .query(async ({ ctx, input }) => {
         const startDate = input.startDate ?? new Date(2010, 0, 1).toISOString();
         const endDate = input.endDate ?? new Date().toISOString();

         const conditions = [between(sales.salesDate, startDate, endDate)];
         if (input.paymentMethod) {
            conditions.push(eq(sales.paymentOption, input.paymentMethod));
         }

         const res = await ctx.db
            .select()
            .from(sales)
            .where(and(...conditions))
            .rightJoin(customers, eq(sales.customerId, customers.customerId))
            .execute();

         return {
            status: 'success' as const,
            sales: res,
         };
      }),

   listMonthlySales: publicProcedure
      .input(
         z.object({
            startDate: z.string().optional(),
            endDate: z.string().optional(),
         }),
      )
      .query(async ({ ctx, input }) => {
         const startDate = input.startDate ?? new Date(2010, 0, 1).toISOString();
         const endDate = input.endDate ?? new Date().toISOString();

         const totalMonthlySales = await ctx.db
            .select({
               month: sql<string>`to_char(${sales.salesDate}, 'YYYY-MM')`,
               total: sql<number>`sum(${sales.totalCost})`,
            })
            .from(sales)
            .where(between(sales.salesDate, startDate, endDate))
            .groupBy(sql`to_char(${sales.salesDate}, 'YYYY-MM')`);

         return totalMonthlySales;
      }),

   newSales: publicProcedure
      .input(
         z.object({
            userId: z.string().min(1, { message: 'user Id is required' }),
            salesDate: z.string(),
            paymentOption: z.enum(['cash', 'mpesa', 'credit']).default('cash'),
            customer: z.string(),
            items: z.array(
               z.object({
                  itemId: z.string().min(2, { message: 'invalid itemId' }),
                  quantity: z.number().min(1, { message: 'Quantity should be greater than 1' }),
               }),
            ),
         }),
      )
      .mutation(async ({ ctx, input }) => {
         return await ctx.db.transaction(async (tx) => {
            try {
               const { customer, items, paymentOption, salesDate, userId } = input;

               const user = await tx.select().from(users).where(eq(users.userId, userId));
               if (!user.length) {
                  return { status: 'error', message: 'User not found' };
               }

               let customerId = undefined;

               if (paymentOption === 'credit') {
                  const salesCustomer = await ctx.db
                     .select()
                     .from(customers)
                     .where(and(eq(customers.customerId, customer), eq(customers.userId, userId)));

                  if (!salesCustomer.length) {
                     return { status: 'error', message: 'Customer not found' };
                  }

                  customerId = salesCustomer[0].customerId;
               }

               console.log('customerId', customerId);

               let totalCost = 0;
               const salesItemsToInsert: InsertSalesItem[] = [];
               for (const item of items) {
                  const { itemId, quantity } = item;

                  const availableInventory = await ctx.db
                     .select()
                     .from(inventory)
                     .where(
                        and(
                           eq(inventory.itemId, itemId),
                           eq(inventory.status, 'active'),
                           gt(inventory.quantityInStock, 0),
                        ),
                     )
                     .orderBy(asc(inventory.lastUpdated));
                  if (!availableInventory.length) {
                     return {
                        status: 'error',
                        message: `No inventory records for item ${itemId}`,
                     };
                  }

                  const totalQuantityInStock = availableInventory.reduce(
                     (start, item) => item.quantityInStock + start,
                     0,
                  );
                  if (!totalQuantityInStock || totalQuantityInStock < quantity) {
                     return {
                        status: 'error',
                        message: `Insufficient quantity available for item ${itemId}`,
                     };
                  }

                  let remainingQuantity = quantity;
                  let itemCost = 0;

                  for (const invItem of availableInventory) {
                     if (invItem.quantityInStock > 0) {
                        const deduction = Math.min(remainingQuantity, invItem.quantityInStock);
                        invItem.quantityInStock -= deduction;
                        remainingQuantity -= deduction;
                        const deductionCost = deduction * Number(invItem.sellingPrice);
                        itemCost += deductionCost;

                        await tx
                           .update(inventory)
                           .set({
                              quantityInStock: invItem.quantityInStock,
                           })
                           .where(eq(inventory.inventoryId, invItem.inventoryId));

                        salesItemsToInsert.push({
                           itemId,
                           inventoryId: invItem.inventoryId,
                           salesQuantity: deduction,
                           unitPrice: invItem.sellingPrice,
                           totalPrice: String(deductionCost),
                           status: 'active',
                        });

                        if (remainingQuantity === 0) break;
                     }
                  }
                  totalCost += itemCost;
               }

               const salesPayload: InsertSales = {
                  customerId: customerId,
                  paymentOption: paymentOption,
                  salesDate,
                  status: 'active',
                  totalCost: String(totalCost),
                  userId: user[0].userId,
               };

               const res = await ctx.db
                  .insert(sales)
                  .values(salesPayload)
                  .returning({ salesId: sales.salesId });
               if (!res.length) {
                  return {
                     status: 'error',
                     message: 'Failed to record sales, check and try again',
                  };
               }
               const salesId = res[0].salesId;

               for (const salesItem of salesItemsToInsert) {
                  await tx.insert(salesItems).values({
                     ...salesItem,
                     salesId,
                  });
               }

               if (paymentOption === 'credit') {
                  const payload: InsertCreditDebt = {
                     customerId,
                     salesId,
                     transactionAmount: String(totalCost),
                     userId,
                     transactionDate: salesDate,
                     transactionType: 'credit',
                  };

                  await tx.insert(creditDebt).values(payload);
               }

               return {
                  status: 'success',
                  message: 'Sales succesfully recorded',
               };
            } catch (e) {
               console.error(e);
               return {
                  status: 'Error',
                  message: 'Error recording sales',
               };
            }
         });
      }),
});
