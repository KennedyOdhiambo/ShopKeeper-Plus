import { Banknote, CreditCard, LayoutDashboard, Wallet, Warehouse } from "lucide-react"
import { Card, CardContent } from "../../../components/ui/card"
import { Link } from "react-transition-progress/next"
import logo from "../../../../public/logo.svg"
import Image from "next/image"

export default function Sidebar() {
   return (
      <Card className="hidden lg:block fixed inset-y-0 z-20 left-0 w-60 rounded-none">
         <CardContent className="flex border-b pt-3 pb-4 items-start justify-start px-6 mt-2">
            <Image src={logo} alt="logo" className=" h-3 w-fit" priority />
         </CardContent>

         <CardContent className="space-y-1 py-4 px-2">
            <Link
               href={"/user/dahboard"}
               className="inline-flex bg-muted border-primary items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground w-full justify-start h-10 px-4 py-2"
            >
               <LayoutDashboard strokeWidth={"1.5px"} className=" text-accent-foreground size-5" />
               Dashboard
            </Link>

            <Link
               href={"/user/dahboard"}
               className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground w-full justify-start h-10 px-4 py-2"
            >
               <Banknote strokeWidth={"1.5px"} className=" text-accent-foreground size-5" />
               Sales
            </Link>

            <Link
               href={"/user/dahboard"}
               className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground w-full justify-start h-10 px-4 py-2"
            >
               <Warehouse strokeWidth={"1.5px"} className=" text-accent-foreground size-5" />
               Inventory
            </Link>

            <Link
               href={"/user/dahboard"}
               className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground w-full justify-start h-10 px-4 py-2"
            >
               <Wallet strokeWidth={"1.5px"} className=" text-accent-foreground size-5" />
               Expense
            </Link>

            <Link
               href={"/user/dahboard"}
               className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground w-full justify-start h-10 px-4 py-2"
            >
               <CreditCard strokeWidth={"1.5px"} className=" text-accent-foreground size-5" />
               Credit and Debt
            </Link>
         </CardContent>
      </Card>
   )
}
