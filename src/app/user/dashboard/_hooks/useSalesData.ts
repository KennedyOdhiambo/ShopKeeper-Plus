import { api } from "@/trpc/client"
import { useSearchParams } from "next/navigation"

export default function useSalesData() {
   const searchParams = useSearchParams()
   const startDate = searchParams.get("from")
   const endDate = searchParams.get("to")

   const { data, isPending } = api.sales.listSales.useQuery({
      startDate: startDate ?? undefined,
      endDate: endDate ?? undefined,
   })

   const salesData = data?.sales

   return { salesData, isPending }
}
