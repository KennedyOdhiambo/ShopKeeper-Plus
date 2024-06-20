import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import ItemsDropdown from './ItemsDropdown';
import { Input } from '@/components/ui/input';
import { formatMoney } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Delete } from 'lucide-react';

type NewSalesTableBodyProps = {
   rowCount: Array<{ rowId: number }>;
   handleDeleteRow: (index: number) => void;
};

export default function NewSalesTableBody({ rowCount, handleDeleteRow }: NewSalesTableBodyProps) {
   return (
      <TableBody>
         {rowCount.map((row) => (
            <TableRow key={row.rowId} className=" text-center">
               <TableCell className="py-2.5">
                  <ItemsDropdown />
               </TableCell>
               <TableCell className="py-2.5">100</TableCell>
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
                              onClick={() => handleDeleteRow(row.rowId)}
                              variant={'outline'}
                              size={'icon'}
                              className=" border-2.5 hover:bg-destructive hover:text-white transition-colors duration-200 rounded-lg"
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
