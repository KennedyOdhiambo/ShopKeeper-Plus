'use client';

import { Button } from '@/components/ui/button';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserRoundPlus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const newCustomerValidation = z.object({
   customerName: z.string().min(2, { message: 'Valid customer name is required' }),
   customerContact: z.string().min(10, { message: 'Phone number should be atleast 10 characters' }),
   kraPin: z.string().optional(),
});

export type customerForm = z.infer<typeof newCustomerValidation>;

export default function NewCustomer() {
   const { register, handleSubmit } = useForm<customerForm>({ resolver: zodResolver(newCustomerValidation) });
   const onSubmit = (data: customerForm) => {
      console.log('data:', data);
   };
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

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
               <div className="">
                  <Label htmlFor="customerName" className="text-right">
                     Customer Name
                  </Label>
                  <Input id="customerName" {...register('customerName')} />
               </div>

               <div className="">
                  <Label htmlFor="phoneNumber" className="text-right">
                     Phone Number
                  </Label>
                  <Input id="phoneNumber" {...register('customerContact')} />
               </div>

               <div className="">
                  <Label htmlFor="kraPin" className="text-right">
                     KRA Pin (optional)
                  </Label>
                  <Input id="kraPin" {...register('kraPin')} />
               </div>

               <div className=" text-end">
                  <Button type="submit">Save changes</Button>
               </div>
            </form>
         </DialogContent>
      </Dialog>
   );
}
