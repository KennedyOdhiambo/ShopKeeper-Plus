'use client';

import DataTable from '@/components/DataTable';
import { api } from '@/trpc/client';
import { useSearchParams } from 'next/navigation';
import { productsAndServicesColumns, ProductServicesTable } from './ProductAndServicesColumns';
import { TableLoader } from '@/components/TableLoader';

export default function ProductsAndServicesTable() {
   const searchParams = useSearchParams();
   const category = searchParams.get('category');
   const page = searchParams.get('page');

   const { data, isPending } = api.items.listItemsByCategory.useQuery({
      categoryId: category ?? undefined,
      page: page ?? '0',
   });

   const items = data?.items ?? [];
   const refinedItemsData: Array<ProductServicesTable> = items.map((item) => ({
      itemId: item.items.itemId,
      itemName: item.items.itemName,
      categoryName: item.categories?.categoryName ?? '',
      reorder: item.items.reorderLevel ?? '',
      unitOfMeasure: item.items.unitOfMeasure,
   }));
   const count = data?.count;

   if (isPending) return <TableLoader rows={10} />;
   return (
      <div>
         <DataTable
            columns={productsAndServicesColumns}
            data={refinedItemsData}
            rowCount={count ?? 0}
         />
      </div>
   );
}
