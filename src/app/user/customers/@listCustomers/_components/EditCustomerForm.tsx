'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { api } from '@/trpc/client';
import { customerForm, newCustomerValidation } from '@/validation/customerValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function EditCustomerForm({ customerId }: { customerId: string }) {
   const { toast } = useToast();
   const utils = api.useUtils();
   const { data } = api.customers.getCustomer.useQuery({ customerId });

   const customerDetails = data?.cusromer;
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<customerForm>({
      resolver: zodResolver(newCustomerValidation),
   });

   const { mutate, isPending } = api.customers.editCustomer.useMutation({
      onSuccess: (res) => {
         if (res.status === 'success') {
            toast({
               description: res.message,
               variant: 'default',
            });
            utils.customers.listCustomers.invalidate();
            reset();
         } else {
            toast({
               description: res.message,
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

   const onSubmit = (formData: customerForm) => {
      mutate({ ...formData, customerId });
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
         <FormInput
            id="customerName"
            label="Customer Name"
            error={errors.customerName?.message}
            register={register('customerName')}
            defaultValue={customerDetails?.customerName}
         />

         <FormInput
            id="phoneNumber"
            label="Phone Number"
            error={errors.customerContact?.message}
            register={register('customerContact')}
            defaultValue={customerDetails?.customerContact ?? ''}
         />

         <FormInput
            id="kraPin"
            label="KRA Pin (optional)"
            error={errors.kraPin?.message}
            register={register('kraPin')}
            defaultValue={customerDetails?.kraPin ?? ''}
         />

         <div className="text-end">
            <Button type="submit">{isPending ? 'Updating ...' : 'Update Customer'}</Button>
         </div>
      </form>
   );
}
