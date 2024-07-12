import { Button } from '@/components/ui/button';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog';
import React from 'react';
import EditItemForm from './EditItemForm';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Edit } from 'lucide-react';

export default function EditItem({ itemId }: { itemId: string }) {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button
               variant={'outline'}
               size={'icon'}
               className="border-2.5 rounded-full p-1 text-secondary-foreground transition-colors duration-200 hover:bg-primary hover:text-white"
            >
               <TooltipProvider>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <Edit className="size-5" />
                     </TooltipTrigger>
                     <TooltipContent className="rounded-md border bg-popover p-1">
                        <p>Edit</p>
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
            </Button>
         </DialogTrigger>
         <DialogContent className="w-[460px] rounded-sm">
            <DialogHeader>
               <DialogTitle>Update Item or Service</DialogTitle>
               <DialogDescription>Update details of existing Item or Service</DialogDescription>
            </DialogHeader>
            <EditItemForm itemId={itemId} />
         </DialogContent>
      </Dialog>
   );
}
