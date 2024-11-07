'use client';

import ItemsDropdown from '@/app/user/sales/@newSales/_components/ItemsDropdown';
import FormInput from '@/components/FormInput';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { api } from '@/trpc/client';
import { NewInventory, newInventoryValidation } from '@/validation/inventoryValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function CreateInventoryForm() {
   const { toast } = useToast();
   const utils = api.useUtils();
   const {
      formState: { errors },
      register,
      setValue,
      getValues,
      reset,
   } = useForm<NewInventory>({ resolver: zodResolver(newInventoryValidation) });

   const { mutate: addInventory, isPending } = api.inventory.addInventory.useMutation({
      onSuccess: (res) => {
         if (res?.status === 'success') {
            toast({
               description: res.message,
               variant: 'default',
            });
            utils.inventory.listInventory.invalidate();
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

   const handleItemselect = (rowId: string, itemId: string) => {
      console.log(rowId);
      setValue('itemId', itemId);
   };

   const handleSubmit = () => {
      const formData = getValues();
      formData.lastUpdated = new Date().toISOString();
      addInventory(formData);
   };
   return (
      <form className="flex flex-col gap-y-5">
         <div className="mb-3 w-full">
            <Label>Item</Label>
            <ItemsDropdown className="w-full" onSelect={handleItemselect} />
         </div>

         <FormInput
            id="quantityAdded"
            label="Quantity Added"
            error={errors.quantityAdded?.message}
            register={register('quantityAdded')}
         />

         <FormInput
            id="buyingPrice"
            type="number"
            label="Buying Price"
            error={errors.buyingPrice?.message}
            register={register('buyingPrice')}
         />

         <FormInput
            id="sellingprice"
            type="number"
            label="Selling Price"
            error={errors.sellingPrice?.message}
            register={register('sellingPrice')}
         />

         <div className="text-end">
            <Button className="w-[120px]" type="button" onClick={handleSubmit}>
               {isPending ? <LoadingSpinner /> : `Add Inventory`}
            </Button>
         </div>
      </form>
   );
}
