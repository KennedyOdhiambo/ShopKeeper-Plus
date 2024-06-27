import { createCallerFactory, createTRPCRouter } from './trpc';
import { businessTypesRouter } from './routers/businessTypes';
import { authRouter } from './routers/authentication';
import { salesRouter } from './routers/sales';
import { expenseRouter } from './routers/expense';
import { customersRouter } from './routers/customers';
import { itemsRouter } from './routers/items';

export const appRouter = createTRPCRouter({
   businessTypes: businessTypesRouter,
   authentication: authRouter,
   sales: salesRouter,
   expense: expenseRouter,
   customers: customersRouter,
   items: itemsRouter,
});

export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
