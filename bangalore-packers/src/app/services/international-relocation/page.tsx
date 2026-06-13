import React from "react";
import QuoteForm from "@/components/ui/QuoteForm";
import StickyHeader from "@/components/ui/StickyHeader";
import FAQSection from "@/components/ui/FAQSection";

export const metadata = {
  title: "International Relocation Services Bangalore | Portavo Move",
  description: "Secure global relocations from Bangalore. We provide export-grade packing, air and sea freight forwarding, customs clearance, and delivery.[3, 23, 43]",
};

export default function InternationalRelocationPage() {
  return (
    <>
      <StickyHeader />
      <main className="bg-slate-950 min-h-screen text-white pt-24">
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Global Moving</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">International Relocation Services</h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We provide international relocation services from Bangalore to destinations worldwide, including the US, UK, Europe, UAE, and Singapore. Our international network manages shipping, customs documentation, and local port clearance.[23, 45]
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              We utilize customized wood crating and water-resistant moisture barrier packaging to protect household items during sea or air transport.[2, 23]
            </p>
            <div className="pt-4">
              <a href="tel:+919876543210" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-lg text-sm transition-all">
                Consult an International Relocation Agent 
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
