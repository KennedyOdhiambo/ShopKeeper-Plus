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

type NewCustomerProps = {
   type: 'icon' | 'button';
};

export default function NewCustomer({ type }: NewCustomerProps) {
   return (
      <Dialog>
         <DialogTrigger asChild>
            {type === 'icon' ? (
               <Button variant={'default'} size={'icon'} className="rounded-full">
                  <UserRoundPlus />
               </Button>
            ) : (
               <Button variant={'outline'} size={'sm'}>
                  New Customer
               </Button>
            )}
         </DialogTrigger>
         <DialogContent className="w-[460px] rounded-sm">
            <DialogHeader>
               <DialogTitle>New Customer</DialogTitle>
               <DialogDescription>Add a new customer to your shop</DialogDescription>
            </DialogHeader>
            <NewCustomerForm />
         </DialogContent>
      </Dialog>
   );
}
