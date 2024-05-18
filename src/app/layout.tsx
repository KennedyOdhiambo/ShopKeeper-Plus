import { Poppins } from "next/font/google"
import "../styles/globals.css"
import Providers from "@/context/Providers"

const poppins = Poppins({
   subsets: ["latin"],
   weight: "400",
})

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={poppins.className}>
            <Providers>{children}</Providers>
         </body>
      </html>
   )
}
