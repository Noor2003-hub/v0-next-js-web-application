"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface Category {
  title: string
  items: { name: string; href: string }[]
}

interface MegaMenuProps {
  categories: Category[]
  isRtl: boolean
}

export default function MegaMenu({ categories, isRtl }: MegaMenuProps) {
  const pathname = usePathname()
  const locale = pathname.split("/")[1]

  return (
    <div
      className={`absolute top-full ${isRtl ? "right-0" : "left-0"} w-[800px] bg-white shadow-lg rounded-b-md p-6 grid grid-cols-${categories.length} gap-6 z-50`}
      style={{ gridTemplateColumns: `repeat(${categories.length}, 1fr)` }}
    >
      {categories.map((category, index) => (
        <div key={index} className="space-y-4">
          <h3 className="font-medium text-gray-900">{category.title}</h3>
          <ul className="space-y-2">
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Link href={`/${locale}${item.href}`} className="text-gray-600 hover:text-gray-900">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
