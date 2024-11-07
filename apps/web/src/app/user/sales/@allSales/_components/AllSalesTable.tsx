'use client';

import { allSalesColumns, AllSalesTableColumns } from './AllSalesTableColumns';
import DataTable from '@/components/DataTable';
import { formatMoney } from '@/lib/utils';
import usePaginatedSales from '../hooks/usePaginatedSales';
import { TableLoader } from '@/components/TableLoader';

export default function AllSalesTable() {
   const { salesWithCustomers, totalCount, isPending } = usePaginatedSales();

   const tableData: Array<AllSalesTableColumns> =
      salesWithCustomers?.map((sale) => ({
         salesId: sale.sales.salesId,
         salesDate: sale.sales.salesDate,
         customerName: sale.customers?.customerName,
         paymentOption: sale.sales.paymentOption?.toUpperCase() ?? '',
         totalCost: formatMoney(sale.sales.totalCost ?? ''),
      })) ?? [];

   if (isPending) return <TableLoader rows={10} />;

   return (
      <div>
         <DataTable rowCount={totalCount ?? 0} columns={allSalesColumns} data={tableData ?? []} />
      </div>
   );
}
