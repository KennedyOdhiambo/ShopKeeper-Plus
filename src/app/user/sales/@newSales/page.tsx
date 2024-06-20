'use client'

import CustomSelect from '@/components/CustomSelect'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent } from '@/components/ui/card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'

export default function NewSales({ onSelect }: { onSelect: (date: Date) => void }) {
   const [date, setDate] = useState<Date>()
   const handleSelectDate = (date: Date) => {
      onSelect(date)
      setDate(date)
   }
   return (
      <div>
         <Card className=" shadow-none border-0 bg-secondary">
            <CardContent className="flex flex-col gap-1 items-center md:flex-row md:items-end md:gap-4 pb-5">
               <Popover>
                  <PopoverTrigger asChild>
                     <Button
                        variant={'outline'}
                        className={cn(
                           'w-[280px] justify-start text-left font-normal',
                           !date && 'text-muted-foreground'
                        )}
                     >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP') : <span>Sales Date</span>}
                     </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                     <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => handleSelectDate(date!)}
                        initialFocus
                     />
                  </PopoverContent>
               </Popover>
               <CustomSelect onSelect={(selected) => console.log(selected)} options={[]} placeholder="Payment Option" />
               <CustomSelect onSelect={(selected) => console.log(selected)} options={[]} placeholder="Customer" />
            </CardContent>
         </Card>
      </div>
   )
}
