import React from "react"
import DashboardStatisticsCard from "./_components/DashboardStatisticsCard"
import { CardHeader } from "@/components/ui/card"
import { CreditCardIcon, DollarSign, HandCoins, LineChart } from "lucide-react"
import DateRangePicker from "@/components/DateRangePicker"

export default async function Dashboard() {
   return (
      <main className="min-w-full">
         <CardHeader className="px-0 pb-2 grid gap-1">
            <span className=" text-2xl font-extrabold">Dashboard</span>{" "}
         </CardHeader>

         <div className="flex flex-col gap-2">
            <DateRangePicker className="self-end" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
               <DashboardStatisticsCard
                  cardTitle="Net Profit"
                  cardIcon={<DollarSign className="size-4 text-muted-foreground" />}
                  numbers="$45,231.89"
                  description="+20.1% from last month"
                  progressValue={-50}
               />
               <DashboardStatisticsCard
                  cardTitle="Sales Revenue"
                  cardIcon={<LineChart className="size-4 text-muted-foreground" />}
                  numbers="$45,231.89"
                  description="+20.1% from last month"
                  progressValue={100}
               />
               <DashboardStatisticsCard
                  cardTitle="Total Expenditure"
                  cardIcon={<HandCoins className="size-4 text-muted-foreground" />}
                  numbers="$45,231.89"
                  description="+20.1% from last month"
                  progressValue={80}
               />
               <DashboardStatisticsCard
                  cardTitle="Pending Credit Sales"
                  cardIcon={<CreditCardIcon className="size-4 text-muted-foreground" />}
                  numbers="$45,231.89"
                  description="+20.1% from last month"
                  progressValue={10}
               />
            </div>
         </div>
      </main>
   )
}
