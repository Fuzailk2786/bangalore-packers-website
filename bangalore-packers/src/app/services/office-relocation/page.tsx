import { Metadata } from 'next';
import QuoteForm from '@/components/forms/QuoteForm';

export const metadata: Metadata = {
  title: 'Office Relocation Services in Bangalore | Corporate Moving',
  description: 'Professional commercial office shifting in Bangalore. Minimized operational downtime with secure IT infrastructure, server rack, and office asset transfers.',
};

export default function OfficePage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-7">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Premium Corporate & Office Shifting in Bangalore</h1>
        <p className="text-slate-600 mb-6 leading-relaxed">
          We keep business downtime to a minimum. Our corporate moving experts specialize in packing fragile IT setups, server systems, modular desks, and critical data archives safely. We offer weekend and after-hours moving options to ensure your day-to-day business operations continue uninterrupted.
        </p>
      </div>
      <div className="lg:col-span-5"><QuoteForm /></div>
    </div>
  );
}