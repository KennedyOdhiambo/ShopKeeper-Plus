import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { expenses } from '@/server/db/schema/expenses';
import { between } from 'drizzle-orm';

export const expenseRouter = createTRPCRouter({
   listExpenses: publicProcedure
      .input(
         z.object({
            startDate: z.string().optional(),
            endDate: z.string().optional(),
         }),
      )
      .query(async ({ ctx, input }) => {
         const res = await ctx.db
            .select()
            .from(expenses)
            .where(
               between(
                  expenses.paymenDate,
                  input.startDate ?? new Date(2010, 0, 1).toISOString(),
                  input.endDate ?? new Date().toISOString(),
               ),
            );

         return {
            status: 'success' as const,
            expenses: res,
         };
      }),
});
