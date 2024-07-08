'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import useSalesData from '../hooks/useSalesData';
import { formatMoney, getFirstLetters } from '@/lib/utils';
import RecentSalesSkeleton from './RecentSalesSkeleton';

export function RecentSales() {
   const { salesDataWithCustomers, isPending } = useSalesData();
   const recentSales = salesDataWithCustomers?.splice(0, 5);

   if (isPending) return <RecentSalesSkeleton />;
   return (
      <div className="space-y-8">
         {recentSales?.map((sale) => (
            <div key={sale?.sales?.salesId} className="flex items-center">
               <Avatar className="h-9 w-9">
                  <AvatarFallback>
                     {getFirstLetters(sale?.customers?.customerName, 2)}
                  </AvatarFallback>
               </Avatar>
               <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                     {sale?.customers?.customerName}
                  </p>
                  <p className="text-sm text-muted-foreground">
                     {sale?.customers?.customerContact}
                  </p>
               </div>
               <div className="ml-auto font-medium">
                  {formatMoney(Number(sale.sales?.totalCost))}
               </div>
            </div>
         ))}
      </div>
   );
}
