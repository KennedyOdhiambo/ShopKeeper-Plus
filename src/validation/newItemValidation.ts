import { z } from 'zod';

export const NewItemValidation = z.object({
   itemName: z.string().min(2, { message: 'Item name is required' }),
   unitOfmeasure: z.string().min(2, { message: 'Unit Of Measure is required' }),
   categoryId: z.string().min(2, { message: 'Category is required' }),
   reorderLevel: z.string().optional(),
});

export type NewItemForm = z.infer<typeof NewItemValidation>;
