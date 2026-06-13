// src/app/services/packing-services/page.tsx

import React from "react";
import QuoteForm from "@/components/ui/QuoteForm";
import StickyHeader from "@/components/ui/StickyHeader";
import FAQSection from "@/components/ui/FAQSection";

export const metadata = {
  title: "Professional Packing and Unpacking Services Bangalore | Portavo Move",
  description: "Secure packing and unpacking services in Bangalore. We use corrugated boxes, air bubble rolls, and customized wooden crates to protect your goods.[2, 3, 43]",
};

export default function PackingServicesPage() {
  return (
    <>
      <StickyHeader />
      <main className="bg-slate-950 min-h-screen text-white pt-24">
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Premium Packing</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">Packing & Unpacking Services</h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We provide packing, boxing, and unpacking services using industry-grade materials. Our crew handles delicate items, fine art, and heavy furniture to ensure they are protected throughout transit.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              We use bubble sheets, foam-wrap cushioning, durable plastic stretch rolls, and custom double-wall cardboard boxes.
            </p>
            <div className="pt-4">
              <a href="tel:+919876543210" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-lg text-sm transition-all">
                Request a Custom Packaging Survey 
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
