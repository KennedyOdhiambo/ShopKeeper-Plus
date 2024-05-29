import { sales } from "@/server/db/schema/sales"
import { createTRPCRouter, publicProcedure } from "../trpc"
import { z } from "zod"
import { between } from "drizzle-orm"

export const salesRouter = createTRPCRouter({
   listSales: publicProcedure
      .input(
         z.object({
            startDate: z.string().optional(),
            endDate: z.string().optional(),
         })
      )
      .query(async ({ ctx, input }) => {
         const res = await ctx.db
            .select()
            .from(sales)
            .where(
               between(
                  sales.salesDate,
                  input.startDate ?? new Date(2010, 0, 1).toISOString(),
                  input.endDate ?? new Date().toISOString()
               )
            )

         return {
            status: "success" as const,
            sales: res,
         }
      }),
})
