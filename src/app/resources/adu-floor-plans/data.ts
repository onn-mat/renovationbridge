export interface AduModel {
  slug: string;
  name: string;
  size: string;
  sqft: number;
  beds: number;
  baths: number;
  features: string[];
  price: string;
  priceNote: string;
  exteriorImage: string;
  floorPlanImage: string;
}

export const standards = {
  construction: [
    "8' Flat Ceilings",
    '16″ Eaves',
    '100 Amp Service',
    'R-11 Floor Insulation',
    'R-13 Wall Insulation',
    'R-22 Ceiling Insulation',
    'A/C Ready',
  ],
  interior: [
    'Granite Counters',
    'Stainless Steel Under-Mount Kitchen Sink',
    'Kitchen Cabinets with Soft Close Hinges',
    'Deluxe Cabinet Moulding',
    'Appliances: Stove/Oven, Refrigerator, Microwave, Dishwasher',
    '3″ Baseboard Molding',
    '6 Panel Interior Doors',
    'Carpet/Linoleum Flooring',
    'Canned Lights',
  ],
  exterior: [
    'Low-E Dual Glaze Windows',
    'GFCI Receptacles',
    'Frostless Hose Bib',
    'Architectural Shingles',
    '4″ Window Trim',
    'Cement Perforated Soffit',
    'Cement Vertical Siding',
  ],
};

export interface Upgrade {
  id: string;
  category: string;
  name: string;
  price: number | null;
  price_note: string;
  description: string;
}

export const upgrades: Upgrade[] = [
  // Construction
  { id: 'all-electric', category: 'Construction', name: 'All-Electric ADU', price: null, price_note: 'Contact for pricing', description: 'Fully electric build — no gas lines required.' },
  { id: 'front-porch', category: 'Construction', name: 'Front Porch', price: null, price_note: 'Contact for pricing', description: 'Add a covered front porch to your ADU.' },
  { id: 'fire-sprinklers', category: 'Construction', name: 'Fire Sprinklers', price: null, price_note: 'Contact for pricing', description: 'Interior fire sprinkler system installation.' },
  { id: 'tankless-water-heater', category: 'Construction', name: 'Tankless Water Heater', price: 3500, price_note: '+$3,500', description: 'On-demand tankless water heater — endless hot water, saves space.' },
  // Exterior
  { id: '80-inch-windows', category: 'Exterior', name: '80″ Windows', price: null, price_note: 'Contact for pricing', description: 'Upgrade to 80″ tall windows for more natural light.' },
  { id: 'craftsman-window-trim', category: 'Exterior', name: 'Craftsman Window Trim', price: 1600, price_note: '+$1,600', description: 'Craftsman-style exterior window trim upgrade.' },
  { id: 'siding-upgrade', category: 'Exterior', name: 'Full Lap or Board & Batten Siding', price: 7000, price_note: '+$7,000', description: 'Upgrade siding style and color — Horizontal Lap and Board & Batten options available.' },
  { id: 'french-sliding-doors', category: 'Exterior', name: 'French / Sliding Glass Doors', price: 950, price_note: 'From +$950', description: 'French door (+$950), Double French door (+$1,600), or Sliding door (+$1,700).' },
  { id: 'vaulted-ceiling', category: 'Exterior', name: 'Vaulted Ceiling', price: 2500, price_note: '+$2,500', description: 'Open up the living space with a vaulted ceiling. 9\' ceiling also available (+$2,750).' },
  { id: 'black-windows', category: 'Exterior', name: 'Black Window & Door Frames', price: 7000, price_note: '+$7,000', description: 'Upgrade window and door frames from white to black for a modern look.' },
  // Interior
  { id: 'appliance-package', category: 'Interior', name: 'Stainless Steel Appliance Package', price: null, price_note: 'Contact for pricing', description: 'Full stainless steel kitchen appliance upgrade package.' },
  { id: 'fireplace', category: 'Interior', name: 'Fireplace', price: null, price_note: 'Contact for pricing', description: 'Add a fireplace to your living space.' },
  { id: 'crown-molding', category: 'Interior', name: 'Crown Molding', price: 1500, price_note: '+$1,500', description: 'Crown molding throughout the entire unit.' },
  // Kitchen
  { id: 'subway-tile-backsplash', category: 'Kitchen', name: 'Arctic White Subway Tile Backsplash', price: 400, price_note: 'From +$400', description: '4″ × 6″ Arctic White Subway Tile. Single row (+$400) or full height (+$600).' },
  { id: 'pendant-lights', category: 'Kitchen', name: 'Pendant Lights', price: 300, price_note: '+$300', description: '3 pendant lights over the kitchen island.' },
  { id: 'farmhouse-sink', category: 'Kitchen', name: 'Farmhouse Top Mount Sink', price: 500, price_note: '+$500', description: 'Stainless steel top mount farmhouse-style kitchen sink.' },
  // Utilities
  { id: 'mini-splits', category: 'Utilities', name: 'Mini Splits — Heat Pumps', price: 12500, price_note: '+$12,500', description: 'Ductless mini-split heat pumps for heating and cooling. Energy-efficient and quiet.' },
];

export const models: AduModel[] = [
  {
    slug: '400a',
    name: 'The 400A',
    size: "15' × 26'",
    sqft: 390,
    beds: 1,
    baths: 1,
    features: [
      'Full kitchen',
      'Dining area',
      "Living room (15' × 15')",
      '1 Bedroom',
      '1 Bathroom',
      'Washer/dryer stack',
      'Water heater included',
    ],
    price: '$195,000',
    priceNote: 'Includes foundation, utilities, delivery, and installation',
    exteriorImage: '/images/adu/400a/400.webp',
    floorPlanImage: '/images/adu/400a/400-floorplan.png',
  },
  {
    slug: '500',
    name: 'The 500',
    size: "14' × 36'",
    sqft: 500,
    beds: 1,
    baths: 1,
    features: [
      'Full kitchen',
      'Dining area',
      "Living room (19' × 14')",
      '1 Bedroom',
      '1 Bathroom',
      'Stackable washer/dryer',
      'Water heater included',
    ],
    price: '$200,000',
    priceNote: 'Includes foundation, utilities, delivery, and installation',
    exteriorImage: '/images/adu/500/500.webp',
    floorPlanImage: '/images/adu/500/500-floorplan.webp',
  },
  {
    slug: '600',
    name: 'The 600',
    size: "20' × 30'",
    sqft: 600,
    beds: 1,
    baths: 1,
    features: [
      'Full kitchen',
      'Dining area',
      'Living room',
      '1 Bedroom',
      '1 Bathroom',
      'Office',
      'Stackable washer/dryer',
    ],
    price: '$235,000',
    priceNote: 'Includes foundation, utilities, delivery, and installation',
    exteriorImage: '/images/adu/600/600.png',
    floorPlanImage: '/images/adu/600/600-floorplan.png',
  },
  {
    slug: '700',
    name: 'The 700',
    size: "20' × 37'",
    sqft: 700,
    beds: 1,
    baths: 1,
    features: [
      'Full kitchen',
      'Dining area',
      'Living room',
      'Master bedroom',
      'Spacious bathroom',
      'Open plan living',
      'Laundry room',
    ],
    price: '$245,000',
    priceNote: 'Includes foundation, utilities, delivery, and installation',
    exteriorImage: '/images/adu/700/700.png',
    floorPlanImage: '/images/adu/700/700-floorplan.webp',
  },
  {
    slug: '800a',
    name: 'The 800A',
    size: "20' × 40'",
    sqft: 800,
    beds: 1,
    baths: 1,
    features: [
      'Full kitchen',
      'Dining area',
      'Living room',
      'Master bedroom',
      'Spacious bathroom',
      'Open plan living',
      'Laundry room',
    ],
    price: '$250,000',
    priceNote: 'Includes foundation, utilities, delivery, and installation',
    exteriorImage: '/images/adu/800a/800A.webp',
    floorPlanImage: '/images/adu/800a/800a-floorplan.webp',
  },
  {
    slug: '800b',
    name: 'The 800B',
    size: "23'4\" × 37'",
    sqft: 800,
    beds: 1,
    baths: 1,
    features: [
      'Full kitchen',
      'Dining area',
      'Living room',
      'Master bedroom',
      'Spacious bathroom',
      'Open plan living',
      'Laundry room',
    ],
    price: '$265,000',
    priceNote: 'Includes foundation, utilities, delivery, and installation',
    exteriorImage: '/images/adu/800b/800b.webp',
    floorPlanImage: '/images/adu/800b/800b-floorplan.webp',
  },
  {
    slug: '900',
    name: 'The 900',
    size: "23'4\" × 40'",
    sqft: 900,
    beds: 1,
    baths: 1,
    features: [
      'Full length kitchen',
      'Dining area',
      'Living room',
      'Master bedroom',
      'Spacious bathroom',
      'Spacious open plan living',
      'Extra storage',
    ],
    price: '$265,000',
    priceNote: 'Includes foundation, utilities, delivery, and installation',
    exteriorImage: '/images/adu/900/900.webp',
    floorPlanImage: '/images/adu/900/900-floorplan.webp',
  },
  {
    slug: '1000',
    name: 'The 1000',
    size: "23'4\" × 44'",
    sqft: 1000,
    beds: 1,
    baths: 1,
    features: [
      'Full kitchen',
      'Dining area',
      'Living room',
      'Master bedroom',
      'Spacious bathroom',
      'Laundry room',
    ],
    price: '$295,000',
    priceNote: 'Includes foundation, utilities, delivery, and installation',
    exteriorImage: '/images/adu/1000/1000.png',
    floorPlanImage: '/images/adu/1000/1000-floorplan.webp',
  },
  {
    slug: '1100',
    name: 'The 1100',
    size: "24' × 49'",
    sqft: 1100,
    beds: 1,
    baths: 1,
    features: [
      'Full kitchen',
      'Dining area',
      'Living room',
      'Master bedroom',
      'Spacious bathroom',
      'Laundry room',
      'Walk-in closet',
    ],
    price: '$305,000',
    priceNote: 'Includes foundation, utilities, delivery, and installation',
    exteriorImage: '/images/adu/1100/1100.png',
    floorPlanImage: '/images/adu/1100/1100-floorplan.webp',
  },
  {
    slug: '1200',
    name: 'The 1200',
    size: "23'4\" × 52'",
    sqft: 1200,
    beds: 1,
    baths: 1,
    features: [
      'Full kitchen',
      'Dining area',
      'Living room',
      'Master bedroom',
      'Spacious bathroom',
      'Laundry room',
      'Extra storage',
    ],
    price: '$305,000',
    priceNote: 'Includes foundation, utilities, delivery, and installation',
    exteriorImage: '/images/adu/1200/1200.png',
    floorPlanImage: '/images/adu/1200/1200-floorplan.webp',
  },
];
