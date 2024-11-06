import Image from 'next/image';
import spinnerSvg from '../../public/spinner.svg';

export default function LoadingSpinner() {
   return <Image src={spinnerSvg} alt="..." />;
}
