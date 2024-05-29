import { createCallerFactory, createTRPCRouter } from "./trpc"
import { businessTypesRouter } from "./routers/businessTypes"
import { authRouter } from "./routers/authentication"
import { salesRouter } from "./routers/sales"

export const appRouter = createTRPCRouter({
   businessTypes: businessTypesRouter,
   authentication: authRouter,
   sales: salesRouter,
})

export type AppRouter = typeof appRouter
export const createCaller = createCallerFactory(appRouter)
