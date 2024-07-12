import FormInput from '@/components/FormInput';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { NewCategoryForm, newCategoryValidation } from '@/validation/categoriesValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function CreateCategoryForm() {
   const {
      formState: { errors },
      register,
   } = useForm<NewCategoryForm>({ resolver: zodResolver(newCategoryValidation) });
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
            <Button className="w-[120px]" type="button" onClick={handleSubmit}>
               {isPending ? <LoadingSpinner /> : `Create Item`}
            </Button>
         </div>
      </form>
   );
}
