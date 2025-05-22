import { Button } from "@/components/ui/button"

interface EventsSectionProps {
  title: string
  discoverEventsText: string
  discoverOffersText: string
  isRtl: boolean
}

export default function EventsSection({ title, discoverEventsText, discoverOffersText, isRtl }: EventsSectionProps) {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-8 text-center`}>{title}</h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
            {discoverOffersText}
          </Button>
          <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
            {discoverEventsText}
          </Button>
        </div>
      </div>
    </section>
  )
}
