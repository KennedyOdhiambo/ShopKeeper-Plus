import { ReactNode } from 'react';

export default function layout({ children }: { children: ReactNode }) {
   return (
      <section className="mt-6 w-full">
         <div>{children}</div>
      </section>
   );
}
