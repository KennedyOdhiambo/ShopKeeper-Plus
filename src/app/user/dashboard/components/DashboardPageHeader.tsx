import DateRangePicker from "@/components/DateRangePicker"

import { CardHeader } from "@/components/ui/card"

export default function DashboardPageHeader() {
   return (
      <CardHeader className="flex px-0 sm:flex-row sm:justify-between sm:items-center flex-col gap-3">
         <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
         <div className="self-end inline-flex gap-3">
            <DateRangePicker />
         </div>
      </CardHeader>
   )
}
