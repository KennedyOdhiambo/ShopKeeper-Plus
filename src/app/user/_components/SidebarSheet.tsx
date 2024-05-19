import React from "react"
import { Sheet, SheetContent, SheetTrigger } from "../../../components/ui/sheet"
import { Menu } from "lucide-react"
import SidebarContent from "./SidebarContent"

export default function SidebarSheet() {
   return (
      <Sheet>
         <SheetTrigger className="lg:hidden">
            <Menu />
         </SheetTrigger>
         <SheetContent side={"left"} className="w-fit lg:hidden p-0">
            <SidebarContent />
         </SheetContent>
      </Sheet>
   )
}
