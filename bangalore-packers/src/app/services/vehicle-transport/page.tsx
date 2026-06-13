import React from "react";
import QuoteForm from "@/components/ui/QuoteForm";
import StickyHeader from "@/components/ui/StickyHeader";
import FAQSection from "@/components/ui/FAQSection";

export const metadata = {
  title: "Car and Bike Transportation Bangalore | Portavo Move",
  description: "Secure car and motorcycle transport from Bangalore. Open and closed carriers, real-time GPS tracking, and complete transit insurance.[2, 3, 43]",
};

export default function VehicleTransportPage() {
  return (
    <>
      <StickyHeader />
      <main className="bg-slate-950 min-h-screen text-white pt-24">
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Automotive Transit</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">Car & Bike Transportation</h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We provide vehicle shipping using open car carriers and closed containment containers. Our transit team manages secure loading, tie-down anchoring, and real-time GPS-tracked delivery to destinations across India.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              All vehicles require registration papers, NOC clearance, and active insurance coverage prior to secure container loading.[28, 42]
            </p>
            <div className="pt-4">
              <a href="tel:+919876543210" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-lg text-sm transition-all">
                Request Vehicle Shipping Quote 
              </a>
            </div>
          </div>
          <div className="relative">
            <QuoteForm />
          </div>
        </section>
        <FAQSection />
      </main>
    </>
  );
}
