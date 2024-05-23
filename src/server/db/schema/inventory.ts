import { date, decimal, integer, pgTable, uuid } from "drizzle-orm/pg-core"
import { items } from "./items"
import { statusEnum } from "./users"

export const inventory = pgTable("inventory", {
   inventoryId: uuid("inventory_id").primaryKey().defaultRandom(),
   itemId: uuid("item_id").references(() => items.itemId),
   quantityAdded: integer("quantity_added"),
   quantityStocked: integer("quantity_stocked").notNull().default(0),
   buyinPrice: decimal("unit_price", { precision: 10, scale: 2 }),
   sellingPrice: decimal("selling_price", { precision: 10, scale: 2 }),
   lastUpdated: date("last_updated", { mode: "string" }),
   status: statusEnum("status"),
})
