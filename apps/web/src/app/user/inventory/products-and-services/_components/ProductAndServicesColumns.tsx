import { ColumnDef } from '@tanstack/react-table';
import ListItemsTableActions from './ListItemsTableActions';

export type ProductServicesTable = {
   itemId: string;
   itemName: string;
   unitOfMeasure: string;
   categoryName: string;
   reorder: string | number;
};
export const productsAndServicesColumns: ColumnDef<ProductServicesTable>[] = [
   {
      accessorKey: 'itemName',
      header: 'Item Name',
   },

   {
      accessorKey: 'unitOfMeasure',
      header: 'Unit Of Measure',
   },

   {
      accessorKey: 'categoryName',
      header: 'Item Category',
   },

   {
      accessorKey: 'reorder',
      header: 'Re-order level',
   },

   {
      accessorKey: 'itemId',
      header: () => <div className="text-center">Action</div>,
      cell: ({ row }) => {
         const rowData = row.original;
         return <ListItemsTableActions itemId={rowData.itemId} />;
      },
   },
];
