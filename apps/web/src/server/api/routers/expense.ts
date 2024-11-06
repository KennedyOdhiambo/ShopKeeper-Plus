import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { expenses } from '@/server/db/schema/expenses';
import { and, between, count, eq } from 'drizzle-orm';
import { PAGE_SIZE } from '@/lib/const';
import { expenseValidation, updateExpenseValidation } from '@/validation/expenseValidation';
import { users } from '@/server/db/schema/users';

export const expenseRouter = createTRPCRouter({
   createExpense: publicProcedure.input(expenseValidation).mutation(async ({ ctx, input }) => {
      const {
         expenseAmount,
         expenseRecipient,
         expenseReference,
         paymenDate,
         userId,
         expenseDescription,
      } = input;
      const { db } = ctx;

      const existingUser = await db
         .select()
         .from(users)
         .where(and(eq(users.userId, userId), eq(users.status, 'active')));
      if (!existingUser)
         return {
            status: 'error' as const,
            message: 'User not found',
         };

      const insertExpense = {
         expenseAmount,
         expenseDescription,
         expenseRecipient,
         expenseReference,
         paymenDate,
         userId,
      };

      await db.insert(expenses).values(insertExpense);

      return {
         status: 'success' as const,
         message: 'Expense succesfully recorded',
      };
   }),

   getExpenseDetails: publicProcedure
      .input(
         z.object({
            expenseId: z.string(),
         }),
      )
      .query(async ({ ctx, input }) => {
         const { expenseId } = input;
         const { db } = ctx;

         const expenseDetails = await db
            .select()
            .from(expenses)
            .where(and(eq(expenses.expenseId, expenseId), eq(expenses.status, 'active')));

         if (!expenseDetails.length)
            return {
               status: 'error' as const,
               message: 'Expense not found',
            };

         return {
            status: 'success' as const,
            expense: expenseDetails[0],
         };
      }),

   updateExpense: publicProcedure
      .input(updateExpenseValidation)
      .mutation(async ({ ctx, input }) => {
         const {
            expenseAmount,
            expenseDescription,
            expenseId,
            expenseRecipient,
            expenseReference,
         } = input;
         const { db } = ctx;

         const existingExpense = await db
            .select()
            .from(expenses)
            .where(and(eq(expenses.expenseId, expenseId), eq(expenses.status, 'active')));

         if (!existingExpense.length)
            return {
               status: 'error' as const,
               message: 'Expense record not found',
            };

         await db
            .update(expenses)
            .set({
               expenseAmount,
               expenseDescription,
               expenseRecipient,
               expenseReference,
            })
            .where(eq(expenses.expenseId, expenseId));

         return {
            status: 'success' as const,
            message: 'expense updated succesfully',
         };
      }),

   deleteExpense: publicProcedure
      .input(
         z.object({
            expenseId: z.string(),
         }),
      )
      .mutation(async ({ ctx, input }) => {
         const { expenseId } = input;
         const { db } = ctx;

         const existingExpense = await db
            .select()
            .from(expenses)
            .where(and(eq(expenses.expenseId, expenseId), eq(expenses.status, 'active')));
         if (!existingExpense.length)
            return {
               status: 'error' as const,
               message: 'Expense not found',
            };

         await db
            .update(expenses)
            .set({ status: 'deleted' })
            .where(eq(expenses.expenseId, expenseId));

         return {
            status: 'success' as const,
            message: 'Record deleted succefsully',
         };
      }),

   listExpenses: publicProcedure
      .input(
         z.object({
            startDate: z.string().optional(),
            endDate: z.string().optional(),
         }),
      )
      .query(async ({ ctx, input }) => {
         const res = await ctx.db
            .select()
            .from(expenses)
            .where(
               between(
                  expenses.paymenDate,
                  input.startDate ?? new Date(2010, 0, 1).toISOString(),
                  input.endDate ?? new Date().toISOString(),
               ),
            );

         return {
            status: 'success' as const,
            expenses: res,
         };
      }),

   listPaginatedExpense: publicProcedure
      .input(
         z.object({
            userId: z.string(),
            page: z.string(),
         }),
      )
      .query(async ({ ctx, input }) => {
         const { page, userId } = input;
         const { db } = ctx;

         const offset = +page * PAGE_SIZE;

         const expenseQuery = db
            .select()
            .from(expenses)
            .where(and(eq(expenses.userId, userId), eq(expenses.status, 'active')))
            .limit(PAGE_SIZE)
            .offset(offset);

         const countQuery = db
            .select({ count: count() })
            .from(expenses)
            .where(and(eq(expenses.userId, userId), eq(expenses.status, 'active')));

         const [expenseResults, countResults] = await Promise.all([expenseQuery, countQuery]);

         return {
            expenses: expenseResults,
            count: countResults[0].count,
         };
      }),
});
