'use client';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';
import { Calendar } from './ui/calendar';

export default function DatePicker({ onSelect }: { onSelect: (date: Date) => void }) {
   const [date, setDate] = useState<Date>();
   const handleSelectDate = (date: Date) => {
      onSelect(date);
      setDate(date);
   };
   return (
      <Popover>
         <PopoverTrigger asChild>
            <Button
               variant={'outline'}
               className={cn('w-[280px] justify-start text-left font-normal', !date && 'text-muted-foreground')}
            >
               <CalendarIcon className="mr-2 h-4 w-4" />
               {date ? format(date, 'PPP') : <span>Sales Date</span>}
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={(date) => handleSelectDate(date!)} initialFocus />
         </PopoverContent>
      </Popover>
   );
}
