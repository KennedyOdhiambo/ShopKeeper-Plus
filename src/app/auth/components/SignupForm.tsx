import { Button } from "@/components/ui/button"
import BusinessTypeDropdown from "./BusinessTypeDropdown"
import FormInput from "@/components/FormInput"

export default function SignupForm() {
   return (
      <form className="space-y-6">
         <div className="grid w-full items-center gap-6 2xl:grid-cols-2">
            <FormInput label={"Full name"} id={"string"} type={"text"} />
            <FormInput label="Phone number" id="phoneNumber" type="tel" />
            <FormInput label="Password" id="password" type="password" />
            <FormInput label="Confirm password" id="confirmPassword" type="password" />
            <FormInput label="Business name" id="businessName" />
            <BusinessTypeDropdown />
            <FormInput label="Business location" id="location" />
         </div>

         <div className="w-full mt-10 flex items-end justify-end">
            <Button className="w-full 2xl:w-fit">Complete signup</Button>
         </div>
      </form>
   )
}
