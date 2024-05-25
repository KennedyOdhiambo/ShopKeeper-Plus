import { useToast } from '@/components/ui/use-toast'
import { api } from '@/trpc/client'
import { useRouter } from 'next/navigation'

export default function useLogin() {
    const router = useRouter()
    const {toast} = useToast()
    const {mutate: login,isPending} = api.authentication.login.useMutation({
        onSuccess: (data) => {
            if (data.status === 'success') {
                toast({
                    description: data.message,
                    variant: 'default'
                })
                setTimeout(() => { router.push('/user/dashboard')}, 1000)
            } else {
                toast ({
                    description: data.message,
                    variant: 'destructive'
                })
            }
           
        },
        onError: (err) => {
            console.error(err)
            toast({
                description: 'Something went wrong, please try again',
                variant: 'destructive'
            })
        }
     })

  return{login,isPending}
}
