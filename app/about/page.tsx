import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import CtaStrip from '@/components/sections/CtaStrip'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about FIKA Tool & Plant Hire — a family-owned equipment hire business based in Durban, KwaZulu-Natal.',
}

const values = [
  {
    title: 'Quality Equipment',
    body: 'Every item in our fleet is regularly serviced and maintained to a professional standard.',
  },
  {
    title: 'Transparent Pricing',
    body: 'Daily hire rates are clearly listed. No hidden fees, no surprises.',
  },
  {
    title: 'Expert Advice',
    body: 'Not sure which tool is right for your job? Our team is happy to guide you.',
  },
  {
    title: 'Flexible Hire',
    body: 'Hire by the day, week or month. Competitive long-term rates available.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Header */}
      <div className="py-16 md:py-20" style={{ background: '#03341E' }}>
        <div className="container-site">
          <Reveal>
            <p className="section-label mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Our company
            </p>
            <h1 className="display-lg text-white">About FIKA</h1>
          </Reveal>
        </div>
      </div>

      {/* Story section */}
      <section className="py-20 md:py-28" style={{ background: 'white' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Image placeholder */}
            <Reveal y={30} className="relative">
              <div className="aspect-[4/5] w-full relative overflow-hidden bg-neutral-100 p-4">
                <Image
                  src="/images/about.png"
                  alt="About FIKA Tool & Plant Hire"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative border */}
              <div
                className="absolute -bottom-5 -right-5 w-3/4 h-3/4 -z-10 border-b-2 border-r-2"
                style={{ borderColor: '#116242' }}
              />
            </Reveal>

            {/* Right: Story */}
            <Reveal y={30} delay={0.1} className="lg:pt-4">
              <p className="section-label mb-4">Our story</p>
              <h2 className="display-md mb-4" style={{ color: '#0D0D0D' }}>
                Built on reliability
              </h2>
              <div className="section-divider mb-8" />

              <div className="space-y-5 text-base leading-loose" style={{ color: '#737370' }}>
                <p>
                  FIKA Tool & Plant Hire was established with a straightforward purpose:
                  give contractors, builders and homeowners in Durban access to
                  professional-grade equipment without the burden of ownership.
                </p>
                <p>
                  We understand that not every project justifies buying a tool. Whether
                  you need a breaker for a weekend demolition job, a generator for a
                  site without power, or a pressure washer for a commercial clean-up —
                  we have it ready and maintained.
                </p>
                <p>
                  Our fleet has been carefully selected based on what customers in
                  KwaZulu-Natal actually need. We don&apos;t carry every tool ever made.
                  We carry the right tools, maintained to a high standard, available
                  when you need them.
                </p>
                <p>
                  When you hire from FIKA, you&apos;re dealing directly with the owner —
                  not a call centre. That means faster answers, honest advice, and
                  equipment that performs.
                </p>
              </div>

              <Link href="/contact" className="btn-outline-dark mt-10 inline-flex">
                Get in touch
                <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24" style={{ background: '#F5F5F4' }}>
        <div className="container-site">
          <Reveal className="mb-12">
            <p className="section-label mb-3">What we stand for</p>
            <h2 className="display-md" style={{ color: '#0D0D0D' }}>Our commitment</h2>
            <div className="mt-4 section-divider" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <Reveal key={val.title} delay={i * 0.08}>
                <div
                  className="p-6 bg-white border h-full"
                  style={{ borderColor: '#E5E5E3' }}
                >
                  <CheckCircle2 size={22} className="mb-4" style={{ color: '#116242' }} />
                  <h3 className="font-bold text-sm mb-2 tracking-wide" style={{ color: '#0D0D0D' }}>
                    {val.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#737370' }}>
                    {val.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </div>
  )
}
