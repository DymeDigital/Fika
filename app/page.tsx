import Hero from '@/components/sections/Hero'
import CategoryGrid from '@/components/sections/CategoryGrid'
import AboutSection from '@/components/sections/AboutSection'
import CtaStrip from '@/components/sections/CtaStrip'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <AboutSection />
      <CtaStrip />
    </>
  )
}
