import React from "react";
import Link from "next/link";
import StickyHeader from "@/components/ui/StickyHeader";
import FAQSection from "@/components/ui/FAQSection";

export const metadata = {
  title: "Relocation Guides and Insights | Portavo Packers and Movers",
  description: "Browse our packing strategies, shifting checklists, cost optimization guides, and intercity transit insights.",
};

export default function BlogIndexPage() {
  const posts =;

  return (
    <>
      <StickyHeader />
      <main className="bg-slate-950 min-h-screen text-white pt-24">
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Resource Hub</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 tracking-tight">Our Relocation Guides & Insights</h1>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">Expert advice on packing strategies, checklist layouts, and logistics safety standards.</p>
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
