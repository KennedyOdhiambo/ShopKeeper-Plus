import { SelectCustomers } from '@/server/db/schema/customers';
import { ColumnDef } from '@tanstack/react-table';
import ListCustomersTableActions from './ListCustomersTableActions';

export const listCustomersColumns: ColumnDef<SelectCustomers>[] = [
   {
      accessorKey: 'customerName',
      header: 'Customer Name',
   },
   {
      accessorKey: 'customerContact',
      header: 'Customer Contact',
   },
   {
      accessorKey: 'kraPin',
      header: 'KRA Pin',
   },
   {
      header: 'Action',
      cell: ({ row }) => {
         const rowData = row.original;
         return <ListCustomersTableActions rowId={rowData.customerId} />;
      },
   },
];
