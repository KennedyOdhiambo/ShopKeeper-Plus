import { z } from 'zod';

export const newCategoryValidation = z.object({
   categoryName: z.string().min(2, { message: 'Category name is required' }),
   description: z.string().nullable(),
});

export type NewCategoryForm = z.infer<typeof newCategoryValidation>;
