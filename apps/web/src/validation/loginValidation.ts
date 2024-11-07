import { z } from "zod"

export const loginValidation = z.object({
    phoneNumber: z.string().min(10, { message: "Phone number should be atleast 10 characters" }),
    password: z.string().min(6, { message: "Password must be atleast 6 characters" }),
 })

 export type LoginForm = z.infer<typeof loginValidation>