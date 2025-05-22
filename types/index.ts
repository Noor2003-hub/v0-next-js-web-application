// Common types used throughout the application

export interface LocaleParams {
  locale: string
}

export interface Store {
  id: string
  name: string
  description?: string
  image: string
  category: string
  location: string
  floor: string
  openingHours?: string
  phone?: string
  website?: string
  socialMedia?: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
}

export interface Event {
  id: string
  title: string
  description: string
  image: string
  startDate: string
  endDate: string
  location: string
}

export interface Offer {
  id: string
  title: string
  description: string
  image: string
  store: string
  startDate: string
  endDate: string
  discount?: string
}

export interface MenuItem {
  key: string
  label: string
  href: string
  hasSubmenu: boolean
  submenu?: {
    title: string
    items: {
      name: string
      href: string
    }[]
  }[]
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface Address {
  line1: string
  line2: string
  line3: string
}
