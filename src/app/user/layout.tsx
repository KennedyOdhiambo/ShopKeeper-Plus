import Header from "@/app/user/_components/Header"
import Sidebar from "@/app/user/_components/Sidebar"
import React, { ReactNode } from "react"

export default function layout({ children }: { children: ReactNode }) {
   return (
      <section className="flex row">
         <Sidebar />
         <div className="lg:ms-60 w-screen flex">
            <Header />
            <div className="px-6 mt-10 flex-1">{children}</div>
         </div>
      </section>
   )
}
