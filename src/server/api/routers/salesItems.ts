import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { between, eq } from 'drizzle-orm';
import { sales } from '@/server/db/schema/sales';
import { salesItems } from '@/server/db/schema/salesItems';

export const salesItemsRouter = createTRPCRouter({
   listSalesItems: publicProcedure
      .input(
         z.object({
            itemId: z.string().optional(),
            customerId: z.string().optional(),
            startDate: z.string().optional(),
            endDate: z.string().optional(),
         }),
      )
      .query(async ({ input }) => {
         const { itemId, customerId, startDate, endDate } = input;
         const formattedStartDate = startDate ?? new Date(2010, 0, 1).toISOString();
         const formattedEndDate = endDate ?? new Date().toISOString();

         const conditions = [between(sales.salesDate, formattedStartDate, formattedEndDate)];
         if (itemId) {
            conditions.push(eq(salesItems.itemId, itemId));
         }
         if (customerId) {
            conditions.push(eq(sales.customerId, customerId));
         }
      }),
});
