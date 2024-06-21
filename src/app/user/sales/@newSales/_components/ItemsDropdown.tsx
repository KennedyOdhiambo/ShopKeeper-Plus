'use client';

import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type ItemsDropdownProps = {
   label?: boolean;
   className?: string;
};

export default function ItemsDropdown({ label, className }: ItemsDropdownProps) {
   const handleSelect = (selected: string) => console.log(selected);
   const dropdownOptions: Array<{ id: string; value: string }> = [];
   return (
      <div className={`${className}`}>
         {label && <Label>Items</Label>}
         <Select onValueChange={handleSelect}>
            <SelectTrigger>
               <SelectValue placeholder="Select Item" />
            </SelectTrigger>
            <SelectContent>
               {dropdownOptions.map((option) => (
                  <SelectItem key={option.id} value={option.id}>
                     {option.value}
                  </SelectItem>
               ))}
            </SelectContent>
         </Select>
      </div>
   );
}
