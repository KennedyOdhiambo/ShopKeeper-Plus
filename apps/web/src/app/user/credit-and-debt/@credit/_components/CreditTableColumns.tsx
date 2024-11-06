import { ColumnDef } from '@tanstack/react-table';

export type CreditColumns = {
   transactionDate: string;
   customer: string;
   transactionAmount: string;
   transactionId: string;
};
export const creditTableColumns: ColumnDef<CreditColumns>[] = [
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
