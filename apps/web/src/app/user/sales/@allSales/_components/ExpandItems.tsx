import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function ExpandItems({ salesId }: { salesId: string }) {
   const router = useRouter();
   const handleClick = () => {
      router.push(`sales-details/${salesId}`);
   };
   return (
      <Button onClick={handleClick} variant={'link'} className="inline-flex flex-row gap-1">
         <span>Items</span>
         <ExternalLink className="size-4" />
      </Button>
   );
}
