import { sales } from '@/server/db/schema/sales'
import { createTRPCRouter, publicProcedure } from '../trpc'
import { z } from 'zod'
import { and, between, eq, sql } from 'drizzle-orm'
import { customers } from '@/server/db/schema/customers'

export const salesRouter = createTRPCRouter({
   listSales: publicProcedure
      .input(
         z.object({
            startDate: z.string().optional(),
            endDate: z.string().optional(),
            paymentMethod: z.enum(['cash', 'credit', 'mpesa']).optional(),
         })
      )
      .query(async ({ ctx, input }) => {
         const startDate = input.startDate ?? new Date(2010, 0, 1).toISOString()
         const endDate = input.endDate ?? new Date().toISOString()

         const conditions = [between(sales.salesDate, startDate, endDate)]
         if (input.paymentMethod) {
            conditions.push(eq(sales.paymentOption, input.paymentMethod))
         }

         const res = await ctx.db
            .select()
            .from(sales)
            .where(and(...conditions))
            .rightJoin(customers, eq(sales.customerId, customers.customerId))
            .execute()

         return {
            status: 'success' as const,
            sales: res,
         }
      }),

   listMonthlySales: publicProcedure
      .input(
         z.object({
            startDate: z.string().optional(),
            endDate: z.string().optional(),
         })
      )
      .query(async ({ ctx, input }) => {
         const startDate = input.startDate ?? new Date(2010, 0, 1).toISOString()
         const endDate = input.endDate ?? new Date().toISOString()

         const totalMonthlySales = await ctx.db
            .select({
               month: sql<string>`to_char(${sales.salesDate}, 'YYYY-MM')`,
               total: sql<number>`sum(${sales.totalCost})`,
            })
            .from(sales)
            .where(between(sales.salesDate, startDate, endDate))
            .groupBy(sql`to_char(${sales.salesDate}, 'YYYY-MM')`)

         return totalMonthlySales
      }),
})
