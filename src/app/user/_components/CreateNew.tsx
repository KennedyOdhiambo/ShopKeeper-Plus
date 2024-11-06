import { Button } from '@/components/ui/button';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CirclePlus, Plus } from 'lucide-react';
import Link from 'next/link';

const dropdownOptions = [
   { label: 'Sale', href: '/user/sales' },
   { label: 'Product', href: '/user/products/new' },
   { label: 'Inventory', href: '/user/inventory/new' },
   { label: 'Customer', href: '/user/customers/new' },
   { label: 'Expense', href: '/user/expenses/new' },
];

export default function CreateNew() {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant={'outline'} className="me-4 h-8">
               <CirclePlus className="me-2 size-4" />
               <span>Create New</span>
            </Button>
         </DropdownMenuTrigger>

         <DropdownMenuContent>
            {dropdownOptions.map((option, index) => (
               <DropdownMenuItem key={index}>
                  <Link href={option.href} className="inline-flex w-full items-center gap-3">
                     <Plus className="size-4" />
                     <span>{option.label}</span>
                  </Link>
               </DropdownMenuItem>
            ))}
         </DropdownMenuContent>
         <DropdownMenuSeparator />
         <DropdownMenuLabel></DropdownMenuLabel>
      </DropdownMenu>
   );
}
