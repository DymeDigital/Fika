import type { Metadata } from 'next'
import ContactPage from './ContactPage'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact FIKA Tool & Plant Hire in Durban. Call, WhatsApp or fill in our enquiry form for equipment hire rates and availability.',
}

export default function Page() {
  return <ContactPage />
}
