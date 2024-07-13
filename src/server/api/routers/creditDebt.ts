import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { users } from '@/server/db/schema/users';
import { and, count, eq } from 'drizzle-orm';
import { PAGE_SIZE } from '@/lib/const';
import { creditDebt } from '@/server/db/schema/creditDebt';
import { customers } from '@/server/db/schema/customers';

export const creditDebtRouter = createTRPCRouter({
   listCreditDebt: publicProcedure
      .input(
         z.object({
            userId: z.string(),
            page: z.string(),
            type: z.enum(['credit', 'debt', 'all']),
         }),
      )
      .query(async ({ ctx, input }) => {
         const { userId, page, type } = input;
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

         const conditions = [
            eq(creditDebt.status, 'active'),
            eq(creditDebt.userId, userDetails[0].userId),
         ];

         if (type === 'credit') {
            conditions.push(eq(creditDebt.transactionType, 'credit'));
         }

         if (type === 'debt') {
            conditions.push(eq(creditDebt.transactionType, 'debt'));
         }

         const creditDebtQuery = db
            .select()
            .from(creditDebt)
            .where(and(...conditions))
            .limit(PAGE_SIZE)
            .offset(offset)
            .leftJoin(customers, eq(customers.customerId, creditDebt.customerId));

         const countQuery = db
            .select({ count: count() })
            .from(creditDebt)
            .where(and(...conditions));

         const [creditDebtResult, countResult] = await Promise.all([creditDebtQuery, countQuery]);

         return {
            status: 'success' as const,
            creditDebt: creditDebtResult,
            count: countResult[0].count,
         };
      }),
});
