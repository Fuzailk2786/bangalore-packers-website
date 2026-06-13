// src/app/about-us/page.tsx

import React from "react";
import StickyHeader from "@/components/ui/StickyHeader";
import FAQSection from "@/components/ui/FAQSection";

export const metadata = {
  title: "About Us | Portavo Packers and Movers Bangalore",
  description: "Learn about Portavo Packers and Movers Bangalore. Our focus on transparent pricing, safety standards, and customer service has made us a reliable name in relocation.[2, 3, 43]",
};

export default function AboutUsPage() {
  return (
    <>
      <StickyHeader />
      <main className="bg-slate-950 min-h-screen text-white pt-24">
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Our History</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Portavo Packers and Movers</h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Founded with a commitment to pricing transparency and professional service standards, we have become a reliable name for household and corporate relocations in Bangalore.[2, 3, 42]
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-2">
              <h3 className="text-lg font-bold text-white tracking-wide">Our Mission</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                To simplify the moving process, eliminate unexpected pricing adjustments, and ensure the safety of household belongings.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-2">
              <h3 className="text-lg font-bold text-white tracking-wide">Our Vision</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                To build a modern, tech-enabled logistics network that delivers reliable, tracked transit solutions across India.[3, 42, 46]
              </p>
            </div>
          </div>
        </section>
        <FAQSection />
      </main>
    </>
  );
}
