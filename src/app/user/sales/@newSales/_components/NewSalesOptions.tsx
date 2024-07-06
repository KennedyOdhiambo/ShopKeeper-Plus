import CustomSelect from '@/components/CustomSelect';
import { Card, CardContent } from '@/components/ui/card';
import NewCustomer from './NewCustomer';
import DatePicker from '@/components/DatePicker';
import SubmitSales from './SubmitSales';
import { api } from '@/trpc/server';

const paymentOptions = [
   { id: 'cash', value: 'Cash' },
   { id: 'mpesa', value: 'M-Pesa' },
   { id: 'credit', value: 'Credit' },
];

export default async function NewSalesOptions() {
   const customers = await api.customers.listCustomers({ userId: 'cba51dba-4308-453c-973a-0bb24c5fd6b4' });

   const customerDropdownOptions = customers.map((customer) => ({
      id: customer.customerId,
      value: customer.customerName,
   }));
   return (
      <Card className="flex flex-row justify-between border-0 bg-secondary shadow-none">
         <CardContent className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-col gap-1 pb-5 md:flex-row md:items-end md:gap-4">
               <DatePicker />
               <CustomSelect queryId="payment" options={paymentOptions} placeholder="Payment Option" />
               <div className="inline-flex items-end gap-1.5">
                  <CustomSelect queryId="customer" options={customerDropdownOptions} placeholder="Customer" />
                  <NewCustomer />
               </div>
            </div>

            <SubmitSales />
         </CardContent>
      </Card>
   );
}
