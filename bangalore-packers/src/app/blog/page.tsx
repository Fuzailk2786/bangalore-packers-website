// src/app/blog/page.tsx

import React from "react";
import Link from "next/link";
import StickyHeader from "@/components/ui/StickyHeader";
import FAQSection from "@/components/ui/FAQSection";

export const metadata = {
  title: "Relocation Guides and Insights | Portavo Packers and Movers",
  description: "Browse our packing strategies, shifting checklists, cost optimization guides, and intercity transit insights.[2, 3, 43]",
};

export default function BlogIndexPage() {
  const posts =" },
    { title: "Avoid Shifting Scams: How to Verify Local Movers", date: "March 22, 2026", preview: "Learn how to verify licensing, company registration, e-Karmika filings, and avoid hidden pricing adjustments.[31, 42]" },
    { title: "How to Securely Transport Cars & Bikes Across India", date: "February 10, 2026", preview: "The documentation, prep work, and carrier types required for secure vehicle transit.[28, 42]" }
  ];

  return (
    <>
      <StickyHeader />
      <main className="bg-slate-950 min-h-screen text-white pt-24">
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Resource Hub</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 tracking-tight">Our Relocation Guides & Insights</h1>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">Expert advice on packing strategies, checklist layouts, and logistics safety standards.[2, 3, 44]</p>
          </div>

          <div className="space-y-8">
            {posts.map((post, idx) => (
              <article key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-4 hover:border-indigo-500 transition-all duration-300">
                <div className="text-xs text-slate-400 font-medium">{post.date}</div>
                <h3 className="text-2xl font-bold text-white tracking-wide">{post.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{post.preview}</p>
                <div>
                  <Link href="/blog" className="text-indigo-400 text-sm font-bold uppercase tracking-wider inline-flex items-center gap-1.5 hover:text-indigo-300">
                    <span>Read Article</span> &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
        <FAQSection />
      </main>
    </>
  );
}
