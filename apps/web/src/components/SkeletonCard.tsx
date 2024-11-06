import { Skeleton } from '@/components/ui/skeleton'
import { Card } from './ui/card'

export function SkeletonCard() {
   return (
      <Card className=" border-none shadow-none">
         <Skeleton className="h-[125px] w-full" />
      </Card>
   )
}
