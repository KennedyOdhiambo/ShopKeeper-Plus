'use client';

import DataTable from '@/components/DataTable';
import React from 'react';
import { categoriesTableColumns } from './CategoriesTableColumns';
import { useSearchParams } from 'next/navigation';
import { api } from '@/trpc/client';
import { TableLoader } from '@/components/TableLoader';

const userId = 'cba51dba-4308-453c-973a-0bb24c5fd6b4';

export default function CategoriesTable() {
   const searchParams = useSearchParams();
   const page = searchParams.get('page');

   const { data: categories, isPending } = api.categories.listPaginatedCategories.useQuery({
      page: page ?? '0',
      userId,
   });

   if (isPending) return <TableLoader rows={10} />;
   return (
      <div>
         <DataTable
            columns={categoriesTableColumns}
            data={categories?.categories ?? []}
            rowCount={categories?.totalCount ?? 0}
         />
      </div>
   );
}
