import Sidebar from "@/components/Sidebar"
import React from "react"

export default async function Dashboard() {
   await new Promise((resolve) => setTimeout(resolve, 10000))
   return (
      <div>
         <Sidebar />
      </div>
   )
}
