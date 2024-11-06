import { useSearchParams } from "next/navigation"
import { useCallback } from "react"

export default function useQueryString() {
   const searchParams = useSearchParams()
   const createQueryString = useCallback(
      (name: string, value: string) => {
         const params = new URLSearchParams(searchParams.toString())

         if (!value.trim()) {
            params.delete(name)
         }
         params.set(name, value)
         return params.toString()
      },
      [searchParams]
   )
   return createQueryString
}
