'use client';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { api } from '@/trpc/client';
import { TooltipContent } from '@radix-ui/react-tooltip';
import { Delete } from 'lucide-react';
import spinner from '../../../../../../public/spinner.svg';
import Image from 'next/image';
import { useToast } from '@/components/ui/use-toast';

type DeleteActionProps = {
   rowId: string;
};

export default function DeleteSale({ rowId }: DeleteActionProps) {
   const { toast } = useToast();
   const utils = api.useUtils();

   const { mutate, isPending } = api.sales.deleteSale.useMutation({
      onSuccess: (res) => {
         if (res.status === 'success') {
            toast({
               description: res.message,
               variant: 'default',
            });
            utils.sales.listPaginatedSales.invalidate();
            utils.sales.listSales.invalidate();
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

   const handleDelete = () => {
      mutate({ salesId: rowId });
   };

   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button
                  onClick={handleDelete}
                  variant={'outline'}
                  size={'icon'}
                  className="border-2.5 rounded-lg transition-colors duration-200 hover:bg-destructive hover:text-white"
               >
                  {isPending ? <Image src={spinner} alt="..." /> : <Delete />}
               </Button>
            </TooltipTrigger>
            <TooltipContent className="rounded-md border bg-popover p-1">
               <p>Delete</p>
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
}
