'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { SITE } from '@/lib/constants'

export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex border-t border-white/10 safe-area-pb"
      style={{ background: '#03341E' }}
    >
      <a
        href={`tel:${SITE.phone.replace(/\s/g, '')}`}
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
        aria-label="Call us"
      >
        <Phone size={18} />
        <span className="text-[10px] font-semibold tracking-wider uppercase">Call Now</span>
      </a>
      <div className="w-px bg-white/10" />
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hi, I would like to enquire about equipment hire.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 transition-colors duration-200"
        style={{ background: '#25D366', color: 'white' }}
        aria-label="WhatsApp us"
      >
        <MessageCircle size={18} />
        <span className="text-[10px] font-semibold tracking-wider uppercase">WhatsApp</span>
      </a>
    </div>
  )
}
