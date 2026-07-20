import type { Metadata } from 'next';
import QuoteForm from '@/components/forms/QuoteForm';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Request a Moving Quote',
  description: 'Share your moving requirements with MoveSafe and request a relocation estimate.',
};

export default function RequestQuotePage() {
  return (
    <main className="bg-slate-950 py-16 text-white lg:py-20">
      <div className="page-shell grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">Free estimate</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Share the basics. We&apos;ll help plan the rest.</h1>
          <p className="mt-5 max-w-xl leading-relaxed text-slate-300">A useful estimate starts with your route, date and inventory. Send those details on WhatsApp using this form, or call us directly.</p>
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Prefer to speak?</p>
            <a href={SITE.phoneHref} className="mt-1 inline-flex min-h-11 items-center text-2xl font-black text-orange-400">{SITE.phoneDisplay}</a>
          </div>
        </div>
        <QuoteForm />
      </div>
    </main>
  );
}
