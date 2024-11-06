import { z } from 'zod';

export const NewItemValidation = z.object({
   itemName: z.string().min(2, { message: 'Item name is required' }),
   unitOfmeasure: z.string().min(2, { message: 'Unit Of Measure is required' }),
   categoryId: z.string().min(2, { message: 'Category is required' }),
   reorderLevel: z.string().optional(),
});

export const updateItemValidation = z.object({
   itemId: z.string().min(2, { message: 'Item id is required' }),
   itemName: z.string().min(2, { message: 'Item name is required' }),
   unitOfmeasure: z.string().min(2, { message: 'Unit Of Measure is required' }),
   reorderLevel: z.string().optional(),
});

export type NewItemForm = z.infer<typeof NewItemValidation>;
export type UpdateItemForm = z.infer<typeof updateItemValidation>;
