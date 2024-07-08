import { useToast } from '@/components/ui/use-toast';
import { api } from '@/trpc/client';
import { useQueryState } from 'nuqs';

export default function useCreateSales() {
   const [customer, setCustomer] = useQueryState('customer');
   const [paymentOption, setPaymentOption] = useQueryState('payment', { defaultValue: 'cash' });

   const { toast } = useToast();
   const { mutate: submitSale, isPending } = api.sales.newSales.useMutation({
      onSuccess: (res) => {
         if (res.status === 'success') {
            toast({
               description: res.message,
               variant: 'default',
            });
            setCustomer(null);
            setPaymentOption(null);
            setTimeout(() => {
               window.location.reload();
            }, 500);
         } else {
            toast({
               description: res.message,
               variant: 'destructive',
            });
         }
      },
      onError: (err) => {
         toast({
            description: 'Error submitting data',
            variant: 'destructive',
         });
         console.error(err);
      },
   });
   return { submitSale, isPending, customer, paymentOption };
}
