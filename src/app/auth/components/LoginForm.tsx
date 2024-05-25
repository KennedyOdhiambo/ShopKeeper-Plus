"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from "react-transition-progress/next"

import useLogin from "../@login/_hooks/useLogin"
import { type LoginForm, loginValidation } from "@/validation/loginValidation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginForm() {
   const { login, isPending } = useLogin()
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<LoginForm>({ resolver: zodResolver(loginValidation) })

   const onSubmit = (data: LoginForm) => {
      login(data)
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
         <div className="grid gap-2">
            <Label htmlFor="email">Phone number</Label>
            <Input
               {...register("phoneNumber")}
               id="phoneNumber"
               type="tel"
               placeholder="254727533551"
            />
            <p className="text-xs text-destructive font-semibold">{errors.phoneNumber?.message}</p>
         </div>

         <div className="grid gap-2">
            <div className="flex items-center">
               <Label htmlFor="password">Password</Label>
               <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
               </Link>
            </div>
            <Input {...register("password")} id="password" type="password" />
            <p className="text-xs text-destructive font-semibold">{errors.password?.message}</p>
         </div>

         <Button disabled={isPending} type="submit" className="w-full">
            {isPending ? "Verifying credentials ..." : "Login"}
         </Button>
      </form>
   )
}
