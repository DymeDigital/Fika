'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Zap, Layers, Droplets, Wind, Leaf, Scissors, ArrowUpToLine,
} from 'lucide-react'
import { motion } from 'framer-motion'
import type { Category } from '@/lib/data/categories'

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Layers,
  Droplets,
  Bolt: Zap,
  Leaf,
  Scissors,
  ArrowUpToLine,
  Wind,
}

interface CategoryCardProps {
  category: Category
  index?: number
}

export default function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  const Icon = iconMap[category.iconKey] ?? Zap

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <Link
        href={`/equipment?category=${category.slug}`}
        className="group relative isolate block aspect-square overflow-hidden rounded-md"
        aria-label={`Browse ${category.name} equipment`}
      >
        <Image
          src={category.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          style={{ filter: 'brightness(1.35) saturate(0.9)' }}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 320px"
        />
        {/* Duotone brand-green tint — preserves photo brightness, replaces hue */}
        <div
          className="absolute inset-0"
          style={{ background: '#178257', mixBlendMode: 'color', opacity: 0.88 }}
        />
        {/* Ground the label for legibility */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(3,52,30,0.15) 0%, rgba(3,52,30,0.7) 100%)' }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-3 p-2.5 sm:p-4 text-center">
          <Icon
            strokeWidth={1.5}
            className="w-6 h-6 sm:w-9 sm:h-9 text-white transition-transform duration-300 group-hover:-translate-y-1"
          />
          <h3
            className="text-white font-extrabold uppercase text-[11px] sm:text-base leading-tight tracking-wide"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.45)' }}
          >
            {category.name}
          </h3>
        </div>

        {/* Bottom accent bar on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-finka-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </Link>
    </motion.div>
  )
}
