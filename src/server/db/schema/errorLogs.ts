import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core"

export const errorLogs = pgTable("error_logs", {
   errorId: uuid("error_id").primaryKey().defaultRandom(),
   errorMessage: text("error_message"),
   timestamp: timestamp("timestamp").defaultNow(),
   params: varchar("params", { length: 256 }),
})
