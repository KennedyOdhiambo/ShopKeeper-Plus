import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ReactNode } from 'react'

type SalesProps = {
   allSales: ReactNode
   newSales: ReactNode
}

export default function SalesLayout({ allSales, newSales }: SalesProps) {
   return (
      <section className="mt-10 p-2 flex flex-col gap-4 w-full">
         <div className="p-1">
            <h2 className="text-3xl font-bold tracking-tight">Sales</h2>
         </div>
         <Tabs defaultValue="allSales" className="flex flex-col gap-4 w-full">
            <TabsList className="grid grid-cols-2 w-72 ">
               <TabsTrigger value="allSales">All Sales</TabsTrigger>
               <TabsTrigger value="newSales">New Sales</TabsTrigger>
            </TabsList>

            <div className="p-1">
               <TabsContent value="allSales">{allSales}</TabsContent>
               <TabsContent value="newSales">{newSales}</TabsContent>
            </div>
         </Tabs>
      </section>
   )
}
