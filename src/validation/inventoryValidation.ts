import { z } from 'zod';

export const newInventoryValidation = z.object({
   itemId: z.string().min(2, { message: 'ItemId is required' }),
   quantityAdded: z.string().min(1, { message: 'Atleast 1 is required' }),
   buyingPrice: z.string().min(1, { message: 'Value should be more than 1' }),
   sellingPrice: z.string().min(1, { message: 'Value should be more than 1' }),
   lastUpdated: z.string(),
});

export type NewInventory = z.infer<typeof newInventoryValidation>;
