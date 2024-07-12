import { pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';
import { users } from './users';
import { InferSelectModel } from 'drizzle-orm';

export const categories = pgTable('categories', {
   categoryId: uuid('category_id').primaryKey().defaultRandom(),
   userId: uuid('user_id').references(() => users.userId),
   categoryName: varchar('category_name', { length: 256 }).notNull(),
   description: text('category_description'),
   status: varchar('status').$type<'active' | 'deleted' | 'suspended'>().default('active'),
});

export type SelectCategory = InferSelectModel<typeof categories>;
