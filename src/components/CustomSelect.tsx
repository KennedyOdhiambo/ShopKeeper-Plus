'use client'

import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Label } from './ui/label'

type Option = { id: string; value: string }
type SelectProps = {
   onSelect: (selected: string) => void
   label?: string
   selectedValue?: string
   placeholder: string
   options: Array<Option>
}

export default function CustomSelect({ onSelect, selectedValue, placeholder, options, label }: SelectProps) {
   return (
      <div className="flex flex-col space-y-2">
         <Label>{label}</Label>
         <Select onValueChange={(value) => onSelect(value)}>
            <SelectTrigger className="w-[280px]">
               <SelectValue placeholder={selectedValue ? selectedValue : placeholder} />
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
   )
}
