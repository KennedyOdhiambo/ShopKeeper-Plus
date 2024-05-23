import { date, decimal, pgTable, uuid } from "drizzle-orm/pg-core"
import { creditDebt } from "./creditDebt"
import { statusEnum } from "./users"

export const payments = pgTable("payments", {
   paymentId: uuid("payment_id").primaryKey().defaultRandom(),
   transactionId: uuid("transaction_id").references(() => creditDebt.transactionId),
   paymentAmount: decimal("payment_amount", { precision: 10, scale: 2 }),
   paymentDate: date("payment_date", { mode: "string" }),
   status: statusEnum("status"),
})
