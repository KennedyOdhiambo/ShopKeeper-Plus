import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React, { ReactNode } from 'react';

type CreditDebtProps = {
   credit: ReactNode;
   debt: ReactNode;
};
export default function layout({ credit, debt }: CreditDebtProps) {
   return (
      <section className="mt-6 flex w-full flex-col gap-4">
         <div className="">
            <h2 className="text-3xl font-bold tracking-tight">Credit & Debt Management</h2>
         </div>
         <Tabs defaultValue="credit" className="flex w-full flex-col gap-4">
            <TabsList className="grid w-fit grid-cols-2">
               <TabsTrigger value="credit">Credit Management</TabsTrigger>
               <TabsTrigger value="debt">Debt Management</TabsTrigger>
            </TabsList>

            <div className="p-1">
               <TabsContent value="credit">{credit}</TabsContent>
               <TabsContent value="debt">{debt}</TabsContent>
            </div>
         </Tabs>
      </section>
   );
}
