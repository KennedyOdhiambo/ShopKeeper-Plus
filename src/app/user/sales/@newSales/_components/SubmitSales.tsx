'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { NewSalesContext } from '@/context/NewSalesContext';
import { api } from '@/trpc/client';
import { useSearchParams } from 'next/navigation';
import { useQueryState } from 'nuqs';
import React, { useContext } from 'react';

export default function SubmitSales() {
   const searchParams = useSearchParams();
   const [customer, setCustomer] = useQueryState('customer');
   const [paymentOption, setPaymentOption] = useQueryState('payment', { defaultValue: 'cash' });

   const { toast } = useToast();
   const { salesItems } = useContext(NewSalesContext)!;

   const salesDate = searchParams.get('date') ?? new Date().toISOString();

   const items = Object.values(salesItems ?? {});
   const userId = 'cba51dba-4308-453c-973a-0bb24c5fd6b4';

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

   const handleSubmit = () => {
      const payload = {
         salesDate,
         paymentOption: paymentOption as 'cash' | 'credit' | 'mpesa' | undefined,
         customer: customer as string,
         items,
         userId,
      };
      submitSale(payload);
   };

   return (
      <div>
         <Button
            className="disabled:cursor-not-allowed"
            disabled={isPending || !items.length || !customer || customer.length < 2}
            onClick={handleSubmit}
         >
            {isPending ? 'SUBMITTING...' : 'SUBMIT'}
         </Button>
      </div>
   );
}
