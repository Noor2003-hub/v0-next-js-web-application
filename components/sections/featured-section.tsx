import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Feature {
  type: string
  title: string
  ctaText: string
  image: string
}

interface FeaturedSectionProps {
  features: Feature[]
  isRtl: boolean
}

export default function FeaturedSection({ features, isRtl }: FeaturedSectionProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {features.map((feature, index) => (
        <div key={index} className="relative h-[400px]">
          <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />

          <div className={`absolute inset-0 flex flex-col justify-end p-8 ${isRtl ? "text-right" : "text-left"}`}>
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium mb-4">
              {feature.type}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{feature.title}</h3>
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 w-fit"
            >
              {feature.ctaText}
            </Button>
          </div>
        </div>
      ))}
    </section>
  )
}
