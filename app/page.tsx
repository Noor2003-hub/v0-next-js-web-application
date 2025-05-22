import { redirect } from "next/navigation"

// Default locale redirect
export default function Home() {
  // Detect browser language or default to 'en'
  const defaultLocale = "en"

  // Redirect to the default locale
  redirect(`/${defaultLocale}`)
}
