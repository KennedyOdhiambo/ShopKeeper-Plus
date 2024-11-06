import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { RecentSales } from './RecentSales'

export default function RecentSalesContainer() {
   return (
      <Card className="col-span-4 md:col-span-3">
         <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
         </CardHeader>
         <CardContent>
            <RecentSales />
         </CardContent>
      </Card>
   )
}
