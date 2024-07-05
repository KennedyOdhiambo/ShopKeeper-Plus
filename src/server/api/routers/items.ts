import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { items } from '@/server/db/schema/items';
import { and, desc, eq, gt } from 'drizzle-orm';
import { inventory } from '@/server/db/schema/inventory';

export const itemsRouter = createTRPCRouter({
   listItems: publicProcedure
      .input(
         z.object({
            userId: z.string(),
         }),
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
         }),
      )
      .query(async ({ ctx, input }) => {
         const { itemId } = input;
         const itemInventory = await ctx.db
            .select({
               quantityInStock: inventory.quantityInStock,
               uom: items.unitOfMeasure,
               sellingprice: inventory.sellingPrice,
            })
            .from(inventory)
            .leftJoin(items, eq(inventory.itemId, items.itemId))
            .where(and(eq(inventory.itemId, itemId), eq(inventory.status, 'active'), gt(inventory.quantityInStock, 0)))
            .orderBy(desc(inventory.lastUpdated));

         const quantityInStock = itemInventory.reduce((start, item) => item.quantityInStock + start, 0);
         const uom = itemInventory[0].uom;
         const sellingPrice = itemInventory[itemInventory.length - 1].sellingprice;

         return { uom, sellingPrice, quantityInStock };
      }),
});
