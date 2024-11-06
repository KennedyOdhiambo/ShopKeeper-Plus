import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import { SalesOverviewChart } from './SalesOverviewChart';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function SalesOverview() {
   return (
      <Card className="col-span-4">
         <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
               <CardTitle>Sales Overview</CardTitle>
               <CardDescription>Your sales in the past 12 months</CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
               <Link href="/sales/all-sales">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
               </Link>
            </Button>
         </CardHeader>

         <CardContent className="">
            <SalesOverviewChart />
         </CardContent>
      </Card>
   );
}
