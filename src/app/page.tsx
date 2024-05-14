import Image from "next/image"
import LoginCard from "./_features/authentication/LoginCard"
import LoginCarousel from "./_features/authentication/LoginCarousel"
import logo from "../../public/logo.svg"
import { ModeToggle } from "@/components/ModeToggle"

export default function Login() {
   return (
      <main className="min-h-screen min-w-screen grid grid-cols-2">
         <div className=" relative flex items-center">
            <Image src={logo} alt="logo" className="absolute top-6 h-3.5 left-6" />
            <LoginCard />
         </div>

         <div className="relative flex items-center">
            <div className="absolute top-6 right-6">
               <ModeToggle />
            </div>
            <LoginCarousel />
         </div>
      </main>
   )
}
