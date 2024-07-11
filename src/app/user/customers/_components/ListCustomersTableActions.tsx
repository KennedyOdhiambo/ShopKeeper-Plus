'use client';

import LoadingSpinner from '@/components/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/components/ui/use-toast';
import { api } from '@/trpc/client';
import { Delete } from 'lucide-react';
import EditCustomer from './EditCustomer';

export default function ListCustomersTableActions({ rowId }: { rowId: string }) {
   const { toast } = useToast();
   const utils = api.useUtils();

   const { mutate, isPending } = api.customers.deleteCustomer.useMutation({
      onSuccess: (res) => {
         if (res.status === 'success') {
            toast({
               description: res.message,
               variant: 'default',
            });
            utils.customers.listCustomers.invalidate();
         } else {
            toast({
               description: res.message,
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

   const handleDelete = () => {
      mutate({ customerId: rowId });
   };

   return (
      <div className="flex flex-row gap-2">
         <EditCustomer customerId={rowId} />

         <TooltipProvider>
            <Tooltip>
               <TooltipTrigger asChild>
                  <Button
                     onClick={handleDelete}
                     variant={'outline'}
                     size={'icon'}
                     className="border-2.5 rounded-full transition-colors duration-200 hover:bg-destructive hover:text-white"
                  >
                     {isPending ? <LoadingSpinner /> : <Delete className="size-5" />}
                  </Button>
               </TooltipTrigger>
               <TooltipContent className="rounded-md border bg-popover p-1">
                  <p>Delete</p>
               </TooltipContent>
            </Tooltip>
         </TooltipProvider>
      </div>
   );
}
