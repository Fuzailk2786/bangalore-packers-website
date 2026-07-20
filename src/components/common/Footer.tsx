import Link from 'next/link';
import { SERVICES, SITE } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800 bg-slate-950 pb-8 pt-16 text-slate-400">
      <div className="page-shell grid grid-cols-1 gap-10 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-xl font-black text-white">Move<span className="text-orange-500">Safe</span></h3>
          <p className="text-sm leading-relaxed">
            Practical, carefully planned home and business relocation services from HSR Layout, Bangalore.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-white">Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 4).map((service) => <li key={service.slug}><Link href={`/services/${service.slug}`} className="inline-flex min-h-11 items-center transition hover:text-white">{service.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-white">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="inline-flex min-h-11 items-center transition hover:text-white">About Us</Link></li>
            <li><Link href="/locations" className="inline-flex min-h-11 items-center transition hover:text-white">Areas Served</Link></li>
            <li><Link href="/blog" className="inline-flex min-h-11 items-center transition hover:text-white">Moving Guides</Link></li>
            <li><Link href="/contact" className="inline-flex min-h-11 items-center transition hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-white">Contact</h4>
          <p className="text-sm leading-relaxed">{SITE.address}</p>
          <a href={SITE.phoneHref} className="mt-3 inline-flex min-h-11 items-center text-sm font-bold text-orange-400 hover:text-orange-300">{SITE.phoneDisplay}</a>
        </div>
      </div>
      <div className="page-shell mt-12 border-t border-slate-800 pt-6 text-center text-xs">
        &copy; {year} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
