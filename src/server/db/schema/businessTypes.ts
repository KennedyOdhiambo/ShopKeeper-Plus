import { pgTable, uuid, varchar } from "drizzle-orm/pg-core"
import { statusEnum } from "./users"

export const businessTypes = pgTable("business_types", {
   businessTypeId: uuid("business_type_id").primaryKey().defaultRandom(),
   businessTypeName: varchar("business_type_name", { length: 256 }).notNull(),
   status: statusEnum('status')
})
