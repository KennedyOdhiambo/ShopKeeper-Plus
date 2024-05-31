import Image from 'next/image'
import maintenance from '../../public/maintenance.svg'
import { Link } from 'react-transition-progress/next'

export default function NotFound() {
   return (
      <div className=" h-dvh w-dvw flex flex-col items-center px-5 justify-center">
         <Image src={maintenance} alt="under construction" priority />
         <p className="mx-auto py-5 text-center font-semibold">
            Sorry, the page you requested for is still under maintenance, please check back soon!.
            <Link href={'/user/dashboard'} className=" text-blue-500 ps-2 underline">
               Back to dashboard
            </Link>
         </p>
      </div>
   )
}
