import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function ChartLoadingSkeleton() {
   return (
      <Card className="grid grid-cols-12 border-none items-end gap-3 shadow-none">
         <Skeleton className=" h-[200px] " />
         <Skeleton className=" h-[150px] " />
         <Skeleton className=" h-[300px] " />
         <Skeleton className=" h-[160px] " />
         <Skeleton className=" h-[210px] " />
         <Skeleton className=" h-[250px] " />
         <Skeleton className=" h-[280px] " />
         <Skeleton className=" h-[180px] " />
         <Skeleton className=" h-[110px] " />
         <Skeleton className=" h-[280px] " />
         <Skeleton className=" h-[150px] " />
         <Skeleton className=" h-[200px] " />
      </Card>
   )
}
