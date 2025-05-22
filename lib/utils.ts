import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get the opposite locale
export function getOppositeLocale(locale: string): string {
  return locale === "en" ? "ar" : "en"
}

// Helper function to format date based on locale
export function formatDate(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

// Helper function to format currency based on locale
export function formatCurrency(amount: number, locale: string): string {
  return new Intl.NumberFormat(locale === "en" ? "en-US" : "ar-EG", {
    style: "currency",
    currency: "KWD",
  }).format(amount)
}
