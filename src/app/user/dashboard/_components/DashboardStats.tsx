"use client"

import { CreditCardIcon, DollarSign, HandCoins, LineChart } from "lucide-react"
import DashboardStatisticsCard from "./DashboardStatisticsCard"
import useSalesData from "../_hooks/useSalesData"
import { formatMoney } from "@/lib/utils"
import useListExpenses from "../_hooks/useListExpenses"

export default function DashboardStats() {
   const { salesData } = useSalesData()
   const { expenses } = useListExpenses()
   const salesRevenue = salesData?.reduce((acc, data) => acc + parseInt(data.totalCost ?? ""), 0)
   const totalExpenditure = expenses?.reduce(
      (acc, data) => acc + parseInt(data.expenseAmount ?? ""),
      0
   )
   return (
      <div className="flex flex-col gap-2">
         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <DashboardStatisticsCard
               cardTitle="Net Profit"
               cardIcon={<DollarSign className="size-4 text-muted-foreground" />}
               numbers="Ksh 45,231.89"
               description="+20.1% from last month"
            />
            <DashboardStatisticsCard
               cardTitle="Sales Revenue"
               cardIcon={<LineChart className="size-4 text-muted-foreground" />}
               numbers={formatMoney(salesRevenue ?? 0)}
               description="+20.1% from last month"
            />
            <DashboardStatisticsCard
               cardTitle="Total Expenditure"
               cardIcon={<HandCoins className="size-4 text-muted-foreground" />}
               numbers={formatMoney(totalExpenditure ?? 0)}
               description="+20.1% from last month"
            />
            <DashboardStatisticsCard
               cardTitle="Pending Credit Sales"
               cardIcon={<CreditCardIcon className="size-4 text-muted-foreground" />}
               numbers="Ksh 45,231.89"
               description="+20.1% from last month"
            />
         </div>
      </div>
   )
}
