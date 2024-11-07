'use client';

import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import NewSalesTableBody from './NewSalesTableBody';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function NewSalesTable() {
   const [rowCount, setRowCount] = useState([{ rowId: 1 }]);

   const handleAddRow = () => {
      const latestRow = rowCount[rowCount.length - 1] ?? { rowId: 0 };
      setRowCount((prevRows) => [...prevRows, { rowId: latestRow.rowId + 1 }]);
   };

   const handleDeleteRow = (rowId: number) => {
      setRowCount((prevRows) => prevRows.filter((row) => row.rowId !== rowId));
   };

   return (
      <div className="flex flex-col gap-5">
         <Table>
            <TableHeader>
               <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead className="text-center">Quantity In Stock</TableHead>
                  <TableHead className="text-center">Quantity Sold</TableHead>
                  <TableHead className="text-center">Unit Cost</TableHead>
                  <TableHead className="text-center">Total Cost</TableHead>
                  <TableHead className="text-center">Action</TableHead>
               </TableRow>
            </TableHeader>
            <NewSalesTableBody handleDeleteRow={handleDeleteRow} rowCount={rowCount} />
         </Table>
         <Button className="me-5 w-fit self-end" variant={'outline'} onClick={handleAddRow}>
            Add new row
         </Button>
      </div>
   );
}
