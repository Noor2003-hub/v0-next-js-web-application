import Image from "next/image"
import { Button } from "@/components/ui/button"

interface CulinarySectionProps {
  title: string
  description: string
  ctaText: string
  landmarkName: string
  isRtl: boolean
}

export default function CulinarySection({ title, description, ctaText, landmarkName, isRtl }: CulinarySectionProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative h-[400px]">
        <Image src="/images/culinary.jpg" alt="Culinary Delights" fill className="object-cover" />
      </div>

      <div
        className={`flex flex-col justify-center p-8 md:p-12 ${isRtl ? "items-end text-right" : "items-start text-left"}`}
      >
        <span className="text-red-600 text-sm font-medium mb-2">{landmarkName}</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-6 max-w-md">{description}</p>
        <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
          {ctaText}
        </Button>
      </div>
    </section>
  )
}
