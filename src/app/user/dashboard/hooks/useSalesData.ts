import { api } from '@/trpc/client';
import { useSearchParams } from 'next/navigation';

export default function useSalesData(paymentMethod?: 'cash' | 'credit' | 'mpesa') {
   const searchParams = useSearchParams();
   const startDate = searchParams.get('from');
   const endDate = searchParams.get('to');
   const paymentMethodParam = searchParams.get('payment') as 'cash' | 'credit' | 'mpesa';

   const { data, isPending } = api.sales.listSales.useQuery({
      startDate: startDate ?? undefined,
      endDate: endDate ?? undefined,
      paymentMethod: paymentMethod ?? paymentMethodParam,
   });

   const salesData = data?.sales.map((object) => object.sales);
   const salesDataWithCustomers = data?.sales;

   return { salesData, isPending, salesDataWithCustomers };
}
