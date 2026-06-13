'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-slate-900 text-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-black tracking-tight text-orange-600">
          APEX<span className={isScrolled ? 'text-slate-900' : 'text-white'}>LOGISTICS</span>
        </Link>
        <nav className="hidden md:flex space-x-6 font-medium text-sm">
          <Link href="/services" className="hover:text-orange-500 transition">Services</Link>
          <Link href="/about" className="hover:text-orange-500 transition">About</Link>
          <Link href="/locations" className="hover:text-orange-500 transition">Areas Served</Link>
          <Link href="/blog" className="hover:text-orange-500 transition">Blog</Link>
          <Link href="/contact" className="hover:text-orange-500 transition">Contact</Link>
        </nav>
        <div>
          <Link href="/request-quote" className="bg-orange-600 hover:bg-orange-700 text-white text-xs md:text-sm font-bold px-4 py-2.5 rounded-lg shadow transition">
            Get Pricing
          </Link>
        </div>
      </div>
    </header>
  );
}