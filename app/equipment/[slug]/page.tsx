import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, MessageCircle, Check, ChevronLeft } from 'lucide-react'
import { equipment, getEquipmentBySlug, getRelatedEquipment } from '@/lib/data/equipment'
import EquipmentCard from '@/components/ui/EquipmentCard'
import Reveal from '@/components/ui/Reveal'
import { buildWhatsAppLink, SITE } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return equipment.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = getEquipmentBySlug(slug)
  if (!item) return {}
  return {
    title: `${item.name} Hire — R${item.dailyRate}/day`,
    description: item.description,
  }
}

export default async function EquipmentDetailPage({ params }: Props) {
  const { slug } = await params
  const item = getEquipmentBySlug(slug)
  if (!item) notFound()

  const related = getRelatedEquipment(item, 4)
  const waMessage = `Hi FIKA, I'd like to hire the ${item.name} (R${item.dailyRate}/day). Please advise on availability.`

  return (
    <div className="pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="border-b py-4" style={{ borderColor: '#E5E5E3', background: 'white' }}>
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs" style={{ color: '#A8A8A3' }}>
            <Link href="/" className="hover:text-gray-800 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/equipment" className="hover:text-gray-800 transition-colors">Equipment</Link>
            <span>/</span>
            <Link href={`/equipment?category=${item.categorySlug}`} className="hover:text-gray-800 transition-colors">
              {item.category}
            </Link>
            <span>/</span>
            <span style={{ color: '#0D0D0D' }}>{item.name}</span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <section className="py-12 md:py-16" style={{ background: '#FAFAF9' }}>
        <div className="container-site">
          <Link
            href="/equipment"
            className="inline-flex items-center gap-2 text-sm mb-8 hover:text-black transition-colors"
            style={{ color: '#737370' }}
          >
            <ChevronLeft size={15} />
            Back to Equipment
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <Reveal y={30}>
              <div className="relative aspect-[4/3] overflow-hidden" style={{ background: '#F0F0EE' }}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Availability tag */}
              <div className="mt-4 flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : 'bg-red-400'}`}
                />
                <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#737370' }}>
                  {item.available ? 'Available for hire' : 'Currently unavailable'}
                </span>
              </div>
            </Reveal>

            {/* Details */}
            <Reveal y={30} delay={0.1}>
              {/* Category */}
              <Link
                href={`/equipment?category=${item.categorySlug}`}
                className="section-label hover:opacity-70 transition-opacity mb-3 block"
              >
                {item.category}
              </Link>

              <h1 className="display-md mb-3" style={{ color: '#0D0D0D' }}>
                {item.name}
              </h1>

              {/* Pricing */}
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <div>
                  <span className="text-3xl font-black" style={{ color: '#116242' }}>
                    R{item.dailyRate.toLocaleString('en-ZA')}
                  </span>
                  <span className="text-sm ml-1" style={{ color: '#737370' }}>/day</span>
                </div>
                {item.weeklyRate && (
                  <div className="border-l pl-4" style={{ borderColor: '#E5E5E3' }}>
                    <span className="text-lg font-bold" style={{ color: '#3A3A38' }}>
                      R{item.weeklyRate.toLocaleString('en-ZA')}
                    </span>
                    <span className="text-sm ml-1" style={{ color: '#737370' }}>/week</span>
                  </div>
                )}
              </div>

              <div className="section-divider mb-6" />

              {/* Description */}
              <p className="text-base leading-relaxed mb-8" style={{ color: '#737370' }}>
                {item.description}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href={buildWhatsAppLink(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle size={16} />
                  Hire via WhatsApp
                </a>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                  className="btn-outline-dark"
                >
                  <Phone size={16} />
                  Call to Hire
                </a>
              </div>

              {/* Specifications */}
              {item.specifications.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#0D0D0D' }}>
                    Specifications
                  </h2>
                  <div className="border" style={{ borderColor: '#E5E5E3' }}>
                    {item.specifications.map((spec, i) => (
                      <div
                        key={spec.label}
                        className={`flex justify-between gap-4 px-4 py-3 text-sm ${
                          i % 2 === 0 ? '' : ''
                        }`}
                        style={{
                          borderBottom: i < item.specifications.length - 1 ? '1px solid #E5E5E3' : 'none',
                          background: i % 2 === 0 ? 'white' : '#FAFAF9',
                        }}
                      >
                        <span className="font-medium" style={{ color: '#3A3A38' }}>{spec.label}</span>
                        <span style={{ color: '#737370' }}>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Suitable For */}
              {item.suitableFor.length > 0 && (
                <div>
                  <h2 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#0D0D0D' }}>
                    Suitable For
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.suitableFor.map((use) => (
                      <li key={use} className="flex items-center gap-2.5 text-sm" style={{ color: '#3A3A38' }}>
                        <Check size={13} style={{ color: '#116242' }} className="shrink-0" />
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related equipment */}
      {related.length > 0 && (
        <section className="py-16 border-t" style={{ borderColor: '#E5E5E3', background: 'white' }}>
          <div className="container-site">
            <Reveal>
              <h2 className="text-sm font-bold tracking-widest uppercase mb-8" style={{ color: '#0D0D0D' }}>
                Related Equipment
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((r, i) => (
                <EquipmentCard key={r.id} item={r} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
