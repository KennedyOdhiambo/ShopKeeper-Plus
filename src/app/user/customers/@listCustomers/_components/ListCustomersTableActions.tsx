import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Delete, Edit } from 'lucide-react';
import React from 'react';

export default function ListCustomersTableActions({ rowId }: { rowId: string }) {
   return (
      <div>
         <TooltipProvider>
            <Tooltip>
               <TooltipTrigger asChild>
                  <Button
                     //    onClick={handleDelete}
                     variant={'outline'}
                     size={'icon'}
                     className="border-2.5 rounded-lg p-1 transition-colors duration-200 hover:bg-primary hover:text-white"
                  >
                     <Edit className="size-5" />
                  </Button>
               </TooltipTrigger>
               <TooltipContent className="rounded-md border bg-popover p-1">
                  <p>Edit</p>
               </TooltipContent>
            </Tooltip>
         </TooltipProvider>

         <TooltipProvider>
            <Tooltip>
               <TooltipTrigger asChild>
                  <Button
                     //    onClick={handleDelete}
                     variant={'outline'}
                     size={'icon'}
                     className="border-2.5 rounded-lg transition-colors duration-200 hover:bg-destructive hover:text-white"
                  >
                     <Delete className="size-5" />
                  </Button>
               </TooltipTrigger>
               <TooltipContent className="rounded-md border bg-popover p-1">
                  <p>Delete</p>
               </TooltipContent>
            </Tooltip>
         </TooltipProvider>
      </div>
   );
}
