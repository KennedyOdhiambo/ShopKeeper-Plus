import { customers } from '@/server/db/schema/customers';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { z } from 'zod';
import { and, eq } from 'drizzle-orm';

export const customersRouter = createTRPCRouter({
   listCustomers: publicProcedure
      .input(
         z.object({
            userId: z.string(),
         })
      )
      .query(async ({ ctx, input }) => {
         const { userId } = input;
         const res = await ctx.db
            .select()
            .from(customers)
            .where(and(eq(customers.userId, userId), eq(customers.status, 'active')));
         return res;
      }),
});
