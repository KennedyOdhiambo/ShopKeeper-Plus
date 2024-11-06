import { z } from 'zod';

export const expenseValidation = z.object({
   userId: z.string().min(2, { message: 'UserId is required' }),
   expenseAmount: z.string(),
   expenseRecipient: z.string().min(2, { message: 'Recipient is required' }),
   expenseReference: z.string().min(2, { message: 'Reference is required' }),
   expenseDescription: z.string().nullable(),
   paymenDate: z.string().min(2, { message: 'Date is required' }),
});

export const updateExpenseValidation = expenseValidation
   .omit({ userId: true, paymenDate: true })
   .extend({
      expenseId: z.string(),
   });

export type NewExpense = z.infer<typeof expenseValidation>;
export type EditExpense = z.infer<typeof updateExpenseValidation>;
