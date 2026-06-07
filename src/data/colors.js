// src/data/colors.js

export const colorLibrary = [
  {
    id: 1,
    name: 'Midnight Ash',
    hex: '#1E1F22',
    family: 'Monochrome',
    description: 'A deep, complex black with subtle warm undertones. Absorbs light beautifully in matte finishes.',
    shades: ['#0A0B0C', '#141517', '#1E1F22', '#36383D', '#50535B'],
    combinations: [
      { name: 'Raw Linen', hex: '#E3DDD5' },
      { name: 'Aged Copper', hex: '#B87354' }
    ]
  },
  {
    id: 2,
    name: 'Burnt Terracotta',
    hex: '#9C523A',
    family: 'Earth',
    description: 'A rich, baked earth tone that brings profound warmth and architectural depth to brutalist spaces.',
    shades: ['#472216', '#703A27', '#9C523A', '#C2745A', '#E39D86'],
    combinations: [
      { name: 'Desert Sand', hex: '#DBCBBF' },
      { name: 'Olive Drab', hex: '#4A5240' }
    ]
  },
  {
    id: 3,
    name: 'Botanical Sage',
    hex: '#7A8B7B',
    family: 'Botanical',
    description: 'A muted, dusty green that acts as a sophisticated neutral. Calming, highly adaptable, and perfect for bringing organic life indoors.',
    shades: ['#384239', '#576658', '#7A8B7B', '#A1B0A2', '#C9D4C9'],
    combinations: [
      { name: 'Bone White', hex: '#F0EFEA' },
      { name: 'Charcoal', hex: '#2C2E30' }
    ]
  },
  {
    id: 4,
    name: 'Industrial Cement',
    hex: '#8C8C88',
    family: 'Industrial',
    description: 'The definitive architectural gray. Perfectly balanced between warm and cool, replicating the exact tone of poured concrete.',
    shades: ['#424240', '#666664', '#8C8C88', '#B5B5B1', '#DEDEDA'],
    combinations: [
      { name: 'Matte Black', hex: '#111111' },
      { name: 'Safety Yellow', hex: '#E8B62A' }
    ]
  },
  {
    id: 5,
    name: 'Oxidized Cobalt',
    hex: '#2B4162',
    family: 'Cool',
    description: 'A deep, oceanic blue with hints of slate. Highly dramatic for accent walls, bespoke cabinetry, or statement entryways.',
    shades: ['#121D2E', '#1E2F4A', '#2B4162', '#4D6B96', '#7795BF'],
    combinations: [
      { name: 'Brushed Brass', hex: '#C5A059' },
      { name: 'Chalk', hex: '#F4F4F0' }
    ]
  },
  {
    id: 6,
    name: 'Alabaster',
    hex: '#EFECE4',
    family: 'Warm',
    description: 'A highly complex off-white with just enough warmth to prevent modern, minimalist spaces from feeling clinical.',
    shades: ['#BDBAB1', '#D6D3C9', '#EFECE4', '#F7F5F0', '#FFFFFF'],
    combinations: [
      { name: 'Midnight Ash', hex: '#1E1F22' },
      { name: 'Walnut', hex: '#5C4033' }
    ]
  },
  {
    id: 7,
    name: 'Obsidian Matte',
    hex: '#121212',
    family: 'Monochrome',
    description: 'An absolute void that swallows light. Engineered specifically for ultra-modern media rooms or minimalist gallery ceilings.',
    shades: ['#000000', '#0A0A0A', '#121212', '#242424', '#383838'],
    combinations: [
      { name: 'Industrial Cement', hex: '#8C8C88' },
      { name: 'Warm Oak', hex: '#A88462' }
    ]
  },
  {
    id: 8,
    name: 'Aged Brass',
    hex: '#A67C52',
    family: 'Earth',
    description: 'A muted, elegant metallic tone inspired by naturally patinated architectural hardware. Brings instant heritage to clean lines.',
    shades: ['#4A3622', '#7A5A38', '#A67C52', '#C49B71', '#DFBB95'],
    combinations: [
      { name: 'Midnight Navy', hex: '#1A2530' },
      { name: 'Plaster White', hex: '#F3F2ED' }
    ]
  },
  {
    id: 9,
    name: 'Urban Verdigris',
    hex: '#4B6960',
    family: 'Botanical',
    description: 'The striking, oxidized green of aged copper roofing, bringing historical depth and mathematical precision to contemporary spaces.',
    shades: ['#21332D', '#354D45', '#4B6960', '#698C81', '#8EB0A5'],
    combinations: [
      { name: 'Smoked Glass', hex: '#535C68' },
      { name: 'Alabaster', hex: '#EFECE4' }
    ]
  },
  {
    id: 10,
    name: 'Plaster White',
    hex: '#F3F2ED',
    family: 'Warm',
    description: 'A textural, raw white mimicking authentic Venetian plaster. Creates beautifully soft shadows and profound atmospheric comfort.',
    shades: ['#C9C7BF', '#DFDDD6', '#F3F2ED', '#FAF9F6', '#FFFFFF'],
    combinations: [
      { name: 'Burnt Terracotta', hex: '#9C523A' },
      { name: 'Botanical Sage', hex: '#7A8B7B' }
    ]
  },
  {
    id: 11,
    name: 'Smoked Glass',
    hex: '#535C68',
    family: 'Industrial',
    description: 'A translucent-feeling gray with a slight blue undertone. Pairs flawlessly with stainless steel, exposed brick, and raw timber.',
    shades: ['#2A2F36', '#3E4650', '#535C68', '#727E8C', '#95A1B0'],
    combinations: [
      { name: 'Urban Verdigris', hex: '#4B6960' },
      { name: 'Crisp White', hex: '#FAFAFA' }
    ]
  },
  {
    id: 12,
    name: 'Midnight Navy',
    hex: '#1A2530',
    family: 'Cool',
    description: 'A near-black blue offering a softer, more profound alternative to charcoal. Ideal for anchoring a room or highlighting custom millwork.',
    shades: ['#0B1117', '#131C26', '#1A2530', '#2A3A4A', '#3F5368'],
    combinations: [
      { name: 'Aged Brass', hex: '#A67C52' },
      { name: 'Plaster White', hex: '#F3F2ED' }
    ]
  }
];

export const colorFamilies = ['All', 'Monochrome', 'Earth', 'Botanical', 'Industrial', 'Cool', 'Warm'];