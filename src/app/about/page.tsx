import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About MoveSafe Packers and Movers',
  description: 'Learn how MoveSafe plans practical, carefully coordinated relocations from HSR Layout, Bangalore.',
};

const values = [
  { title: 'Clear communication', text: 'We confirm the scope, schedule and key move details before work begins.' },
  { title: 'Careful handling', text: 'Packing and handling methods are selected for the item type and journey.' },
  { title: 'Practical planning', text: 'Access, distance, timing and inventory are considered together, not as afterthoughts.' },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-slate-950 py-20 text-white">
        <div className="page-shell grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">About MoveSafe</p>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Good moves begin with fewer surprises.</h1>
          </div>
          <p className="leading-relaxed text-slate-300">MoveSafe Packers and Movers is based in HSR Layout, Bangalore. We help households and businesses plan moves with clear steps, appropriate packing and coordinated transport.</p>
        </div>
      </section>
      <section className="bg-stone-50 py-20">
        <div className="page-shell grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Our approach</p>
            <h2 className="text-3xl font-black tracking-tight">A move plan built around your actual requirements</h2>
            <p className="mt-5 leading-relaxed text-slate-600">No two relocations are identical. Apartment access, fragile belongings, route distance, move date and destination setup all affect the plan. We start by understanding those details, then align the materials, team and vehicle.</p>
            <p className="mt-4 leading-relaxed text-slate-600">Our services cover local and domestic home shifting, office moves, vehicle transport, packing and overseas move coordination.</p>
            <Link href="/request-quote" className="primary-button mt-8">Plan Your Move</Link>
          </div>
          <div className="space-y-4">
            {values.map((value, index) => (
              <div key={value.title} className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-2xl font-black text-orange-300">0{index + 1}</span>
                <div><h3 className="font-extrabold">{value.title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{value.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-orange-600 py-14 text-white">
        <div className="page-shell flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div><p className="text-sm font-bold text-orange-100">Visit or call us</p><h2 className="mt-1 text-2xl font-black">{SITE.shortAddress}</h2></div>
          <a href={SITE.phoneHref} className="secondary-button border-white">{SITE.phoneDisplay}</a>
        </div>
      </section>
    </main>
  );
}
