import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { users } from "../db/schema/users";
import { eq } from "drizzle-orm";
import bcrypt from 'bcrypt'
import { formatPhoneNumber } from "@/lib/utils";


export const authRouter = createTRPCRouter({
    signup: publicProcedure.input(z.object({
        fullName: z.string().min(2),
        phoneNumber: z.string().min(2),
        password: z.string().min(6),
        businessName: z.string().min(2),
        businessType: z.string(),
        businessLocation: z.string().min(2)
    })).mutation(async ({ctx, input}) => {
        const formattedPhone = formatPhoneNumber(input.phoneNumber)
        const existingUser = await ctx.db.select().from(users).where(eq(users.phoneNumber, formattedPhone))
        
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
            phoneNumber: formattedPhone,
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
    }),

    login: publicProcedure.input(z.object({
        phoneNumber: z.string().min(2),
        password: z.string().min(6),
    })).mutation(async ({ctx, input}) => {
        const {password,phoneNumber} = input
       
        const formattedPhone = formatPhoneNumber(phoneNumber)
        const existingUser = await ctx.db.select().from(users).where(eq(users.phoneNumber, formattedPhone))
        
        if (!existingUser.length) {
            return {
                status: 'fail',
                message: 'Phone number is not registered'
            }
        }
        
        const passwordMatch = await bcrypt.compare(password,existingUser[0].password);
        if (!passwordMatch) {
            return {
                status: 'fail',
                message: 'Incorrect password'
            }
        }

        return {
            status: 'success',
            message: 'Login succesfull'
        }
    })
})