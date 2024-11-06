import { date, decimal, pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';
import { users } from './users';
import { InferSelectModel } from 'drizzle-orm';

export const expenses = pgTable('expenses', {
   expenseId: uuid('expense_id').primaryKey().defaultRandom(),
   userId: uuid('user_id').references(() => users.userId),
   expenseAmount: decimal('expense_amount', { precision: 10, scale: 2 }),
   expenseRecipient: varchar('expense_recipient', { length: 256 }),
   expenseReference: varchar('expense_reference', { length: 256 }),
   expenseDescription: text('expense_description'),
   paymenDate: date('payment_date', { mode: 'string' }),
   status: varchar('status').$type<'active' | 'deleted' | 'suspended'>().default('active'),
});

export type SelectExpense = InferSelectModel<typeof expenses>;
export type InsertExpense = InferSelectModel<typeof expenses>;
