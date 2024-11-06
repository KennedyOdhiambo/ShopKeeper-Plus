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
import React from 'react';
import CreateItemForm from './CreateItemForm';

export default function CreateItem() {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button variant={'default'}>
               <CirclePlus className="me-2 size-4" /> Add Product or Service
            </Button>
         </DialogTrigger>
         <DialogContent className="w-[460px] rounded-sm">
            <DialogHeader>
               <DialogTitle>New Item or Service</DialogTitle>
               <DialogDescription>Add a new product or service to your shop</DialogDescription>
            </DialogHeader>
            <CreateItemForm />
         </DialogContent>
      </Dialog>
   );
}
