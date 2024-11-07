import { SelectCreditDebt } from '@/server/db/schema/creditDebt';
import { SelectCustomers } from '@/server/db/schema/customers';
import { SelectInventory } from '@/server/db/schema/inventory';
import { SelectItem } from '@/server/db/schema/items';
import { SelectSale } from '@/server/db/schema/sales';
import { SelectSalesItem } from '@/server/db/schema/salesItems';
import { api } from '@/trpc/client';

type ListSalesItemsSuccess = {
   status: 'success';
   sales: SelectSale;
   customer: SelectCustomers;
   credit: SelectCreditDebt;
   salesItemsAndInventory: Array<{
      items: SelectItem | null;
      inventory: SelectInventory | null;
      sales_items: SelectSalesItem;
   }>;
};

export type ApiErrorResponse = {
   status: 'error';
   message: string;
};

export default function useListSalesItems(salesId: string) {
   const { data, isPending } = api.salesItems.listSalesItems.useQuery({ salesId });

   let successResponse: ListSalesItemsSuccess | undefined = undefined;
   let errorResponse: ApiErrorResponse | undefined = undefined;

   if (data?.status === 'success') {
      successResponse = data;
   }

   if (data?.status === 'error') {
      errorResponse = data;
   }

   const customer = successResponse?.customer;
   const itemsWithInventory = successResponse?.salesItemsAndInventory;
   const creditEntry = successResponse?.credit;
   const salesDetails = successResponse?.sales;

   return { customer, itemsWithInventory, creditEntry, salesDetails, errorResponse, isPending };
}
