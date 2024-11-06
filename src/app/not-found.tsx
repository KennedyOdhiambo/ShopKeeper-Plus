import Image from 'next/image';
import maintenance from '../../public/maintenance.svg';
import Link from 'next/link';

export default function NotFound() {
   return (
      <div className="flex h-dvh w-dvw flex-col items-center justify-center px-5">
         <Image src={maintenance} alt="under construction" priority />
         <p className="mx-auto py-5 text-center font-semibold">
            Sorry, the page you requested for is still under maintenance, please check back soon!.
            <Link href={'/user/dashboard'} className="ps-2 text-blue-500 underline">
               Back to dashboard
            </Link>
         </p>
      </div>
   );
}
