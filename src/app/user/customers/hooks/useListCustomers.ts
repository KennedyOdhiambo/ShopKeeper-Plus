import { api } from '@/trpc/client';

export default function useListCustomers() {
   const { data } = api.customers.listCustomers.useQuery({
      userId: 'cba51dba-4308-453c-973a-0bb24c5fd6b4',
   });

   const customers = data?.customers;
   const totalCount = data?.count;

   const customerDropdownOptions =
      customers?.map((customer) => ({
         id: customer.customerId,
         value: customer.customerName,
      })) ?? [];

   return { customerDropdownOptions, totalCount, customers };
}
