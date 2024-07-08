'use client';

import {
   ColumnDef,
   flexRender,
   getCoreRowModel,
   getPaginationRowModel,
   useReactTable,
} from '@tanstack/react-table';

import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from '@/components/ui/table';
import { Button } from './ui/button';
import { useQueryState } from 'nuqs';

interface DataTableProps<TData, TValue> {
   columns: ColumnDef<TData, TValue>[];
   data: TData[];
   rowCount: number;
}

export default function DataTable<TData, TValue>({
   columns,
   data,
   rowCount,
}: DataTableProps<TData, TValue>) {
   const [, setPage] = useQueryState('page', { defaultValue: '0' });
   const table = useReactTable({
      data,
      columns,
      manualPagination: true,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      rowCount: rowCount,
   });

   const handleNextNavigation = () => {
      table.nextPage();
      setPage((prev) => {
         const nextInt = +prev + 1;
         return nextInt.toString();
      });
   };

   const handlePrev = () => {
      table.previousPage();
      setPage((prev) => {
         const prevInt = +prev - 1;
         return prevInt.toString();
      });
   };

   return (
      <div>
         <div className="rounded-md border">
            <Table>
               <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                     <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                           return (
                              <TableHead key={header.id}>
                                 {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                         header.column.columnDef.header,
                                         header.getContext(),
                                      )}
                              </TableHead>
                           );
                        })}
                     </TableRow>
                  ))}
               </TableHeader>
               <TableBody>
                  {table.getRowModel().rows?.length ? (
                     table.getRowModel().rows.map((row) => (
                        <TableRow
                           className=""
                           key={row.id}
                           data-state={row.getIsSelected() && 'selected'}
                        >
                           {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id}>
                                 {flexRender(cell.column.columnDef.cell, cell.getContext())}
                              </TableCell>
                           ))}
                        </TableRow>
                     ))
                  ) : (
                     <TableRow>
                        <TableCell colSpan={columns.length} className="h-24 text-center">
                           No results.
                        </TableCell>
                     </TableRow>
                  )}
               </TableBody>
            </Table>
         </div>

         <div className="flex items-center justify-end space-x-2 py-4">
            <Button
               variant="outline"
               size="sm"
               onClick={() => {
                  handlePrev();
               }}
               disabled={!table.getCanPreviousPage()}
            >
               Previous
            </Button>
            <Button
               variant="outline"
               size="sm"
               onClick={() => {
                  handleNextNavigation();
               }}
               disabled={!table.getCanNextPage()}
            >
               Next
            </Button>
         </div>
      </div>
   );
}
