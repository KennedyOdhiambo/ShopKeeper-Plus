import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string) {
   const phoneNumber = phone
      .replace(/[^+0-9]/g, '')
      .replace(/[^\w\s]/gi, '')
      .replace(/^7/, '2547')
      .replace(/^01/, '25401')
      .replace(/^10/, '25410')
      .replace(/^11/, '25411')
      .replace(/^25407/, '2547')
      .replace(/^0/, '254');
   return phoneNumber;
}

export function formatMoney(amount: number | string | undefined) {
   if (amount === undefined) return;
   return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(+amount);
}

export function getFirstLetters(str: string | null | undefined, numWords = Infinity) {
   if (str === null || str === undefined) return;

   let result = ' ';
   let wordCount = 0;

   for (let i = 0; i < str.length && wordCount < numWords; i++)
      if (str[i] !== ' ') {
         result += str[i]; //capture first letter
         wordCount++; //increment word count
         while (str[i + 1] !== ' ' && str[i + 1] !== undefined) i++; //skip remaining characters
      }

   return result;
}

export function toCamelCase(input: string): string {
   const words = input.trim().split(/\s+/);

   if (words.length === 1) {
      return words[0].toLowerCase();
   }

   return words
      .map((word, index) => {
         if (index === 0) {
            return word.toLowerCase();
         }
         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
}
