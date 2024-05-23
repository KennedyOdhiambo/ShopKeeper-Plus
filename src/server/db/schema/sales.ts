import { date, decimal, pgEnum, pgTable, uuid } from "drizzle-orm/pg-core"
import { statusEnum, users } from "./users"
import { customers } from "./customers"

export const paymentEnum = pgEnum("payment", ["cash", "credit", "mpesa"])
export const sales = pgTable("sales", {
   salesId: uuid("sales_id").primaryKey().defaultRandom(),
   userId: uuid("user_id").references(() => users.userId),
   salesDate: date("sales_date", { mode: "string" }),
   status: statusEnum("status"),
   paymentOption: paymentEnum("payment"),
   totalCost: decimal("totalCost", { precision: 10, scale: 2 }),
   customerId: uuid("customer_id").references(() => customers.customerId),
})
