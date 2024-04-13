import { CountryCode } from "@/types/country-code"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getYear(date: string) {
  const dateObj = new Date(date)
  return dateObj.getFullYear()
}

export function getDialCode(code: string, countryCodeList: CountryCode[]): string {
  return countryCodeList.find((item) => item.code === code)?.dialCode.replace('+', '') ?? ""

}