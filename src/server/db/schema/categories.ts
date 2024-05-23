import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core"
import { statusEnum, users } from "./users"

export const categories = pgTable("cateories", {
   categoryId: uuid("category_id").primaryKey().defaultRandom(),
   userId: uuid("user_id").references(() => users.userId),
   categoryName: varchar("category_name", { length: 256 }).notNull(),
   description: text("category_description"),
   status: statusEnum("status"),
})
