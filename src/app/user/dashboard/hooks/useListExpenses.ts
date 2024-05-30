import { api } from "@/trpc/client"
import { useSearchParams } from "next/navigation"

export default function useListExpenses() {
   const searchParams = useSearchParams()
   const startDate = searchParams.get("from")
   const endDate = searchParams.get("to")

   const { data, isPending } = api.expense.listExpenses.useQuery({
      startDate: startDate ?? undefined,
      endDate: endDate ?? undefined,
   })

   const expenses = data?.expenses
   return { expenses, isPending }
}
