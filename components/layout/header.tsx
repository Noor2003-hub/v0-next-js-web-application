"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { getHeaderContent } from "@/lib/content"
import LanguageSwitcher from "@/components/common/language-switcher"
import MegaMenu from "@/components/navigation/mega-menu"

interface HeaderProps {
  locale: string
}

export default function Header({ locale }: HeaderProps) {
  const content = getHeaderContent(locale)
  const isRtl = locale === "ar"
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-8">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={isRtl ? "right" : "left"} className={isRtl ? "rtl" : "ltr"}>
              <nav className="flex flex-col gap-4 mt-8">
                {content.navigation.map((item) => (
                  <Link key={item.key} href={`/${locale}${item.href}`} className="text-lg font-medium">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link href={`/${locale}`} className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Al Hamra Shopping Center"
              width={80}
              height={50}
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {content.navigation.map((item) => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => setActiveCategory(item.key)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <Button variant="ghost" className="flex items-center gap-1">
                {item.label}
                {item.hasSubmenu && <ChevronDown className="h-4 w-4" />}
              </Button>

              {item.hasSubmenu && activeCategory === item.key && (
                <MegaMenu categories={item.submenu || []} isRtl={isRtl} />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher currentLocale={locale} />

          <div className="relative">
            <Search className="absolute top-1/2 transform -translate-y-1/2 left-3 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder={content.searchPlaceholder}
              className="h-9 w-[120px] md:w-[180px] rounded-full bg-gray-100 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
