import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { PAGE_SIZE } from '@/lib/const';
import { items } from '@/server/db/schema/items';
import { and, count, eq } from 'drizzle-orm';
import { newInventoryValidation } from '@/validation/inventoryValidation';
import { inventory } from '@/server/db/schema/inventory';

export const inventoryRouter = createTRPCRouter({
   addInventory: publicProcedure.input(newInventoryValidation).mutation(async ({ ctx, input }) => {
      const { buyingPrice, itemId, lastUpdated, quantityAdded, sellingPrice } = input;
      const { db } = ctx;

      const existingitem = await db
         .select()
         .from(items)
         .where(and(eq(items.itemId, itemId), eq(items.status, 'active')));
      if (!existingitem.length)
         return {
            status: 'error' as const,
            message: 'Item not found',
         };

      const payload = {
         buyingPrice: String(buyingPrice),
         itemId: existingitem[0].itemId,
         lastUpdated,
         quantityAdded: +quantityAdded,
         quantityInStock: +quantityAdded,
         sellingPrice: String(sellingPrice),
      };

      await db.insert(inventory).values(payload);

      return {
         status: 'success' as const,
         message: 'Inventory succesfully added',
      };
   }),

   listInventory: publicProcedure
      .input(
         z.object({
            itemId: z.string(),
            page: z.string(),
         }),
      )
      .query(async ({ ctx, input }) => {
         const { itemId, page } = input;
         const { db } = ctx;

         const offset = Number(page) * PAGE_SIZE;

         const existingItem = await db
            .select()
            .from(items)
            .where(and(eq(items.itemId, itemId), eq(items.status, 'active')));
         if (!existingItem.length)
            return {
               status: 'error' as const,
               message: 'Item not found',
            };

         const inventoryQuery = db
            .select()
            .from(inventory)
            .where(and(eq(inventory.itemId, itemId), eq(inventory.status, 'active')))
            .limit(PAGE_SIZE)
            .offset(offset);

         const countQuery = db
            .select({ count: count() })
            .from(inventory)
            .where(and(eq(inventory.itemId, itemId), eq(inventory.status, 'active')));

         const [inventoryEntries, countResult] = await Promise.all([inventoryQuery, countQuery]);

         return {
            status: 'success' as const,
            inventory: inventoryEntries,
            item: existingItem[0],
            count: countResult[0].count,
         };
      }),
});
