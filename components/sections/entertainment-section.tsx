import Image from "next/image"
import { Button } from "@/components/ui/button"

interface EntertainmentSectionProps {
  title: string
  description: string
  ctaText: string
  isRtl: boolean
}

export default function EntertainmentSection({ title, description, ctaText, isRtl }: EntertainmentSectionProps) {
  return (
    <section className="relative h-[500px] w-full">
      <div className="absolute inset-0">
        <Image src="/images/entertainment-bg.jpg" alt="Entertainment" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-16">
        <div className={`max-w-2xl text-white ${isRtl ? "mr-auto text-right" : "ml-0"}`}>
          <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium mb-4">ENTERTAINMENT</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg mb-6">{description}</p>
          <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  )
}
