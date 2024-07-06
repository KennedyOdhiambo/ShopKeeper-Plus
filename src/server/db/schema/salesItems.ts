import { decimal, integer, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { sales } from './sales';
import { items } from './items';
import { inventory } from './inventory';

export const salesItems = pgTable('sales_items', {
   salesItemId: uuid('sales_item_id').primaryKey().defaultRandom(),
   salesId: uuid('sales_id').references(() => sales.salesId),
   itemId: uuid('item_id').references(() => items.itemId),
   inventoryId: uuid('inventory_id').references(() => inventory.inventoryId),
   salesQuantity: integer('sales_quantity'),
   unitPrice: decimal('unit_price', { precision: 10, scale: 2 }),
   totalPrice: decimal('total_price', { precision: 10, scale: 2 }),
   status: varchar('status').$type<'active' | 'deleted' | 'suspended'>().default('active'),
});

export type InsertSalesItem = typeof salesItems.$inferInsert;
