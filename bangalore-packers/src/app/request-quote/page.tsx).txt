import { Metadata } from 'next';
import QuoteForm from '@/components/forms/QuoteForm';

export const metadata: Metadata = {
  title: 'Get Free Moving Estimate Quote | Apex Packers and Movers Bangalore',
  description: 'Submit details to receive an instant, accurate cost estimate for your home or office relocation. No hidden fees, 100% transparent pricing structure.',
};

export default function RequestQuotePage() {
  return (
    <div className="py-16 bg-slate-900 min-h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-white text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Request a Free, Transparent Quote</h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Fill out our quick moving form to lock in our promotional rates. A relocation expert will review your requirements and reach out within 15 minutes with a comprehensive cost breakdown.
          </p>
        </div>
        <div><QuoteForm /></div>
      </div>
    </div>
  );
}