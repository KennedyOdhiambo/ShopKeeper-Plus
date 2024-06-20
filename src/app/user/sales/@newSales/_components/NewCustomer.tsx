import { Button } from '@/components/ui/button';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserRoundPlus } from 'lucide-react';

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

            <form action="" className="flex flex-col gap-y-5">
               <div className="">
                  <Label htmlFor="customerName" className="text-right">
                     Customer Name
                  </Label>
                  <Input id="customerName" />
               </div>

               <div className="">
                  <Label htmlFor="phoneNumber" className="text-right">
                     Phone Number
                  </Label>
                  <Input id="phoneNumber" />
               </div>
            </form>

            <DialogFooter>
               <Button type="submit">Save changes</Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
}
