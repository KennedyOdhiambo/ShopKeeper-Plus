import NewSalesOptions from './_components/NewSalesOptions';
import NewSalesTable from './_components/NewSalesTable';

export default function NewSales() {
   return (
      <div className="flex flex-col gap-4">
         <NewSalesOptions />
         <NewSalesTable />
      </div>
   );
}
