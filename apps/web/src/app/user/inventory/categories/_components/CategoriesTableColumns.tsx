import { SelectCategory } from '@/server/db/schema/categories';
import { ColumnDef } from '@tanstack/react-table';
import ListcategoriesTableActions from './ListcategoriesTableActions';

export const categoriesTableColumns: ColumnDef<SelectCategory>[] = [
   {
      accessorKey: 'categoryName',
      header: 'Category Name',
   },

   {
      accessorKey: 'description',
      header: 'Category Description',
   },

   {
      accessorKey: 'itemId',
      header: () => <div className="ps-5 text-left">Action</div>,
      cell: ({ row }) => {
         const rowData = row.original;
         return <ListcategoriesTableActions categoryId={rowData.categoryId} />;
      },
   },
];
