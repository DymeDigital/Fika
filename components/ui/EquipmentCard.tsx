'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, MessageCircle, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Equipment } from '@/lib/data/equipment'
import { buildWhatsAppLink, SITE } from '@/lib/constants'

interface EquipmentCardProps {
  item: Equipment
  index?: number
}

export default function EquipmentCard({ item, index = 0 }: EquipmentCardProps) {
  const waMessage = `Hi FIKA, I'd like to hire the ${item.name} (R${item.dailyRate}/day). Please advise on availability.`

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.05, ease: [0.16, 1, 0.3, 1] as const }}
      className="card-equipment group flex flex-col"
    >
      {/* Image */}
      <Link href={`/equipment/${item.slug}`} className="block overflow-hidden aspect-[4/3] relative" style={{ background: '#F7F7F5' }}>
        <div className="absolute inset-0 p-6">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
            quality={92}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        {/* Price badge */}
        <div className="absolute top-3 left-3">
          <span className="price-badge">
            R{item.dailyRate.toLocaleString('en-ZA')} / day
          </span>
        </div>
        {!item.available && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white text-xs font-bold tracking-widest uppercase bg-black/60 px-3 py-1">
              Unavailable
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="mb-1">
          <span className="text-[10px] font-semibold tracking-widest uppercase"
            style={{ color: '#116242' }}>
            {item.category}
          </span>
        </div>
        <Link href={`/equipment/${item.slug}`}>
          <h3 className="text-base font-bold leading-snug mb-2 hover:text-finka-green-light transition-colors"
            style={{ color: '#0D0D0D' }}>
            {item.name}
          </h3>
        </Link>
        <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: '#737370' }}>
          {item.shortDescription}
        </p>

        {/* Weekly rate */}
        {item.weeklyRate && (
          <p className="text-xs mb-4" style={{ color: '#A8A8A3' }}>
            Weekly: R{item.weeklyRate.toLocaleString('en-ZA')}
          </p>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <a
            href={buildWhatsAppLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex-1 justify-center text-xs py-2.5 px-3"
            aria-label={`Hire ${item.name} via WhatsApp`}
          >
            <MessageCircle size={14} />
            Hire Now
          </a>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, '')}`}
            className="btn-outline-dark flex-none px-3 py-2.5"
            aria-label={`Call about ${item.name}`}
          >
            <Phone size={14} />
          </a>
          <Link
            href={`/equipment/${item.slug}`}
            className="btn-outline-dark flex-none px-3 py-2.5"
            aria-label={`View ${item.name} details`}
          >
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
