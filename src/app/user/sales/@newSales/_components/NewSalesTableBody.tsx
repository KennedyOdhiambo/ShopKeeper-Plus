'use client';

import { useEffect, useState } from 'react';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import ItemsDropdown from './ItemsDropdown';
import { Input } from '@/components/ui/input';
import { formatMoney } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Delete } from 'lucide-react';
import { api } from '@/trpc/client';

type NewSalesTableBodyProps = {
   rowCount: Array<{ rowId: number }>;
   handleDeleteRow: (index: number) => void;
};

type Item = { itemId: string; quantity: string; unitCost: string; quantityInStock: string };
type SalesItems = Record<string, Item>;

export default function NewSalesTableBody({ rowCount, handleDeleteRow }: NewSalesTableBodyProps) {
   const [salesItems, setSalesItems] = useState<SalesItems | null>(null);
   const [currentItemId, setCurrentItemId] = useState('');

   const { data: quantity, refetch } = api.items.quantityInStock.useQuery(
      { itemId: currentItemId },
      { enabled: !!currentItemId }
   );

   useEffect(() => {
      if (currentItemId) {
         refetch();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [currentItemId]);

   useEffect(() => {
      if (quantity !== undefined && currentItemId) {
         setSalesItems((prevItems) => {
            const updatedItems = prevItems || {};
            const rowId = Object.keys(updatedItems).find((key) => updatedItems[key].itemId === currentItemId) ?? '';

            return {
               ...prevItems,
               [rowId]: {
                  ...updatedItems[rowId],
                  quantityInStock: quantity.toString(),
               },
            };
         });
      }
   }, [quantity, currentItemId]);

   const handleSelectItem = async (rowId: string, itemId: string) => {
      setCurrentItemId(itemId);
      setSalesItems((prevItems) => {
         const updatedItems = prevItems || {};
         return {
            ...updatedItems,
            [rowId]: {
               ...updatedItems[rowId],
               itemId: itemId,
               quantityInStock: '',
            },
         };
      });
   };

   const onDeleteRow = (rowId: number) => {
      setSalesItems((prevItems) => {
         if (!prevItems) return null;

         const { [rowId]: deletedItem, ...remainingItems } = prevItems;
         return remainingItems;
      });

      handleDeleteRow(rowId);
   };

   return (
      <TableBody>
         {rowCount.map((row) => (
            <TableRow key={row.rowId} className="text-center">
               <TableCell className="py-2.5">
                  <ItemsDropdown rowId={String(row.rowId)} onSelect={handleSelectItem} />
               </TableCell>
               <TableCell className="py-2.5">{salesItems ? salesItems[row.rowId]?.quantityInStock : 0}</TableCell>
               <TableCell className="py-2.5 max-w-[150px] items-center text-center">
                  <Input type="number" />
               </TableCell>
               <TableCell className="py-2.5">{formatMoney(100)}</TableCell>
               <TableCell className="py-2.5">{formatMoney(100)}</TableCell>
               <TableCell className="py-2.5">
                  <TooltipProvider>
                     <Tooltip>
                        <TooltipTrigger asChild>
                           <Button
                              onClick={() => onDeleteRow(row.rowId)}
                              variant={'outline'}
                              size={'icon'}
                              className="border-2.5 hover:bg-destructive hover:text-white transition-colors duration-200 rounded-lg"
                           >
                              <Delete />
                           </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                           <p>Delete</p>
                        </TooltipContent>
                     </Tooltip>
                  </TooltipProvider>
               </TableCell>
            </TableRow>
         ))}
      </TableBody>
   );
}
