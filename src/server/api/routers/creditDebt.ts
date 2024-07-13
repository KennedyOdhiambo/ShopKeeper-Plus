import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { users } from '@/server/db/schema/users';
import { and, count, eq } from 'drizzle-orm';
import { PAGE_SIZE } from '@/lib/const';
import { creditDebt } from '@/server/db/schema/creditDebt';

export const creditDebtRouter = createTRPCRouter({
   listCreditDebt: publicProcedure
      .input(
         z.object({
            userId: z.string(),
            page: z.string(),
         }),
      )
      .query(async ({ ctx, input }) => {
         const { userId, page } = input;
         const { db } = ctx;

         const offset = Number(page) * PAGE_SIZE;

         const userDetails = await db
            .select()
            .from(users)
            .where(and(eq(users.userId, userId), eq(users.status, 'active')));
         if (!userDetails.length)
            return {
               status: 'Error' as const,
               message: 'user not found',
            };

         const creditDebtQuery = db
            .select()
            .from(creditDebt)
            .where(eq(creditDebt.status, 'active'))
            .limit(PAGE_SIZE)
            .offset(offset);

         const countQuery = db
            .select({ count: count() })
            .from(creditDebt)
            .where(eq(creditDebt.status, 'deleted'));

         const [creditDebtResult, countResult] = await Promise.all([creditDebtQuery, countQuery]);

         return {
            status: 'success' as const,
            creditDebt: creditDebtResult,
            count: countResult[0].count,
         };
      }),
});
