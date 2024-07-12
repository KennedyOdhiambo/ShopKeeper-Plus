import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { categories } from '@/server/db/schema/categories';
import { eq } from 'drizzle-orm';

export const categoriesRouter = createTRPCRouter({
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
