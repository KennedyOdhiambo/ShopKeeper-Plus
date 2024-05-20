import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ReactNode } from "react"

type StatsCardProps = {
   cardTitle: string
   cardIcon?: ReactNode
   numbers: string
   description: string
   progressValue: number
}
export default function DashboardStatisticsCard({
   cardTitle,
   cardIcon,
   numbers,
   description,
   progressValue,
}: StatsCardProps) {
   return (
      <Card>
         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{cardTitle}</CardTitle>
            {cardIcon}
         </CardHeader>
         <CardContent>
            <div className="text-2xl font-bold">{numbers}</div>
            <p className="text-xs text-muted-foreground">{description}</p>
         </CardContent>
         <CardFooter>
            <Progress value={progressValue} aria-label={`progress value`} />
         </CardFooter>
      </Card>
   )
}
