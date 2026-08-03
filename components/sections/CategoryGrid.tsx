'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import CategoryCard from '@/components/ui/CategoryCard'
import { categories } from '@/lib/data/categories'

const featuredCategories = categories.slice(0, 4)

export default function CategoryGrid() {
  return (
    <section className="py-20 md:py-28" style={{ background: '#F5F5F4' }} aria-labelledby="categories-heading">
      <div className="container-site">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto mb-16">
          {featuredCategories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 id="categories-heading" className="display-lg" style={{ color: '#0D0D0D' }}>
            Explore a Vast Range of Quality Equipment
          </h2>
          <p className="mt-4 text-lg" style={{ color: '#737370' }}>
            Start your equipment hire journey now
          </p>

          <Link
            href="/equipment"
            className="inline-flex items-center justify-center mt-8 px-10 py-3.5 bg-finka-yellow text-finka-black font-extrabold uppercase tracking-wide text-sm hover:bg-finka-yellow-hover transition-colors duration-200"
            style={{ clipPath: 'polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)' }}
          >
            Find Equipment
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
