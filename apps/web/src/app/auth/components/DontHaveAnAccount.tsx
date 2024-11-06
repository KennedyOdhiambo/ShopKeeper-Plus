"use client"

import { Button } from "@/components/ui/button"
import { AuthContext } from "@/context/AuthContext"
import { useContext } from "react"

export default function DontHaveAnAccount() {
   const authContxt = useContext(AuthContext)
   const setAuthProcess = authContxt?.setRunningProcess!
   return (
      <div className="mt-4 text-center text-sm">
         Don&apos;t have an account?{" "}
         <Button
            variant={"link"}
            onClick={() => setAuthProcess("signup")}
            className="underline text-primary ps-1"
         >
            Sign up
         </Button>
      </div>
   )
}
