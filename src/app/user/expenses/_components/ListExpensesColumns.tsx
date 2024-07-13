import { SelectExpense } from '@/server/db/schema/expenses';
import { ColumnDef } from '@tanstack/react-table';
import ListExpensesTableAction from './ListExpensesTableAction';

export const expensesColumns: ColumnDef<SelectExpense>[] = [
   {
      accessorKey: 'paymenDate',
      header: 'Expense Date',
   },

   {
      accessorKey: 'expenseRecipient',
      header: 'Recipient',
   },

   {
      accessorKey: 'expenseReference',
      header: 'Reference',
   },

   {
      accessorKey: 'expenseDescription',
      header: 'Description',
   },

   {
      accessorKey: 'expenseAmount',
      header: 'Expense Amount',
   },

   {
      accessorKey: 'expenseId',
      header: () => <div className="text-center">Action</div>,
      cell: ({ row }) => {
         const rowData = row.original;
         return <ListExpensesTableAction expenseId={rowData.expenseId} />;
      },
   },
];
