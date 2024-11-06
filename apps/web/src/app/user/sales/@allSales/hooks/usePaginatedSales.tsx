import { api } from '@/trpc/client';
import { useSearchParams } from 'next/navigation';

export default function usePaginatedSales() {
   const searchParams = useSearchParams();
   const startDate = searchParams.get('from');
   const endDate = searchParams.get('to');
   const paymentMethod = searchParams.get('payment');
   const customerId = searchParams.get('customer');
   const page = searchParams.get('page');

   const { data, isPending } = api.sales.listPaginatedSales.useQuery({
      startDate: startDate ?? undefined,
      endDate: endDate ?? undefined,
      paymentMethod: paymentMethod
         ? paymentMethod === 'all'
            ? undefined
            : (paymentMethod as 'cash' | 'credit' | 'mpesa')
         : undefined,
      customerId: customerId ? (customerId === 'all' ? undefined : customerId) : undefined,
      page: page ?? '0',
   });

   const salesData = data?.sales.map((object) => object.sales);
   const salesWithCustomers = data?.sales;
   const totalCount = data?.totalCount;

   return { salesData, salesWithCustomers, isPending, totalCount };
}
