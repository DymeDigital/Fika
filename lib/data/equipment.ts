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
    dailyRate: 699,
    description:
      'Professional heavy-duty breaker designed for demanding demolition tasks on concrete, brick, and asphalt. High-performance motor and premium build quality ensure maximum impact energy.',
    shortDescription: 'Professional heavy-duty breaker for serious concrete demolition.',
    image: '/images/equipment/extracted_p23_0_FormXob.7ec528b1aaaa9b650084e53bd38f81c7.png',
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
    id: 'jack-hammer',
    name: 'Jack Hammer',
    slug: 'jack-hammer',
    category: 'Power Tools',
    categorySlug: 'power-tools',
    dailyRate: 400,
    description:
      'Standard industrial jack hammer suitable for breaking up concrete slabs, brickwork, paths, and general masonry demolition.',
    shortDescription: 'Standard industrial demolition hammer for concrete and masonry.',
    image: '/images/equipment/extracted_p8_0_FormXob.d4d7e96473fe31509e6e1d35b4af8b2e.jpg',
    specifications: [
      { label: 'Input Power', value: '2200W' },
      { label: 'Chuck System', value: 'HEX' },
      { label: 'Chisels included', value: 'Flat & Pointed' },
    ],
    suitableFor: ['Concrete breaking', 'Tile removal', 'Demolition work', 'Wall breaking'],
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
    image: '/images/equipment/extracted_p24_0_FormXob.54243ba8f7806e53e2a0355fb95f73d8.png',
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
    image: '/images/equipment/extracted_p7_0_FormXob.34251343da2509d9a52abb3b7635a2d1.jpg',
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
    image: '/images/equipment/extracted_p12_0_FormXob.582a7df1f20823d7b1c54e62144ed9c6.jpg',
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
    id: 'generator-500',
    name: 'Industrial Generator',
    slug: 'industrial-generator',
    category: 'Generators',
    categorySlug: 'generators',
    dailyRate: 500,
    description:
      'Robust petrol generator delivering dependable power for site operations, power tools, and load shedding backup situations.',
    shortDescription: 'Reliable petrol generator for power tools and home backup.',
    image: '/images/equipment/extracted_p9_0_FormXob.9801df3b4341992df41c0f97778a2c6a.jpg',
    specifications: [
      { label: 'Engine', value: 'Petrol Engine' },
      { label: 'AVR', value: 'Automatic Voltage Regulation' },
      { label: 'Outlets', value: 'Standard sockets' },
    ],
    suitableFor: ['Site power supply', 'Load shedding backup', 'Powering construction equipment'],
    featured: true,
    available: true,
  },
  {
    id: 'extension-ladder-6m',
    name: '6M Extension Ladder',
    slug: 'extension-ladder-6m',
    category: 'Ladders & Access',
    categorySlug: 'ladders',
    dailyRate: 550,
    description:
      'Heavy-duty aluminum 6m extension ladder designed to reach high points safely. Anti-slip safety rungs and locks.',
    shortDescription: 'Heavy-duty 6m aluminum extension ladder.',
    image: '/images/equipment/extracted_p15_0_FormXob.4e1607f2d55b2cc62b855eb83867a310.jpg',
    specifications: [
      { label: 'Height', value: '6 meters extended' },
      { label: 'Material', value: 'High-strength Aluminum' },
      { label: 'Rungs', value: 'D-profile safety rungs' },
    ],
    suitableFor: ['Painting', 'Roofing', 'Electrical repairs', 'Tree pruning access'],
    featured: false,
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
    image: '/images/equipment/extracted_p10_0_FormXob.3c73d0041bd6792eb182c916d653741a.jpg',
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
    image: '/images/equipment/extracted_p5_0_FormXob.5cfc0de64c439ce0282ced047f19a598.jpg',
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
    image: '/images/equipment/extracted_p3_0_FormXob.6092dc1c00fe817d40fcf0916b107b43.jpg',
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
    image: '/images/equipment/extracted_p4_0_FormXob.58e4684386871ca07bddf4564c739431.jpg',
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
    image: '/images/equipment/extracted_p6_0_FormXob.a8a5a86e993e92637cf5febd33d75da1.jpg',
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
    image: '/images/equipment/extracted_p11_0_FormXob.c2694095566affc1f3d593074a6fd70b.jpg',
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
    image: '/images/equipment/extracted_p13_0_FormXob.5fd2a04c037ed5fc840ffa03b7256cde.jpg',
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
    image: '/images/equipment/extracted_p14_0_FormXob.54503c4744557c9c8699f9e5937c6ffe.jpg',
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
    image: '/images/equipment/extracted_p16_0_FormXob.b6e3f4b659bcdecf20bb889f06a764a9.jpg',
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
    image: '/images/equipment/extracted_p17_0_FormXob.91639fd081293adeff7f42e404305e8a.jpg',
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
    image: '/images/equipment/extracted_p18_0_FormXob.7a1e264f7cfaa4a88c42dbf12cd6639d.jpg',
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
    image: '/images/equipment/extracted_p19_0_FormXob.a2fc3bc35740a49962d9dad4e8c2fae7.jpg',
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
    image: '/images/equipment/extracted_p25_0_FormXob.08765ed464cdb6501082e7e5925b1233.png',
    specifications: [
      { label: 'Brand', value: 'Numatic' },
      { label: 'Type', value: 'Scrubber Dryer' },
      { label: 'Operation', value: 'Walk-behind' },
    ],
    suitableFor: ['Warehouse floors', 'Supermarket aisles', 'Gymnasiums', 'Industrial floor cleaning'],
    featured: true,
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
