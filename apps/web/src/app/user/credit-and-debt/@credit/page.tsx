'use client';

import DataTable from '@/components/DataTable';
import React from 'react';
import { creditTableColumns } from './_components/CreditTableColumns';
import { useSearchParams } from 'next/navigation';
import { api } from '@/trpc/client';
import { TableLoader } from '@/components/TableLoader';

export default function Credit() {
   const searchParams = useSearchParams();
   const page = searchParams.get('page') ?? '0';

   const { data, isPending } = api.creditDebt.listCreditDebt.useQuery({
      page,
      type: 'credit',
      userId: 'cba51dba-4308-453c-973a-0bb24c5fd6b4',
   });

   const count = data?.count ?? 0;
   const tableData =
      data?.creditDebt?.map((entry) => ({
         transactionDate: entry.credit_and_debt.transactionDate ?? '',
         transactionId: entry.credit_and_debt.transactionId,
         transactionAmount: entry.credit_and_debt.transactionId,
         customer: entry.customers?.customerName ?? '',
      })) ?? [];

   if (isPending) return <TableLoader rows={10} />;
   return (
      <div>
         <DataTable columns={creditTableColumns} data={tableData} rowCount={count} />
      </div>
   );
}
