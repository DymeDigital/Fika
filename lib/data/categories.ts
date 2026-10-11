import raw from './categories.json'

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  iconKey: string
  count: number
  image: string
}

// Categories live in categories.json (they need an icon key present in
// components/ui/CategoryCard.tsx's iconMap plus a hero image — developer
// concerns that change rarely). The Google Sheet only references category
// *names*; scripts/fetch-products.mjs validates every product against this list.
export const categories: Category[] = raw as Category[]
