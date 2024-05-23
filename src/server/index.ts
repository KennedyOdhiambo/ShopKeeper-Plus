
import {  createCallerFactory, createTRPCRouter } from "./trpc";
import { businessTypesRouter } from "./routers/businessTypes";


export const appRouter = createTRPCRouter({
businessTypes: businessTypesRouter
})

export type AppRouter = typeof appRouter
export const createCaller = createCallerFactory(appRouter)