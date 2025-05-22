import type { Metadata } from "next"
import { getHomeContent } from "@/lib/content"
import HeroSection from "@/components/sections/hero-section"
import CulinarySection from "@/components/sections/culinary-section"
import EntertainmentSection from "@/components/sections/entertainment-section"
import FeaturedSection from "@/components/sections/featured-section"
import EventsSection from "@/components/sections/events-section"
import WhatsNewSection from "@/components/sections/whats-new-section"
import StoresGrid from "@/components/sections/stores-grid"

export const generateMetadata = ({ params }: { params: { locale: string } }): Metadata => {
  const content = getHomeContent(params.locale)

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  }
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const content = getHomeContent(params.locale)
  const isRtl = params.locale === "ar"

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        ctaText={content.hero.ctaText}
        openingHours={content.hero.openingHours}
        planVisitText={content.hero.planVisitText}
        isRtl={isRtl}
      />

      <StoresGrid
        title={content.storesSection.title}
        stores={content.storesSection.stores}
        viewAllText={content.storesSection.viewAllText}
        isRtl={isRtl}
      />

      <CulinarySection
        title={content.culinary.title}
        description={content.culinary.description}
        ctaText={content.culinary.ctaText}
        landmarkName={content.culinary.landmarkName}
        isRtl={isRtl}
      />

      <EntertainmentSection
        title={content.entertainment.title}
        description={content.entertainment.description}
        ctaText={content.entertainment.ctaText}
        isRtl={isRtl}
      />

      <FeaturedSection features={content.featuredVenues} isRtl={isRtl} />

      <EventsSection
        title={content.events.title}
        discoverEventsText={content.events.discoverEventsText}
        discoverOffersText={content.events.discoverOffersText}
        isRtl={isRtl}
      />

      <WhatsNewSection title={content.whatsNew.title} ctaText={content.whatsNew.ctaText} isRtl={isRtl} />
    </div>
  )
}
