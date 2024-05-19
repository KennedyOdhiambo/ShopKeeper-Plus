"use client"

import { ProgressBarProvider } from "react-transition-progress"
import ThemeProvider from "@/components/ThemeProvider"
import React, { ReactNode } from "react"
import AuthContextProvider from "./AuthContext"

export default function Providers({ children }: { children: ReactNode }) {
   return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
         <AuthContextProvider>
            <ProgressBarProvider>{children}</ProgressBarProvider>
         </AuthContextProvider>
      </ThemeProvider>
   )
}
