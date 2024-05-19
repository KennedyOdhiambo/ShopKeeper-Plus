import React from "react"
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "../../../components/ui/sheet"
import { Menu } from "lucide-react"

export default function SidebarSheet() {
   return (
      <Sheet>
         <SheetTrigger className="lg:hidden">
            <Menu />
         </SheetTrigger>
         <SheetContent side={"left"} className=" w-80">
            <SheetHeader>
               <SheetTitle>Are you absolutely sure?</SheetTitle>
               <SheetDescription>
                  This action cannot be undone. This will permanently delete your account and remove
                  your data from our servers.
               </SheetDescription>
            </SheetHeader>
         </SheetContent>
      </Sheet>
   )
}
