import Image from "next/image"
import { Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
  openingHours: string
  planVisitText: string
  isRtl: boolean
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  openingHours,
  planVisitText,
  isRtl,
}: HeroSectionProps) {
  return (
    <section className="relative h-[500px] w-full">
      <div className="absolute inset-0">
        <Image src="/images/hero-bg.jpg" alt="Al Hamra Shopping Center" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-16">
        <div className="max-w-2xl text-white">
          <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium mb-4">EVENT</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-6">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
            >
              {ctaText}
            </Button>

            <div className={`flex items-center gap-6 ${isRtl ? "mr-auto" : "ml-auto"} sm:m-0`}>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-white" />
                <span className="text-white text-sm">{openingHours}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-white" />
                <span className="text-white text-sm">{planVisitText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === 0 ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
