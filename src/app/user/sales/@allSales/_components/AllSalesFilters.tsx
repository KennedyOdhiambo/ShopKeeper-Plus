'use client';

import CustomSelect from '@/components/CustomSelect';
import DateRangePicker from '@/components/DateRangePicker';
import ItemsDropdown from '../../@newSales/_components/ItemsDropdown';

export default function AllSalesFilters() {
   return (
      <div className="hidden gap-5 lg:flex lg:flex-row lg:items-end">
         <ItemsDropdown onSelect={(value) => console.log(value)} />
         <CustomSelect queryId="customer" options={[]} placeholder="Select Customer" />
         <DateRangePicker />
      </div>
   );
}
