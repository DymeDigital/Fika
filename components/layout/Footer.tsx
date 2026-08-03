import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { categories } from '@/lib/data/categories'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#03341E' }} className="text-white/65">
      <div className="container-site">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <div className="bg-white rounded-md px-4 py-3 inline-flex items-center">
                <div className="relative h-9 w-[115px]">
                  <Image
                    src="/images/logo-mark.png"
                    alt="FIKA Tool & Plant Hire"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Professional tool and plant hire in Durban, KwaZulu-Natal.
              Quality equipment at affordable daily rates.
            </p>
            <div className="section-divider" />
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'Equipment Catalogue', href: '/equipment' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment categories */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-5">
              Equipment
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/equipment?category=${cat.slug}`}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm">
                <Phone size={15} className="shrink-0 mt-0.5 text-finka-yellow" />
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone size={15} className="shrink-0 mt-0.5" style={{ color: '#25D366' }} />
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail size={15} className="shrink-0 mt-0.5 text-finka-yellow" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={15} className="shrink-0 mt-0.5 text-finka-yellow" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock size={15} className="shrink-0 mt-0.5 text-finka-yellow" />
                <div className="space-y-0.5">
                  <div>{SITE.hours.weekdays}</div>
                  <div>{SITE.hours.saturday}</div>
                  <div>{SITE.hours.sunday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>Durban, KwaZulu-Natal, South Africa</p>
        </div>
      </div>
    </footer>
  )
}
