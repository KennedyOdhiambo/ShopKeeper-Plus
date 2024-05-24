import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { db } from "../db/db";
import { users } from "../db/schema/users";
import { eq } from "drizzle-orm";
import bcrypt from 'bcrypt'


export const authRouter = createTRPCRouter({
    signup: publicProcedure.input(z.object({
        fullName: z.string().min(2),
        phoneNumber: z.string().min(2),
        password: z.string().min(6),
        businessName: z.string().min(2),
        businessType: z.string(),
        businessLocation: z.string().min(2)
    })).mutation(async ({ctx, input}) => {
        const existingUser = await db.select().from(users).where(eq(users.phoneNumber, input.phoneNumber))
        
        if (existingUser.length > 0) {
            return {
                status: 'fail',
                message: 'Phone number already exists'
            }
        }
        const salt = await bcrypt.genSalt()
        const encryptedPassword = await bcrypt.hash(input.password, salt)
        await ctx.db.insert(users).values({
            fullName: input.fullName,
            phoneNumber: input.phoneNumber,
            password: encryptedPassword,
            businessName: input.businessName,
            businessTypeId: input.businessType,
            businessLocation: input.businessLocation,
            dateJoined: new Date().toISOString().slice(0, 19).replace('T', ' '), 
            })

        return {
            status: 'success',
            message: 'Account succesfully created'
        }
    })
})