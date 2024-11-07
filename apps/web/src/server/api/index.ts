import { createCallerFactory, createTRPCRouter } from './trpc';
import { businessTypesRouter } from './routers/businessTypes';
import { authRouter } from './routers/authentication';
import { salesRouter } from './routers/sales';
import { expenseRouter } from './routers/expense';
import { customersRouter } from './routers/customers';
import { itemsRouter } from './routers/items';
import { salesItemsRouter } from './routers/salesItems';
import { categoriesRouter } from './routers/categories';
import { inventoryRouter } from './routers/inventory';
import { creditDebtRouter } from './routers/creditDebt';

export const appRouter = createTRPCRouter({
   businessTypes: businessTypesRouter,
   authentication: authRouter,
   sales: salesRouter,
   expense: expenseRouter,
   customers: customersRouter,
   items: itemsRouter,
   salesItems: salesItemsRouter,
   categories: categoriesRouter,
   inventory: inventoryRouter,
   creditDebt: creditDebtRouter,
});

export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
