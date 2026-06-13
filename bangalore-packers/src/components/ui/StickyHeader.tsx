"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function StickyHeader() {
  const = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled? "bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-900 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 focus:outline-none">
          <span className="text-xl font-black text-white tracking-wider uppercase">
            Portavo<span className="text-indigo-500">Move</span>
          </span>
        </Link>

        {/* Desktop Navigation Link Array */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/about-us" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">About Us</Link>
          <Link href="/services" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Services</Link>
          <Link href="/locations" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Locations</Link>
          <Link href="/blog" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Insights</Link>
          <Link href="/contact-us" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+919876543210" className="text-slate-300 hover:text-white text-sm font-semibold flex items-center gap-1.5 focus:outline-none">
            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a20.373 20.373 0 01-7.108-7.108c-.115-.44.05-.927.426-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
            </svg>
            +91 9876543210 
          </a>
          <Link href="/request-quote" className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-all focus:outline-none">
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none" aria-label="Toggle Navigation Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}></path>
          </svg>
        </button>
      </div>

      {/* Slide-Down Mobile Navigation Drawer */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen? "max-h-screen bg-slate-950 border-b border-slate-900" : "max-h-0"}`}>
        <div className="px-4 pt-4 pb-6 space-y-3">
          <Link href="/about-us" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white text-base font-semibold">About Us</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white text-base font-semibold">Services</Link>
          <Link href="/locations" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white text-base font-semibold">Locations</Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white text-base font-semibold">Insights</Link>
          <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white text-base font-semibold">Contact</Link>
          <div className="pt-4 border-t border-slate-900 flex flex-col gap-4">
            <a href="tel:+919876543210" className="text-slate-300 text-sm font-semibold flex items-center gap-2">
              <span>Phone:</span> +91 9876543210 
            </a>
            <Link href="/request-quote" onClick={() => setMobileMenuOpen(false)} className="w-full bg-indigo-600 text-white text-center font-bold uppercase tracking-wider py-3.5 rounded-lg text-sm block">
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
