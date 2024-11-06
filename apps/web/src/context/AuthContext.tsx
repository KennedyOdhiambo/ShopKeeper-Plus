import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

type AuthContext = {
   runningProcess: "login" | "signup"
   setRunningProcess: Dispatch<SetStateAction<"login" | "signup">>
}

export const AuthContext = createContext<AuthContext | null>(null)

export default function AuthContextProvider({ children }: { children: ReactNode }) {
   const [runningProcess, setRunningProcess] = useState<"login" | "signup">("login")

   const values = { runningProcess, setRunningProcess }

   return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
