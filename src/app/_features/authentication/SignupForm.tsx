import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import BusinessTypeDropdown from "./BusinessTypeDropdown"
import FormInput from "@/components/FormInput"

export default function SignupForm() {
   return (
      <Card className="min-w-80 md:min-w-[620px] lg:min-w-[740px] xl:min-w-[1000px] border-none shadow-none ">
         <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>Manage your business in one-click.</CardDescription>
         </CardHeader>

         <CardContent>
            <form className="space-y-5">
               <div className="grid md:grid-cols-2 w-full items-center gap-4 space-y-1">
                  <FormInput label={"Full name"} id={"string"} type={"text"} />
                  <FormInput label="Phone number" id="phoneNumber" type="tel" />
                  <FormInput label="Password" id="password" type="password" />
                  <FormInput label="Confirm password" id="confirmPassword" type="password" />
                  <FormInput label="Business name" id="businessName" />

                  <BusinessTypeDropdown />

                  <FormInput label="Business location" id="location" />
               </div>

               <div className="flex  justify-end">
                  <Button className="" size={"lg"}>
                     Complete signup
                  </Button>
               </div>
            </form>
         </CardContent>
      </Card>
   )
}
