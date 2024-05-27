
import {  createCallerFactory, createTRPCRouter } from "./trpc";
import { businessTypesRouter } from "./routers/businessTypes";
import { authRouter } from "./routers/authentication";


export const appRouter = createTRPCRouter({
    businessTypes: businessTypesRouter,
    authentication: authRouter
})

export type AppRouter = typeof appRouter
export const createCaller = createCallerFactory(appRouter)