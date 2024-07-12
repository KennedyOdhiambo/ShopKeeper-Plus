'use client';

import CustomSelect from '@/components/CustomSelect';
import { api } from '@/trpc/client';

export default function CategoriesDropdown() {
   //FIXME:Update when session is implemented

   const { data: categories } = api.categories.listCategories.useQuery({
      userId: 'cba51dba-4308-453c-973a-0bb24c5fd6b4',
   });
   const categoriesDropdownOptions =
      categories?.map((category) => ({
         id: category.categoryId,
         value: category.categoryName,
      })) ?? [];

   return (
      <CustomSelect
         className="w-full"
         queryId="category"
         options={[{ id: 'all', value: 'All Categories' }, ...categoriesDropdownOptions]}
         placeholder="Category"
      />
   );
}
