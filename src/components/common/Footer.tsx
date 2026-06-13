import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Apex Logistics Bangalore</h3>
          <p className="text-sm leading-relaxed">
            Bangalore's trusted logistics professionals specializing in household moving, high-value corporate transitions, and international cargo safety management.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Core Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/domestic-relocation" className="hover:text-white transition">Domestic Shifting</Link></li>
            <li><Link href="/services/international-relocation" className="hover:text-white transition">International Moving</Link></li>
            <li><Link href="/services/office-relocation" className="hover:text-white transition">Office Relocation</Link></li>
            <li><Link href="/services/vehicle-transport" className="hover:text-white transition">Car & Bike Transport</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/locations" className="hover:text-white transition">Areas Served</Link></li>
            <li><Link href="/blog" className="hover:text-white transition">Resource Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Compliance & Trust</h4>
          <p className="text-sm">📍 Head Office: HSR Layout, Sector 2, Bangalore, KA - 560102</p>
          <p className="text-sm mt-2">📞 Phone: +91 98765 43210</p>
          <p className="text-xs mt-4 text-slate-500">IBA Approved Logistics Operations Operator</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-slate-800 text-center text-xs">
        © {year} Apex Packers and Movers Bangalore. All Rights Reserved. All transit runs are fully insured.
      </div>
    </footer>
  );
}