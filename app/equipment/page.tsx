import EquipmentCatalogue from './EquipmentCatalogue'
import Reveal from '@/components/ui/Reveal'

export default function EquipmentPage() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Page header */}
      <div className="py-16 md:py-20" style={{ background: '#03341E' }}>
        <div className="container-site">
          <Reveal>
            <p className="section-label mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Our catalogue
            </p>
            <h1 className="display-lg text-white">Equipment for Hire</h1>
            <p className="mt-3 max-w-lg" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Browse our full range of tools and plant. Pricing shown is per day.
              Contact us for weekly rates.
            </p>
          </Reveal>
        </div>
      </div>

      <EquipmentCatalogue />
    </div>
  )
}
