import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MobileActionBar from '@/components/layout/MobileActionBar'
import { SITE } from '@/lib/constants'

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
  metadataBase: new URL('https://fikatoolhire.co.za'),
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://fikatoolhire.co.za',
    siteName: SITE.name,
    title: `${SITE.name} | Professional Equipment Hire Durban`,
    description: SITE.description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-ZA" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  )
}
