import { Button } from '@/components/ui/button';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Edit } from 'lucide-react';
import EditCustomerForm from './EditCustomerForm';

export default function EditCustomer({ customerId }: { customerId: string }) {
   return (
      <div>
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
                  <DialogTitle>New Customer</DialogTitle>
                  <DialogDescription>Add a new customer to your shop</DialogDescription>
               </DialogHeader>
               <EditCustomerForm customerId={customerId} />
            </DialogContent>
         </Dialog>
      </div>
   );
}
