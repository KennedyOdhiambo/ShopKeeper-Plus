import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { categories } from '@/server/db/schema/categories';
import { and, eq } from 'drizzle-orm';
import { newCategoryValidation } from '@/validation/categoriesValidation';
import { users } from '@/server/db/schema/users';

export const categoriesRouter = createTRPCRouter({
   createCategory: publicProcedure
      .input(
         newCategoryValidation.extend({
            userId: z.string().min(2, { message: 'UserId is required' }),
         }),
      )
      .mutation(async ({ ctx, input }) => {
         const { categoryName, description, userId } = input;
         const { db } = ctx;

         const checkUser = await db
            .select()
            .from(users)
            .where(and(eq(users.userId, userId), eq(users.status, 'active')));
         if (!checkUser.length)
            return {
               status: 'error' as const,
               message: 'User not found',
            };

         await db.insert(categories).values({
            categoryName,
            description,
            userId,
         });

         return {
            status: 'succcess' as const,
            message: 'Category succesfully added',
         };
      }),

   updateCategory: publicProcedure
      .input(
         newCategoryValidation.extend({
            categoryId: z.string().min(2, { message: 'CategoryId is required' }),
         }),
      )
      .mutation(async ({ ctx, input }) => {
         const { categoryId, categoryName, description } = input;
         const { db } = ctx;

         const existingCategory = await db
            .select()
            .from(categories)
            .where(and(eq(categories.categoryId, categoryId), eq(categories.status, 'active')));

         if (!existingCategory.length)
            return {
               status: 'error' as const,
               message: 'Category not found',
            };

         await db
            .update(categories)
            .set({ categoryName, description })
            .where(eq(categories.categoryId, categoryId));

         return {
            status: 'success' as const,
            message: 'Category succesfully updated!',
         };
      }),

   deleteCategory: publicProcedure
      .input(
         z.object({
            categoryId: z.string().min(2, { message: 'CategoryId is required' }),
         }),
      )
      .mutation(async ({ ctx, input }) => {
         const { categoryId } = input;
         const { db } = ctx;

         const existingCategory = await db
            .select()
            .from(categories)
            .where(and(eq(categories.categoryId, categoryId), eq(categories.status, 'active')));

         if (!existingCategory.length)
            return {
               status: 'error' as const,
               message: 'Category not found',
            };

         await db
            .update(categories)
            .set({ status: 'deleted' })
            .where(eq(categories.categoryId, categoryId));

         return {
            status: 'success' as const,
            message: 'Category succesfully deleted',
         };
      }),
   listCategories: publicProcedure
      .input(
         z.object({
            userId: z.string(),
         }),
      )
      .query(async ({ ctx, input }) => {
         const { userId } = input;
         const { db } = ctx;

         const productCategories = await db
            .select()
            .from(categories)
            .where(eq(categories.userId, userId));

         return productCategories;
      }),
});
