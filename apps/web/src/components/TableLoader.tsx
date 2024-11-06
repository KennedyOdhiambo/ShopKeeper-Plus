import { Skeleton } from './ui/skeleton';

interface TableLoaderProps {
   rows: number;
}

export function TableLoader({ rows }: TableLoaderProps) {
   return (
      <div className="w-full">
         {Array.from({ length: rows }).map((_, rowIndex) => (
            <div key={`row-${rowIndex}`} className="py-2">
               <Skeleton className="h-5 w-full" />
            </div>
         ))}
      </div>
   );
}
