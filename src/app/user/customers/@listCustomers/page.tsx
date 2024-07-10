'use client';

import DataTable from '@/components/DataTable';
import useListCustomers from '../hooks/useListCustomers';
import { listCustomersColumns } from './_components/ListCustomersColumns';

export default function ListCustomers() {
   const { customers, totalCount } = useListCustomers();
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
