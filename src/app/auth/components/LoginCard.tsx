import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import LoginForm from "./LoginForm"
import DontHaveAnAccount from "./DontHaveAnAccount"

export default function LoginCard() {
   return (
      <Card className="m-auto max-w-sm border-none shadow-none">
         <CardHeader className="text-center mb-1">
            <CardTitle className="text-2xl">Hi, Welcome Back</CardTitle>
            <CardDescription>Enter your phone number below to proceed</CardDescription>
         </CardHeader>

         <CardContent>
            <LoginForm />
            <DontHaveAnAccount />
         </CardContent>
      </Card>
   )
}
