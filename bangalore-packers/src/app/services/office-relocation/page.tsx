import React from "react";
import QuoteForm from "@/components/ui/QuoteForm";
import StickyHeader from "@/components/ui/StickyHeader";
import FAQSection from "@/components/ui/FAQSection";

export const metadata = {
  title: "Office Shifting Services Bangalore | Portavo Move",
  description: "Secure corporate workspace and server relocations in Bangalore. Minimal operational downtime, systematic inventory labeling, and furniture assembly.[2, 6, 43]",
};

export default function OfficeRelocationPage() {
  return (
    <>
      <StickyHeader />
      <main className="bg-slate-950 min-h-screen text-white pt-24">
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Corporate Moving</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">Office Relocation Services</h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We provide workspace relocations for corporate offices, IT labs, and administrative spaces.[2, 6, 23] We prioritize minimizing operational downtime through late-night or weekend schedules.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our service includes server rack transport, secure monitor packaging, systematic labeling, and physical desk assembly at the new site.
            </p>
            <div className="pt-4">
              <a href="tel:+919876543210" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-lg text-sm transition-all">
                Request a Corporate Shifting Proposal 
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
