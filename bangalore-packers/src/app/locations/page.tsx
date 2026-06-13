import React from "react";
import StickyHeader from "@/components/ui/StickyHeader";
import FAQSection from "@/components/ui/FAQSection";

export const metadata = {
  title: "Areas Served in Bangalore & Chennai | Portavo Packers and Movers",
  description: "Browse our relocation service areas, including Whitefield, HSR Layout, Adyar, and Velachery.",
};

export default function LocationsPage() {
  const regions = },
    { zone: "East Bangalore", hubs: },
    { zone: "South Chennai", hubs: },
    { zone: "Central Chennai", hubs: }
  ];

  return (
    <>
      <StickyHeader />
      <main className="bg-slate-950 min-h-screen text-white pt-24">
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Service Coverage</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-12 tracking-tight">Our Areas Served</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((reg, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-left space-y-4">
                <h3 className="text-lg font-bold text-indigo-400 tracking-wide border-b border-slate-800 pb-2">{reg.zone}</h3>
                <ul className="space-y-2">
                  {reg.hubs.map((hub, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                      {hub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <FAQSection />
      </main>
    </>
  );
}
