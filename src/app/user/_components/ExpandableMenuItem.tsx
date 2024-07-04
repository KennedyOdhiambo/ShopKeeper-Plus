import { MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '@/components/ui/menubar';
import { ChevronRightIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { Link } from 'react-transition-progress/next';

type ExpandableMenuProps = {
   title: string;
   icon: ReactNode;
   menuOptions: Array<{
      href: string;
      title: string;
   }>;
};

export default function ExpandableMenuItem({ title, icon, menuOptions }: ExpandableMenuProps) {
   return (
      <>
         <MenubarMenu>
            <MenubarTrigger className="inline-flex h-10 w-full cursor-pointer items-center justify-start gap-3 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
               {icon}
               {title}
               <div className="ml-auto pl-5">
                  <ChevronRightIcon className="size-5" />
               </div>
            </MenubarTrigger>

            <MenubarContent side="right" className="z-50 ms-0.5 rounded-tl-none">
               {menuOptions.map((option, index) => (
                  <Link key={index} href={option.href}>
                     <MenubarItem className="cursor-pointer">{option.title}</MenubarItem>
                  </Link>
               ))}
            </MenubarContent>
         </MenubarMenu>
         <MenubarSeparator />
      </>
   );
}
