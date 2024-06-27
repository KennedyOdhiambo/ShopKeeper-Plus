import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { items } from '@/server/db/schema/items';
import { and, desc, eq } from 'drizzle-orm';
import { inventory } from '@/server/db/schema/inventory';

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

   quantityInStock: publicProcedure
      .input(
         z.object({
            itemId: z.string(),
         })
      )
      .query(async ({ ctx, input }) => {
         const { itemId } = input;
         // const uom = await ctx.db.select().from(items).where(eq(items.itemId, itemId))
         const itemInventory = await ctx.db
            .select()
            .from(inventory)
            .where(and(eq(inventory.itemId, itemId), eq(inventory.status, 'active')))
            .orderBy(desc(inventory.lastUpdated));

         const quantityInStock = itemInventory.reduce((start, item) => item.quantityStocked + start, 0);

         return quantityInStock;
      }),
});
