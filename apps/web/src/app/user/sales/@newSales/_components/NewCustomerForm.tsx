'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { customerForm, newCustomerValidation } from '@/validation/customerValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import useCreateCustomer from '../hooks/useCreateCustomer';

export default function NewCustomerForm() {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<customerForm>({
      resolver: zodResolver(newCustomerValidation),
   });

   const { addCustomer, isPending } = useCreateCustomer(reset);

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
