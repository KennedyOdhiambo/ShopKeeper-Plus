import { date, decimal, pgTable, uuid, varchar } from "drizzle-orm/pg-core"
import { creditDebt } from "./creditDebt"


export const payments = pgTable("payments", {
   paymentId: uuid("payment_id").primaryKey().defaultRandom(),
   transactionId: uuid("transaction_id").references(() => creditDebt.transactionId),
   paymentAmount: decimal("payment_amount", { precision: 10, scale: 2 }),
   paymentDate: date("payment_date", { mode: "string" }),
   status: varchar('status').$type<'active' | 'deleted' | 'suspended'>().default('active')
})
