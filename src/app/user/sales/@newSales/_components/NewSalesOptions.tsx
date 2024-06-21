'use client';

import CustomSelect from '@/components/CustomSelect';
import { Card, CardContent } from '@/components/ui/card';
import NewCustomer from './NewCustomer';
import DatePicker from '@/components/DatePicker';
import { SelectCustomers } from '@/server/db/schema/customers';

export default function NewSalesOptions({ customers }: { customers: Array<SelectCustomers> }) {
   const customerDropdownOptions = customers.map((customer) => ({
      id: customer.customerId,
      value: customer.customerName,
   }));
   console.log(customers);
   const handleSelectDate = (date: Date) => {
      console.log(date);
   };

   return (
      <Card className=" shadow-none border-0 bg-secondary">
         <CardContent className="flex flex-col gap-1 md:flex-row md:items-end md:gap-4 pb-5">
            <DatePicker onSelect={handleSelectDate} />
            <CustomSelect onSelect={(selected) => console.log(selected)} options={[]} placeholder="Payment Option" />
            <div className="inline-flex gap-1.5 items-end">
               <CustomSelect
                  onSelect={(selected) => console.log(selected)}
                  options={customerDropdownOptions ?? []}
                  placeholder="Customer"
               />
               <NewCustomer />
            </div>
         </CardContent>
      </Card>
   );
}
