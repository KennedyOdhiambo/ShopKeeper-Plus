import { useToast } from "@/components/ui/use-toast"
import { api } from "@/trpc/client"

export default function useSignup() {
   const { toast } = useToast()
   
   const { mutate: createUser, isPending } = api.authentication.signup.useMutation({
      onSuccess: (data) => {
         if (data.status === "success") {
            toast({
               
               description: data.message,
               variant: "default",
            })
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
