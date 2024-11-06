'use client';

import FormInput from '@/components/FormInput';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { api } from '@/trpc/client';
import { NewCategoryForm, newCategoryValidation } from '@/validation/categoriesValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function CreateCategoryForm() {
   const { toast } = useToast();
   const utils = api.useUtils();

   const {
      formState: { errors },
      register,
      reset,
      getValues,
   } = useForm<NewCategoryForm>({ resolver: zodResolver(newCategoryValidation) });

   const { mutate: createCategory, isPending } = api.categories.createCategory.useMutation({
      onSuccess: (res) => {
         if (res.status === 'success') {
            toast({
               description: res.message,
               variant: 'default',
            });
            utils.categories.listCategories.invalidate();
            utils.categories.listPaginatedCategories.invalidate();
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
      createCategory({ userId: 'cba51dba-4308-453c-973a-0bb24c5fd6b4', ...formData });
   };
   return (
      <form className="flex flex-col gap-y-5">
         <FormInput
            id="categoryname"
            label="Category Name"
            error={errors.categoryName?.message}
            register={register('categoryName')}
         />

         <FormInput
            id="description"
            label="Category Description"
            error={errors.description?.message}
            register={register('description')}
         />

         <div className="text-end">
            <Button className="w-[140px]" type="button" onClick={handleSubmit}>
               {isPending ? <LoadingSpinner /> : `Create Category`}
            </Button>
         </div>
      </form>
   );
}
