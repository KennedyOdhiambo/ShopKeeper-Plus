"use client"
import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import icon1 from "../../../../public/login1.svg"
import icon2 from "../../../../public/login2.svg"
import icon3 from "../../../../public/login3.svg"
import Image from "next/image"

const icons = [icon1, icon2, icon3]
export default function LoginCarousel() {
   const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

   return (
      <Carousel
         plugins={[plugin.current]}
         className="hidden xl:block w-full max-w-sm xl:max-w-lg 2xl:max-w-xl"
         onMouseEnter={plugin.current.stop}
         onMouseLeave={plugin.current.reset}
      >
         <CarouselContent>
            {icons.map((icon, i) => (
               <CarouselItem key={i}>
                  <Image src={icon} alt={`login slider`} className="" priority />
               </CarouselItem>
            ))}
         </CarouselContent>
      </Carousel>
   )
}
