import { ColumnDef } from '@tanstack/react-table';

export type InventoryTableColumns = {
   inventoryId: string;
   inventoryCode: string;
   itemName: string;
   dateAdded: string;
   quantityAdded: number | null;
   quantityInStock: number;
   buyingprice: string | null;
   sellingPrice: string | null;
};

export const inventoryTableColumns: ColumnDef<InventoryTableColumns>[] = [
   {
      accessorKey: 'dateAdded',
      header: 'Date',
   },

   {
      accessorKey: 'itemName',
      header: 'Item',
   },

   {
      accessorKey: 'quantityAdded',
      header: 'Quantity Added',
   },

   {
      accessorKey: 'quantityInStock',
      header: 'Quantity In Stock',
   },

   {
      accessorKey: 'buyingprice',
      header: 'Buying Price',
   },

   {
      accessorKey: 'sellingPrice',
      header: 'Selling Price',
   },
];
