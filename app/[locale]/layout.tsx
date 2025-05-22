import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { notFound } from "next/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import "../globals.css"

const inter = Inter({ subsets: ["latin", "arabic"] })

export const metadata: Metadata = {
  title: "Al Hamra Shopping Center",
  description: "Discover shopping, dining, and entertainment at Al Hamra Shopping Center",
}

// List of supported locales
const locales = ["en", "ar"]

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Validate locale
  const locale = params.locale

  if (!locales.includes(locale)) {
    notFound()
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </ThemeProvider>
      </body>
    </html>
  )
}
