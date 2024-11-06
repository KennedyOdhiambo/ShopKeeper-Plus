import { useToast } from '@/components/ui/use-toast';
import { api } from '@/trpc/client';
import { UseFormReset } from 'react-hook-form';

type Reset = UseFormReset<{
   customerName: string;
   customerContact: string;
   kraPin?: string | undefined;
}>;

export default function useCreateCustomer(reset: Reset) {
   const { toast } = useToast();
   const utils = api.useUtils();

   const { mutate: addCustomer, isPending } = api.customers.createCustomer.useMutation({
      onSuccess: (res) => {
         if (res.status === 'success') {
            toast({
               description: 'Customer added succesfully',
               variant: 'default',
            });
            utils.customers.listCustomers.invalidate();
            reset();
         } else {
            toast({
               description: 'Error adding customer',
               variant: 'destructive',
            });
         }
      },

      onError: (err) => {
         console.error(err);
         toast({
            description: 'Network error,please try again',
            variant: 'destructive',
         });
      },
   });

   return { addCustomer, isPending };
}
