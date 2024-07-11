import CustomSelect from '@/components/CustomSelect';
import { api } from '@/trpc/server';
import React from 'react';
import ProductsAndServicesTable from './_components/ProductsAndServicesTable';

export default async function ProductAndServices() {
   //FIXME:Update when session is implemented

   const categories = await api.categories.listCategories({
      userId: 'cba51dba-4308-453c-973a-0bb24c5fd6b4',
   });
   const categoriesDropdownOptions = categories.map((category) => ({
      id: category.categoryId,
      value: category.categoryName,
   }));
   return (
      <div className="flex flex-col gap-10">
         <div className="hidden gap-5 lg:flex lg:flex-row lg:items-end">
            <CustomSelect
               queryId="category"
               options={[{ id: 'all', value: 'All Categories' }, ...categoriesDropdownOptions]}
               placeholder="Category"
            />
         </div>

         <ProductsAndServicesTable />
      </div>
   );
}
