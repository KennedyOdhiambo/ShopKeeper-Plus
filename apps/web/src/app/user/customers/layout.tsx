import React, { ReactNode } from 'react';
import NewCustomer from '../sales/@newSales/_components/NewCustomer';

type CustomerProps = {
   children: ReactNode;
};
export default function Customerslayout({ children }: CustomerProps) {
   return (
      <div>
         <section className="mt-6 flex w-full flex-col gap-4">
            <div className="me-5 flex flex-row justify-between">
               <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
               <NewCustomer type={'button'} />
            </div>

            <div>{children}</div>
         </section>
      </div>
   );
}
