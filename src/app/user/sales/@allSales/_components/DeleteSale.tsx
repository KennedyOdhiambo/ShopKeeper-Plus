import { Button } from '@/components/ui/button';
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TooltipContent } from '@radix-ui/react-tooltip';
import { Delete } from 'lucide-react';

type DeleteActionProps = {
   rowId: string;
};

export default function DeleteSale({ rowId }: DeleteActionProps) {
   console.log(rowId);
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button
                  variant={'outline'}
                  size={'icon'}
                  className="border-2.5 rounded-lg transition-colors duration-200 hover:bg-destructive hover:text-white"
               >
                  <Delete />
               </Button>
            </TooltipTrigger>
            <TooltipContent className="rounded-md border bg-popover p-1">
               <p>Delete</p>
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
}
