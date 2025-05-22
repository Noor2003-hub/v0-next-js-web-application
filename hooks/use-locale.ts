"use client"

import { useParams } from "next/navigation"
import { getOppositeLocale } from "@/lib/utils"

export function useLocale() {
  const params = useParams<{ locale: string }>()
  const locale = params?.locale || "en"
  const isRtl = locale === "ar"
  const oppositeLocale = getOppositeLocale(locale)

  return {
    locale,
    isRtl,
    oppositeLocale,
  }
}
