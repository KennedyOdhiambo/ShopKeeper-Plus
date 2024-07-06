'use client';

import { Button } from '@/components/ui/button';
import { NewSalesContext } from '@/context/NewSalesContext';
import { useSearchParams } from 'next/navigation';
import React, { useContext } from 'react';
import useCreateSales from '../hooks/useCreateSales';

export default function SubmitSales() {
   const searchParams = useSearchParams();
   const { submitSale, paymentOption, customer, isPending } = useCreateSales();

   const { salesItems } = useContext(NewSalesContext)!;

   const salesDate = searchParams.get('date') ?? new Date().toISOString();

   const items = Object.values(salesItems ?? {});
   const userId = 'cba51dba-4308-453c-973a-0bb24c5fd6b4';

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
      <div className="mb-2">
         <Button
            size={'sm'}
            className="disabled:cursor-not-allowed"
            disabled={isPending || !items.length || !customer || customer.length < 2}
            onClick={handleSubmit}
         >
            {isPending ? 'SUBMITTING...' : 'SUBMIT'}
         </Button>
      </div>
   );
}
