import { date, decimal, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { users } from './users';
import { customers } from './customers';
import { InferSelectModel } from 'drizzle-orm';

export const sales = pgTable('sales', {
   salesId: uuid('sales_id').primaryKey().defaultRandom(),
   userId: uuid('user_id').references(() => users.userId),
   salesDate: date('sales_date', { mode: 'string' }),
   status: varchar('status').$type<'active' | 'deleted' | 'suspended'>().default('active'),
   paymentOption: varchar('payment_option').$type<'cash' | 'credit' | 'mpesa'>().default('cash'),
   totalCost: decimal('totalCost', { precision: 10, scale: 2 }),
   customerId: uuid('customer_id').references(() => customers.customerId),
});

export type InsertSales = typeof sales.$inferInsert;
export type SelectSale = InferSelectModel<typeof sales>;
