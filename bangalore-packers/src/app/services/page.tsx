import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Professional Relocation Services in Bangalore',
  description: 'Explore premium certified shifting solutions including domestic, international, office, and auto tracking transport services across Bangalore.',
};

export default function ServicesPage() {
  const items = [
    { name: "Domestic Relocation", path: "/services/domestic-relocation", desc: "Inter-city relocation using dedicated premium enclosed transport frameworks." },
    { name: "International Relocation", path: "/services/international-relocation", desc: "Global end-to-end relocation packages with complete customs clearance assistance." },
    { name: "Office Relocation", path: "/services/office-relocation", desc: "Corporate setup transfers with minimized workplace downtime execution." },
    { name: "Vehicle Transport", path: "/services/vehicle-transport", desc: "Enclosed structural transport for premium multi-wheel units and bikes." },
    { name: "Packing Services", path: "/services/packing-services", desc: "Industrial standard packaging deploying five-layered corrugated item safety crates." }
  ];

  return (
    <div className="py-16 max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-black mb-4 tracking-tight text-center">Our Specialized Moving Capabilities</h1>
      <p className="text-center text-slate-500 mb-12">Click individual specific modules to explore localized pricing and workflows.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-bold mb-2 text-slate-900">{it.name}</h2>
            <p className="text-sm text-slate-600 mb-4">{it.desc}</p>
            <Link href={it.path} className="text-orange-600 text-xs font-bold uppercase tracking-wider hover:text-orange-700">Explore Service →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}