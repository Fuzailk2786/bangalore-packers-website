import type { Metadata } from 'next';
import QuoteForm from '@/components/forms/QuoteForm';
import { getWhatsAppUrl, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact MoveSafe',
  description: 'Contact MoveSafe Packers and Movers in HSR Layout, Bangalore for moving estimates and relocation support.',
};

export default function ContactPage() {
  return (
    <main className="bg-stone-50 py-16 lg:py-20">
      <div className="page-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow mb-3">Contact us</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Let&apos;s talk about your move</h1>
          <p className="mt-5 max-w-xl leading-relaxed text-slate-600">Tell us where you are moving from, where you are going and what needs to be moved. We will help you understand the next steps.</p>
          <div className="mt-10 space-y-4">
            <a href={SITE.phoneHref} className="block rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-orange-400">
              <span className="eyebrow">Phone</span><strong className="mt-2 block text-xl">{SITE.phoneDisplay}</strong>
            </a>
            <a href={getWhatsAppUrl('Hello MoveSafe, I would like to discuss a move.')} className="block rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-emerald-500">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-600">WhatsApp</span><strong className="mt-2 block text-xl">Message our moving team</strong>
            </a>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="eyebrow">Office</span><address className="mt-2 not-italic leading-relaxed text-slate-700">{SITE.address}</address>
            </div>
          </div>
        </div>
        <QuoteForm />
      </div>
    </main>
  );
}
