import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Store {
  name: string
  image: string
  href: string
}

interface StoresGridProps {
  title: string
  stores: Store[]
  viewAllText: string
  isRtl: boolean
}

export default function StoresGrid({ title, stores, viewAllText, isRtl }: StoresGridProps) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className={`text-xl font-medium mb-6 ${isRtl ? "text-right" : "text-left"}`}>{title}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {stores.map((store, index) => (
            <Link key={index} href={store.href} className="group">
              <div className="bg-gray-200 aspect-square relative mb-2 overflow-hidden">
                <Image
                  src={store.image || "/placeholder.svg?height=200&width=200"}
                  alt={store.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className={`text-sm font-medium ${isRtl ? "text-right" : "text-left"}`}>{store.name}</h3>
            </Link>
          ))}
        </div>

        <div className={`mt-6 ${isRtl ? "text-left" : "text-right"}`}>
          <Button variant="link" className="text-gray-600 hover:text-gray-900">
            {viewAllText}
          </Button>
        </div>
      </div>
    </section>
  )
}
