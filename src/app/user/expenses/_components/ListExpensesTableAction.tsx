'use client';

import LoadingSpinner from '@/components/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Delete } from 'lucide-react';
import React from 'react';
import EditExpense from './EditExpense';
import { api } from '@/trpc/client';
import { useToast } from '@/components/ui/use-toast';

export default function ListExpensesTableAction({ expenseId }: { expenseId: string }) {
   const utils = api.useUtils();
   const { toast } = useToast();

   const { mutate: deleteExpense, isPending } = api.expense.deleteExpense.useMutation({
      onSuccess: (res) => {
         if (res.status === 'success') {
            toast({
               description: res.message,
               variant: 'default',
            });
            utils.expense.listExpenses.invalidate();
            utils.expense.listPaginatedExpense.invalidate();
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

   const handleDelete = () => {
      deleteExpense({ expenseId });
   };

   return (
      <div className="flex flex-row gap-2">
         <EditExpense expenseId={expenseId} />

         <TooltipProvider>
            <Tooltip>
               <TooltipTrigger asChild>
                  <Button
                     onClick={handleDelete}
                     variant={'outline'}
                     size={'icon'}
                     className="border-2.5 rounded-full transition-colors duration-200 hover:bg-destructive hover:text-white"
                  >
                     {isPending ? <LoadingSpinner /> : <Delete className="size-5" />}
                  </Button>
               </TooltipTrigger>
               <TooltipContent className="rounded-md border bg-popover p-1">
                  <p>Delete</p>
               </TooltipContent>
            </Tooltip>
         </TooltipProvider>
      </div>
   );
}
