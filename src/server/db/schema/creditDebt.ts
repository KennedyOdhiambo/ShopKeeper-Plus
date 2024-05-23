import { date, decimal,  pgTable, uuid, varchar } from "drizzle-orm/pg-core"
import { users } from "./users"
import { sales } from "./sales"
import { customers } from "./customers"



export const creditDebt = pgTable("credit_and_debt", {
   transactionId: uuid("credit_and_debt_id").primaryKey().defaultRandom(),
   userId: uuid("user_id").references(() => users.userId),
   salesId: uuid("sales_id").references(() => sales.salesId),
   transactionDate: date("transaction_date", { mode: "string" }),
   customerId: uuid("customer_id").references(() => customers.customerId),
   transactionAmount: decimal("transaction_amount", { precision: 10, scale: 2 }),
   transactionType: varchar('transaction_type').$type<'credit' | 'debt'>(),
   status: varchar('status').$type<'active' | 'deleted' | 'suspended'>().default('active')
})
