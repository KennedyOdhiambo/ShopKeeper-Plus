import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type Item = { itemId: string; quantity: number };
type SalesItems = Record<string, Item>;

type NewSalesContext = {
   salesItems: SalesItems | null;
   setSalesItems: Dispatch<SetStateAction<SalesItems | null>>;
};

export const NewSalesContext = createContext<NewSalesContext | null>(null);

export default function NewSalesContextProvider({ children }: { children: ReactNode }) {
   const [salesItems, setSalesItems] = useState<SalesItems | null>(null);

   const values = { salesItems, setSalesItems };

   return <NewSalesContext.Provider value={values}>{children}</NewSalesContext.Provider>;
}
