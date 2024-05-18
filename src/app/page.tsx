import Image from "next/image"
import LoginCard from "./auth/components/LoginCard"
import LoginCarousel from "./auth/components/LoginCarousel"
import logo from "../../public/logo.svg"
import { ModeToggle } from "@/components/ModeToggle"

export default function Login() {
   return (
      <main className="min-h-screen min-w-screen grid md:grid-cols-2">
         <div className=" relative flex items-center">
            <Image src={logo} alt="logo" className="absolute top-6 ms-2 h-3.5 w-auto left-6" />
         </div>

         <div className="hidden relative md:flex items-center">
            <div className="absolute top-6 right-6">
               <ModeToggle />
            </div>
            <LoginCarousel />
         </div>
      </main>
   )
}
