import { Poppins } from "next/font/google"
import "../styles/globals.css"

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
         <body className={poppins.className}>{children}</body>
      </html>
   )
}
