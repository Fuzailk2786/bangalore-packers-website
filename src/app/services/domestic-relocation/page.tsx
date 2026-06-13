import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/ui/QuoteForm";
import StickyHeader from "@/components/ui/StickyHeader";
import FAQSection from "@/components/ui/FAQSection";

export const metadata = {
  title: "Domestic Relocation Services Bangalore | Portavo Move",
  description: "Secure domestic moving across India from Bangalore. We offer heavy-duty packing, secure transport container shipping, and complete transit insurance.[2, 3, 43]",
};

export default function DomesticRelocationPage() {
  return (
    <>
      <StickyHeader />
      <main className="bg-slate-950 min-h-screen text-white pt-24">
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Intercity Shifting</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">Domestic Relocation Services</h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We provide domestic relocation services from Bangalore to all major metropolitan centers and states across India.[3, 43] Our logistics team handles every aspect of the process, including pre-move surveys, packing, tracking, and final unpacking.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              We use specialized materials such as five-layer corrugated sheets, durable edge-guards, heavy-duty air bubble rolls, and custom wood crates to ensure goods are protected throughout transit.
            </p>
            <div className="pt-4">
              <a href="tel:+919876543210" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-lg text-sm transition-all shadow-lg hover:shadow-indigo-500/20">
                Speak to a Domestic Move Expert 
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
