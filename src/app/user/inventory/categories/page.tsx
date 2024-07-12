import ProductsAndServicesTable from '../products-and-services/_components/ProductsAndServicesTable';
import CreateCategory from './_components/CreateCategory';

export default function page() {
   return (
      <div className="flex flex-col gap-4">
         <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
         <div className="flex flex-col gap-10">
            <div className="inline-flex items-end justify-between">
               <CreateCategory />
            </div>
            <ProductsAndServicesTable />
         </div>
      </div>
   );
}
