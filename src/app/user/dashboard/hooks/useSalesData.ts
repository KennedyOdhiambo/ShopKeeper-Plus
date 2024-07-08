import { api } from '@/trpc/client';
import { useSearchParams } from 'next/navigation';

export default function useSalesData(paymentMethod?: string) {
   const searchParams = useSearchParams();
   const startDate = searchParams.get('from');
   const endDate = searchParams.get('to');

   const { data, isPending } = api.sales.listSales.useQuery({
      startDate: startDate ?? undefined,
      endDate: endDate ?? undefined,
      paymentMethod: paymentMethod
         ? paymentMethod === 'all'
            ? undefined
            : (paymentMethod as 'cash' | 'credit' | 'mpesa')
         : undefined,
   });

   const salesData = data?.sales.map((object) => object.sales);
   const salesDataWithCustomers = data?.sales;

   return { salesData, isPending, salesDataWithCustomers };
}
