import FormInput from '@/components/FormInput';
import { customerForm, newCustomerValidation } from '@/validation/customerValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function EditCustomerForm({ customerId }: { customerId: string }) {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<customerForm>({
      resolver: zodResolver(newCustomerValidation),
   });
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
