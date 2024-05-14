import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function LoginForm() {
   return (
      <form className="grid gap-4">
         <div className="grid gap-2">
            <Label htmlFor="email">Phone number</Label>
            <Input id="phoneNumber" type="tel" placeholder="254727533551" required />
         </div>

         <div className="grid gap-2">
            <div className="flex items-center">
               <Label htmlFor="password">Password</Label>
               <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
               </Link>
            </div>
            <Input id="password" type="password" required />
         </div>

         <Button type="submit" className="w-full">
            Login
         </Button>
      </form>
   )
}
