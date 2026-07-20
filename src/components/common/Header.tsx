import Link from 'next/link';
import { SITE } from '@/lib/site';

export default function Header() {
  const links = [
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/locations', label: 'Areas Served' },
    { href: '/blog', label: 'Moving Guides' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-[60] border-b border-slate-800 bg-slate-950 text-white shadow-lg shadow-slate-950/10">
      <div className="page-shell flex h-18 min-h-[72px] items-center justify-between gap-4">
        <Link href="/" className="relative z-10 flex min-h-11 items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-600 font-black">M</span>
          <span className="leading-tight">
            <span className="block text-xl font-black tracking-tight">Move<span className="text-orange-500">Safe</span></span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Packers & Movers</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold md:flex" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href} className="transition hover:text-orange-400">{link.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={SITE.phoneHref} className="text-sm font-extrabold text-orange-400">{SITE.phoneDisplay}</a>
          <Link href="/request-quote" className="rounded-full bg-orange-600 px-5 py-2.5 text-sm font-extrabold transition hover:bg-orange-500">Free Quote</Link>
        </div>
        <details className="group md:hidden">
          <summary className="relative z-[80] grid min-h-11 min-w-11 cursor-pointer list-none place-content-center rounded-lg border border-slate-700 p-2 [&::-webkit-details-marker]:hidden" aria-label="Toggle navigation">
            <span className="block h-0.5 w-6 bg-white transition group-open:translate-y-2 group-open:rotate-45" />
            <span className="mt-1.5 block h-0.5 w-6 bg-white transition group-open:opacity-0" />
            <span className="mt-1.5 block h-0.5 w-6 bg-white transition group-open:-translate-y-2 group-open:-rotate-45" />
          </summary>
          <nav id="mobile-navigation" className="fixed inset-x-0 top-[72px] z-[70] max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-slate-800 bg-slate-950 px-4 py-4 shadow-2xl md:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-7xl flex-col">
              {links.map((link) => <Link key={link.href} href={link.href} className="flex min-h-12 items-center border-b border-slate-800 py-3 text-sm font-bold">{link.label}</Link>)}
              <Link href="/request-quote" className="mt-4 flex min-h-12 items-center justify-center rounded-full bg-orange-600 px-5 py-3 text-center text-sm font-extrabold">Get a Free Quote</Link>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
