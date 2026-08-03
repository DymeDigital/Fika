export interface Specification {
  label: string
  value: string
}

export interface Equipment {
  id: string
  name: string
  slug: string
  category: string
  categorySlug: string
  dailyRate: number
  weeklyRate?: number
  description: string
  shortDescription: string
  image: string
  gallery?: string[]
  specifications: Specification[]
  suitableFor: string[]
  featured: boolean
  available: boolean
}

export const equipment: Equipment[] = [
  {
    id: 'heavy-duty-breaker',
    name: 'Heavy Duty Breaker',
    slug: 'heavy-duty-breaker',
    category: 'Power Tools',
    categorySlug: 'power-tools',
    dailyRate: 450,
    weeklyRate: 1800,
    description:
      'Professional demolition hammer engineered for heavy concrete and masonry breaking. Features a powerful SDS-MAX drive system with anti-vibration technology for extended operator comfort on long projects.',
    shortDescription: 'Professional demolition hammer for concrete and masonry applications.',
    image: '/images/equipment/breaker.jpg',
    specifications: [
      { label: 'Impact Energy', value: '45 J' },
      { label: 'No-load Strokes', value: '900–1,400 /min' },
      { label: 'Weight', value: '10.5 kg' },
      { label: 'Chuck System', value: 'SDS-MAX' },
      { label: 'Power Input', value: '1,700 W' },
      { label: 'Cable Length', value: '5 m' },
    ],
    suitableFor: [
      'Concrete demolition',
      'Masonry breaking',
      'Asphalt removal',
      'Tile removal',
      'Trenching',
    ],
    featured: true,
    available: true,
  },
  {
    id: 'angle-grinder-230mm',
    name: 'Angle Grinder 230mm',
    slug: 'angle-grinder-230mm',
    category: 'Power Tools',
    categorySlug: 'power-tools',
    dailyRate: 150,
    weeklyRate: 600,
    description:
      'Heavy-duty 230mm angle grinder suitable for cutting, grinding and polishing of metal, stone and masonry. Variable speed control and safety clutch for professional use.',
    shortDescription: 'Heavy-duty grinder for cutting metal, stone and masonry.',
    image: '/images/equipment/angle-grinder.jpg',
    specifications: [
      { label: 'Disc Diameter', value: '230 mm' },
      { label: 'No-load Speed', value: '6,500 rpm' },
      { label: 'Input Power', value: '2,400 W' },
      { label: 'Weight', value: '5.4 kg' },
      { label: 'Spindle Thread', value: 'M14' },
    ],
    suitableFor: ['Metal cutting', 'Stone grinding', 'Surface preparation', 'Weld cleaning'],
    featured: true,
    available: true,
  },
  {
    id: 'plate-compactor',
    name: 'Plate Compactor',
    slug: 'plate-compactor',
    category: 'Compaction',
    categorySlug: 'compaction',
    dailyRate: 380,
    weeklyRate: 1500,
    description:
      'Forward-plate compactor with a Honda GX engine ideal for compacting granular soils, sand, gravel and asphalt. High centrifugal force ensures thorough compaction in fewer passes.',
    shortDescription: 'Honda-powered plate compactor for granular soils and asphalt.',
    image: '/images/equipment/plate-compactor.jpg',
    specifications: [
      { label: 'Engine', value: 'Honda GX160' },
      { label: 'Plate Size', value: '500 × 430 mm' },
      { label: 'Centrifugal Force', value: '13 kN' },
      { label: 'Working Width', value: '500 mm' },
      { label: 'Weight', value: '68 kg' },
    ],
    suitableFor: ['Soil compaction', 'Sand & gravel', 'Asphalt repair', 'Paving prep'],
    featured: true,
    available: true,
  },
  {
    id: 'pressure-washer',
    name: 'Pressure Washer 200 Bar',
    slug: 'pressure-washer-200-bar',
    category: 'Cleaning Equipment',
    categorySlug: 'cleaning',
    dailyRate: 300,
    weeklyRate: 1200,
    description:
      'High-pressure cold water cleaner delivering 200 bar of cleaning power. Ideal for cleaning driveways, vehicles, buildings and heavy machinery. Comes with lance, nozzle set and 10m hose.',
    shortDescription: 'High-pressure 200 bar cold water cleaner with accessories.',
    image: '/images/equipment/pressure-washer.jpg',
    specifications: [
      { label: 'Pressure', value: '200 bar' },
      { label: 'Flow Rate', value: '10 L/min' },
      { label: 'Motor', value: '3,000 W' },
      { label: 'Hose Length', value: '10 m' },
      { label: 'Weight', value: '22 kg' },
    ],
    suitableFor: [
      'Driveway cleaning',
      'Vehicle washing',
      'Building facades',
      'Machinery degreasing',
    ],
    featured: true,
    available: true,
  },
  {
    id: 'diesel-generator-6kva',
    name: 'Diesel Generator 6.5kVA',
    slug: 'diesel-generator-6kva',
    category: 'Generators',
    categorySlug: 'generators',
    dailyRate: 550,
    weeklyRate: 2200,
    description:
      'Silent diesel generator with 6.5kVA output. Ideal for construction sites, outdoor events and loadshedding backup. Electric start, AVR regulated output and 12-hour run time.',
    shortDescription: 'Silent diesel generator — ideal for construction and load shedding.',
    image: '/images/equipment/generator.jpg',
    specifications: [
      { label: 'Rated Output', value: '6.5 kVA' },
      { label: 'Fuel Type', value: 'Diesel' },
      { label: 'Run Time', value: '~12 hours (50% load)' },
      { label: 'Noise Level', value: '68 dB @ 7m' },
      { label: 'Outlets', value: '2× 16A + 1× 32A' },
      { label: 'Weight', value: '142 kg' },
    ],
    suitableFor: ['Construction sites', 'Load shedding backup', 'Outdoor events', 'Remote work'],
    featured: true,
    available: true,
  },
  {
    id: 'petrol-lawn-mower',
    name: 'Petrol Lawn Mower',
    slug: 'petrol-lawn-mower',
    category: 'Garden Equipment',
    categorySlug: 'garden',
    dailyRate: 250,
    weeklyRate: 950,
    description:
      'Self-propelled petrol lawn mower with 51cm cutting width and 6-speed variable drive. Grass collector included. Suitable for domestic lawns up to 1,500m².',
    shortDescription: 'Self-propelled 51cm petrol mower with grass collector.',
    image: '/images/equipment/lawn-mower.jpg',
    specifications: [
      { label: 'Engine', value: 'Honda GXV160' },
      { label: 'Cutting Width', value: '51 cm' },
      { label: 'Cutting Heights', value: '25–75 mm (7 positions)' },
      { label: 'Drive', value: 'Self-propelled, 6-speed' },
      { label: 'Collector', value: '60 L' },
    ],
    suitableFor: ['Domestic lawns', 'Sports fields', 'Estates', 'Parks'],
    featured: false,
    available: true,
  },
  {
    id: 'concrete-saw-350mm',
    name: 'Concrete Saw 350mm',
    slug: 'concrete-saw-350mm',
    category: 'Cutting Equipment',
    categorySlug: 'cutting',
    dailyRate: 400,
    weeklyRate: 1600,
    description:
      'Petrol-powered concrete and masonry saw for cutting expansion joints, kerbing, paving and road surfaces. Comes with a diamond blade. Water suppression system included.',
    shortDescription: 'Petrol concrete saw for roads, paving and expansion joints.',
    image: '/images/equipment/concrete-saw.jpg',
    specifications: [
      { label: 'Engine', value: 'Robin EH41' },
      { label: 'Blade Diameter', value: '350 mm' },
      { label: 'Max Cutting Depth', value: '115 mm' },
      { label: 'Water Supply', value: 'Built-in tank' },
      { label: 'Weight', value: '55 kg' },
    ],
    suitableFor: [
      'Expansion joints',
      'Road cutting',
      'Kerbing',
      'Paving',
      'Masonry control cuts',
    ],
    featured: true,
    available: true,
  },
  {
    id: 'extension-ladder-6m',
    name: 'Extension Ladder 6m',
    slug: 'extension-ladder-6m',
    category: 'Ladders & Access',
    categorySlug: 'ladders',
    dailyRate: 120,
    weeklyRate: 480,
    description:
      'Heavy-duty aluminium extension ladder rated to 150kg. Anti-slip feet and locking rungs for safe use on construction and maintenance projects.',
    shortDescription: 'Aluminium extension ladder, 6m reach, 150kg rated.',
    image: '/images/equipment/ladder.jpg',
    specifications: [
      { label: 'Max Height', value: '6 m' },
      { label: 'Load Rating', value: '150 kg' },
      { label: 'Material', value: 'Aluminium' },
      { label: 'Closed Length', value: '3.5 m' },
      { label: 'Weight', value: '10.2 kg' },
    ],
    suitableFor: ['Painting', 'Roofing access', 'Electrical work', 'Maintenance'],
    featured: false,
    available: true,
  },
  {
    id: 'air-compressor-200l',
    name: 'Air Compressor 200L',
    slug: 'air-compressor-200l',
    category: 'Air Compressors',
    categorySlug: 'air-compressors',
    dailyRate: 280,
    weeklyRate: 1100,
    description:
      'Belt-drive upright air compressor with 200L tank. Powers nail guns, spray painters, impact wrenches and pneumatic tools on construction sites.',
    shortDescription: 'Belt-drive 200L compressor for pneumatic tools and spray painting.',
    image: '/images/equipment/compressor.jpg',
    specifications: [
      { label: 'Tank Capacity', value: '200 L' },
      { label: 'Max Pressure', value: '10 bar' },
      { label: 'Air Delivery', value: '250 L/min' },
      { label: 'Motor', value: '3 HP / 2.2 kW' },
      { label: 'Drive', value: 'Belt-drive' },
      { label: 'Weight', value: '95 kg' },
    ],
    suitableFor: ['Nail guns', 'Spray painting', 'Impact wrenches', 'Sand blasting'],
    featured: false,
    available: true,
  },
  {
    id: 'sds-rotary-hammer',
    name: 'SDS+ Rotary Hammer',
    slug: 'sds-rotary-hammer',
    category: 'Power Tools',
    categorySlug: 'power-tools',
    dailyRate: 200,
    weeklyRate: 780,
    description:
      'Professional SDS-plus rotary hammer with 3-function selector (rotary, hammer-drill, chisel mode). Ideal for drilling concrete, brick and masonry up to 26mm diameter.',
    shortDescription: 'Professional 3-mode rotary hammer for drilling concrete and brick.',
    image: '/images/equipment/rotary-hammer.jpg',
    specifications: [
      { label: 'Impact Energy', value: '3.2 J' },
      { label: 'Max Drill Diameter (Concrete)', value: '26 mm' },
      { label: 'No-load Speed', value: '0–1,100 rpm' },
      { label: 'Input Power', value: '800 W' },
      { label: 'Chuck System', value: 'SDS-plus' },
      { label: 'Weight', value: '3.2 kg' },
    ],
    suitableFor: ['Concrete drilling', 'Brick & masonry', 'Anchoring', 'Chiselling'],
    featured: false,
    available: true,
  },
  {
    id: 'rammer-jumping-jack',
    name: 'Rammer / Jumping Jack',
    slug: 'rammer-jumping-jack',
    category: 'Compaction',
    categorySlug: 'compaction',
    dailyRate: 350,
    weeklyRate: 1400,
    description:
      'Petrol-powered jumping jack rammer for compacting cohesive and mixed soils in confined spaces like trenches. Ideal for pipe-laying and foundation backfill applications.',
    shortDescription: 'Jumping jack rammer for trench compaction and cohesive soils.',
    image: '/images/equipment/rammer.jpg',
    specifications: [
      { label: 'Engine', value: 'Honda GX100' },
      { label: 'Shoe Size', value: '280 × 330 mm' },
      { label: 'Impact Rate', value: '700 blows/min' },
      { label: 'Compaction Depth', value: 'Up to 600 mm' },
      { label: 'Weight', value: '62 kg' },
    ],
    suitableFor: ['Trench backfill', 'Pipe-laying', 'Foundation prep', 'Cohesive soils'],
    featured: false,
    available: true,
  },
  {
    id: 'carpet-cleaner-wet-dry',
    name: 'Wet & Dry Vacuum',
    slug: 'wet-dry-vacuum',
    category: 'Cleaning Equipment',
    categorySlug: 'cleaning',
    dailyRate: 200,
    weeklyRate: 780,
    description:
      'Industrial-grade wet and dry vacuum with 80L tank capacity. Suitable for heavy-duty site clean-ups, water extraction and dust collection on construction and renovation projects.',
    shortDescription: 'Industrial 80L wet & dry vacuum for construction clean-up.',
    image: '/images/equipment/wet-dry-vac.jpg',
    specifications: [
      { label: 'Tank Capacity', value: '80 L' },
      { label: 'Motor Power', value: '2,400 W' },
      { label: 'Airflow', value: '3,500 L/min' },
      { label: 'Hose Length', value: '3 m' },
      { label: 'Weight', value: '18 kg' },
    ],
    suitableFor: ['Site clean-up', 'Water extraction', 'Dust control', 'Renovation clean-up'],
    featured: false,
    available: true,
  },
]

export const featuredEquipment = equipment.filter((e) => e.featured)

export function getEquipmentByCategory(categorySlug: string) {
  return equipment.filter((e) => e.categorySlug === categorySlug)
}

export function getEquipmentBySlug(slug: string) {
  return equipment.find((e) => e.slug === slug) ?? null
}

export function getRelatedEquipment(current: Equipment, limit = 4) {
  return equipment
    .filter((e) => e.categorySlug === current.categorySlug && e.id !== current.id)
    .slice(0, limit)
}
