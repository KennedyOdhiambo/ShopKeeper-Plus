"use client"

import { Label } from "@/components/ui/label"
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"

type DropdownProps = {
   onSelect: (id: string) => void
   error?: string
}

export default function BusinessTypeDropdown({ onSelect, error }: DropdownProps) {
   return (
      <div className="flex flex-col space-y-1.5">
         <Label htmlFor="businessType">Business Type</Label>
         <Select onValueChange={(value) => onSelect(value)}>
            <SelectTrigger id="businessType">
               <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
               <SelectItem value="next">Grocery Store</SelectItem>
               <SelectItem value="sveltekit">Wines and Spirits</SelectItem>
            </SelectContent>
         </Select>
      </div>
   )
}
