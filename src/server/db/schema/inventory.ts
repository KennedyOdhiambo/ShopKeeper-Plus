import { date, decimal, integer, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { items } from './items';
import { InferSelectModel } from 'drizzle-orm';

export const inventory = pgTable('inventory', {
   inventoryId: uuid('inventory_id').primaryKey().defaultRandom(),
   itemId: uuid('item_id').references(() => items.itemId),
   quantityAdded: integer('quantity_added'),
   quantityInStock: integer('quantity_in_stock').notNull().default(0),
   buyingPrice: decimal('buying_price', { precision: 10, scale: 2 }),
   sellingPrice: decimal('selling_price', { precision: 10, scale: 2 }),
   lastUpdated: date('last_updated', { mode: 'string' }),
   status: varchar('status').$type<'active' | 'deleted' | 'suspended'>().default('active'),
});

export type SelectInventory = InferSelectModel<typeof inventory>;
