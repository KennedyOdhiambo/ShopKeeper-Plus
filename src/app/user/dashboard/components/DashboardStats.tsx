'use client'

import { CreditCardIcon, DollarSign, HandCoins, LineChart } from 'lucide-react'
import DashboardStatisticsCard from './DashboardStatisticsCard'
import useSalesData from '../hooks/useSalesData'
import { formatMoney } from '@/lib/utils'
import useListExpenses from '../hooks/useListExpenses'

export default function DashboardStats() {
   const { salesData, isPending: salesPending } = useSalesData()
   const { salesData: creditSales, isPending: creditPending } = useSalesData('credit')
   const { expenses, isPending: expensePending } = useListExpenses()
   const salesRevenue = salesData?.reduce((acc, data) => acc + parseInt(data?.totalCost ?? ''), 0)
   const totalExpenditure = expenses?.reduce(
      (acc, data) => acc + parseInt(data.expenseAmount ?? ''),
      0
   )
   const netProfit = (salesRevenue ?? 0) - (totalExpenditure ?? 0)
   const totalCreditSales = creditSales?.reduce(
      (acc, data) => acc + parseInt(data?.totalCost ?? ''),
      0
   )
   return (
      <div className="flex flex-col gap-2">
         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <DashboardStatisticsCard
               isLoading={salesPending}
               cardTitle="Net Profit"
               cardIcon={<DollarSign className="size-4 text-muted-foreground" />}
               numbers={formatMoney(netProfit)}
               description="+20.1% from last month"
            />
            <DashboardStatisticsCard
               isLoading={salesPending}
               cardTitle="Sales Revenue"
               cardIcon={<LineChart className="size-4 text-muted-foreground" />}
               numbers={formatMoney(salesRevenue ?? 0)}
               description="+20.1% from last month"
            />
            <DashboardStatisticsCard
               isLoading={expensePending}
               cardTitle="Total Expenditure"
               cardIcon={<HandCoins className="size-4 text-muted-foreground" />}
               numbers={formatMoney(totalExpenditure ?? 0)}
               description="+20.1% from last month"
            />
            <DashboardStatisticsCard
               isLoading={creditPending}
               cardTitle="Pending Credit Sales"
               cardIcon={<CreditCardIcon className="size-4 text-muted-foreground" />}
               numbers={formatMoney(totalCreditSales ?? 0)}
               description="+20.1% from last month"
            />
         </div>
      </div>
   )
}
