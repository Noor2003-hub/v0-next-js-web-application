import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getFooterContent } from "@/lib/content"

interface FooterProps {
  locale: string
}

export default function Footer({ locale }: FooterProps) {
  const content = getFooterContent(locale)
  const isRtl = locale === "ar"

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logo.png"
              alt="Al Hamra Shopping Center"
              width={100}
              height={60}
              className="h-16 w-auto object-contain mb-4"
            />

            <div className="flex flex-col items-center md:items-start gap-2">
              <h4 className="font-medium">{content.followUs}</h4>
              <div className="flex gap-4">
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-gray-600 hover:text-gray-900" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-gray-600 hover:text-gray-900" />
                </Link>
                <Link href="#" aria-label="Youtube">
                  <Youtube className="h-5 w-5 text-gray-600 hover:text-gray-900" />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5 text-gray-600 hover:text-gray-900" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-medium mb-4">{content.quickLinks.title}</h4>
              <ul className="space-y-2">
                {content.quickLinks.links.map((link, index) => (
                  <li key={index}>
                    <Link href={`/${locale}${link.href}`} className="text-gray-600 hover:text-gray-900">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">{content.aboutUs.title}</h4>
              <ul className="space-y-2">
                {content.aboutUs.links.map((link, index) => (
                  <li key={index}>
                    <Link href={`/${locale}${link.href}`} className="text-gray-600 hover:text-gray-900">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">{content.contactUs.title}</h4>
              <ul className="space-y-2">
                {content.contactUs.links.map((link, index) => (
                  <li key={index}>
                    <Link href={`/${locale}${link.href}`} className="text-gray-600 hover:text-gray-900">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">{content.visitUs.title}</h4>
              <address className="not-italic text-gray-600 mb-4">
                <p>{content.visitUs.address.line1}</p>
                <p>{content.visitUs.address.line2}</p>
                <p>{content.visitUs.address.line3}</p>
              </address>
              <p className="text-gray-600 mb-4">{content.visitUs.email}</p>
              <Button variant="outline" size="sm">
                {content.visitUs.getDirections}
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-medium">{content.newsletter.title}</h4>
            <div className="flex gap-2">
              <Input type="email" placeholder={content.newsletter.placeholder} className="w-full max-w-[220px]" />
              <Button variant="default">{content.newsletter.button}</Button>
            </div>

            <div className="mt-4">
              <h4 className="font-medium mb-2">{content.downloadApp}</h4>
              <div className="flex gap-2">
                <Link href="#">
                  <Image
                    src="/images/app-store.png"
                    alt="Download on App Store"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/google-play.png"
                    alt="Get it on Google Play"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm pt-4 border-t">
          <p>{content.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
