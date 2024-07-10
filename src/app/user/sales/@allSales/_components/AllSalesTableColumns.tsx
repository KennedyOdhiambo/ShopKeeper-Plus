import { ColumnDef } from '@tanstack/react-table';
import ExpandItems from './ExpandItems';
import DeleteSale from './DeleteSale';

export type AllSalesTableColumns = {
   salesId: string;
   salesDate: string | null;
   totalCost: string | null | undefined;
   paymentOption: string | null;
   customerName: string | undefined;
};
export const allSalesColumns: ColumnDef<AllSalesTableColumns>[] = [
   {
      accessorKey: 'customerName',
      header: 'Customer',
   },

   {
      accessorKey: 'salesDate',
      header: 'Sales Date',
   },

   {
      accessorKey: 'paymentOption',
      header: 'Payment Method',
   },

   {
      accessorKey: 'totalCost',
      header: 'Amount',
   },

   {
      header: 'Sales Items',
      cell: ({ row }) => <ExpandItems salesId={row.original.salesId} />,
   },

   {
      header: 'Action',
      cell: ({ row }) => <DeleteSale rowId={row.original.salesId} />,
   },
];
