import { date, pgEnum, pgTable, uuid, varchar } from "drizzle-orm/pg-core"
import { businessTypes } from "./businessTypes"

export const statusEnum = pgEnum("status", ["active", "deleted", "suspended"])

export const users = pgTable("users", {
   userId: uuid("user_id").primaryKey().defaultRandom(),
   fullName: varchar("full_name", { length: 256 }).notNull(),
   phoneNumber: varchar("traveller_phone", { length: 256 }).notNull(),
   password: varchar("password", { length: 256 }).notNull(),
   businessName: varchar("business_name", { length: 256 }).notNull(),
   businessTypeId: uuid("business_type_id").references(() => businessTypes.businessTypeId),
   businessLocation: varchar("business_location", { length: 256 }).notNull(),
   dateJoined: date("date_joined", { mode: "string" }),
   status: statusEnum("status"),
})
