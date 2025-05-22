"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

interface LanguageSwitcherProps {
  currentLocale: string
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en"
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
    router.push(newPathname)
  }

  return (
    <Button variant="ghost" size="sm" onClick={switchLocale} className="text-sm font-medium">
      {currentLocale === "en" ? "العربية" : "English"}
    </Button>
  )
}
