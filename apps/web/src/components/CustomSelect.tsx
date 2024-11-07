'use client';

import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { useQueryState } from 'nuqs';

type Option = { id: string; value: string };
type SelectProps = {
   label?: string;
   placeholder: string;
   options: Array<Option>;
   className?: string;
   queryId: string;
};

export default function CustomSelect({ queryId, placeholder, options, label, className }: SelectProps) {
   const [selectedValue, setSelectedValue] = useQueryState(queryId);
   const selected = options.find((option) => option.id === selectedValue);

   return (
      <div className={`${className} flex w-[280px] flex-col space-y-2`}>
         <Label>{label}</Label>
         <Select onValueChange={(value) => setSelectedValue(value)}>
            <SelectTrigger>
               <SelectValue placeholder={selectedValue ? selected?.value : placeholder} />
            </SelectTrigger>
            <SelectContent>
               {options.map((option) => (
                  <SelectItem key={option.id} value={option.id}>
                     {option.value}
                  </SelectItem>
               ))}
            </SelectContent>
         </Select>
      </div>
   );
}
