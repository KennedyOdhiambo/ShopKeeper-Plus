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
   return (
      <Card className="border-0 bg-secondary shadow-none">
         <CardContent className="flex flex-col gap-1 pb-5 md:flex-row md:items-end md:gap-4">
            <DatePicker />
            <CustomSelect queryId="payment" options={paymentOptions} placeholder="Payment Option" />
            <div className="inline-flex items-end gap-1.5">
               <CustomSelect queryId="customer" options={customerDropdownOptions} placeholder="Customer" />
               <NewCustomer />
            </div>
         </CardContent>
      </Card>
   );
}
