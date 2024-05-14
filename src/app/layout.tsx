import { Poppins } from "next/font/google"
import "../styles/globals.css"
import ThemeProvider from "@/components/ThemeProvider"

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
      <html lang="en">
         <body className={poppins.className}>
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               {children}
            </ThemeProvider>
         </body>
      </html>
   )
}
