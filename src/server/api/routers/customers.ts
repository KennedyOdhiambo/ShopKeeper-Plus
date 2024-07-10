import { customers, InsertCustomer } from '@/server/db/schema/customers';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { z } from 'zod';
import { and, count, eq } from 'drizzle-orm';
import { newCustomerValidation } from '@/validation/customerValidation';
import { PAGE_SIZE } from '@/lib/const';

export const customersRouter = createTRPCRouter({
   listCustomers: publicProcedure
      .input(
         z.object({
            userId: z.string(),
            page: z.string().optional(),
         }),
      )
      .query(async ({ ctx, input }) => {
         const { userId, page } = input;
         const offset = Number(page ?? '') * PAGE_SIZE;

         const customersQuery = ctx.db
            .select()
            .from(customers)
            .where(and(eq(customers.userId, userId), eq(customers.status, 'active')))
            .limit(PAGE_SIZE)
            .offset(offset);

         const countQuery = ctx.db
            .select({ value: count() })
            .from(customers)
            .where(and(eq(customers.userId, userId), eq(customers.status, 'active')));

         const [customersResult, countResult] = await Promise.all([
            customersQuery.execute(),
            countQuery.execute(),
         ]);
         return {
            customers: customersResult,
            count: countResult[0].value,
         };
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

   editCustomer: publicProcedure
      .input(
         z.object({
            customerId: z.string(),
            customerName: z.string(),
            customerContact: z.string(),
            kraPin: z.string(),
         }),
      )
      .mutation(async ({ ctx, input }) => {
         const { customerId, customerName, kraPin, customerContact } = input;
         const { db } = ctx;

         const existingCustomer = await db
            .select()
            .from(customers)
            .where(and(eq(customers.customerId, customerId), eq(customers.status, 'active')));
         if (!existingCustomer.length) {
            return {
               status: 'error' as const,
               message: 'Customer not found',
            };
         }

         await db
            .update(customers)
            .set({
               customerName: customerName,
               kraPin: kraPin,
               customerContact: customerContact,
            })
            .where(eq(customers.customerId, customerId));

         return {
            status: 'success' as const,
            message: 'Customer Information succesfully updated',
         };
      }),

   deleteCustomer: publicProcedure
      .input(
         z.object({
            customerId: z.string(),
         }),
      )
      .mutation(async ({ ctx, input }) => {
         const { customerId } = input;
         const { db } = ctx;

         const existingCustomer = await db
            .select()
            .from(customers)
            .where(eq(customers.customerId, customerId));

         if (!existingCustomer.length) {
            return {
               status: 'error' as const,
               message: 'Customer not found',
            };
         }

         await db
            .update(customers)
            .set({ status: 'deleted' })
            .where(eq(customers.customerId, customerId));

         return {
            status: 'success' as const,
            message: 'Customer deleted succesfully',
         };
      }),
});
