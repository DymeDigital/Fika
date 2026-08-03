'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { SITE } from '@/lib/constants'
import { equipment } from '@/lib/data/equipment'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

const lineReveal = {
  hidden: { y: '110%' },
  show: (delay: number) => ({
    y: '0%',
    transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

const headlineLines = [
  { text: 'Professional Tool', accent: false },
  { text: '& Plant Hire', accent: true },
  { text: 'in Durban', accent: false },
]

const stats = [
  { value: '200+', label: 'Items for hire' },
  { value: '8', label: 'Categories' },
  { value: 'Delivery', label: 'Available' },
]

const heroPicks = [
  'diesel-generator-6kva',
  'pressure-washer-200-bar',
  'plate-compactor',
  'angle-grinder-230mm',
]
  .map((slug) => equipment.find((e) => e.slug === slug))
  .filter((e): e is NonNullable<typeof e> => Boolean(e))

const AUTOPLAY_MS = 3200

function EquipmentCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = heroPicks.length

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive((a) => (a + 1) % count), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, count])

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[250px] sm:h-[290px] md:h-[320px] lg:h-[345px]">
        {heroPicks.map((item, i) => {
          const rel = ((i - active) % count + count) % count
          const isCenter = rel === 0
          const isNext = rel === 1
          const isPrev = rel === count - 1
          const visible = isCenter || isNext || isPrev

          const x = isCenter
            ? '-50%'
            : isNext
            ? 'calc(-50% + 62%)'
            : isPrev
            ? 'calc(-50% - 62%)'
            : rel < count / 2
            ? 'calc(-50% + 140%)'
            : 'calc(-50% - 140%)'
          const scale = isCenter ? 1 : visible ? 0.82 : 0.7
          const opacity = isCenter ? 1 : visible ? 0.55 : 0
          const zIndex = isCenter ? 3 : visible ? 2 : 1

          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${item.name}`}
              aria-current={isCenter}
              className="absolute top-0 left-1/2 w-[180px] sm:w-[210px] md:w-[240px] lg:w-[260px] bg-white rounded-md border border-black/5 shadow-xl p-3 text-left"
              animate={{ x, scale, opacity, zIndex }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-square overflow-hidden rounded-sm bg-black mb-2.5 pointer-events-none">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="260px"
                />
                <span className="absolute top-1.5 left-1.5 bg-finka-yellow text-finka-black text-[10px] font-extrabold px-1.5 py-0.5 rounded-sm">
                  R{item.dailyRate}/day
                </span>
              </div>
              <p
                className="text-xs font-bold uppercase tracking-wide leading-snug pointer-events-none"
                style={{ color: '#03341E' }}
              >
                {item.name}
              </p>
            </motion.button>
          )
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {heroPicks.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? 'w-6 bg-finka-yellow' : 'w-1.5 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#03341E' }}
      aria-label="Hero"
    >
      {/* Subtle industrial grid texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container-site relative pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-24 lg:pb-16 lg:min-h-[96vh] lg:flex lg:items-center">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-16 items-center w-full">
          {/* Copy column */}
          <div className="text-center lg:text-left">
            {/* Location badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.05}
              className="inline-flex items-center gap-1.5 bg-finka-yellow px-3 py-1.5 mt-4 sm:mt-6 mb-6"
            >
              <MapPin size={12} strokeWidth={2.5} className="text-finka-black" />
              <span className="text-[11px] font-extrabold tracking-[0.12em] uppercase text-finka-black">
                Durban, KwaZulu-Natal
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="display-xl text-white mb-5">
              {headlineLines.map((line, i) => (
                <span key={line.text} className="block overflow-hidden pb-1 -mb-1">
                  <motion.span
                    variants={lineReveal}
                    initial="hidden"
                    animate="show"
                    custom={0.15 + i * 0.1}
                    className={`block ${line.accent ? 'text-finka-yellow' : ''}`}
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.25}
              className="w-16 h-1.5 bg-finka-yellow mb-6 mx-auto lg:mx-0"
            />

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="text-lg md:text-xl text-white/75 leading-relaxed mb-9 max-w-lg mx-auto lg:mx-0"
            >
              Reliable equipment for contractors, builders and DIY projects at
              affordable daily hire rates.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Link href="/equipment" className="btn-primary">
                Browse Equipment
                <ArrowRight size={16} />
              </Link>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="btn-outline">
                <Phone size={16} />
                Call Now
              </a>
            </motion.div>
          </div>

          {/* Equipment carousel + stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.35}
          >
            <EquipmentCarousel />

            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-sm px-4 py-2.5 text-left">
                  <div className="text-lg font-extrabold leading-none" style={{ color: '#03341E' }}>
                    {stat.value}
                  </div>
                  <div className="text-[9px] font-bold tracking-wider uppercase text-finka-grey-600 mt-1 whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
