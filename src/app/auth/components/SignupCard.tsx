import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SignupForm from "./SignupForm"

export default async function SignupCard() {
   return (
      <Card className="w-full border-none shadow-none md:ps-5">
         <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>Manage your business in one-click.</CardDescription>
         </CardHeader>
         <CardContent>
            <SignupForm />
         </CardContent>
      </Card>
   )
}
