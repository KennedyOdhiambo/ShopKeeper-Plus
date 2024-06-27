import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { items } from '@/server/db/schema/items';
import { and, eq } from 'drizzle-orm';

export const itemsRouter = createTRPCRouter({
   listItems: publicProcedure
      .input(
         z.object({
            userId: z.string(),
         })
      )
      .query(async ({ ctx, input }) => {
         const { userId } = input;
         const res = await ctx.db
            .select()
            .from(items)
            .where(and(eq(items.userId, userId), eq(items.status, 'active')));

         return res;
      }),
});
