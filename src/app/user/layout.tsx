import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import React, { ReactNode } from "react"

export default function layout({ children }: { children: ReactNode }) {
   return (
      <section className="flex row">
         <Sidebar />
         <div className="ms-60 w-screen">
            <Header />
            {children}
         </div>
      </section>
   )
}
