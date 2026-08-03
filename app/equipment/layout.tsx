import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Equipment for Hire',
  description:
    'Browse the full FIKA Tool & Plant Hire catalogue. Power tools, generators, compactors, pressure washers and more — with daily hire rates clearly shown.',
}

export default function EquipmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
