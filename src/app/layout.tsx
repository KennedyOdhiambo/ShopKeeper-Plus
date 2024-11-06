import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Providers from '@/context/Providers';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
   weight: '400',
   subsets: ['latin'],
});

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={inter.className}>
            <Providers>
               {children}
               <Toaster />
            </Providers>
         </body>
      </html>
   );
}
