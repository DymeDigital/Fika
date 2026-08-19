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
    id: 'jack-hammer',
    name: 'Jack Hammer',
    slug: 'jack-hammer',
    category: 'Power Tools',
    categorySlug: 'power-tools',
    dailyRate: 699,
    description:
      'Professional heavy-duty jack hammer designed for demanding demolition tasks on concrete, brick, and asphalt. High-performance motor and premium build quality ensure maximum impact energy.',
    shortDescription: 'Professional heavy-duty jack hammer for serious concrete demolition.',
    image: '/images/equipment/hire/heavy-duty-breaker.webp',
    specifications: [
      { label: 'Voltage', value: '220-240V ~ 50/60Hz' },
      { label: 'Input Power', value: '2200W' },
      { label: 'Impact Rate', value: '950bpm' },
      { label: 'Impact Force', value: '75J' },
      { label: 'Chuck System', value: 'HEX chuck system' },
    ],
    suitableFor: [
      'Heavy concrete demolition',
      'Asphalt breaking',
      'Foundation removal',
      'Trenching work',
    ],
    featured: true,
    available: true,
  },
  {
    id: 'wacker-rammer',
    name: 'Wacker Compactor',
    slug: 'wacker-compactor',
    category: 'Compaction',
    categorySlug: 'compaction',
    dailyRate: 599,
    description:
      'High-performance petrol-powered compaction rammer (Wacker), designed for compacting cohesive, mixed, and granular soils in tight or confined areas.',
    shortDescription: 'Heavy-duty petrol wacker compactor for confined soil compaction.',
    image: '/images/equipment/hire/wacker-compactor.jpeg',
    specifications: [
      { label: 'Engine', value: 'Petrol Engine' },
      { label: 'Use Case', value: 'Confined space compaction' },
      { label: 'Fuel', value: 'Unleaded Petrol' },
    ],
    suitableFor: ['Trench compaction', 'Utility line backfill', 'Foundation prep', 'Cohesive soil compaction'],
    featured: true,
    available: true,
  },
  {
    id: 'plate-compactor',
    name: 'Plate Compactor',
    slug: 'plate-compactor',
    category: 'Compaction',
    categorySlug: 'compaction',
    dailyRate: 400,
    description:
      'Petrol-powered plate compactor ideal for sub-base preparation, roadwork, paving projects, and soil/asphalt compaction.',
    shortDescription: 'Petrol plate compactor for sub-base and paving preparation.',
    image: '/images/equipment/hire/plate-compactor.webp',
    specifications: [
      { label: 'Engine', value: 'Petrol Engine' },
      { label: 'Fuel', value: 'Unleaded Petrol' },
      { label: 'Base Plate', value: 'Steel plate' },
    ],
    suitableFor: ['Driveway paving prep', 'Sand & gravel compaction', 'Asphalt patch repairs', 'Soil stabilization'],
    featured: true,
    available: true,
  },
  {
    id: 'pressure-washer-500',
    name: 'High Pressure Washer',
    slug: 'high-pressure-washer',
    category: 'Cleaning Equipment',
    categorySlug: 'cleaning',
    dailyRate: 500,
    description:
      'Commercial-grade petrol high-pressure washer designed to tackle tough dirt, mold, grease, and grime on various surfaces.',
    shortDescription: 'Commercial petrol pressure washer for heavy cleaning.',
    image: '/images/equipment/hire/high-pressure-washer.jpeg',
    specifications: [
      { label: 'Engine', value: 'Petrol Engine' },
      { label: 'Hose', value: 'Heavy duty pressure hose' },
      { label: 'Lances', value: 'Multi-nozzle tips' },
    ],
    suitableFor: ['Driveway cleaning', 'Roof cleaning', 'Vehicle washing', 'Facade preparation'],
    featured: true,
    available: true,
  },
  {
    id: 'air-compressor-150l',
    name: '150L Compressor',
    slug: 'air-compressor-150l',
    category: 'Air Compressors',
    categorySlug: 'air-compressors',
    dailyRate: 400,
    description:
      '150L air compressor providing high volume airflow to power various pneumatic tools, sprayers, and industrial equipment.',
    shortDescription: '150L industrial compressor for pneumatic systems.',
    image: '/images/equipment/hire/air-compressor-150l.jpeg',
    specifications: [
      { label: 'Capacity', value: '150 Liters' },
      { label: 'Power Source', value: 'Electric' },
      { label: 'Lubrication', value: 'Oil lubricated' },
    ],
    suitableFor: ['Spray painting', 'Pneumatic nailers', 'Impact wrenches', 'Tire inflation'],
    featured: false,
    available: true,
  },
  {
    id: 'vacuum-70l',
    name: '70L Industrial Vacuum',
    slug: 'vacuum-70l',
    category: 'Cleaning Equipment',
    categorySlug: 'cleaning',
    dailyRate: 250,
    description:
      '70L industrial wet & dry vacuum designed for quick cleanup of dust, debris, and liquids on commercial and residential sites.',
    shortDescription: '70L wet & dry industrial vacuum.',
    image: '/images/equipment/hire/vacuum-70l.webp',
    specifications: [
      { label: 'Capacity', value: '70 Liters' },
      { label: 'Function', value: 'Wet & Dry extraction' },
      { label: 'Voltage', value: '220-240V' },
    ],
    suitableFor: ['Site cleanup', 'Flooded area extraction', 'Debris collection', 'Workshop vacuuming'],
    featured: false,
    available: true,
  },
  {
    id: 'upholstery-cleaner-750',
    name: 'Upholstery Cleaner Pro',
    slug: 'upholstery-cleaner-pro',
    category: 'Cleaning Equipment',
    categorySlug: 'cleaning',
    dailyRate: 750,
    description:
      'Professional-grade upholstery and carpet extractor with powerful suction for deep fabric cleaning and water reclamation.',
    shortDescription: 'Professional upholstery and carpet extraction cleaner.',
    image: '/images/equipment/hire/carpet-cleaner-extractor.webp',
    specifications: [
      { label: 'Power', value: 'Electric' },
      { label: 'Attachments', value: 'Hand tool & carpet wand' },
      { label: 'Type', value: 'Spray extraction' },
    ],
    suitableFor: ['Car seat cleaning', 'Sofa deep cleaning', 'Rug washing', 'Mattress cleaning'],
    featured: true,
    available: true,
  },
  {
    id: 'floor-scrubber-polisher',
    name: 'Floor Scrubber / Polisher',
    slug: 'floor-scrubber-polisher',
    category: 'Cleaning Equipment',
    categorySlug: 'cleaning',
    dailyRate: 500,
    description:
      'Single-disc floor scrubber and polisher designed to scrub, clean, and polish hard floor surfaces with ease and efficiency.',
    shortDescription: 'Single-disc scrubber and polisher for hard floors.',
    image: '/images/equipment/hire/floor-scrubber-polisher.webp',
    specifications: [
      { label: 'Type', value: 'Single Disc' },
      { label: 'Power Source', value: '220V Electric' },
      { label: 'Controls', value: 'Ergonomic handle' },
    ],
    suitableFor: ['Floor polishing', 'Tile scrubbing', 'Concrete floor cleaning', 'Floor buffing'],
    featured: false,
    available: true,
  },
  {
    id: 'surface-cleaner',
    name: 'Rotary Surface Cleaner',
    slug: 'rotary-surface-cleaner',
    category: 'Cleaning Equipment',
    categorySlug: 'cleaning',
    dailyRate: 400,
    description:
      'Rotary flat surface cleaner attachment for pressure washers. Speeds up large flat surface washing while preventing zebra striping.',
    shortDescription: 'Flat surface rotary cleaner for driveways and patios.',
    image: '/images/equipment/hire/rotary-surface-cleaner.webp',
    specifications: [
      { label: 'Operation', value: 'Dual rotating spray jets' },
      { label: 'Mounting', value: 'Easy-glide castors' },
      { label: 'Compatible', value: 'High pressure lances' },
    ],
    suitableFor: ['Driveway washing', 'Large concrete areas', 'Parking lots', 'Patios & paving'],
    featured: false,
    available: true,
  },
  {
    id: 'airless-paint-sprayer',
    name: 'Airless Paint Sprayer',
    slug: 'airless-paint-sprayer',
    category: 'Power Tools',
    categorySlug: 'power-tools',
    dailyRate: 650,
    description:
      'Airless paint sprayer designed to provide rapid, uniform coverage on large painting and sealing projects.',
    shortDescription: 'Professional airless paint and coating sprayer.',
    image: '/images/equipment/hire/airless-paint-sprayer.webp',
    specifications: [
      { label: 'System', value: 'Airless high pressure' },
      { label: 'Power Source', value: 'Electric motor' },
      { label: 'Accessories', value: 'Spray gun & high pressure hose' },
    ],
    suitableFor: ['Interior wall painting', 'Exterior wall coating', 'Roof sealing', 'Fencing paint application'],
    featured: false,
    available: true,
  },
  {
    id: 'carpet-cleaner-std',
    name: 'Carpet Cleaner Extractor',
    slug: 'carpet-cleaner-extractor',
    category: 'Cleaning Equipment',
    categorySlug: 'cleaning',
    dailyRate: 650,
    description:
      'High-performance Karcher spray-extraction machine for deep-cleaning carpets, rugs, and commercial textiles.',
    shortDescription: 'Deep cleaning carpet and fabric extraction unit.',
    image: '/images/equipment/hire/upholstery-cleaner-pro.jpeg',
    specifications: [
      { label: 'Brand', value: 'Kärcher' },
      { label: 'Type', value: 'Spray extraction' },
      { label: 'Suction', value: 'High extraction rate' },
    ],
    suitableFor: ['Carpet restoration', 'Office rug cleaning', 'Fabric step washing'],
    featured: false,
    available: true,
  },
  {
    id: 'hedge-trimmer-petrol',
    name: 'Hedge Trimmer',
    slug: 'hedge-trimmer',
    category: 'Garden Equipment',
    categorySlug: 'garden',
    dailyRate: 350,
    description:
      'Petrol-powered double-sided hedge trimmer designed to shape and cut through branches, hedges, and garden overgrowth quickly.',
    shortDescription: 'Double-sided petrol trimmer for hedges and bushes.',
    image: '/images/equipment/hire/hedge-trimmer.webp',
    specifications: [
      { label: 'Engine', value: '2-Stroke Petrol Engine' },
      { label: 'Blade', value: 'Double-sided reciprocating' },
      { label: 'Fuel', value: 'Petrol & 2-stroke oil mix' },
    ],
    suitableFor: ['Hedge trimming', 'Shrub shaping', 'Garden maintenance'],
    featured: false,
    available: true,
  },
  {
    id: 'pole-saw-petrol',
    name: 'Petrol Pole Saw',
    slug: 'pole-saw',
    category: 'Garden Equipment',
    categorySlug: 'garden',
    dailyRate: 400,
    description:
      'Telescopic petrol pole saw for reaching and pruning high branches and trees safely from ground level.',
    shortDescription: 'Telescopic petrol pole saw for high tree trimming.',
    image: '/images/equipment/hire/pole-saw.webp',
    specifications: [
      { label: 'Type', value: 'Pole-mounted chainsaw' },
      { label: 'Power', value: '2-Stroke Petrol Engine' },
      { label: 'Advantage', value: 'Eliminates ladder work' },
    ],
    suitableFor: ['High branch pruning', 'Tree trimming', 'Overhang clearing'],
    featured: false,
    available: true,
  },
  {
    id: 'brush-cutter-petrol',
    name: 'Brush Cutter',
    slug: 'brush-cutter',
    category: 'Garden Equipment',
    categorySlug: 'garden',
    dailyRate: 350,
    description:
      'Heavy-duty petrol brush cutter and grass trimmer. Ideal for cutting thick brush, high grass, and dense garden weeds.',
    shortDescription: 'Heavy-duty petrol weed and brush cutter.',
    image: '/images/equipment/hire/brush-cutter.webp',
    specifications: [
      { label: 'Engine', value: 'Petrol Engine' },
      { label: 'Head Type', value: 'Line head or steel blade' },
      { label: 'Harness', value: 'Full body support' },
    ],
    suitableFor: ['Weed clearing', 'Thick brush cutting', 'Lawn edging', 'Plot clearing'],
    featured: false,
    available: true,
  },
  {
    id: 'chainsaw-petrol',
    name: 'Chainsaw',
    slug: 'chainsaw',
    category: 'Garden Equipment',
    categorySlug: 'garden',
    dailyRate: 350,
    description:
      'Powerful 2-stroke petrol chainsaw for felling trees, logs, firewood preparation, and clearing fallen trees.',
    shortDescription: 'Powerful petrol chainsaw for tree cutting and logging.',
    image: '/images/equipment/hire/chainsaw.jpeg',
    specifications: [
      { label: 'Engine', value: '2-Stroke Petrol' },
      { label: 'Use Case', value: 'Wood cutting and felling' },
      { label: 'Safety', value: 'Chain brake mechanism' },
    ],
    suitableFor: ['Tree felling', 'Firewood cutting', 'Logging', 'Land clearing'],
    featured: false,
    available: true,
  },
  {
    id: 'concrete-mixer-petrol',
    name: 'Concrete Mixer',
    slug: 'concrete-mixer',
    category: 'Cutting Equipment', // Fits construction/mixing
    categorySlug: 'cutting',
    dailyRate: 500,
    description:
      'Petrol-powered cement and concrete mixer with a sturdy frame and large capacity drum for efficient onsite mixing.',
    shortDescription: 'Petrol-powered concrete and mortar site mixer.',
    image: '/images/equipment/hire/concrete-mixer.webp',
    specifications: [
      { label: 'Engine', value: 'Petrol Engine' },
      { label: 'Stand', value: 'Heavy duty steel support' },
      { label: 'Mobility', value: 'Two-wheeled base' },
    ],
    suitableFor: ['Mortar mixing', 'Cement mixing', 'Plaster prep', 'Concrete foundations'],
    featured: false,
    available: true,
  },
  {
    id: 'walk-behind-scrubber',
    name: 'Walk Behind Scrubber',
    slug: 'walk-behind-scrubber',
    category: 'Cleaning Equipment',
    categorySlug: 'cleaning',
    dailyRate: 899,
    description:
      'Commercial walk-behind floor scrubber and drier. Cleans large floors quickly, leaving them scrubbed, dry, and safe.',
    shortDescription: 'Industrial walk-behind floor scrubber dryer.',
    image: '/images/equipment/hire/walk-behind-scrubber.webp',
    specifications: [
      { label: 'Brand', value: 'Numatic' },
      { label: 'Type', value: 'Scrubber Dryer' },
      { label: 'Operation', value: 'Walk-behind' },
    ],
    suitableFor: ['Warehouse floors', 'Supermarket aisles', 'Gymnasiums', 'Industrial floor cleaning'],
    featured: true,
    available: true,
  },
  {
    id: 'water-pump-petrol',
    name: 'Petrol Water Pump',
    slug: 'petrol-water-pump',
    category: 'Power Tools',
    categorySlug: 'power-tools',
    dailyRate: 400,
    description:
      'Petrol-powered water transfer pump for draining flooded sites, dewatering trenches, and general water removal on construction and residential sites.',
    shortDescription: 'Petrol-powered pump for site dewatering and drainage.',
    image: '/images/equipment/hire/water-pump.jpeg',
    specifications: [
      { label: 'Engine', value: 'Petrol Engine' },
      { label: 'Fuel', value: 'Unleaded Petrol' },
      { label: 'Ports', value: 'Inlet & outlet hose fittings' },
    ],
    suitableFor: ['Flooded site drainage', 'Trench dewatering', 'Pool & tank draining', 'Irrigation transfer'],
    featured: false,
    available: true,
  },
  {
    id: 'road-roller-mini',
    name: 'Mini Road Roller',
    slug: 'mini-road-roller',
    category: 'Compaction',
    categorySlug: 'compaction',
    dailyRate: 1100,
    description:
      'Walk-behind double-drum road roller for compacting asphalt, gravel, and sub-base on driveways, pathways, and small roadworks.',
    shortDescription: 'Walk-behind double-drum roller for asphalt and driveway compaction.',
    image: '/images/equipment/hire/road-roller.jpeg',
    specifications: [
      { label: 'Engine', value: 'Petrol Engine' },
      { label: 'Drum', value: 'Double vibrating drum' },
      { label: 'Operation', value: 'Walk-behind' },
    ],
    suitableFor: ['Driveway asphalt compaction', 'Pathway construction', 'Gravel road compaction', 'Small roadworks'],
    featured: false,
    available: true,
  },
  {
    id: 'concrete-saw-cutter',
    name: 'Concrete Saw Cutter',
    slug: 'concrete-saw-cutter',
    category: 'Cutting Equipment',
    categorySlug: 'cutting',
    dailyRate: 550,
    description:
      'Petrol-powered walk-behind concrete saw for cutting expansion joints and clean lines in concrete slabs, asphalt, and paving.',
    shortDescription: 'Petrol walk-behind saw for cutting concrete and asphalt.',
    image: '/images/equipment/hire/concrete-saw.jpeg',
    specifications: [
      { label: 'Engine', value: 'Petrol Engine' },
      { label: 'Blade', value: 'Diamond cutting blade' },
      { label: 'Operation', value: 'Walk-behind with depth control' },
    ],
    suitableFor: ['Expansion joint cutting', 'Concrete slab cutting', 'Asphalt cutting', 'Paving line work'],
    featured: false,
    available: true,
  },
  {
    id: 'cordless-pole-saw',
    name: 'Cordless Pole Saw',
    slug: 'cordless-pole-saw',
    category: 'Garden Equipment',
    categorySlug: 'garden',
    dailyRate: 300,
    description:
      'Battery-powered telescopic pole saw for quiet, low-maintenance pruning of high branches without fuel or fumes.',
    shortDescription: 'Battery-powered telescopic pole saw for high branch pruning.',
    image: '/images/equipment/hire/cordless-pole-saw.webp',
    specifications: [
      { label: 'Type', value: 'Pole-mounted cordless chainsaw' },
      { label: 'Power', value: 'Battery-powered' },
      { label: 'Advantage', value: 'Quiet, no fuel required' },
    ],
    suitableFor: ['High branch pruning', 'Tree trimming', 'Residential garden maintenance'],
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
