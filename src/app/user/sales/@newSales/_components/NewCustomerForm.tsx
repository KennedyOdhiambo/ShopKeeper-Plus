'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const newCustomerValidation = z.object({
   customerName: z.string().min(2, { message: 'Valid customer name is required' }),
   customerContact: z.string().min(10, { message: 'Phone number should be atleast 10 characters' }),
   kraPin: z.string().optional(),
});

export type customerForm = z.infer<typeof newCustomerValidation>;

export default function NewCustomerForm() {
   const { register, handleSubmit } = useForm<customerForm>({ resolver: zodResolver(newCustomerValidation) });
   const onSubmit = (data: customerForm) => {
      console.log('data:', data);
   };

   return (
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
   );
}
