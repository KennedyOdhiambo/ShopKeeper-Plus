import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { items } from '@/server/db/schema/items';
import { and, count, desc, eq, gt } from 'drizzle-orm';
import { inventory } from '@/server/db/schema/inventory';
import { categories } from '@/server/db/schema/categories';
import { PAGE_SIZE } from '@/lib/const';

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

   listItemsByCategory: publicProcedure
      .input(
         z.object({
            categoryId: z.string().optional(),
            page: z.string(),
         }),
      )
      .query(async ({ ctx, input }) => {
         const { categoryId, page } = input;
         const { db } = ctx;

         const offset = +page * PAGE_SIZE;

         let conditions = [eq(items.status, 'active')];

         if (categoryId && categoryId !== 'all') {
            conditions.push(eq(items.categoryId, categoryId));
         }

         const itemsQuery = db
            .select()
            .from(items)
            .where(and(...conditions))
            .leftJoin(categories, eq(items.categoryId, categories.categoryId))
            .limit(PAGE_SIZE)
            .offset(offset);

         const countQuery = db
            .select({ value: count() })
            .from(items)
            .where(and(...conditions));

         const [itemsResult, countResult] = await Promise.all([itemsQuery, countQuery]);

         return {
            items: itemsResult,
            count: countResult[0].value,
         };
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
            .where(
               and(
                  eq(inventory.itemId, itemId),
                  eq(inventory.status, 'active'),
                  gt(inventory.quantityInStock, 0),
               ),
            )
            .orderBy(desc(inventory.lastUpdated));

         const quantityInStock = itemInventory.reduce(
            (start, item) => item.quantityInStock + start,
            0,
         );
         const uom = itemInventory[0].uom;
         const sellingPrice = itemInventory[itemInventory.length - 1].sellingprice;

         return { uom, sellingPrice, quantityInStock };
      }),
});
