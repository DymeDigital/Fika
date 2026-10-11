import { Phone, MessageCircle, Clock } from 'lucide-react'
import { SITE, buildWhatsAppLink } from '@/lib/constants'

export default function CtaStrip() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ background: '#116242' }}
      aria-label="Contact CTA"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center reveal">
          {/* Left: heading, hours, CTAs */}
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
              Ready to hire?
            </h2>
            <p className="text-white/60 mt-2 text-base">
              Contact us today — same-day availability on most items.
            </p>

            {/* Business hours */}
            <div className="mt-6 flex items-start gap-3">
              <Clock size={16} className="text-finka-yellow shrink-0 mt-0.5" />
              <ul className="text-sm text-white/70 space-y-1">
                <li className="flex gap-2">
                  <span className="text-white/90 font-medium">Mon – Fri:</span> 07:00 – 17:00
                </li>
                <li className="flex gap-2">
                  <span className="text-white/90 font-medium">Saturday:</span> 07:00 – 13:00
                </li>
                <li className="flex gap-2">
                  <span className="text-white/90 font-medium">Sunday:</span> Closed
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href={buildWhatsAppLink('Hi FIKA, I would like to enquire about equipment hire.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                className="btn-outline"
              >
                <Phone size={16} />
                {SITE.phone}
              </a>
            </div>
          </div>

          {/* Right: map */}
          <div className="h-64 md:h-72 rounded-md overflow-hidden border border-white/15">
            <iframe
              src={SITE.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FIKA Tool & Plant Hire location"
              aria-label="Map showing FIKA Tool & Plant Hire location in Durban"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
