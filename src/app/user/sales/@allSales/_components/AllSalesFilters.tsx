'use client';

import CustomSelect from '@/components/CustomSelect';
import DateRangePicker from '@/components/DateRangePicker';
import ItemsDropdown from '../../@newSales/_components/ItemsDropdown';

export default function AllSalesFilters() {
   return (
      <div className="hidden lg:flex lg:flex-row lg:items-end gap-5 ">
         <ItemsDropdown />
         <CustomSelect onSelect={(value) => console.log(value)} options={[]} placeholder="Select Customer" />
         <DateRangePicker />
      </div>
   );
}
