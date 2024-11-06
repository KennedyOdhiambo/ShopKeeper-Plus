'use client';

import FormInput from '@/components/FormInput';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { api } from '@/trpc/client';
import { UpdateItemForm, updateItemValidation } from '@/validation/newItemValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function EditItemForm({ itemId }: { itemId: string }) {
   const { toast } = useToast();
   const utils = api.useUtils();

   const {
      register,
      formState: { errors },
      getValues,
   } = useForm<UpdateItemForm>({ resolver: zodResolver(updateItemValidation) });

   const { data } = api.items.getItemDetails.useQuery({ itemId });

   const { mutate: updateItem, isPending } = api.items.updateItem.useMutation({
      onSuccess: (res) => {
         if (res.status === 'success') {
            toast({
               description: res.message,
               variant: 'default',
            });
            utils.items.listItems.invalidate();
            utils.items.listItemsByCategory.invalidate();
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
      formData.itemId = itemId;
      updateItem(formData);
   };

   return (
      <form className="flex flex-col gap-y-5">
         <FormInput
            id="itemName"
            label="Item Name"
            error={errors.itemName?.message}
            register={register('itemName')}
            defaultValue={data?.item?.itemName ?? ''}
         />

         <FormInput
            id="unitOfmeasure"
            label="Unit Of Measure"
            error={errors.unitOfmeasure?.message}
            register={register('unitOfmeasure')}
            defaultValue={data?.item?.unitOfMeasure ?? ''}
         />

         <FormInput
            id="reorderLevel"
            label="Re-Order Level"
            error={errors.reorderLevel?.message}
            register={register('reorderLevel')}
            defaultValue={String(data?.item?.reorderLevel ?? '')}
         />

         <div className="text-end">
            <Button className="w-[120px]" type="button" onClick={handleSubmit}>
               {isPending ? <LoadingSpinner /> : `Update Item`}
            </Button>
         </div>
      </form>
   );
}
