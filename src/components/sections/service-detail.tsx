import Link from 'next/link';
import QuoteForm from '@/components/forms/QuoteForm';
import FAQSection from '@/components/sections/FAQSection';
import type { Service } from '@/lib/site';
import { SITE } from '@/lib/site';

export default function ServiceDetail({ service }: { service: Service }) {
  return (
    <main>
      <section className="bg-slate-950 py-16 text-white lg:py-24">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">{service.eyebrow}</p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="primary-button">Talk to Our Team</a>
              <Link href="/services" className="relative z-10 inline-flex min-h-11 items-center rounded-full border border-slate-700 px-6 py-3 text-sm font-extrabold hover:border-orange-500">All Services</Link>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
      <section className="bg-stone-50 py-20">
        <div className="page-shell">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">What is included</p>
            <h2 className="text-3xl font-black tracking-tight">Support shaped around your move</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.features.map((feature, index) => (
              <div key={feature} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-2xl font-black text-orange-200">0{index + 1}</span>
                <h3 className="mt-6 font-extrabold text-slate-950">{feature}</h3>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-500">Exact inclusions are confirmed in your written estimate based on the survey and route.</p>
        </div>
      </section>
      <FAQSection />
    </main>
  );
}
