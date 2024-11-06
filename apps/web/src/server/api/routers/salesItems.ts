import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { sales } from '@/server/db/schema/sales';
import { eq } from 'drizzle-orm';
import { salesItems } from '@/server/db/schema/salesItems';
import { inventory } from '@/server/db/schema/inventory';
import { customers, SelectCustomers } from '@/server/db/schema/customers';
import { creditDebt, SelectCreditDebt } from '@/server/db/schema/creditDebt';
import { items } from '@/server/db/schema/items';

export const salesItemsRouter = createTRPCRouter({
   listSalesItems: publicProcedure
      .input(
         z.object({
            salesId: z.string().min(1, { message: 'SalesId is required' }),
         }),
      )
      .query(async ({ ctx, input }) => {
         try {
            const { salesId } = input;
            const { db } = ctx;

            const existingSale = await db.select().from(sales).where(eq(sales.salesId, salesId));
            if (!existingSale.length) {
               return {
                  status: 'error' as const,
                  message: 'No sales record found',
               };
            }

            const associatedItems = await db
               .select()
               .from(salesItems)
               .where(eq(salesItems.salesId, salesId))
               .leftJoin(inventory, eq(inventory.inventoryId, salesItems.inventoryId))
               .leftJoin(items, eq(items.itemId, salesItems.itemId));

            if (!associatedItems.length) {
               return {
                  status: 'error' as const,
                  message: 'No sales Items found',
               };
            }

            let customer: SelectCustomers[] = [];
            if (existingSale[0].customerId !== null) {
               const customerId = existingSale[0].customerId;
               customer = await db
                  .select()
                  .from(customers)
                  .where(eq(customers.customerId, customerId));
            }

            let creditData: SelectCreditDebt[] = [];
            if (existingSale[0].paymentOption === 'credit') {
               creditData = await db
                  .select()
                  .from(creditDebt)
                  .where(eq(creditDebt.salesId, salesId));
            }

            const successResponse = {
               status: 'success' as const,
               sales: existingSale[0],
               customer: customer[0],
               credit: creditData[0],
               salesItemsAndInventory: associatedItems,
            };

            return successResponse;
         } catch (error) {
            console.error(error);
            return {
               status: 'error' as const,
               message: 'Server error, please contact support',
            };
         }
      }),
});
