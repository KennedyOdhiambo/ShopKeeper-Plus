import { Inter } from "next/font/google"
import "../styles/globals.css"
import Providers from "@/context/Providers"
import { ProgressBar } from "react-transition-progress"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
   weight: "400",
   subsets: ["latin"],
})

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={inter.className}>
            <Providers>
               <ProgressBar className="fixed h-1 shadow-lg shadow-sky-500/20 bg-sky-500 top-0" />
               {children}
               <Toaster />
            </Providers>
         </body>
      </html>
   )
}
