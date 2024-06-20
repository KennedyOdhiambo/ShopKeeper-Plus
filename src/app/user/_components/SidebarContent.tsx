import { CardContent } from '@/components/ui/card'
import { Link } from 'react-transition-progress/next'
import logo from '../../../../public/logo.svg'
import Image from 'next/image'
import { Menubar, MenubarMenu, MenubarSeparator } from '@/components/ui/menubar'
import ExpandableMenuItem from './ExpandableMenuItem'
import { Banknote, CreditCard, LayoutDashboard, Wallet, Warehouse } from 'lucide-react'

export default function SidebarContent() {
   return (
      <>
         <CardContent className="flex border-b pt-3 pb-4 items-start justify-start px-6 mt-2">
            <Image src={logo} alt="logo" className=" h-3 w-fit" priority />
         </CardContent>

         <Menubar className=" border-none flex flex-col py-4 px-2">
            <MenubarMenu>
               <Link
                  href={'/user/dashboard'}
                  className="inline-flex items-center gap-3 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground w-full justify-start h-10 px-4 py-2"
               >
                  <LayoutDashboard strokeWidth={'1.5px'} className="size-5 " />
                  Dashboard
               </Link>
            </MenubarMenu>
            <MenubarSeparator />
            <ExpandableMenuItem
               title="Sales"
               icon={<Banknote strokeWidth={'1.5px'} className=" text-accent-foreground size-5" />}
               menuOptions={[
                  { href: '/user/sales', title: 'All sales' },
                  { href: '/user/sales/customers', title: 'Customers' },
               ]}
            />
            <ExpandableMenuItem
               title=" Inventory"
               icon={<Warehouse strokeWidth={'1.5px'} className="text-accent-foreground size-5" />}
               menuOptions={[
                  { href: '/user/inventory/products-and-services', title: 'Products and Services' },
                  { href: '/user/inventory/categories', title: 'Categories' },
                  { href: '/user/inventory/inventory-management', title: 'Inventory Management' },
               ]}
            />
            <ExpandableMenuItem
               title=" Expenses"
               icon={<Wallet strokeWidth={'1.5px'} className="text-accent-foreground size-5" />}
               menuOptions={[
                  { href: '/user/expenses/general', title: 'General Expenses' },
                  { href: '/user/expenses/suppliers', title: 'Suppliers' },
               ]}
            />
            <ExpandableMenuItem
               title="Credit & Debt"
               icon={<CreditCard strokeWidth={'1.5px'} className="text-accent-foreground size-5" />}
               menuOptions={[
                  { href: '/user/credit&debt/debt', title: 'Debt Management' },
                  { href: '/user/credit&debt/credit', title: 'Credit Management' },
               ]}
            />
         </Menubar>
      </>
   )
}
