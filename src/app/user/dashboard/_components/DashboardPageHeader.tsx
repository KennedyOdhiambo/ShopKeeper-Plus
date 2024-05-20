import DateRangePicker from "@/components/DateRangePicker"
import { Button } from "@/components/ui/button"
import { CardHeader } from "@/components/ui/card"
import { Filter } from "lucide-react"

export default function DashboardPageHeader() {
   return (
      <CardHeader className="flex px-0 sm:flex-row sm:justify-between sm:items-center flex-col gap-3">
         <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
         <div className="self-end inline-flex gap-3">
            <DateRangePicker />
            <Button className="inline-flex gap-2">
               <Filter className=" size-5" />
               <span>Filter</span>
            </Button>
         </div>
      </CardHeader>
   )
}
