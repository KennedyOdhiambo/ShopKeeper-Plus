import { api } from '@/trpc/client'
import { useSearchParams } from 'next/navigation'

export default function useMonthlySales() {
   const searchParams = useSearchParams()
   const startDate = searchParams.get('from')
   const endDate = searchParams.get('to')

   const { data: monthlySales, isPending } = api.sales.listMonthlySales.useQuery({
      startDate: startDate ?? undefined,
      endDate: endDate ?? undefined,
   })
   return { monthlySales, isPending }
}
