// src/app/page.tsx

import React from "react";
import Link from "next/link";
import QuoteForm from "@/components/ui/QuoteForm";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import FAQSection from "@/components/ui/FAQSection";
import StickyHeader from "@/components/ui/StickyHeader";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata = {
  title: "Professional Packers and Movers in Bangalore | Portavo Move",
  description: "Secure and professional relocation services in Bangalore. Transparent pricing, multi-layer packing, GPS tracking, and comprehensive transit insurance.[2, 3, 43]",
  alternates: {
    canonical: "https://www.portavomove.com",
  }
};

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Portavo Packers and Movers",
    "image": "https://www.portavomove.com/images/home-hero.jpg",
    "telephone": "+91-9876543210",
    "url": "https://www.portavomove.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 45, Residency Road, Shanthala Nagar",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560025",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9715987",
      "longitude": "77.5945627"
    },
    "areaServed":,
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <StickyHeader />
      <main className="bg-slate-950 min-h-screen text-white pt-24">
        {/* Banner with instant quote conversion block */}
        <section className="relative overflow-hidden py-16 lg:py-28">
          <div className="absolute inset-0 bg-indigo-950/20 z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-full inline-block">Reliable Relocation Services</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
                Reliable Packers and Movers in Bangalore
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                We provide domestic household relocation, office moving, vehicle transport, and storage services across Bangalore and all major cities in India.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="tel:+919876543210" className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold py-3.5 px-6 rounded-lg text-sm flex items-center gap-2.5 transition-all">
                  <span>Call:</span> +91 9876543210 
                </a>
                <Link href="/services" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-lg text-sm transition-all shadow-lg hover:shadow-indigo-500/20">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* Process timeline section */}
        <ProcessTimeline />

        {/* Core Services Section */}
        <section className="py-20 bg-slate-900 border-t border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Service Suite</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-12 tracking-tight text-white">Our Relocation Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl text-left space-y-4 hover:border-indigo-500 transition-all duration-300">
                <h3 className="text-xl font-bold text-white tracking-wide">Domestic Relocation</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Secure intercity household relocations. We offer structured packing, container shipping, and complete destination setup.
                </p>
                <Link href="/services/domestic-relocation" className="text-indigo-400 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 hover:text-indigo-300">
                  <span>Learn More</span> &rarr;
                </Link>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl text-left space-y-4 hover:border-indigo-500 transition-all duration-300">
                <h3 className="text-xl font-bold text-white tracking-wide">International Relocation</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Experienced global moving services covering air/ocean freight, customized export-grade packing, and customs clearance handling.[3, 23]
                </p>
                <Link href="/services/international-relocation" className="text-indigo-400 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 hover:text-indigo-300">
                  <span>Learn More</span> &rarr;
                </Link>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl text-left space-y-4 hover:border-indigo-500 transition-all duration-300">
                <h3 className="text-xl font-bold text-white tracking-wide">Office Shifting</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Minimal downtime and disruption. We handle secure server transport, workspace packing, and systematic furniture reassembly.
                </p>
                <Link href="/services/office-relocation" className="text-indigo-400 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 hover:text-indigo-300">
                  <span>Learn More</span> &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Accordion and FAQ Schema Markup */}
        <FAQSection />
      </main>
      <WhatsAppButton />
    </>
  );
}
