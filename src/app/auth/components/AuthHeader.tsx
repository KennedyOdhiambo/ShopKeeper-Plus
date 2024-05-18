import { ModeToggle } from "@/components/ModeToggle"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import logo from "../../../../public/logo.svg"

export default function AuthHeader() {
   return (
      <Card className="border-none shadow-none p-1 md:p-3">
         <CardContent className="w-full flex justify-between items-center">
            <Image src={logo} alt="logo" className=" h-3.5 w-auto" />
            <ModeToggle />
         </CardContent>
      </Card>
   )
}
