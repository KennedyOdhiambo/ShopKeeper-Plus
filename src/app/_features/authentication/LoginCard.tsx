import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import LoginForm from "./LoginForm"

export default function LoginCard() {
   return (
      <Card className="m-auto max-w-sm border-none shadow-none">
         <CardHeader className="text-center mb-1">
            <CardTitle className="text-2xl">Hi, Welcome Back</CardTitle>
            <CardDescription>Enter your phone number below to proceed</CardDescription>
         </CardHeader>

         <CardContent>
            <LoginForm />
            <div className="mt-4 text-center text-sm">
               Don&apos;t have an account?{" "}
               <Link href="/signup" className="underline text-primary">
                  Sign up
               </Link>
            </div>
         </CardContent>
      </Card>
   )
}
