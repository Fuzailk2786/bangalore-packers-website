import React from "react";
import Link from "next/link";
import StickyHeader from "@/components/ui/StickyHeader";
import FAQSection from "@/components/ui/FAQSection";

export const metadata = {
  title: "Professional Shifting & Logistics Services Bangalore & Chennai | Portavo Move",
  description: "Browse our complete suite of relocation services in South India. We handle domestic, international, office, vehicle, and packing services.",
};

export default function ServicesIndexPage() {
  const serviceList =" },
    { title: "International Moving", path: "/services/international-relocation", desc: "Global moving services including export packing, air/ocean freight, and port customs clearance." },
    { title: "Corporate Shifting", path: "/services/office-relocation", desc: "Workspace and IT equipment relocations scheduled around operational hours." },
    { title: "Vehicle Transport", path: "/services/vehicle-transport", desc: "Car and motorcycle transport via specialized open and closed container carriers." },
    { title: "Packing Services", path: "/services/packing-services", desc: "Multi-layer packing using corridor-grade corrugated boxes and heavy-duty bubble wrap." }
  ];

  return (
    <>
      <StickyHeader />
      <main className="bg-slate-950 min-h-screen text-white pt-24">
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Service Suite</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-12 tracking-tight">Our Relocation Services</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((srv, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-left space-y-4 hover:border-indigo-500 transition-all duration-300">
                <h3 className="text-xl font-bold text-white tracking-wide">{srv.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{srv.desc}</p>
                <Link href={srv.path} className="text-indigo-400 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 hover:text-indigo-300">
                  <span>Learn More</span> &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>
        <FAQSection />
      </main>
    </>
  );
}
