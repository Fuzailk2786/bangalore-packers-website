import { Metadata } from 'next';
import QuoteForm from '@/components/forms/QuoteForm';

export const metadata: Metadata = {
  title: 'International Packers and Movers Bangalore | Global Shipping',
  description: 'Reliable global shifting services from Bangalore. Complete assistance with sea freight container logistics, customs clearing paperwork, and overseas delivery.',
};

export default function InternationalPage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-7">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Door-to-Door International Relocation from Bangalore</h1>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Moving your household items or business overseas requires deep customs expertise and absolute security. We manage your entire international logistics pipeline, from professional moisture-barrier packing at your Bangalore home to global sea or air freight transport, customs clearance, and delivery right to your new address abroad.
        </p>
      </div>
      <div className="lg:col-span-5"><QuoteForm /></div>
    </div>
  );
}