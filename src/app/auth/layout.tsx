"use client"

import AuthHeader from "@/components/AuthHeader"
import React, { ReactNode, useContext } from "react"
import LoginCarousel from "../_features/authentication/LoginCarousel"
import { AuthContext } from "@/context/AuthContext"

export default function AuthLayout({
   login,
   signup,
}: {
   children: ReactNode
   login: ReactNode
   signup: ReactNode
}) {
   const authContext = useContext(AuthContext)
   const authProcess = authContext?.runningProcess!
   return (
      <section className="">
         <div className="flex flex-col h-screen">
            <AuthHeader />
            <div className="flex-1 grid lg:grid-cols-2 items-center justify-items-center mb-20">
               {authProcess === "login" ? login : signup}
               <LoginCarousel />
            </div>
         </div>
      </section>
   )
}
