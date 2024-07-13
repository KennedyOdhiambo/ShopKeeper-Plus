import React from 'react';
import NewExpense from './_components/NewExpense';

export default function Expenses() {
   return (
      <div className="mt-6 flex w-full flex-col gap-6">
         <h2 className="text-3xl font-bold tracking-tight">Expenses</h2>
         <div className="self-end">
            <NewExpense />
         </div>
      </div>
   );
}
