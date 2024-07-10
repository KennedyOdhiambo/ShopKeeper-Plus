import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React, { ReactNode } from 'react';

type CustomerProps = {
   listCustomers: ReactNode;
   newCustomers: ReactNode;
};
export default function Customerslayout({ listCustomers, newCustomers }: CustomerProps) {
   return (
      <div>
         <section className="mt-6 flex w-full flex-col gap-4">
            <div className="">
               <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
            </div>
            <Tabs defaultValue="listCustomers" className="flex w-full flex-col gap-4">
               <TabsList className="grid w-72 grid-cols-2">
                  <TabsTrigger value="listCustomers">All Customers</TabsTrigger>
                  <TabsTrigger value="newCustomers">New Customer</TabsTrigger>
               </TabsList>

               <div className="p-1">
                  <TabsContent value="listCustomers">{listCustomers}</TabsContent>
                  <TabsContent value="newCustomers">{newCustomers}</TabsContent>
               </div>
            </Tabs>
         </section>
      </div>
   );
}
