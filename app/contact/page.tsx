import type { Metadata } from 'next'
import ContactPage from './ContactPage'
import { SITE } from '@/lib/constants'

const title = 'Contact Us'
const description =
  'Contact FIKA Tool & Plant Hire in Durban. Call, WhatsApp or fill in our enquiry form for equipment hire rates and availability.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact/' },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: '/contact/',
    siteName: SITE.name,
    title,
    description,
  },
}

export default function Page() {
  return <ContactPage />
}
