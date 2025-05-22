// English content
const enContent = {
  metadata: {
    title: "Al Hamra Shopping Center",
    description: "Discover shopping, dining, and entertainment at Al Hamra Shopping Center",
  },
  header: {
    navigation: [
      {
        key: "whats-new",
        label: "What's New",
        href: "/whats-new",
        hasSubmenu: false,
      },
      {
        key: "category-1",
        label: "Category 1",
        href: "/categories/1",
        hasSubmenu: true,
        submenu: [
          {
            title: "Stores",
            items: Array(12)
              .fill(0)
              .map((_, i) => ({
                name: `Store Name ${i + 1}`,
                href: `/stores/${i + 1}`,
              })),
          },
          {
            title: "Featured",
            items: Array(12)
              .fill(0)
              .map((_, i) => ({
                name: `Store Name ${i + 1}`,
                href: `/stores/${i + 1}`,
              })),
          },
          {
            title: "Popular",
            items: Array(12)
              .fill(0)
              .map((_, i) => ({
                name: `Store Name ${i + 1}`,
                href: `/stores/${i + 1}`,
              })),
          },
        ],
      },
      {
        key: "category-2",
        label: "Category 2",
        href: "/categories/2",
        hasSubmenu: true,
        submenu: [
          {
            title: "Stores",
            items: Array(12)
              .fill(0)
              .map((_, i) => ({
                name: `Store Name ${i + 1}`,
                href: `/stores/${i + 1}`,
              })),
          },
        ],
      },
      {
        key: "category-3",
        label: "Category 3",
        href: "/categories/3",
        hasSubmenu: true,
        submenu: [
          {
            title: "Stores",
            items: Array(12)
              .fill(0)
              .map((_, i) => ({
                name: `Store Name ${i + 1}`,
                href: `/stores/${i + 1}`,
              })),
          },
        ],
      },
      {
        key: "category-4",
        label: "Category 4",
        href: "/categories/4",
        hasSubmenu: true,
        submenu: [
          {
            title: "Stores",
            items: Array(12)
              .fill(0)
              .map((_, i) => ({
                name: `Store Name ${i + 1}`,
                href: `/stores/${i + 1}`,
              })),
          },
        ],
      },
      {
        key: "plan-your-visit",
        label: "Plan Your Visit",
        href: "/plan-your-visit",
        hasSubmenu: true,
        submenu: [
          {
            title: "Information",
            items: [
              { name: "Opening Hours", href: "/opening-hours" },
              { name: "Location", href: "/location" },
              { name: "Parking", href: "/parking" },
              { name: "Services", href: "/services" },
            ],
          },
        ],
      },
      {
        key: "services",
        label: "Services",
        href: "/services",
        hasSubmenu: false,
      },
    ],
    searchPlaceholder: "Search",
  },
  hero: {
    title: "YOU SHOP. WE DELIVER.",
    subtitle: "Enjoy a seamless shopping experience with our Delivery Service.",
    ctaText: "Learn more",
    openingHours: "OPEN TODAY 10 AM - 10 PM",
    planVisitText: "PLAN YOUR VISIT",
  },
  storesSection: {
    title: "IN THE SPOTLIGHT",
    viewAllText: "View All",
    stores: Array(12)
      .fill(0)
      .map((_, i) => ({
        name: `Store Name ${i + 1}`,
        image: `/placeholder.svg?height=200&width=200`,
        href: `/en/stores/${i + 1}`,
      })),
  },
  culinary: {
    title: "CULINARY DELIGHTS",
    description:
      "Indulge in a world of flavors at Al Hamra Shopping Center's diverse dining options. From casual cafes to fine dining restaurants, we offer culinary experiences to satisfy every palate.",
    ctaText: "Explore Restaurants",
    landmarkName: "Landmark Name",
  },
  entertainment: {
    title: "FUN FOR EVERYONE",
    description:
      "Al Hamra Shopping Center offers a wide range of entertainment options for visitors of all ages. From state-of-the-art cinemas to family-friendly activities, there's something for everyone to enjoy.",
    ctaText: "DISCOVER ENTERTAINMENT",
  },
  featuredVenues: [
    {
      type: "ENTERTAINMENT",
      title: "Grand Cinemas",
      ctaText: "Explore More",
      image: "/images/cinema.jpg",
    },
    {
      type: "SHOP",
      title: "Al Othman Fashion",
      ctaText: "Explore More",
      image: "/images/fashion.jpg",
    },
  ],
  events: {
    title: "Discover Events & Offers",
    discoverEventsText: "Discover Events",
    discoverOffersText: "Discover Offers",
  },
  whatsNew: {
    title: "What's New at Al Hamra Shopping Center",
    ctaText: "Discover More",
  },
  footer: {
    followUs: "Follow Us",
    quickLinks: {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Stores", href: "/stores" },
        { label: "Dining", href: "/dining" },
        { label: "Entertainment", href: "/entertainment" },
        { label: "Offers", href: "/offers" },
      ],
    },
    aboutUs: {
      title: "About Us",
      links: [
        { label: "About Al Hamra", href: "/about" },
        { label: "Media Centre", href: "/media" },
        { label: "Careers", href: "/careers" },
      ],
    },
    contactUs: {
      title: "Contact Us",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "FAQs", href: "/faqs" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Lost & Found", href: "/lost-found" },
        { label: "Parking FAQs", href: "/parking-faqs" },
      ],
    },
    visitUs: {
      title: "VISIT US",
      address: {
        line1: "Al Hamra Shopping Center",
        line2: "Sheikh Zayed City",
        line3: "Kuwait",
      },
      email: "info@alhamra.com.kw",
      getDirections: "Get Directions",
    },
    newsletter: {
      title: "RECEIVE OUR NEWSLETTER",
      placeholder: "Email Address",
      button: "Sign Up",
    },
    downloadApp: "Download the app",
    copyright: "© 2025 Al Hamra Shopping Center. All rights reserved.",
  },
}

// Arabic content
const arContent = {
  metadata: {
    title: "مركز الحمراء للتسوق",
    description: "اكتشف التسوق والمطاعم والترفيه في مركز الحمراء للتسوق",
  },
  header: {
    navigation: [
      {
        key: "whats-new",
        label: "ما هو جديد",
        href: "/whats-new",
        hasSubmenu: false,
      },
      {
        key: "category-1",
        label: "الفئة 1",
        href: "/categories/1",
        hasSubmenu: true,
        submenu: [
          {
            title: "المتاجر",
            items: Array(12)
              .fill(0)
              .map((_, i) => ({
                name: `اسم المتجر ${i + 1}`,
                href: `/stores/${i + 1}`,
              })),
          },
          {
            title: "مميز",
            items: Array(12)
              .fill(0)
              .map((_, i) => ({
                name: `اسم المتجر ${i + 1}`,
                href: `/stores/${i + 1}`,
              })),
          },
          {
            title: "شائع",
            items: Array(12)
              .fill(0)
              .map((_, i) => ({
                name: `اسم المتجر ${i + 1}`,
                href: `/stores/${i + 1}`,
              })),
          },
        ],
      },
      {
        key: "category-2",
        label: "الفئة 2",
        href: "/categories/2",
        hasSubmenu: true,
        submenu: [
          {
            title: "المتاجر",
            items: Array(12)
              .fill(0)
              .map((_, i) => ({
                name: `اسم المتجر ${i + 1}`,
                href: `/stores/${i + 1}`,
              })),
          },
        ],
      },
      {
        key: "category-3",
        label: "الفئة 3",
        href: "/categories/3",
        hasSubmenu: true,
        submenu: [
          {
            title: "المتاجر",
            items: Array(12)
              .fill(0)
              .map((_, i) => ({
                name: `اسم المتجر ${i + 1}`,
                href: `/stores/${i + 1}`,
              })),
          },
        ],
      },
      {
        key: "category-4",
        label: "الفئة 4",
        href: "/categories/4",
        hasSubmenu: true,
        submenu: [
          {
            title: "المتاجر",
            items: Array(12)
              .fill(0)
              .map((_, i) => ({
                name: `اسم المتجر ${i + 1}`,
                href: `/stores/${i + 1}`,
              })),
          },
        ],
      },
      {
        key: "plan-your-visit",
        label: "خطط لزيارتك",
        href: "/plan-your-visit",
        hasSubmenu: true,
        submenu: [
          {
            title: "معلومات",
            items: [
              { name: "ساعات العمل", href: "/opening-hours" },
              { name: "الموقع", href: "/location" },
              { name: "مواقف السيارات", href: "/parking" },
              { name: "الخدمات", href: "/services" },
            ],
          },
        ],
      },
      {
        key: "services",
        label: "الخدمات",
        href: "/services",
        hasSubmenu: false,
      },
    ],
    searchPlaceholder: "بحث",
  },
  hero: {
    title: "أنت تتسوق. نحن نوصل.",
    subtitle: "استمتع بتجربة تسوق سلسة مع خدمة التوصيل لدينا.",
    ctaText: "اعرف المزيد",
    openingHours: "مفتوح اليوم ١٠ ص - ١٠ م",
    planVisitText: "خطط لزيارتك",
  },
  storesSection: {
    title: "تحت الأضواء",
    viewAllText: "عرض الكل",
    stores: Array(12)
      .fill(0)
      .map((_, i) => ({
        name: `اسم المتجر ${i + 1}`,
        image: `/placeholder.svg?height=200&width=200`,
        href: `/ar/stores/${i + 1}`,
      })),
  },
  culinary: {
    title: "المأكولات الشهية",
    description:
      "استمتع بعالم من النكهات في مركز الحمراء للتسوق مع خيارات متنوعة للطعام. من المقاهي العادية إلى المطاعم الفاخرة، نقدم تجارب طهي ترضي كل ذوق.",
    ctaText: "استكشف المطاعم",
    landmarkName: "اسم المعلم",
  },
  entertainment: {
    title: "المرح للجميع",
    description:
      "يقدم مركز الحمراء للتسوق مجموعة واسعة من خيارات الترفيه للزوار من جميع الأعمار. من دور السينما المتطورة إلى الأنشطة العائلية، هناك شيء للجميع للاستمتاع به.",
    ctaText: "اكتشف الترفيه",
  },
  featuredVenues: [
    {
      type: "ترفيه",
      title: "جراند سينما",
      ctaText: "اكتشف المزيد",
      image: "/images/cinema.jpg",
    },
    {
      type: "تسوق",
      title: "العثمان للأزياء",
      ctaText: "اكتشف المزيد",
      image: "/images/fashion.jpg",
    },
  ],
  events: {
    title: "اكتشف الفعاليات والعروض",
    discoverEventsText: "اكتشف الفعاليات",
    discoverOffersText: "اكتشف العروض",
  },
  whatsNew: {
    title: "ما هو جديد في مركز الحمراء للتسوق",
    ctaText: "اكتشف المزيد",
  },
  footer: {
    followUs: "تابعنا",
    quickLinks: {
      title: "روابط سريعة",
      links: [
        { label: "من نحن", href: "/about" },
        { label: "المتاجر", href: "/stores" },
        { label: "المطاعم", href: "/dining" },
        { label: "الترفيه", href: "/entertainment" },
        { label: "العروض", href: "/offers" },
      ],
    },
    aboutUs: {
      title: "من نحن",
      links: [
        { label: "عن الحمراء", href: "/about" },
        { label: "المركز الإعلامي", href: "/media" },
        { label: "الوظائف", href: "/careers" },
      ],
    },
    contactUs: {
      title: "اتصل بنا",
      links: [
        { label: "اتصل بنا", href: "/contact" },
        { label: "الأسئلة الشائعة", href: "/faqs" },
        { label: "سياسة الخصوصية", href: "/privacy" },
        { label: "المفقودات والموجودات", href: "/lost-found" },
        { label: "أسئلة مواقف السيارات", href: "/parking-faqs" },
      ],
    },
    visitUs: {
      title: "زورونا",
      address: {
        line1: "مركز الحمراء للتسوق",
        line2: "مدينة الشيخ زايد",
        line3: "الكويت",
      },
      email: "info@alhamra.com.kw",
      getDirections: "احصل على الاتجاهات",
    },
    newsletter: {
      title: "اشترك في نشرتنا الإخبارية",
      placeholder: "البريد الإلكتروني",
      button: "اشترك",
    },
    downloadApp: "حمل التطبيق",
    copyright: "© ٢٠٢٥ مركز الحمراء للتسوق. جميع الحقوق محفوظة.",
  },
}

// Helper functions to get content based on locale
export function getHomeContent(locale: string) {
  return locale === "ar" ? arContent : enContent
}

export function getHeaderContent(locale: string) {
  return locale === "ar" ? arContent.header : enContent.header
}

export function getFooterContent(locale: string) {
  return locale === "ar" ? arContent.footer : enContent.footer
}
