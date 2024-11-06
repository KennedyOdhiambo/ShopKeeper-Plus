import CategoriesTable from './_components/CategoriesTable';
import CreateCategory from './_components/CreateCategory';

export default function page() {
   return (
      <div className="flex flex-col gap-4">
         <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
         <div className="flex flex-col gap-10">
            <div className="inline-flex items-end justify-end">
               <CreateCategory />
            </div>
            <CategoriesTable />
         </div>
      </div>
   );
}
