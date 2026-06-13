import React from "react";
import StickyHeader from "@/components/ui/StickyHeader";
import FAQSection from "@/components/ui/FAQSection";

export const metadata = {
  title: "Contact Professional Packers and Movers Bangalore | Portavo Move",
  description: "Contact Portavo Packers and Movers. Visit our Bangalore headquarters, email our support desk, or speak directly with our relocation advisors.[2, 3, 43]",
};

export default function ContactUsPage() {
  return (
    <>
      <StickyHeader />
      <main className="bg-slate-950 min-h-screen text-white pt-24">
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Contact Desk</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Get in Touch</h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Have questions about an upcoming move, packing requirements, or shipping rates? Our support team is available to assist.
            </p>
            
            <div className="space-y-4 pt-4 border-t border-slate-900">
              <div className="flex items-start gap-4">
                <span className="text-sm font-bold text-indigo-400">Headquarters:</span>
                <p className="text-slate-400 text-sm leading-relaxed">
                  No. 45, Residency Road, Shanthala Nagar, Bangalore, Karnataka - 560025
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-indigo-400">Direct Phone:</span>
                <p className="text-slate-400 text-sm">+91 9876543210 </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-indigo-400">Support Email:</span>
                <p className="text-slate-400 text-sm">support@portavomove.com</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-6">
            <h3 className="text-xl font-bold text-white tracking-wide">Business Operations</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Our support desk is open 24/7.[47] On-site packing and transport services operate from 6:00 AM to 9:00 PM Monday through Sunday.
            </p>
            <div className="pt-4 border-t border-slate-800">
              <a href="tel:+919876543210" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold uppercase tracking-wider py-3.5 rounded-lg text-sm block transition-all shadow-lg hover:shadow-indigo-500/20">
                Call Direct Support Desk
              </a>
            </div>
          </div>
        </section>
        <FAQSection />
      </main>
    </>
  );
}
