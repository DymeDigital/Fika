// Site-wide constants — update these before going live
export const SITE = {
  name: 'FIKA Tool & Plant Hire',
  url: 'https://fikatoolhire.co.za', // no trailing slash — callers append paths
  tagline: 'Professional Tool & Plant Hire in Durban',
  description:
    'Reliable equipment for contractors, builders and DIY projects at affordable daily hire rates.',
  phone: '+27 67 287 6192',
  whatsapp: '+27672876192', // no spaces/dashes for wa.me link
  whatsappDisplay: '+27 67 287 6192',
  email: 'info@fikatoolhire.co.za',
  address: '79 Padfield Road, New Germany, Durban',
  hours: {
    weekdays: 'Monday – Friday: 07:00 – 17:00',
    saturday: 'Saturday: 07:00 – 13:00',
    sunday: 'Sunday: Closed',
  },
  mapEmbedUrl:
    'https://maps.google.com/maps?q=79+Padfield+Road,+New+Germany,+Durban&t=&z=15&ie=UTF8&iwloc=&output=embed',
}

// Structured equivalent of SITE.hours, for LocalBusiness JSON-LD.
// Sunday is omitted (closed) — schema.org has no clean "closed" representation.
export const OPENING_HOURS_SPEC = [
  { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '17:00' },
  { dayOfWeek: ['Saturday'], opens: '07:00', closes: '13:00' },
]

export const WHATSAPP_BASE = `https://wa.me/${SITE.whatsapp}`

export function buildWhatsAppLink(message: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`
}
