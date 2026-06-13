"use client";

import React, { useState } from "react";

const faqs ="
  },
  {
    q: "Is transit insurance mandatory, and what is covered during domestic moving?",
    a: "Comprehensive Goods-In-Transit (GIT) insurance is highly recommended.[28] It covers damage or loss resulting from collisions, fire, theft, rainwater exposure, and handling mishaps during transit.[3, 43]"
  },
  {
    q: "How many days in advance should I book my relocation?",
    a: "We recommend booking at least 7 to 10 days in advance of your preferred move date.[44] This allows our team to conduct a pre-move survey, allocate vehicles, and secure packing resources.[3, 44]"
  },
  {
    q: "Are there any prohibited items that cannot be packed or loaded into containers?",
    a: "Yes, we do not pack or load hazardous materials, flammable liquids (gasoline, LPG cylinders, aerosols), corrosive chemicals, explosives, valuable jewelry, physical cash, personal identification documents, or perishable food items.[22, 24]"
  },
  {
    q: "Can you transport my personal car or motorcycle alongside my household items?",
    a: "Yes, we operate a fleet of specialized open and closed car carriers, as well as secure motorcycle transport units.[2, 3] Vehicles require RTO registration documents, structural fitness papers, and active third-party vehicle insurance prior to secure loading.[28, 42]"
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx? null : idx);
  };

  // Structured Data Schema Generation
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500">FAQ</span>
        <h2 className="text-3xl font-bold text-white mt-2 mb-12 tracking-tight">Frequently Asked Questions</h2>
        
        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-semibold text-sm sm:text-base focus:outline-none focus:bg-slate-800"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <svg 
                    className={`w-5 h-5 text-indigo-400 transform transition-transform duration-300 ${isOpen? "rotate-180" : ""}`} 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                  </svg>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${isOpen? "max-h-60 border-t border-slate-800" : "max-h-0"}`}
                  style={{ overflow: "hidden" }}
                >
                  <p className="px-6 py-5 text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
