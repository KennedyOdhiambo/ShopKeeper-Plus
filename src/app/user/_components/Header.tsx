import { Bell } from "lucide-react"
import { ModeToggle } from "../../../components/ModeToggle"
import SidebarSheet from "./SidebarSheet"
import { Avatar, AvatarFallback } from "../../../components/ui/avatar"
import { Card, CardContent } from "../../../components/ui/card"
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "../../../components/ui/tooltip"

export default function Header() {
   return (
      <Card className="border rounded-none fixed right-0 z-10  lg:ps-60 top-0 w-full shadow-none py-1">
         <CardContent className="flex items-center justify-between p-0 px-5 ">
            <SidebarSheet />

            <div className="flex flex-row gap-2 justify-end w-full items-center">
               <TooltipProvider>
                  <Tooltip>
                     <TooltipTrigger>
                        <Bell className=" size-5 cursor-pointer" />
                        <span className="sr-only">Notifications</span>
                     </TooltipTrigger>
                     <TooltipContent>Notifications</TooltipContent>
                  </Tooltip>
               </TooltipProvider>

               <TooltipProvider>
                  <Tooltip>
                     <TooltipTrigger>
                        <Avatar className=" size-8">
                           <AvatarFallback className="text-sm">KO</AvatarFallback>
                        </Avatar>
                        <span className="sr-only">Profile</span>
                     </TooltipTrigger>
                     <TooltipContent>Profile</TooltipContent>
                  </Tooltip>
               </TooltipProvider>

               <ModeToggle />
            </div>
         </CardContent>
      </Card>
   )
}
