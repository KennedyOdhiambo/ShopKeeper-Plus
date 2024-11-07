import { useToast } from "@/components/ui/use-toast"
import { AuthContext } from "@/context/AuthContext"
import { api } from "@/trpc/client"
import { useContext } from "react"

export default function useSignup() {
  const authConext = useContext(AuthContext)
   const { toast } = useToast()
   
   const { mutate: createUser, isPending } = api.authentication.signup.useMutation({
      onSuccess: (data) => {
         if (data.status === "success") {
            toast({
               
               description: data.message,
               variant: "default",
               
            })

            authConext?.setRunningProcess('login')
         } else {
            toast({
               description: data.message,
               variant: "destructive",
            })
         }
      },
      onError: (err) => {
         console.error(err.message)
         toast({
            description: "Something went wrong,please try again",
            variant: "destructive",
         })
      },
   })
   return { createUser, isPending  }
}
