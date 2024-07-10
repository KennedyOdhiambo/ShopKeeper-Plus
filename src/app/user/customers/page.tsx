'use client';

import DataTable from '@/components/DataTable';

import { TableLoader } from '@/components/TableLoader';
import { listCustomersColumns } from './_components/ListCustomersColumns';
import useListCustomers from './hooks/useListCustomers';

export default function Customers() {
   const { customers, totalCount, isPending } = useListCustomers();

   if (isPending) return <TableLoader rows={10} />;
   return (
      <div>
         <DataTable
            columns={listCustomersColumns}
            data={customers ?? []}
            rowCount={totalCount ?? 0}
         />
      </div>
   );
}
