import { customers, InsertCustomer } from '@/server/db/schema/customers';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { z } from 'zod';
import { and, eq } from 'drizzle-orm';
import { newCustomerValidation } from '@/validation/customerValidation';

export const customersRouter = createTRPCRouter({
   listCustomers: publicProcedure
      .input(
         z.object({
            userId: z.string(),
         }),
      )
      .query(async ({ ctx, input }) => {
         const { userId } = input;
         const res = await ctx.db
            .select()
            .from(customers)
            .where(and(eq(customers.userId, userId), eq(customers.status, 'active')));
         return res;
      }),

   createCustomer: publicProcedure
      .input(
         newCustomerValidation.extend({
            userId: z.string(),
         }),
      )
      .mutation(async ({ ctx, input }) => {
         const { customerContact, customerName, kraPin, userId } = input;

         const payload: InsertCustomer = {
            customerName,
            customerContact,
            kraPin,
            userId,
         };

         const insert = await ctx.db.insert(customers).values(payload).returning();

         if (!insert.length) {
            return {
               status: 'error',
               message: 'Error adding user',
            };
         }

         return {
            status: 'success',
            message: 'Customer succesfully added',
         };
      }),
});
