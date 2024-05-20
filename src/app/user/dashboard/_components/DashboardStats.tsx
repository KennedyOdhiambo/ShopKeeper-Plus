import { CreditCardIcon, DollarSign, HandCoins, LineChart } from "lucide-react"
import DashboardStatisticsCard from "./DashboardStatisticsCard"

export default function DashboardStats() {
   return (
      <div className="flex flex-col gap-2">
         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <DashboardStatisticsCard
               cardTitle="Net Profit"
               cardIcon={<DollarSign className="size-4 text-muted-foreground" />}
               numbers="Ksh 45,231.89"
               description="+20.1% from last month"
               progressValue={-50}
            />
            <DashboardStatisticsCard
               cardTitle="Sales Revenue"
               cardIcon={<LineChart className="size-4 text-muted-foreground" />}
               numbers="Ksh 45,231.89"
               description="+20.1% from last month"
               progressValue={100}
            />
            <DashboardStatisticsCard
               cardTitle="Total Expenditure"
               cardIcon={<HandCoins className="size-4 text-muted-foreground" />}
               numbers="Ksh 45,231.89"
               description="+20.1% from last month"
               progressValue={80}
            />
            <DashboardStatisticsCard
               cardTitle="Pending Credit Sales"
               cardIcon={<CreditCardIcon className="size-4 text-muted-foreground" />}
               numbers="Ksh 45,231.89"
               description="+20.1% from last month"
               progressValue={10}
            />
         </div>
      </div>
   )
}
