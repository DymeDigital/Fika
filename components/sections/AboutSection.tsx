'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [
  'Family-owned and operated in Durban',
  'Quality-maintained equipment, serviced regularly',
  'Transparent daily hire rates — no hidden fees',
  'Knowledgeable staff to advise on the right tool',
  'Flexible hire periods from single days to months',
  'Serving contractors, builders and homeowners',
]

export default function AboutSection() {
  return (
    <section
      className="py-20 md:py-28 border-t"
      style={{ borderColor: '#E5E5E3', background: '#FAFAF9' }}
      aria-labelledby="about-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative"
          >
            {/* Main image */}
            <div className="aspect-[4/3] w-full relative overflow-hidden   p-4">
              <Image
                src="/images/about.png"
                alt="About FIKA Tool & Plant Hire"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent border */}
            <div
              className="absolute -bottom-4 -right-4 w-2/3 h-2/3 -z-10 border-b-2 border-r-2"
              style={{ borderColor: '#116242' }}
            />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <p className="section-label mb-4">Our story</p>
            <h2 id="about-heading" className="display-md mb-5" style={{ color: '#0D0D0D' }}>
              Built on reliability
              <span className="block">and trust</span>
            </h2>
            <div className="section-divider mb-6" />

            <div className="space-y-4 text-base leading-relaxed" style={{ color: '#737370' }}>
              <p>
                FIKA Tool & Plant Hire was founded with a straightforward idea: give
                contractors and homeowners in Durban access to professional-grade
                equipment without the cost of ownership.
              </p>
              <p>
                We&apos;ve grown our fleet based on what our customers actually need —
                not what looks good in a catalogue. Every item is maintained to a
                professional standard and ready to perform from the moment it
                leaves our yard.
              </p>
            </div>

            {/* Values list */}
            <ul className="mt-8 space-y-3">
              {values.map((val) => (
                <li key={val} className="flex items-start gap-3 text-sm" style={{ color: '#3A3A38' }}>
                  <CheckCircle2
                    size={16}
                    className="shrink-0 mt-0.5"
                    style={{ color: '#116242' }}
                  />
                  {val}
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-outline-dark mt-8 self-start inline-flex">
              More about us
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
