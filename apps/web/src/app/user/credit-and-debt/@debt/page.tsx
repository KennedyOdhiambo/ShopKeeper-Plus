'use client';

import DataTable from '@/components/DataTable';
import { TableLoader } from '@/components/TableLoader';
import { api } from '@/trpc/client';
import { useSearchParams } from 'next/navigation';
import { debtTableColumns } from './_components/DebttableColumns';

export default function Debt() {
   const searchParams = useSearchParams();
   const page = searchParams.get('page') ?? '0';

   const { data, isPending } = api.creditDebt.listCreditDebt.useQuery({
      page,
      type: 'debt',
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
         <DataTable columns={debtTableColumns} data={tableData} rowCount={count} />
      </div>
   );
}
