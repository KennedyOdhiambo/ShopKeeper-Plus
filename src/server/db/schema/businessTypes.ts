import { pgEnum, pgTable, uuid, varchar } from "drizzle-orm/pg-core"

const statusEnum = pgEnum("business_status", ["active", "deleted"])

export const businessTypes = pgTable("business_types", {
   businessTypeId: uuid("business_type_id").primaryKey().defaultRandom(),
   businessTypeName: varchar("business_type_name", { length: 256 }).notNull(),
   status: statusEnum("business_status"),
})
