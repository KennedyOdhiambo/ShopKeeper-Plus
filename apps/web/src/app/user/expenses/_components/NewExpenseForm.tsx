'use client';

import FormInput from '@/components/FormInput';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { api } from '@/trpc/client';
import { expenseValidation, NewExpense } from '@/validation/expenseValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function NewExpenseForm() {
   const { toast } = useToast();
   const utils = api.useUtils();

   const {
      register,
      formState: { errors },
      reset,
      getValues,
   } = useForm<NewExpense>({ resolver: zodResolver(expenseValidation) });

   const { mutate: createExpense, isPending } = api.expense.createExpense.useMutation({
      onSuccess: (res) => {
         if (res.status === 'success') {
            toast({
               description: res.message,
               variant: 'default',
            });
            utils.expense.listExpenses.invalidate();
            utils.expense.listPaginatedExpense.invalidate();
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

   const handleSubmit = () => {
      const formData = getValues();
      formData.paymenDate = new Date().toISOString();
      formData.userId = 'cba51dba-4308-453c-973a-0bb24c5fd6b4';
      createExpense(formData);
   };

   return (
      <form className="flex flex-col gap-y-5">
         <FormInput
            id="expenseRecipient"
            label="Expense Recipient"
            error={errors.expenseRecipient?.message}
            register={register('expenseRecipient')}
         />

         <FormInput
            type="number"
            id="expenseAmount"
            label="Expense Amount"
            error={errors.expenseAmount?.message}
            register={register('expenseAmount')}
         />

         <FormInput
            id="expenseReference"
            label="Expense Reference"
            error={errors.expenseReference?.message}
            register={register('expenseReference')}
         />

         <FormInput
            id="expenseDescription"
            label="Expense Description"
            error={errors.expenseDescription?.message}
            register={register('expenseDescription')}
         />

         <div className="text-end">
            <Button className="w-[140px]" type="button" onClick={handleSubmit}>
               {isPending ? <LoadingSpinner /> : `Add Expense`}
            </Button>
         </div>
      </form>
   );
}
