import { z } from 'zod';

export const newCustomerValidation = z.object({
   customerName: z.string().min(2, { message: 'Valid customer name is required' }),
   customerContact: z.string().min(10, { message: 'Phone number should be atleast 10 characters' }),
   kraPin: z.string().optional(),
});

export type customerForm = z.infer<typeof newCustomerValidation>;
