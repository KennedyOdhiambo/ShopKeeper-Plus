
import { businessTypes } from "../db/schema/businessTypes";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const businessTypesRouter = createTRPCRouter({
listBusinessTypes: publicProcedure.query( async ({ctx}) => {
    const res = await ctx.db.select().from(businessTypes)
    return res
})
})