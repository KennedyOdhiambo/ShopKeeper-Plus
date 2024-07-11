import { ReactNode } from 'react';

export default function layout({ children }: { children: ReactNode }) {
   return (
      <section className="mt-6 flex w-full flex-col gap-4">
         <div className="">
            <h2 className="text-3xl font-bold tracking-tight">Products & Services</h2>
         </div>
         <div>{children}</div>
      </section>
   );
}
