'use client'

import { useState } from 'react'
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { SITE, buildWhatsAppLink } from '@/lib/constants'
import Reveal from '@/components/ui/Reveal'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, '')}`,
    iconColor: '#116242',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: SITE.whatsappDisplay,
    href: buildWhatsAppLink('Hi FIKA, I would like to enquire about equipment hire.'),
    target: '_blank',
    iconColor: '#25D366',
  },
  {
    icon: Mail,
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    iconColor: '#116242',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: SITE.address,
    href: '#map',
    iconColor: '#116242',
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    equipment: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = `Hi FIKA,\n\nName: ${formState.name}\nPhone: ${formState.phone}\nEmail: ${formState.email}\nEquipment: ${formState.equipment}\nMessage: ${formState.message}`
    window.open(buildWhatsAppLink(msg), '_blank')
    setSubmitted(true)
  }

  return (
    <div className="pt-24 md:pt-28">
      {/* Header */}
      <div className="py-16 md:py-20" style={{ background: '#03341E' }}>
        <div className="container-site">
          <Reveal>
            <p className="section-label mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Get in touch
            </p>
            <h1 className="display-lg text-white">Contact Us</h1>
            <p className="mt-3 max-w-lg" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Call, WhatsApp or fill in the form below. We&apos;ll get back to you promptly.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Main two-col */}
      <section className="py-16 md:py-24" style={{ background: '#FAFAF9' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact details */}
            <Reveal y={30}>
              <p className="section-label mb-4">Contact information</p>
              <h2 className="display-md mb-4" style={{ color: '#0D0D0D' }}>
                How to reach us
              </h2>
              <div className="section-divider mb-8" />

              <ul className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <li key={info.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 border flex items-center justify-center shrink-0"
                      style={{ borderColor: '#E5E5E3', background: 'white' }}
                    >
                      <info.icon size={18} style={{ color: info.iconColor }} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-bold tracking-widest uppercase mb-0.5"
                        style={{ color: '#A8A8A3' }}
                      >
                        {info.label}
                      </p>
                      <a
                        href={info.href}
                        target={info.target ?? undefined}
                        rel="noopener noreferrer"
                        className="text-base font-medium hover:opacity-70 transition-opacity"
                        style={{ color: '#0D0D0D' }}
                      >
                        {info.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Hours */}
              <div
                className="p-6 border"
                style={{ borderColor: '#E5E5E3', background: 'white' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={16} style={{ color: '#116242' }} />
                  <h3
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: '#0D0D0D' }}
                  >
                    Business Hours
                  </h3>
                </div>
                <ul className="space-y-2 text-sm" style={{ color: '#737370' }}>
                  {[
                    ['Monday – Friday', '07:00 – 17:00'],
                    ['Saturday', '07:00 – 13:00'],
                    ['Sunday', 'Closed'],
                  ].map(([day, hours]) => (
                    <li key={day} className="flex justify-between gap-4">
                      <span>{day}</span>
                      <span
                        className="font-medium"
                        style={{ color: hours === 'Closed' ? '#737370' : '#0D0D0D' }}
                      >
                        {hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Right: Form */}
            <Reveal y={30} delay={0.1}>
              <p className="section-label mb-4">Send an enquiry</p>
              <h2 className="display-md mb-4" style={{ color: '#0D0D0D' }}>
                Hire enquiry form
              </h2>
              <div className="section-divider mb-8" />

              {submitted ? (
                <div
                  className="p-10 border text-center"
                  style={{ borderColor: '#E5E5E3', background: 'white' }}
                >
                  <CheckCircle size={40} className="mx-auto mb-4" style={{ color: '#116242' }} />
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#0D0D0D' }}>
                    Message sent via WhatsApp
                  </h3>
                  <p className="text-sm" style={{ color: '#737370' }}>
                    We&apos;ve opened WhatsApp with your enquiry. We&apos;ll get back to you shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline-dark mt-6">
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold tracking-widest uppercase mb-2"
                        style={{ color: '#0D0D0D' }}
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold tracking-widest uppercase mb-2"
                        style={{ color: '#0D0D0D' }}
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+27 XX XXX XXXX"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold tracking-widest uppercase mb-2"
                      style={{ color: '#0D0D0D' }}
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="equipment"
                      className="block text-xs font-bold tracking-widest uppercase mb-2"
                      style={{ color: '#0D0D0D' }}
                    >
                      Equipment Required
                    </label>
                    <input
                      id="equipment"
                      name="equipment"
                      type="text"
                      value={formState.equipment}
                      onChange={handleChange}
                      placeholder="e.g. Jack Hammer, Plate Compactor"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold tracking-widest uppercase mb-2"
                      style={{ color: '#0D0D0D' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Hire dates, location, any other details..."
                      className="form-input resize-none"
                    />
                  </div>

                  <p className="text-xs" style={{ color: '#A8A8A3' }}>
                    * Submitting this form will open WhatsApp with your enquiry.
                  </p>

                  <button type="submit" className="btn-whatsapp w-full justify-center">
                    <Send size={15} />
                    Send Enquiry via WhatsApp
                  </button>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex-1 h-px" style={{ background: '#E5E5E3' }} />
                    <span className="text-xs" style={{ color: '#A8A8A3' }}>
                      or call directly
                    </span>
                    <div className="flex-1 h-px" style={{ background: '#E5E5E3' }} />
                  </div>

                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                    className="btn-outline-dark w-full justify-center"
                  >
                    <Phone size={15} />
                    Call {SITE.phone}
                  </a>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section
        id="map"
        className="h-96 border-t"
        style={{ borderColor: '#E5E5E3' }}
      >
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
      </section>
    </div>
  )
}
