import { createCallerFactory, createTRPCRouter } from "./trpc"
import { businessTypesRouter } from "./routers/businessTypes"
import { authRouter } from "./routers/authentication"
import { salesRouter } from "./routers/sales"
import { expenseRouter } from "./routers/expense"

export const appRouter = createTRPCRouter({
   businessTypes: businessTypesRouter,
   authentication: authRouter,
   sales: salesRouter,
   expense: expenseRouter,
})

export type AppRouter = typeof appRouter
export const createCaller = createCallerFactory(appRouter)
