import { Button } from '@/components/ui/button';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog';
import { UserRoundPlus } from 'lucide-react';
import NewCustomerForm from './NewCustomerForm';

export default function NewCustomer() {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button variant={'default'} size={'icon'} className=" rounded-full">
               <UserRoundPlus />
            </Button>
         </DialogTrigger>
         <DialogContent className=" w-[460px] rounded-sm">
            <DialogHeader>
               <DialogTitle>New Customer</DialogTitle>
               <DialogDescription>Add a new customer to your shop</DialogDescription>
            </DialogHeader>
            <NewCustomerForm />
         </DialogContent>
      </Dialog>
   );
}
