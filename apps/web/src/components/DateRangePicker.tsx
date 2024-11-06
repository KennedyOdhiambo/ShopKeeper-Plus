'use client';

import { cn } from '@/lib/utils';
import { format, subYears } from 'date-fns';
import { HTMLAttributes, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { CalendarIcon, Filter } from 'lucide-react';
import { Calendar } from './ui/calendar';
import { parseAsIsoDateTime, useQueryStates } from 'nuqs';
import { DateRange } from 'react-day-picker';

export default function DateRangePicker({ className }: HTMLAttributes<HTMLDivElement>) {
   const [selectedDate, setSelectedDate] = useQueryStates(
      {
         from: parseAsIsoDateTime.withDefault(subYears(new Date(), 1)),
         to: parseAsIsoDateTime.withDefault(new Date()),
      },
      {
         history: 'replace',
      },
   );

   const [date, setDate] = useState<DateRange | undefined>(selectedDate);

   const handleFiter = () => {
      setSelectedDate(date!);
   };

   return (
      <>
         <div className={cn('grid gap-2', className)}>
            <Popover>
               <PopoverTrigger asChild>
                  <Button
                     id="date"
                     variant={'outline'}
                     className={cn(
                        'w-[300px] justify-start text-left font-normal',
                        !selectedDate && 'text-muted-foreground',
                     )}
                  >
                     <CalendarIcon className="mr-2 h-4 w-4" />
                     {date?.from ? (
                        date.to ? (
                           <>
                              {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                           </>
                        ) : (
                           format(date.from, 'LLL dd, y')
                        )
                     ) : (
                        <span>Pick a date</span>
                     )}
                  </Button>
               </PopoverTrigger>
               <PopoverContent className="mr-1 w-auto p-0" align="start">
                  <Calendar
                     mode="range"
                     defaultMonth={date?.from}
                     selected={date}
                     onSelect={(date) => {
                        setDate(date);
                     }}
                     numberOfMonths={2}
                  />
               </PopoverContent>
            </Popover>
         </div>

         <Button className="inline-flex gap-2" onClick={handleFiter}>
            <Filter className="size-5" />
            <span>Filter</span>
         </Button>
      </>
   );
}
