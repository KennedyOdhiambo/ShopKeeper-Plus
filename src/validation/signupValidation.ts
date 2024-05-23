import { z } from "zod"

export const signupSchema = z
   .object({
      fullName: z.string().min(2, { message: "Full name is required" }),
      phoneNumber: z.string().min(2, { message: "Phone number should be atleast 10 characters" }),
      password: z.string().min(6, { message: "Password must be atleast 6 characters" }),
      confirmPassword: z.string().min(6, { message: "Passwords do no match" }),
      businessName: z.string().min(2, { message: "Business name is required" }),
      businessType: z.string(),
      businessLocation: z.string().min(2, { message: "Business location is required" }),
   })
   .refine((values) => values.password === values.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
   })

export type SignupData = z.infer<typeof signupSchema>