import { createCaller } from "@/server"
import { createTRPCContext } from "@/server/trpc"
import { headers } from "next/headers"
import { cache } from "react"

const createContext = cache(() => {
   const heads = new Headers(headers())
   heads.set(`x-trpc-source`, "rsc")

   return createTRPCContext({
      headers: heads,
   })
})

export const api = createCaller(createContext)
