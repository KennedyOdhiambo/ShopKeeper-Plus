import React from 'react';
import ProductsAndServicesTable from './_components/ProductsAndServicesTable';
import CreateItem from './_components/CreateItem';
import CategoriesDropdown from './_components/CategoriesDropdown';

export default async function ProductAndServices() {
   return (
      <div className="flex flex-col gap-4">
         <h2 className="text-3xl font-bold tracking-tight">Products & Services</h2>
         <div className="flex flex-col gap-10">
            <div className="inline-flex items-end justify-between">
               <div className="w-[300px]">
                  <CategoriesDropdown />
               </div>
               <CreateItem />
            </div>
            <ProductsAndServicesTable />
         </div>
      </div>
   );
}
