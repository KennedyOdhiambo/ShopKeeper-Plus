import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { InsertItem, items } from '@/server/db/schema/items';
import { and, count, desc, eq, gt } from 'drizzle-orm';
import { inventory } from '@/server/db/schema/inventory';
import { categories } from '@/server/db/schema/categories';
import { PAGE_SIZE } from '@/lib/const';
import { users } from '@/server/db/schema/users';
import { NewItemValidation, updateItemValidation } from '@/validation/newItemValidation';

export const itemsRouter = createTRPCRouter({
   createItem: publicProcedure
      .input(NewItemValidation.extend({ userId: z.string() }))
      .mutation(async ({ ctx, input }) => {
         const { userId, itemName, categoryId, reorderLevel, unitOfmeasure } = input;
         const { db } = ctx;

         const existingUser = await db.select().from(users).where(eq(users.userId, userId));
         if (!existingUser) {
            return {
               status: 'error' as const,
               message: 'User not found',
            };
         }

         const category = await db
            .select()
            .from(categories)
            .where(eq(categories.categoryId, categoryId));
         if (!category) {
            return {
               status: 'error' as const,
               message: 'Category not found',
            };
         }

         const payload: InsertItem = {
            itemName,
            unitOfMeasure: unitOfmeasure,
            categoryId: category[0].categoryId,
            userId: existingUser[0].userId,
            reorderLevel: Number(reorderLevel),
         };
         await db.insert(items).values(payload);

         return {
            status: 'success' as const,
            message: 'Item succesfully added',
         };
      }),

   updateItem: publicProcedure.input(updateItemValidation).mutation(async ({ ctx, input }) => {
      const { itemId, itemName, unitOfmeasure, reorderLevel } = input;
      const { db } = ctx;

      const existingItem = await db
         .select()
         .from(items)
         .where(and(eq(items.itemId, itemId), eq(items.status, 'active')));
      if (!existingItem.length)
         return {
            status: 'error' as const,
            message: 'Item not found',
         };

      await db
         .update(items)
         .set({
            itemName: itemName,
            unitOfMeasure: unitOfmeasure,
            reorderLevel: Number(reorderLevel),
         })
         .where(eq(items.itemId, itemId));

      return {
         status: 'success' as const,
         message: 'Item updated succesfully',
      };
   }),

   deleteItem: publicProcedure
      .input(
         z.object({
            itemId: z.string().min(2, { message: 'ItemId is required' }),
         }),
      )
      .mutation(async ({ ctx, input }) => {
         const { itemId } = input;
         const { db } = ctx;

         const existingItem = await db
            .select()
            .from(items)
            .where(and(eq(items.itemId, itemId), eq(items.status, 'active')));
         if (!existingItem.length)
            return {
               status: 'error' as const,
               message: 'Item not found',
            };

         await db.update(items).set({ status: 'deleted' }).where(eq(items.itemId, itemId));

         return {
            status: 'success' as const,
            message: 'Item succesfully deleted',
         };
      }),

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

   getItemDetails: publicProcedure
      .input(
         z.object({
            itemId: z.string().min(1, { message: 'Item id is required' }),
         }),
      )
      .query(async ({ ctx, input }) => {
         const { itemId } = input;
         const { db } = ctx;

         const existingItem = await db
            .select()
            .from(items)
            .where(and(eq(items.itemId, itemId), eq(items.status, 'active')));

         if (!existingItem.length)
            return {
               status: 'error' as const,
               message: 'Item not found',
            };

         return {
            status: 'success' as const,
            item: existingItem[0],
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
