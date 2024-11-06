'use client';

import DataTable from '@/components/DataTable';
import { api } from '@/trpc/client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { inventoryTableColumns } from './InventoryTableColumns';
import { TableLoader } from '@/components/TableLoader';

export default function InventoryTable() {
   const searchParams = useSearchParams();
   const itemId = searchParams.get('item');
   const page = searchParams.get('page');

   const { data, isPending } = api.inventory.listInventory.useQuery({
      itemId: itemId ?? '',
      page: page ?? '0',
   });

   const inventoryDetails = data?.inventory;
   const itemDetails = data?.item;
   const count = data?.count;

   const tableData = inventoryDetails?.map((entry) => ({
      inventoryId: entry.inventoryId,
      inventoryCode: entry.inventoryId.slice(0, 5),
      itemName: itemDetails?.itemName ?? '',
      dateAdded: entry.lastUpdated ?? '',
      quantityAdded: entry.quantityAdded,
      quantityInStock: entry.quantityInStock,
      buyingprice: entry.buyingPrice,
      sellingPrice: entry.sellingPrice,
   }));

   if (!tableData?.length && !isPending)
      return <p className="w-full text-center">Please select an item</p>;

   if (isPending) return <TableLoader rows={5} />;
   return (
      <div>
         <DataTable rowCount={count ?? 0} columns={inventoryTableColumns} data={tableData ?? []} />
      </div>
   );
}
