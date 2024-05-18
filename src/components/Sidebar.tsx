import { Menu } from "lucide-react"
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "./ui/sheet"

export default function Sidebar() {
   return (
      <Sheet>
         <SheetTrigger>
            <Menu />
         </SheetTrigger>
         <SheetContent side={"left"} className="w-[400px] sm:w-[540px]">
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
