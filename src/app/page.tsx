import Link from 'next/link';
import QuoteForm from '@/components/forms/QuoteForm';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import FAQSection from '@/components/sections/FAQSection';
import TargetLocations from '@/components/sections/TargetLocations';
import { getLocalBusinessSchema } from '@/lib/schema-markup';
import { SERVICES, SITE } from '@/lib/site';

export default function HomePage() {
  const schema = getLocalBusinessSchema();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        <section className="relative overflow-hidden bg-slate-950 py-16 text-white lg:py-24">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl" aria-hidden="true" />
          <div className="page-shell relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-400">Based in HSR Layout, Bangalore</p>
              <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
                Moving made <span className="text-orange-500">clear, careful</span> and manageable.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                MoveSafe plans and coordinates home shifting, office relocation, packing and vehicle transport in Bangalore and across India.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={SITE.phoneHref} className="primary-button">Call {SITE.phoneDisplay}</a>
                <Link href="/services" className="relative z-10 inline-flex min-h-11 items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-extrabold transition hover:border-orange-500 hover:text-orange-400">Explore Services</Link>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 border-t border-slate-800 pt-6 text-sm text-slate-400">
                <span>Local & intercity</span>
                <span>Homes & offices</span>
                <span>7-day support</span>
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>

        <section className="bg-stone-50 py-20">
          <div className="page-shell">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="eyebrow mb-3">What we move</p>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">One team for every part of your move</h2>
              </div>
              <Link href="/services" className="inline-flex min-h-11 items-center text-sm font-extrabold text-orange-700 hover:text-orange-800">View all services &rarr;</Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service, index) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className={`group rounded-3xl border p-7 transition hover:-translate-y-1 hover:shadow-xl ${index === 0 ? 'border-orange-600 bg-orange-600 text-white lg:col-span-2' : 'border-slate-200 bg-white'}`}>
                  <span className={`text-xs font-black uppercase tracking-[0.18em] ${index === 0 ? 'text-orange-100' : 'text-orange-600'}`}>{service.eyebrow}</span>
                  <h3 className="mt-8 text-2xl font-black">{service.title}</h3>
                  <p className={`mt-3 max-w-xl text-sm leading-relaxed ${index === 0 ? 'text-orange-50' : 'text-slate-600'}`}>{service.summary}</p>
                  <span className="mt-8 inline-block text-sm font-extrabold">See service details &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ProcessTimeline />

        <section className="bg-orange-600 py-16 text-white">
          <div className="page-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-100">Ready when you are</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">Start with a quick conversation about your move.</h2>
              <p className="mt-3 text-orange-50">No obligation. Share your route and requirements, and we will explain the next step.</p>
            </div>
            <Link href="/request-quote" className="secondary-button border-white">Request a Free Quote</Link>
          </div>
        </section>

        <TargetLocations />
        <FAQSection />
      </main>
    </>
  );
}
