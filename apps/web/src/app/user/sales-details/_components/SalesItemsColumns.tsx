import { formatMoney } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';

export type SalesItemsColumns = {
   salesItemId: string;
   item: string;
   quantity: string;
   unitCost: string;
};

export const salesItemsColumns: ColumnDef<SalesItemsColumns>[] = [
   {
      accessorKey: 'item',
      header: 'Sales Item',
   },
   {
      accessorKey: 'quantity',
      header: 'Sold Quantity',
   },
   {
      accessorKey: 'unitCost',
      header: 'Unit Cost',
      cell: ({ row }) => formatMoney(row.original.unitCost),
   },

   {
      header: 'Total Cost',
      cell: ({ row }) => {
         const rowData = row.original;
         return <span>{formatMoney(+rowData.quantity * +rowData.unitCost)}</span>;
      },
   },
];
