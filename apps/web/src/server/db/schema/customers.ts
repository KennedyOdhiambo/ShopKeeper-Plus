import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { users } from './users';
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';

export const customers = pgTable('customers', {
   customerId: uuid('customer_id').primaryKey().defaultRandom(),
   userId: uuid('user_id').references(() => users.userId),
   customerName: varchar('full_name', { length: 256 }).notNull(),
   customerContact: varchar('customer_contact', { length: 256 }),
   status: varchar('status').$type<'active' | 'deleted' | 'suspended'>().default('active'),
   kraPin: varchar('kra_pin', { length: 256 }),
});

export type SelectCustomers = InferSelectModel<typeof customers>;
export type InsertCustomer = InferInsertModel<typeof customers>;
