'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { formatMoney } from '@/lib/utils';
import React from 'react';
import useListSalesItems from '../hooks/useListSalesItems';
import { salesItemsColumns } from '../_components/SalesItemsColumns';
import DataTable from '@/components/DataTable';
import { useParams } from 'next/navigation';

export default function SalesDetails() {
   const { salesId } = useParams<{ salesId: string }>();
   const { salesDetails, itemsWithInventory, customer } = useListSalesItems(salesId);
   const tableData = itemsWithInventory?.map((entry) => ({
      salesItemId: entry.sales_items.salesItemId ?? '',
      item: entry.items?.itemName ?? '',
      quantity: String(entry.sales_items.salesQuantity ?? ''),
      unitCost: entry.inventory?.sellingPrice ?? '',
   }));

   return (
      <section className="mt-6 flex w-full flex-col gap-5">
         <Card className="flex flex-row justify-between border-0 bg-secondary shadow-none">
            <CardContent className="flex w-full flex-col gap-8 md:flex-row">
               <div className="grid w-full grid-cols-2 justify-between md:grid-cols-4">
                  <div className="grid grid-rows-2 gap-5 md:col-span-2 md:grid-cols-2 md:grid-rows-1">
                     <div className="flex flex-col gap-0.5">
                        <Label className="text-sm font-semibold">Customer Name</Label>
                        <small>{customer?.customerName}</small>
                     </div>
                     <div className="flex flex-col gap-0.5">
                        <Label className="text-sm font-semibold">Phone Number</Label>
                        <small>{customer?.customerContact}</small>
                     </div>
                  </div>
                  <div className="grid grid-rows-2 gap-5 md:col-span-2 md:grid-cols-2 md:grid-rows-1">
                     <div className="flex flex-col gap-0.5">
                        <Label className="text-sm font-semibold">Sales Date</Label>
                        <small>{salesDetails?.salesDate}</small>
                     </div>
                     <div className="flex flex-col gap-0.5">
                        <Label className="text-sm font-semibold">Sales Value</Label>
                        <small>{formatMoney(salesDetails?.totalCost ?? '')}</small>
                     </div>
                  </div>
               </div>

               <div className="self-end">
                  <Button variant={'outline'} className="max-w-[200px]">
                     + New Payment
                  </Button>
               </div>
            </CardContent>
         </Card>

         <div>
            <DataTable columns={salesItemsColumns} rowCount={0} data={tableData ?? []} />
         </div>
      </section>
   );
}
