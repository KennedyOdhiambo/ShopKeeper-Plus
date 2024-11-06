import CustomSelect from '@/components/CustomSelect';
import { api } from '@/trpc/server';
import InventoryTable from './_components/InventoryTable';
import CreateInventory from './_components/CreateInventory';

export default async function InventoryManagement() {
   const items = await api.items.listItems({ userId: 'cba51dba-4308-453c-973a-0bb24c5fd6b4' });
   const dropdownOptions = items.map((item) => ({
      id: item.itemId,
      value: item.itemName,
   }));
   return (
      <div className="flex flex-col gap-4">
         <h2 className="text-3xl font-bold tracking-tight">Inventory Management</h2>
         <div className="flex flex-col gap-10">
            <div className="inline-flex items-end justify-between">
               <div className="w-[300px]">
                  <CustomSelect
                     options={dropdownOptions}
                     placeholder="Select Item"
                     queryId="item"
                  />
               </div>
               <CreateInventory />
            </div>
            <InventoryTable />
         </div>
      </div>
   );
}
