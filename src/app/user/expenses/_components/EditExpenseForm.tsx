'use client';

import FormInput from '@/components/FormInput';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { api } from '@/trpc/client';
import { EditExpense, updateExpenseValidation } from '@/validation/expenseValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function EditExpenseForm({ expenseId }: { expenseId: string }) {
   const { toast } = useToast();
   const utils = api.useUtils();

   const { data: expenseDetails } = api.expense.getExpenseDetails.useQuery({ expenseId });

   const {
      register,
      formState: { errors },
      reset,
      getValues,
   } = useForm<EditExpense>({ resolver: zodResolver(updateExpenseValidation) });

   const { mutate: createExpense, isPending } = api.expense.updateExpense.useMutation({
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
      formData.expenseId = expenseId;
      createExpense(formData);
   };

   return (
      <form className="flex flex-col gap-y-5">
         <FormInput
            id="expenseRecipient"
            label="Expense Recipient"
            error={errors.expenseRecipient?.message}
            register={register('expenseRecipient')}
            defaultValue={expenseDetails?.expense?.expenseRecipient ?? ''}
         />

         <FormInput
            type="number"
            id="expenseAmount"
            label="Expense Amount"
            error={errors.expenseAmount?.message}
            register={register('expenseAmount')}
            defaultValue={expenseDetails?.expense?.expenseAmount ?? ''}
         />

         <FormInput
            id="expenseReference"
            label="Expense Reference"
            error={errors.expenseReference?.message}
            register={register('expenseReference')}
            defaultValue={expenseDetails?.expense?.expenseReference ?? ''}
         />

         <FormInput
            id="expenseDescription"
            label="Expense Description"
            error={errors.expenseDescription?.message}
            register={register('expenseDescription')}
            defaultValue={expenseDetails?.expense?.expenseDescription ?? ''}
         />

         <div className="text-end">
            <Button className="w-[140px]" type="button" onClick={handleSubmit}>
               {isPending ? <LoadingSpinner /> : `Update Expense`}
            </Button>
         </div>
      </form>
   );
}
