import AllSalesFilters from './_components/AllSalesFilters';
import AllSalesTable from './_components/AllSalesTable';

export default function AllSales() {
   return (
      <div className="flex flex-col gap-12">
         <AllSalesFilters />
         <AllSalesTable />
      </div>
   );
}
