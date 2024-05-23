"use client"

import { ProgressBarProvider } from "react-transition-progress"
import ThemeProvider from "@/components/ThemeProvider"
import React, { ReactNode } from "react"
import AuthContextProvider from "./AuthContext"
import { TRPCReactProvider } from "@/trpc/client"

export default function Providers({ children }: { children: ReactNode }) {
   return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
         <TRPCReactProvider>
            <AuthContextProvider>
               <ProgressBarProvider>{children}</ProgressBarProvider>
            </AuthContextProvider>
         </TRPCReactProvider>
      </ThemeProvider>
   )
}
