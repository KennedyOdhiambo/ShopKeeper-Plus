import { api } from '@/trpc/client';

export default function useListCustomers() {
   const { data: customers } = api.customers.listCustomers.useQuery({
      userId: 'cba51dba-4308-453c-973a-0bb24c5fd6b4',
   });

   const customerDropdownOptions =
      customers?.map((customer) => ({
         id: customer.customerId,
         value: customer.customerName,
      })) ?? [];

   return { customerDropdownOptions };
}
