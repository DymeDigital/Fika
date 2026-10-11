import type { Metadata } from 'next'
import { SITE } from '@/lib/constants'

const title = 'Equipment for Hire'
const description =
  'Browse the full FIKA Tool & Plant Hire catalogue. Power tools, generators, compactors, pressure washers and more — with daily hire rates clearly shown.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/equipment/' },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: '/equipment/',
    siteName: SITE.name,
    title,
    description,
  },
}

export default function EquipmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
