import React from 'react'
import DashboardPageHeader from './components/DashboardPageHeader'
import DashboardStats from './components/DashboardStats'
import SalesOverview from './components/SalesOverview'
import RecentSalesContainer from './components/RecentSalesContainer'

export default async function Dashboard() {
   return (
      <main className="min-w-full pb-10">
         <DashboardPageHeader />
         <div className="flex flex-col gap-4">
            <DashboardStats />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
               <SalesOverview />
               <RecentSalesContainer />
            </div>
         </div>
      </main>
   )
}
