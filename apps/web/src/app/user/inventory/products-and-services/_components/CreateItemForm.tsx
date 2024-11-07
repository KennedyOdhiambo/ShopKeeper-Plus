'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { NewItemForm, NewItemValidation } from '@/validation/newItemValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import CategoriesDropdown from './CategoriesDropdown';
import { Label } from '@/components/ui/label';
import { useSearchParams } from 'next/navigation';
import { api } from '@/trpc/client';
import { useToast } from '@/components/ui/use-toast';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function CreateItemForm() {
   const searchParams = useSearchParams();
   const { toast } = useToast();
   const utils = api.useUtils();

   const {
      register,
      formState: { errors },
      setValue,
      reset,
      getValues,
   } = useForm<NewItemForm>({ resolver: zodResolver(NewItemValidation) });

   useEffect(() => {
      const getCategory = () => {
         const category = searchParams.get('category');
         setValue('categoryId', category ?? '');
      };

      getCategory();
   }, [searchParams, setValue]);

   const { mutate: createItem, isPending } = api.items.createItem.useMutation({
      onSuccess: (res) => {
         if (res.status === 'success') {
            toast({
               description: res.message,
               variant: 'default',
            });
            utils.items.listItems.invalidate();
            utils.items.listItemsByCategory.invalidate();
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
      createItem({ userId: 'cba51dba-4308-453c-973a-0bb24c5fd6b4', ...formData });
   };
   return (
      <form className="flex flex-col gap-y-5">
         <FormInput
            id="itemName"
            label="Item Name"
            error={errors.itemName?.message}
            register={register('itemName')}
         />

         <div className="mb-3">
            <Label>Category</Label>
            <CategoriesDropdown />
         </div>

         <FormInput
            id="unitOfmeasure"
            label="Unit Of Measure"
            error={errors.unitOfmeasure?.message}
            register={register('unitOfmeasure')}
         />

         <FormInput
            id="reorderLevel"
            label="Re-Order Level"
            error={errors.reorderLevel?.message}
            register={register('reorderLevel')}
         />

         <div className="text-end">
            <Button className="w-[120px]" type="button" onClick={handleSubmit}>
               {isPending ? <LoadingSpinner /> : `Create Item`}
            </Button>
         </div>
      </form>
   );
}
