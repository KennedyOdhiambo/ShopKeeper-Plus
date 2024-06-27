'use client';

import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { api } from '@/trpc/client';

type ItemsDropdownProps = {
   rowId?: string;
   label?: boolean;
   className?: string;
   onSelect: (rowId: string, itemId: string) => void;
};

export default function ItemsDropdown({ onSelect, rowId, label, className }: ItemsDropdownProps) {
   const handleSelect = (selected: string) => {
      onSelect(rowId ?? '', selected);
   };

   const { data: items } = api.items.listItems.useQuery({ userId: 'cba51dba-4308-453c-973a-0bb24c5fd6b4' });

   const dropdownOptions = items?.map((item) => ({
      itemId: item.itemId,
      itemName: item.itemName,
   }));
   return (
      <div className={`${className} w-[260px]`}>
         {label && <Label>Items</Label>}
         <Select onValueChange={handleSelect}>
            <SelectTrigger>
               <SelectValue placeholder="Select Item" />
            </SelectTrigger>
            <SelectContent>
               {dropdownOptions?.map((option) => (
                  <SelectItem key={option.itemId} value={option.itemId}>
                     {option.itemName}
                  </SelectItem>
               ))}
            </SelectContent>
         </Select>
      </div>
   );
}
