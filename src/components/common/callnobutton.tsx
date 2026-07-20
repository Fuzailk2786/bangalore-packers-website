import { getWhatsAppUrl, SITE } from '@/lib/site';

export default function CallNowButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] grid grid-cols-2 bg-slate-950 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_rgba(15,23,42,0.18)] md:hidden">
      <a href={SITE.phoneHref} className="flex min-h-14 items-center justify-center border-r border-slate-700 bg-slate-950 px-3 text-center text-sm font-extrabold text-white">Call Now</a>
      <a href={getWhatsAppUrl('Hello MoveSafe, I would like a quote for my move.')} className="flex min-h-14 items-center justify-center bg-emerald-600 px-3 text-center text-sm font-extrabold text-white">WhatsApp</a>
    </div>
  );
}
