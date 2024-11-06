import { useEffect, useState } from "react"

export default function useScreenSize() {
   const [screenSize, setScreenSize] = useState<"sm" | "md" | "lg" | "xl" | "">("")

   useEffect(() => {
      const handleResize = () => {
         const width = window.innerWidth

         if (width < 640) {
            setScreenSize("sm")
         } else if (width >= 640 && width < 768) {
            setScreenSize("md")
         } else if (width >= 768 && width < 1024) {
            setScreenSize("lg")
         } else {
            setScreenSize("xl")
         }
      }

      window.addEventListener("resize", handleResize)
      handleResize()

      return () => {
         window.removeEventListener("resize", handleResize)
      }
   }, [])
   return screenSize
}
