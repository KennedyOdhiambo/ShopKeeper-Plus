import { Card } from "../../../components/ui/card"

import SidebarContent from "./SidebarContent"

export default function Sidebar() {
   return (
      <Card className="hidden lg:block fixed inset-y-0 z-20 left-0 w-60 rounded-none">
         <SidebarContent />
      </Card>
   )
}
