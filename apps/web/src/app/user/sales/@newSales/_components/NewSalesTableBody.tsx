'use client';

import { useContext, useEffect, useState } from 'react';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import ItemsDropdown from './ItemsDropdown';
import { Input } from '@/components/ui/input';
import { formatMoney } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Delete } from 'lucide-react';
import { api } from '@/trpc/client';
import { Skeleton } from '@/components/ui/skeleton';
import { NewSalesContext } from '@/context/NewSalesContext';

type NewSalesTableBodyProps = {
   rowCount: Array<{ rowId: number }>;
   handleDeleteRow: (index: number) => void;
};

export type NewSalesItem = { itemId: string; quantity: string; unitCost: string; quantityInStock: string };
export type NewSalesItems = Record<string, NewSalesItem>;

export default function NewSalesTableBody({ rowCount, handleDeleteRow }: NewSalesTableBodyProps) {
   const [salesItems, setSalesItems] = useState<NewSalesItems | null>(null);
   const [currentItemId, setCurrentItemId] = useState('');
   const [loadingRows, setLoadingRows] = useState<Record<string, boolean>>({});
   const newSalesContext = useContext(NewSalesContext);

   const { data: inventoryDetails, refetch } = api.items.quantityInStock.useQuery(
      { itemId: currentItemId },
      { enabled: !!currentItemId },
   );

   useEffect(() => {
      if (currentItemId) {
         refetch();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [currentItemId]);

   useEffect(() => {
      if (inventoryDetails !== undefined && currentItemId) {
         setSalesItems((prevItems) => {
            const updatedItems = prevItems || {};
            const rowId = Object.keys(updatedItems).find((key) => updatedItems[key].itemId === currentItemId) ?? '';
            setLoadingRows((prev) => ({ ...prev, [rowId]: false }));

            return {
               ...prevItems,
               [rowId]: {
                  ...updatedItems[rowId],
                  quantityInStock: `${inventoryDetails.quantityInStock.toString()} ${inventoryDetails.uom}`,
                  unitCost: inventoryDetails.sellingPrice ?? '',
               },
            };
         });
      }
   }, [currentItemId, inventoryDetails, setSalesItems]);

   const handleSelectItem = (rowId: string, itemId: string) => {
      setCurrentItemId(itemId);
      setLoadingRows((prev) => ({ ...prev, [rowId]: true }));
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

      newSalesContext?.setSalesItems((prev) => {
         let updatedItems = prev || {};
         updatedItems = {
            ...updatedItems,
            [rowId]: {
               ...updatedItems[rowId],
               itemId: itemId,
               quantity: 0,
            },
         };

         return updatedItems;
      });
   };

   // console.log('context:', newSalesContext?.salesItems);

   const handleQuantityChange = (rowId: string, value: string) => {
      setSalesItems((prevItems) => {
         if (!prevItems) return null;
         return {
            ...prevItems,
            [rowId]: {
               ...prevItems[rowId],
               quantity: value,
            },
         };
      });

      newSalesContext?.setSalesItems((prev) => {
         if (!prev) return null;
         return {
            ...prev,
            [rowId]: {
               ...prev[rowId],
               quantity: +value,
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

      newSalesContext?.setSalesItems((prev) => {
         if (!prev) return null;
         const { [rowId]: deletedItem, ...remainingItems } = prev;
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

               <TableCell className="mt-2 flex items-end justify-center py-2.5">
                  {loadingRows[row.rowId] ? (
                     <Skeleton className="size-8 rounded-full" />
                  ) : (
                     salesItems?.[row.rowId]?.quantityInStock || ''
                  )}
               </TableCell>

               <TableCell className="max-w-[150px] items-center py-2.5 text-center">
                  <Input
                     type="number"
                     className="text-center"
                     onChange={(e) => handleQuantityChange(String(row.rowId), e.target.value)}
                     min="0"
                     max={salesItems?.[row.rowId]?.quantityInStock || ''}
                  />
               </TableCell>

               <TableCell className="py-2.5">{formatMoney(salesItems?.[row.rowId]?.unitCost ?? 0)}</TableCell>
               <TableCell className="py-2.5">
                  {formatMoney(
                     Number(salesItems?.[row.rowId]?.unitCost ?? 0) * Number(salesItems?.[row.rowId]?.quantity ?? 0),
                  )}
               </TableCell>
               <TableCell className="py-2.5">
                  <TooltipProvider>
                     <Tooltip>
                        <TooltipTrigger asChild>
                           <Button
                              onClick={() => onDeleteRow(row.rowId)}
                              variant={'outline'}
                              size={'icon'}
                              className="border-2.5 rounded-lg transition-colors duration-200 hover:bg-destructive hover:text-white"
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
