'use client';

import DataTable from '@/components/DataTable';
import useListCustomers from '../hooks/useListCustomers';
import { listCustomersColumns } from './_components/ListCustomersColumns';
import { TableLoader } from '@/components/TableLoader';

export default function ListCustomers() {
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
