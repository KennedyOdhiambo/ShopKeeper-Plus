'use client';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from './ui/calendar';
import { parseAsIsoDateTime, useQueryState } from 'nuqs';

export default function DatePicker() {
   const [selectedDate, setSelectedDate] = useQueryState('salesDate', parseAsIsoDateTime);

   const handleSelectDate = (date: Date) => {
      setSelectedDate(date);
   };
   return (
      <Popover>
         <PopoverTrigger asChild>
            <Button
               variant={'outline'}
               className={cn('w-[280px] justify-start text-left font-normal', !selectedDate && 'text-muted-foreground')}
            >
               <CalendarIcon className="mr-2 h-4 w-4" />
               {selectedDate ? format(selectedDate, 'PPP') : <span>Sales Date</span>}
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-auto p-0">
            <Calendar
               mode="single"
               selected={selectedDate ?? new Date()}
               onSelect={(date) => handleSelectDate(date!)}
               initialFocus
            />
         </PopoverContent>
      </Popover>
   );
}
