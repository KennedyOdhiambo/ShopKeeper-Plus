import { customers } from '@/server/db/schema/customers';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const customersRouter = createTRPCRouter({
   listCustomers: publicProcedure.query(async ({ ctx }) => {
      const res = await ctx.db.select().from(customers);
      return res;
   }),
});
