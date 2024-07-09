import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import React from 'react';

export default function SalesDetails() {
   return (
      <section className="mt-6 flex w-full flex-col gap-4">
         <Card className="flex flex-row justify-between border-0 bg-secondary shadow-none">
            <CardContent className="grid w-full grid-cols-2 justify-between md:grid-cols-4">
               <div className="grid grid-rows-2 gap-5 md:col-span-2 md:grid-cols-2 md:grid-rows-1">
                  <div className="flex flex-col gap-0.5">
                     <Label className="text-sm font-semibold">Customer Name</Label>
                     <small>Gloria Nakhumicha</small>
                  </div>
                  <div className="flex flex-col gap-0.5">
                     <Label className="text-sm font-semibold">Phone Number</Label>
                     <small>254727533551</small>
                  </div>
               </div>

               <div className="grid grid-rows-2 gap-5 md:col-span-2 md:grid-cols-2 md:grid-rows-1">
                  <div className="flex flex-col gap-0.5">
                     <Label className="text-sm font-semibold">Credit Id</Label>
                     <small>254727533551</small>
                  </div>
                  <Button variant={'outline'} className="max-w-[200px]">
                     + New Payment
                  </Button>
               </div>
            </CardContent>
         </Card>
      </section>
   );
}
