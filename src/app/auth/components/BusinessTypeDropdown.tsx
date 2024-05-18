import { Label } from "@/components/ui/label"
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"

export default function BusinessTypeDropdown() {
   return (
      <div className="flex flex-col space-y-1.5">
         <Label htmlFor="businessType">Business Type</Label>
         <Select>
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
