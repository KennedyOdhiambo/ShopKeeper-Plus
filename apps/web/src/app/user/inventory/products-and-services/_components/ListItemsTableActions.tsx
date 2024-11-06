import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import EditItem from './EditItem';
import { Button } from '@/components/ui/button';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Delete } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { api } from '@/trpc/client';

export default function ListItemsTableActions({ itemId }: { itemId: string }) {
   const { toast } = useToast();
   const utils = api.useUtils();

   const { mutate, isPending } = api.items.deleteItem.useMutation({
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

   const handleDelete = () => {
      mutate({ itemId: itemId });
   };

   return (
      <div className="flex flex-row gap-2">
         <EditItem itemId={itemId} />

         <TooltipProvider>
            <Tooltip>
               <TooltipTrigger asChild>
                  <Button
                     onClick={handleDelete}
                     variant={'outline'}
                     size={'icon'}
                     className="border-2.5 rounded-full transition-colors duration-200 hover:bg-destructive hover:text-white"
                  >
                     {isPending ? <LoadingSpinner /> : <Delete className="size-5" />}
                  </Button>
               </TooltipTrigger>
               <TooltipContent className="rounded-md border bg-popover p-1">
                  <p>Delete</p>
               </TooltipContent>
            </Tooltip>
         </TooltipProvider>
      </div>
   );
}
