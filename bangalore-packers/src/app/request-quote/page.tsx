// src/app/request-quote/page.tsx

import React from "react";
import QuoteForm from "@/components/ui/QuoteForm";
import StickyHeader from "@/components/ui/StickyHeader";
import FAQSection from "@/components/ui/FAQSection";

export const metadata = {
  title: "Get an Instant Relocation Quote Bangalore | Portavo Move",
  description: "Request a transparent relocation quote online. Itemized pricing for domestic moving, office relocations, and vehicle transport.[2, 3, 43]",
};

export default function RequestQuotePage() {
  return (
    <>
      <StickyHeader />
      <main className="bg-slate-950 min-h-screen text-white pt-24">
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Instant Estimate</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Request Your Relocation Quote</h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              Complete the two-step form below to request a detailed relocation estimate from our planning team.
            </p>
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
