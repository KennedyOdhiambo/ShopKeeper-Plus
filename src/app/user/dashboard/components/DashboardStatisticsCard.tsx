import { SkeletonCard } from '@/components/SkeletonCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ReactNode } from 'react'

type StatsCardProps = {
   cardTitle: string
   cardIcon?: ReactNode
   numbers: string
   description: string
   isLoading: boolean
}
export default function DashboardStatisticsCard({
   isLoading,
   cardTitle,
   cardIcon,
   numbers,
   description,
}: StatsCardProps) {
   if (isLoading) return <SkeletonCard />
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
      </Card>
   )
}
