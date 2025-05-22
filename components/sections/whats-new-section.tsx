import { Button } from "@/components/ui/button"

interface WhatsNewSectionProps {
  title: string
  ctaText: string
  isRtl: boolean
}

export default function WhatsNewSection({ title, ctaText, isRtl }: WhatsNewSectionProps) {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
          {ctaText}
        </Button>
      </div>
    </section>
  )
}
