'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import useMonthlySales from '../_hooks/useMonthlySales'

export function SalesOverviewChart() {
   const { monthlySales } = useMonthlySales()

   return (
      <ResponsiveContainer width="100%" height={300}>
         <BarChart data={monthlySales}>
            <XAxis
               dataKey="month"
               stroke="#888888"
               fontSize={12}
               tickLine={false}
               axisLine={false}
            />
            <YAxis
               stroke="#888888"
               fontSize={12}
               tickLine={false}
               axisLine={false}
               tickFormatter={(value) => `Ksh ${value}`}
            />
            <Bar
               dataKey="total"
               fill="currentColor"
               radius={[4, 4, 0, 0]}
               className="fill-primary"
            />
         </BarChart>
      </ResponsiveContainer>
   )
}
