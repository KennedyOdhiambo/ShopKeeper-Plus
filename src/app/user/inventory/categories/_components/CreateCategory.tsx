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
import CreateCategoryForm from './CreateCategoryForm';

export default function CreateCategory() {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button variant={'default'}>
               <CirclePlus className="me-2 size-4" /> New Category
            </Button>
         </DialogTrigger>
         <DialogContent className="w-[460px] rounded-sm">
            <DialogHeader>
               <DialogTitle>New Ctaegory</DialogTitle>
               <DialogDescription>Add new Products or Service Category</DialogDescription>
            </DialogHeader>
            <CreateCategoryForm />
         </DialogContent>
      </Dialog>
   );
}
