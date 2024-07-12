import { CardContent } from '@/components/ui/card';
import { Link } from 'react-transition-progress/next';
import logo from '../../../../public/logo.svg';
import Image from 'next/image';
import { Menubar, MenubarMenu, MenubarSeparator } from '@/components/ui/menubar';
import ExpandableMenuItem from './ExpandableMenuItem';
import { Banknote, CreditCard, LayoutDashboard, Users, Wallet, Warehouse } from 'lucide-react';

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

            <ExpandableMenuItem
               title=" Inventory"
               icon={<Warehouse strokeWidth={'1.5px'} className="size-5 text-accent-foreground" />}
               menuOptions={[
                  { href: '/user/inventory/products-and-services', title: 'Products and Services' },
                  { href: '/user/inventory/categories', title: 'Categories' },
                  { href: '/user/inventory/inventory-management', title: 'Inventory Management' },
               ]}
            />
            <ExpandableMenuItem
               title=" Expenses"
               icon={<Wallet strokeWidth={'1.5px'} className="size-5 text-accent-foreground" />}
               menuOptions={[
                  { href: '/user/expenses/general', title: 'General Expenses' },
                  { href: '/user/expenses/suppliers', title: 'Suppliers' },
               ]}
            />
            <ExpandableMenuItem
               title="Credit & Debt"
               icon={<CreditCard strokeWidth={'1.5px'} className="size-5 text-accent-foreground" />}
               menuOptions={[
                  { href: '/user/credit&debt/debt', title: 'Debt Management' },
                  { href: '/user/credit&debt/credit', title: 'Credit Management' },
               ]}
            />
         </Menubar>
      </div>
   );
}
