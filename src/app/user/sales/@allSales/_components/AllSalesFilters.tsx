'use client';

import CustomSelect from '@/components/CustomSelect';
import DateRangePicker from '@/components/DateRangePicker';
import { paymentOptions } from '../../@newSales/_components/NewSalesOptions';
import useListCustomers from '@/app/user/customers/hooks/useListCustomers';

export default function AllSalesFilters() {
   const { customerDropdownOptions } = useListCustomers();

   return (
      <div className="hidden gap-5 lg:flex lg:flex-row lg:items-end">
         <CustomSelect
            queryId="payment"
            options={[{ id: 'all', value: 'All' }, ...paymentOptions]}
            placeholder="Payment Method"
         />
         <CustomSelect
            queryId="customer"
            options={[{ id: 'all', value: 'All Customers' }, ...customerDropdownOptions]}
            placeholder="Select Customer"
         />
         <DateRangePicker />
      </div>
   );
}
