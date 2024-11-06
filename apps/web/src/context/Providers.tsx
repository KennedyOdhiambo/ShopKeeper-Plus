'use client';

import { NuqsAdapter } from 'nuqs/adapters/next/app';
import ThemeProvider from '@/components/ThemeProvider';
import React, { ReactNode } from 'react';
import AuthContextProvider from './AuthContext';
import { TRPCReactProvider } from '@/trpc/client';
import NewSalesContextProvider from './NewSalesContext';

export default function Providers({ children }: { children: ReactNode }) {
   return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
         <TRPCReactProvider>
            <AuthContextProvider>
               <NewSalesContextProvider>
                  <NuqsAdapter>{children}</NuqsAdapter>
               </NewSalesContextProvider>
            </AuthContextProvider>
         </TRPCReactProvider>
      </ThemeProvider>
   );
}
