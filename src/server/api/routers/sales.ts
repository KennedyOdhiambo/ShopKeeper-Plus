import { InsertSales, sales } from '@/server/db/schema/sales';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { z } from 'zod';
import { and, asc, between, count, desc, eq, gt, sql } from 'drizzle-orm';
import { customers } from '@/server/db/schema/customers';
import { users } from '@/server/db/schema/users';
import { inventory } from '@/server/db/schema/inventory';
import { InsertSalesItem, salesItems } from '@/server/db/schema/salesItems';
import { creditDebt, InsertCreditDebt } from '@/server/db/schema/creditDebt';
import { PAGE_SIZE } from '@/lib/const';

export const salesRouter = createTRPCRouter({
   listSales: publicProcedure
      .input(
         z.object({
            startDate: z.string().optional(),
            endDate: z.string().optional(),
            paymentMethod: z.enum(['cash', 'credit', 'mpesa']).optional(),
            customerId: z.string().optional(),
            page: z.string().optional(),
         }),
      )
      .query(async ({ ctx, input }) => {
         const startDate = input.startDate ?? new Date(2010, 0, 1).toISOString();
         const endDate = input.endDate ?? new Date().toISOString();

         const conditions = [between(sales.salesDate, startDate, endDate)];
         if (input.paymentMethod) {
            conditions.push(eq(sales.paymentOption, input.paymentMethod));
         }

         if (input.customerId) {
            conditions.push(eq(sales.customerId, input.customerId));
         }

         const res = await ctx.db
            .select()
            .from(sales)
            .where(and(...conditions, eq(sales.status, 'active')))
            .leftJoin(customers, eq(sales.customerId, customers.customerId))
            .orderBy(desc(sales.salesDate))
            .execute();

         return {
            status: 'success' as const,
            sales: res,
         };
      }),

   listPaginatedSales: publicProcedure
      .input(
         z.object({
            startDate: z.string().optional(),
            endDate: z.string().optional(),
            paymentMethod: z.enum(['cash', 'credit', 'mpesa']).optional(),
            customerId: z.string().optional(),
            page: z.string(),
         }),
      )
      .query(async ({ ctx, input }) => {
         const startDate = input.startDate ?? new Date(2010, 0, 1).toISOString();
         const endDate = input.endDate ?? new Date().toISOString();

         const conditions = [between(sales.salesDate, startDate, endDate)];
         if (input.paymentMethod) {
            conditions.push(eq(sales.paymentOption, input.paymentMethod));
         }
         if (input.customerId) {
            conditions.push(eq(sales.customerId, input.customerId));
         }

         const offset = +input.page * PAGE_SIZE;

         const salesQuery = ctx.db
            .select()
            .from(sales)
            .where(and(...conditions, eq(sales.status, 'active')))
            .leftJoin(customers, eq(sales.customerId, customers.customerId))
            .orderBy(desc(sales.salesDate))
            .limit(PAGE_SIZE)
            .offset(offset);

         const countQuery = ctx.db
            .select({ value: count() })
            .from(sales)
            .where(and(...conditions, eq(sales.status, 'active')));

         const [salesResult, countResult] = await Promise.all([
            salesQuery.execute(),
            countQuery.execute(),
         ]);

         const totalCount = countResult[0].value;

         return {
            sales: salesResult,
            totalCount: totalCount,
         };
      }),

   deleteSale: publicProcedure
      .input(
         z.object({
            salesId: z.string().min(2, { message: 'Sales Id is required' }),
         }),
      )
      .mutation(async ({ ctx, input }) => {
         const { salesId } = input;
         const salesInfo = await ctx.db
            .select()
            .from(sales)
            .where(and(eq(sales.salesId, salesId), eq(sales.status, 'active')));

         if (!salesInfo.length) {
            return {
               status: 'error',
               message: 'Record not found',
            };
         }

         const deletedSale = await ctx.db
            .update(sales)
            .set({ status: 'deleted' })
            .where(eq(sales.salesId, salesId))
            .returning();

         if (!deletedSale.length) {
            return {
               status: 'error',
               message: 'Failed to delete, please try again',
            };
         }

         const deletedItems = await ctx.db
            .update(salesItems)
            .set({
               status: 'deleted',
            })
            .where(eq(salesItems.salesId, deletedSale[0].salesId))
            .returning();

         if (!deletedItems.length) {
            return {
               status: 'error',
               message: 'Error deleting associated items,please contact customer care',
            };
         }

         if (deletedSale[0].paymentOption === 'credit') {
            const salesId = deletedSale[0].salesId;
            const updatedCredit = await ctx.db
               .update(creditDebt)
               .set({
                  status: 'deleted',
               })
               .where(eq(creditDebt.salesId, salesId));

            if (!updatedCredit.length) {
               return {
                  status: 'error',
                  message: 'Error updating credit entry, please contact customer care',
               };
            }

            return {
               status: 'success',
               message: 'Sales succesfully deleted',
            };
         }

         return {
            status: 'success',
            message: 'Sales succesfully deleted!',
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
         const defaultStartDate = new Date();
         defaultStartDate.setFullYear(defaultStartDate.getFullYear() - 1);

         const startDate = input.startDate ?? defaultStartDate.toISOString();
         const endDate = input.endDate ?? new Date().toISOString();

         const totalMonthlySales = await ctx.db
            .select({
               month: sql<string>`to_char(${sales.salesDate}, 'YYYY-MM')`,
               total: sql<number>`sum(${sales.totalCost})`,
            })
            .from(sales)
            .where(between(sales.salesDate, startDate, endDate))
            .groupBy(sql`to_char(${sales.salesDate}, 'YYYY-MM')`)
            .orderBy(sql`to_char(${sales.salesDate}, 'YYYY-MM') ASC`);

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
