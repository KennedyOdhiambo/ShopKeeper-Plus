'use client';

import CustomSelect from '@/components/CustomSelect';
import { Card, CardContent } from '@/components/ui/card';
import NewCustomer from './NewCustomer';
import DatePicker from '@/components/DatePicker';
import { SelectCustomers } from '@/server/db/schema/customers';

const paymentOptions = [
   { id: 'cash', value: 'Cash' },
   { id: 'mpesa', value: 'M-Pesa' },
   { id: 'credit', value: 'Credit' },
];

export default function NewSalesOptions({ customers }: { customers: Array<SelectCustomers> }) {
   const customerDropdownOptions = customers.map((customer) => ({
      id: customer.customerId,
      value: customer.customerName,
   }));

   const handleSelectDate = (date: Date) => {
      console.log(date);
   };

   const handleSelectPayment = (option: string) => {
      console.log(option);
   };

   const handleSelectCustomer = (customerId: string) => {
      console.log(customerId);
   };

   return (
      <Card className=" shadow-none border-0 bg-secondary">
         <CardContent className="flex flex-col gap-1 md:flex-row md:items-end md:gap-4 pb-5">
            <DatePicker onSelect={handleSelectDate} />
            <CustomSelect onSelect={handleSelectPayment} options={paymentOptions} placeholder="Payment Option" />
            <div className="inline-flex gap-1.5 items-end">
               <CustomSelect onSelect={handleSelectCustomer} options={customerDropdownOptions} placeholder="Customer" />
               <NewCustomer />
            </div>
         </CardContent>
      </Card>
   );
}
