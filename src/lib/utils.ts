import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string) {
   const phoneNumber = phone
      .replace(/[^+0-9]/g, "")
      .replace(/[^\w\s]/gi, "")
      .replace(/^7/, "2547")
      .replace(/^01/, "25401")
      .replace(/^10/, "25410")
      .replace(/^11/, "25411")
      .replace(/^25407/, "2547")
      .replace(/^0/, "254")
   return phoneNumber
}

export function formatMoney(amount: number) {
   return new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES" }).format(amount)
}
