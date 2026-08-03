export interface Category {
  id: string
  name: string
  slug: string
  description: string
  iconKey: string
  count: number
  image: string
}

export const categories: Category[] = [
  {
    id: 'power-tools',
    name: 'Power Tools',
    slug: 'power-tools',
    description: 'Grinders, drills, rotary hammers and more',
    iconKey: 'Zap',
    count: 8,
    image: '/images/equipment/angle-grinder.jpg',
  },
  {
    id: 'compaction',
    name: 'Compaction',
    slug: 'compaction',
    description: 'Plate compactors, rammers and rollers',
    iconKey: 'Layers',
    count: 4,
    image: '/images/equipment/plate-compactor.jpg',
  },
  {
    id: 'cleaning',
    name: 'Cleaning Equipment',
    slug: 'cleaning',
    description: 'Pressure washers, wet & dry vacs',
    iconKey: 'Droplets',
    count: 5,
    image: '/images/equipment/pressure-washer.jpg',
  },
  {
    id: 'generators',
    name: 'Generators',
    slug: 'generators',
    description: 'Petrol and diesel generators up to 10kVA',
    iconKey: 'Bolt',
    count: 4,
    image: '/images/equipment/generator.jpg',
  },
  {
    id: 'garden',
    name: 'Garden Equipment',
    slug: 'garden',
    description: 'Lawn mowers, strimmers and chippers',
    iconKey: 'Leaf',
    count: 6,
    image: '/images/equipment/lawn-mower.jpg',
  },
  {
    id: 'cutting',
    name: 'Cutting Equipment',
    slug: 'cutting',
    description: 'Concrete saws, angle grinders and cutters',
    iconKey: 'Scissors',
    count: 5,
    image: '/images/equipment/concrete-saw.jpg',
  },
  {
    id: 'ladders',
    name: 'Ladders & Access',
    slug: 'ladders',
    description: 'Extension ladders, scaffolding and steps',
    iconKey: 'ArrowUpToLine',
    count: 6,
    image: '/images/equipment/ladder.jpg',
  },
  {
    id: 'air-compressors',
    name: 'Air Compressors',
    slug: 'air-compressors',
    description: 'Belt-drive and direct-drive compressors',
    iconKey: 'Wind',
    count: 3,
    image: '/images/equipment/compressor.jpg',
  },
]
