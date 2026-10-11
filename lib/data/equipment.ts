import raw from './equipment.generated.json'

export interface Specification {
  label: string
  value: string
}

export interface Equipment {
  id: string
  name: string
  slug: string
  category: string
  categorySlug: string
  dailyRate: number
  weeklyRate?: number
  description: string
  shortDescription: string
  image: string
  gallery?: string[]
  specifications: Specification[]
  suitableFor: string[]
  featured: boolean
  available: boolean
}

// equipment.generated.json is produced from the Google Sheet by
// scripts/fetch-products.mjs (runs on every `next build` via the prebuild hook).
// The committed copy doubles as the offline fallback for `npm run dev`.
// Do not hand-edit it — it is overwritten on every build.
export const equipment: Equipment[] = raw as Equipment[]

export const featuredEquipment = equipment.filter((e) => e.featured)

export function getEquipmentByCategory(categorySlug: string) {
  return equipment.filter((e) => e.categorySlug === categorySlug)
}

export function getEquipmentBySlug(slug: string) {
  return equipment.find((e) => e.slug === slug) ?? null
}

export function getRelatedEquipment(current: Equipment, limit = 4) {
  return equipment
    .filter((e) => e.categorySlug === current.categorySlug && e.id !== current.id)
    .slice(0, limit)
}
