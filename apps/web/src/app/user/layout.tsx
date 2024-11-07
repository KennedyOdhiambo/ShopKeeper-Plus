import Header from '@/app/user/_components/Header';
import Sidebar from '@/app/user/_components/Sidebar';
import React, { ReactNode } from 'react';

export default function layout({ children }: { children: ReactNode }) {
   return (
      <section className="row flex">
         <Sidebar />
         <div className="flex w-dvw lg:ms-60">
            <Header />
            <div className="mt-10 flex-1 px-6">{children}</div>
         </div>
      </section>
   );
}
