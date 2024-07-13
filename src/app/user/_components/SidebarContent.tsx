import { CardContent } from '@/components/ui/card';
import { Link } from 'react-transition-progress/next';
import logo from '../../../../public/logo.svg';
import Image from 'next/image';
import { Menubar, MenubarMenu, MenubarSeparator } from '@/components/ui/menubar';
import {
   Banknote,
   Boxes,
   CreditCard,
   LayoutDashboard,
   ShoppingBasket,
   Users,
   Wallet,
   Warehouse,
} from 'lucide-react';

export default function SidebarContent() {
   return (
      <div className="">
         <CardContent className="mt-2 flex items-start justify-start border-b px-6 pb-4 pt-3">
            <Image src={logo} alt="logo" className="h-3 w-fit" priority />
         </CardContent>

         <Menubar className="flex flex-col border-none px-2 py-4">
            <MenubarMenu>
               <Link
                  href={'/user/dashboard'}
                  className="inline-flex h-10 w-full items-center justify-start gap-3 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
               >
                  <LayoutDashboard strokeWidth={'1.5px'} className="size-5" />
                  Dashboard
               </Link>
            </MenubarMenu>
            <MenubarSeparator />

            <MenubarMenu>
               <Link
                  href={'/user/sales'}
                  className="inline-flex h-10 w-full items-center justify-start gap-3 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
               >
                  <Banknote strokeWidth={'1.5px'} className="size-5" />
                  Sales
               </Link>
            </MenubarMenu>
            <MenubarSeparator />

            <MenubarMenu>
               <Link
                  href={'/user/customers'}
                  className="inline-flex h-10 w-full items-center justify-start gap-3 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
               >
                  <Users strokeWidth={'1.5px'} className="size-5" />
                  Customers
               </Link>
            </MenubarMenu>
            <MenubarSeparator />

            <MenubarMenu>
               <Link
                  href={'/user/inventory/inventory-management'}
                  className="inline-flex h-10 w-full items-center justify-start gap-3 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
               >
                  <Warehouse strokeWidth={'1.5px'} className="size-5" />
                  Inventory Management
               </Link>
            </MenubarMenu>
            <MenubarSeparator />

            <MenubarMenu>
               <Link
                  href={'/user/inventory/products-and-services'}
                  className="inline-flex h-10 w-full items-center justify-start gap-3 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
               >
                  <ShoppingBasket strokeWidth={'1.5px'} className="size-5" />
                  Products and Services
               </Link>
            </MenubarMenu>
            <MenubarSeparator />

            <MenubarMenu>
               <Link
                  href={'/user/inventory/categories'}
                  className="inline-flex h-10 w-full items-center justify-start gap-3 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
               >
                  <Boxes strokeWidth={'1.5px'} className="size-5" />
                  Categories
               </Link>
            </MenubarMenu>
            <MenubarSeparator />

            <MenubarMenu>
               <Link
                  href={'/user/expenses'}
                  className="inline-flex h-10 w-full items-center justify-start gap-3 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
               >
                  <Wallet strokeWidth={'1.5px'} className="size-5" />
                  Expenses
               </Link>
            </MenubarMenu>
            <MenubarSeparator />

            <MenubarMenu>
               <Link
                  href={'/user/credit-and-debt'}
                  className="inline-flex h-10 w-full items-center justify-start gap-3 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
               >
                  <CreditCard strokeWidth={'1.5px'} className="size-5" />
                  Credit & Debt
               </Link>
            </MenubarMenu>
            <MenubarSeparator />
         </Menubar>
      </div>
   );
}
