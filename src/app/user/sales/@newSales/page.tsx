import { api } from '@/trpc/server';
import NewSalesOptions from './_components/NewSalesOptions';
import NewSalesTable from './_components/NewSalesTable';

export default async function NewSales() {
   const customers = await api.customers.listCustomers({ userId: 'cba51dba-4308-453c-973a-0bb24c5fd6b4' });

   return (
      <div className="flex flex-col gap-4">
         <NewSalesOptions customers={customers} />
         <NewSalesTable />
      </div>
   );
}
