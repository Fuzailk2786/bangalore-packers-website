export const SITE = {
  name: 'MoveSafe Packers and Movers',
  shortName: 'MoveSafe',
  phone: '8884455199',
  phoneDisplay: '+91 88844 55199',
  phoneHref: 'tel:+918884455199',
  whatsappNumber: '918884455199',
  address: 'No. 45, 3rd Cross, HSR Layout, Sector 2, Bangalore, Karnataka 560102',
  shortAddress: 'HSR Layout, Sector 2, Bangalore 560102',
} as const;

export const SERVICES = [
  {
    slug: 'domestic-relocation',
    title: 'Home & Domestic Relocation',
    eyebrow: 'Across Bangalore and India',
    summary: 'Careful household shifting for local and intercity moves, planned from pickup through placement at your new home.',
    description: 'We coordinate your household move from an initial item survey through packing, loading, transport, unloading and optional unpacking. The plan is matched to the size of your home, access at both addresses and travel distance.',
    features: ['Room-wise packing and labelling', 'Furniture dismantling and reassembly', 'Local and intercity transport', 'Unloading and placement support'],
  },
  {
    slug: 'office-relocation',
    title: 'Office Relocation',
    eyebrow: 'Moves built around your operations',
    summary: 'Structured office shifting with labelled inventory, equipment protection and schedules designed to reduce downtime.',
    description: 'Our office relocation service covers workstations, files, furniture and IT equipment. We create a clear movement plan and can schedule work outside normal office hours when arranged in advance.',
    features: ['Department-wise labelling', 'IT and monitor packing', 'Weekend and off-hour scheduling', 'Furniture setup at destination'],
  },
  {
    slug: 'vehicle-transport',
    title: 'Car & Bike Transport',
    eyebrow: 'Dedicated vehicle handling',
    summary: 'Coordinated vehicle pickup and transport with condition checks and route-based delivery estimates.',
    description: 'Move your car or motorcycle from Bangalore to destinations across India. We document vehicle condition before loading and explain the carrier type, expected timeline and required documents before booking.',
    features: ['Pre-loading condition check', 'Carrier options based on route', 'Pickup and delivery coordination', 'Clear document checklist'],
  },
  {
    slug: 'packing-services',
    title: 'Packing & Unpacking',
    eyebrow: 'Protection for every item type',
    summary: 'Professional packing support for full moves, selected rooms, fragile belongings or storage preparation.',
    description: 'Choose packing as part of a move or as a standalone service. Materials and packing methods are selected according to item weight, fragility and travel distance.',
    features: ['Corrugated boxes and cushioning', 'Fragile-item wrapping', 'Furniture edge protection', 'Optional unpacking assistance'],
  },
  {
    slug: 'international-relocation',
    title: 'International Relocation',
    eyebrow: 'Planning for overseas moves',
    summary: 'Export packing and shipment coordination for household moves from Bangalore to international destinations.',
    description: 'International moves require destination-specific planning. We help assess volume, prepare export-ready packing and coordinate the shipment process with the relevant logistics partners.',
    features: ['Pre-move volume assessment', 'Export-ready packing', 'Shipment coordination', 'Documentation guidance'],
  },
] as const;

export type Service = (typeof SERVICES)[number];

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
