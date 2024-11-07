'use client';

import FormInput from '@/components/FormInput';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { api } from '@/trpc/client';
import { NewCategoryForm, newCategoryValidation } from '@/validation/categoriesValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function EditCategoryForm({ categoryId }: { categoryId: string }) {
   const {
      formState: { errors },
      register,
      getValues,
   } = useForm<NewCategoryForm>({ resolver: zodResolver(newCategoryValidation) });

   const { data } = api.categories.getCategoryDetails.useQuery({ categoryId });

   const { mutate: updateCategory, isPending } = api.categories.updateCategory.useMutation();

   const handleSubmit = () => {
      const formData = getValues();
      const payload = { categoryId, ...formData };
      updateCategory(payload);
   };
   return (
      <form className="flex flex-col gap-y-5">
         <FormInput
            id="categoryname"
            label="Category Name"
            error={errors.categoryName?.message}
            register={register('categoryName')}
            defaultValue={data?.category?.categoryName}
         />

         <FormInput
            id="description"
            label="Category Description"
            error={errors.description?.message}
            register={register('description')}
            defaultValue={data?.category?.description ?? ''}
         />

         <div className="text-end">
            <Button className="w-[140px]" type="button" onClick={handleSubmit}>
               {isPending ? <LoadingSpinner /> : `Update Category`}
            </Button>
         </div>
      </form>
   );
}
