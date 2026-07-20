import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/sections/FAQSection';
import { SERVICES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Moving Services in Bangalore',
  description: 'Home relocation, office shifting, vehicle transport, packing and international move coordination from Bangalore.',
};

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-slate-950 py-16 text-white lg:py-20">
        <div className="page-shell max-w-4xl text-center">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">Relocation services</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">The right support for every kind of move</h1>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-300">Choose a service below or tell us what needs to move. We will help define the packing, crew and transport plan.</p>
        </div>
      </section>
      <section className="bg-stone-50 py-20">
        <div className="page-shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className={`group rounded-3xl border p-8 transition hover:-translate-y-1 hover:shadow-xl ${index === 0 ? 'border-orange-600 bg-orange-600 text-white md:col-span-2' : 'border-slate-200 bg-white'}`}>
              <p className={`text-xs font-black uppercase tracking-[0.18em] ${index === 0 ? 'text-orange-100' : 'text-orange-600'}`}>{service.eyebrow}</p>
              <h2 className="mt-8 text-2xl font-black">{service.title}</h2>
              <p className={`mt-3 text-sm leading-relaxed ${index === 0 ? 'text-orange-50' : 'text-slate-600'}`}>{service.summary}</p>
              <span className="mt-8 inline-block text-sm font-extrabold">View details &rarr;</span>
            </Link>
          ))}
        </div>
      </section>
      <FAQSection />
    </main>
  );
}
