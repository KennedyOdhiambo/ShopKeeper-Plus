'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { api } from '@/trpc/client';
import { customerForm, newCustomerValidation } from '@/validation/customerValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function NewCustomerForm() {
   const { toast } = useToast();
   const utils = api.useUtils();

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<customerForm>({
      resolver: zodResolver(newCustomerValidation),
   });

   const { mutate: addCustomer, isPending } = api.customers.createCustomer.useMutation({
      onSuccess: (res) => {
         if (res.status === 'success') {
            toast({
               description: 'Customer added succesfully',
               variant: 'default',
            });
            utils.customers.listCustomers.invalidate();
            reset();
         } else {
            toast({
               description: 'Error adding customer',
               variant: 'destructive',
            });
         }
      },

      onError: (err) => {
         console.error(err);
         toast({
            description: 'Network error,please try again',
            variant: 'destructive',
         });
      },
   });

   const onSubmit = (customer: customerForm) => {
      addCustomer({ ...customer, userId: 'cba51dba-4308-453c-973a-0bb24c5fd6b4' });
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
         <FormInput
            id="customerName"
            label="Customer Name"
            error={errors.customerName?.message}
            register={register('customerName')}
         />

         <FormInput
            id="phoneNumber"
            label="Phone Number"
            error={errors.customerContact?.message}
            register={register('customerContact')}
         />

         <FormInput
            id="kraPin"
            label="KRA Pin (optional)"
            error={errors.kraPin?.message}
            register={register('kraPin')}
         />

         <div className="text-end">
            <Button type="submit">{isPending ? 'Creating ...' : 'Create Customer'}</Button>
         </div>
      </form>
   );
}
