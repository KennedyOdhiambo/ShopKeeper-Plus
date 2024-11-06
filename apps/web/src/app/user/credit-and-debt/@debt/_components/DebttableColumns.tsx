import { ColumnDef } from '@tanstack/react-table';

export type DebtColumns = {
   transactionDate: string;
   customer: string;
   transactionAmount: string;
   transactionId: string;
};
export const debtTableColumns: ColumnDef<DebtColumns>[] = [
   {
      accessorKey: 'transactionDate',
      header: 'Transaction Date',
   },

   {
      accessorKey: 'customer',
      header: 'Customer',
   },

   {
      accessorKey: 'transactionDate',
      header: 'Transaction Date',
   },
];
