import { integer, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { users } from './users';
import { categories } from './categories';

export const items = pgTable('items', {
   itemId: uuid('item_id').primaryKey().defaultRandom(),
   userId: uuid('user_id').references(() => users.userId),
   itemName: varchar('item_name', { length: 256 }).notNull(),
   unitOfMeasure: varchar('unit_of_measure', { length: 256 }).notNull(),
   categoryId: uuid('category_id').references(() => categories.categoryId),
   reorderLevel: integer('reorder_level'),
   status: varchar('status').$type<'active' | 'deleted' | 'suspended'>().default('active'),
});
