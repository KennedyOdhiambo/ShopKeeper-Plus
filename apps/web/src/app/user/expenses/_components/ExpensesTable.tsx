'use client';

import DataTable from '@/components/DataTable';
import React from 'react';
import { expensesColumns } from './ListExpensesColumns';
import { api } from '@/trpc/client';
import { useSearchParams } from 'next/navigation';
import { TableLoader } from '@/components/TableLoader';

export default function ExpensesTable() {
   const searchParams = useSearchParams();
   const page = searchParams.get('page') ?? '0';

   const { data, isPending } = api.expense.listPaginatedExpense.useQuery({
      page,
      userId: 'cba51dba-4308-453c-973a-0bb24c5fd6b4',
   });

   const expenses = data?.expenses;
   const count = data?.count;

   if (isPending) return <TableLoader rows={10} />;
   return (
      <div>
         <DataTable columns={expensesColumns} data={expenses ?? []} rowCount={count ?? 0} />
      </div>
   );
}
