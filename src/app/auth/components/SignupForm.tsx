"use client"

import { Button } from "@/components/ui/button"
import BusinessTypeDropdown from "./BusinessTypeDropdown"
import FormInput from "@/components/FormInput"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignupData, signupSchema } from "@/validation/signupValidation"
import useSignup from "../@signup/hooks/useSignup"

export default function SignupForm() {
   const { createUser, isPending } = useSignup()
   const {
      register,
      setValue,
      handleSubmit,
      formState: { errors },
   } = useForm<SignupData>({
      resolver: zodResolver(signupSchema),
   })

   const onSubmit = (signupData: SignupData) => {
      createUser(signupData)
   }
   return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
         <div className="grid w-full items-center gap-6 lg:grid-cols-2">
            <FormInput
               label={"Full name"}
               id={"fullName"}
               type={"text"}
               register={register("fullName")}
               error={errors.fullName?.message}
            />
            <FormInput
               label="Phone number"
               id="phoneNumber"
               type="tel"
               register={register("phoneNumber")}
               error={errors.phoneNumber?.message}
            />
            <FormInput
               label="Password"
               id="password"
               type="password"
               register={register("password")}
               error={errors.password?.message}
            />
            <FormInput
               label="Confirm password"
               id="confirmPassword"
               type="password"
               register={register("confirmPassword")}
               error={errors.confirmPassword?.message}
            />
            <FormInput
               label="Business name"
               id="businessName"
               register={register("businessName")}
               error={errors.businessName?.message}
            />
            <BusinessTypeDropdown
               error={errors.businessType?.message}
               onSelect={(e) => setValue("businessType", e)}
            />
            <FormInput
               label="Business location"
               id="businessLocation"
               register={register("businessLocation")}
               error={errors.businessLocation?.message}
            />
         </div>

         <div className="w-full mt-10 flex items-end justify-end">
            <Button disabled={isPending} className="w-full lg:w-fit">
               {isPending ? "Processing..." : "Complete signup"}
            </Button>
         </div>
      </form>
   )
}
