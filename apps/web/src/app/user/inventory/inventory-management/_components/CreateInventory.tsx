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
import CreateInventoryForm from './CreateInventoryForm';

export default function CreateInventory() {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button variant={'default'}>
               <CirclePlus className="me-2 size-4" /> Add New Inventory
            </Button>
         </DialogTrigger>
         <DialogContent className="w-[460px] rounded-sm">
            <DialogHeader>
               <DialogTitle>New inventory Entry</DialogTitle>
               <DialogDescription>Add a new inventory entry</DialogDescription>
            </DialogHeader>
            <CreateInventoryForm />
         </DialogContent>
      </Dialog>
   );
}
