import { Button } from '@/components/ui/button';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog';
import { CirclePlus } from 'lucide-react';
import NewExpenseForm from './NewExpenseForm';

export default function NewExpense() {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button variant={'default'}>
               <CirclePlus className="me-2 size-4" /> New Expense
            </Button>
         </DialogTrigger>
         <DialogContent className="w-[460px] rounded-sm">
            <DialogHeader>
               <DialogTitle>New Expense</DialogTitle>
               <DialogDescription>Add new Expense</DialogDescription>
            </DialogHeader>
            <NewExpenseForm />
         </DialogContent>
      </Dialog>
   );
}
