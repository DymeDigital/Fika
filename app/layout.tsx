import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MobileActionBar from '@/components/layout/MobileActionBar'
import JsonLd from '@/components/seo/JsonLd'
import { SITE, OPENING_HOURS_SPEC } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Professional Equipment Hire Durban`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'tool hire Durban',
    'plant hire KZN',
    'equipment rental Durban',
    'construction equipment hire',
    'generator hire',
    'pressure washer hire',
    'compactor hire',
  ],
  metadataBase: new URL(SITE.url),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Professional Equipment Hire Durban`,
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Professional Equipment Hire Durban`,
    description: SITE.description,
  },
}

export const viewport: Viewport = {
  themeColor: '#116242',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Store', 'HardwareStore'],
  name: SITE.name,
  description: SITE.description,
  telephone: SITE.phone,
  email: SITE.email,
  url: SITE.url,
  image: `${SITE.url}/opengraph-image`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '79 Padfield Road',
    addressLocality: 'New Germany',
    addressRegion: 'KwaZulu-Natal',
    addressCountry: 'ZA',
  },
  openingHoursSpecification: OPENING_HOURS_SPEC.map((spec) => ({
    '@type': 'OpeningHoursSpecification',
    ...spec,
  })),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-ZA" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <JsonLd data={localBusinessJsonLd} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  )
}
