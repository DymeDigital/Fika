'use client'

import { useState, useMemo, useEffect } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import EquipmentCard from '@/components/ui/EquipmentCard'
import { equipment } from '@/lib/data/equipment'
import { categories } from '@/lib/data/categories'

type SortOption = 'name' | 'price-asc' | 'price-desc'

export default function EquipmentCatalogue() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<SortOption>('name')

  // Deep-link support: apply ?category= after mount. Kept out of the initial
  // render (no useSearchParams) so the full grid prerenders to static HTML.
  useEffect(() => {
    const cat = new URLSearchParams(window.location.search).get('category')
    if (cat) setSelectedCategory(cat)
  }, [])

  const filtered = useMemo(() => {
    let result = equipment

    if (selectedCategory !== 'all') {
      result = result.filter((e) => e.categorySlug === selectedCategory)
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.shortDescription.toLowerCase().includes(q) ||
          e.category.toLowerCase().includes(q),
      )
    }

    return [...result].sort((a, b) => {
      if (sort === 'price-asc') return a.dailyRate - b.dailyRate
      if (sort === 'price-desc') return b.dailyRate - a.dailyRate
      return a.name.localeCompare(b.name)
    })
  }, [selectedCategory, search, sort])

  return (
    <>
      {/* Filters bar */}
      <div
        className="sticky top-[64px] md:top-[80px] z-30 border-b py-4"
        style={{ background: 'white', borderColor: '#E5E5E3' }}
      >
        <div className="container-site">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: '#A8A8A3' }}
              />
              <input
                type="search"
                placeholder="Search equipment..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-input pl-9 py-2.5 text-sm"
                aria-label="Search equipment"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  aria-label="Clear search"
                >
                  <X size={14} style={{ color: '#A8A8A3' }} />
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={14} style={{ color: '#737370' }} />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="form-input py-2.5 text-sm cursor-pointer"
                aria-label="Sort equipment"
                style={{ width: 'auto', paddingRight: '2rem' }}
              >
                <option value="name">A → Z</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
              </select>
            </div>
          </div>

          {/* Category filter pills */}
          <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className="shrink-0 text-xs font-semibold tracking-wider uppercase px-4 py-2 border transition-colors duration-200"
              style={
                selectedCategory === 'all'
                  ? { background: '#116242', borderColor: '#116242', color: 'white' }
                  : { background: '#F5F5F4', borderColor: 'transparent', color: '#737370' }
              }
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className="shrink-0 text-xs font-semibold tracking-wider uppercase px-4 py-2 border transition-colors duration-200"
                style={
                  selectedCategory === cat.slug
                    ? { background: '#116242', borderColor: '#116242', color: 'white' }
                    : { background: '#F5F5F4', borderColor: 'transparent', color: '#737370' }
                }
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Equipment grid */}
      <section className="py-16 md:py-20" style={{ background: '#FAFAF9' }}>
        <div className="container-site">
          <p
            className="text-xs font-semibold tracking-wider uppercase mb-8"
            style={{ color: '#A8A8A3' }}
          >
            {filtered.length} item{filtered.length !== 1 ? 's' : ''} found
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-2xl font-bold mb-2" style={{ color: '#0D0D0D' }}>
                No results found
              </p>
              <p style={{ color: '#737370' }}>
                Try adjusting your search or category filter.
              </p>
              <button
                onClick={() => {
                  setSearch('')
                  setSelectedCategory('all')
                }}
                className="btn-outline-dark mt-6"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((item) => (
                <EquipmentCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
