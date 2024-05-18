import React from "react"
import { ModeToggle } from "./ModeToggle"
import Image from "next/image"
import logo from "../../public/logo.svg"
import { Card, CardContent } from "./ui/card"

export default function AuthHeader() {
   return (
      <Card className="border-none shadow-none p-2 px-1 md:p-4">
         <CardContent className="w-full flex justify-between items-center">
            <Image src={logo} alt="logo" className=" h-3.5 w-auto" />
            <ModeToggle />
         </CardContent>
      </Card>
   )
}
