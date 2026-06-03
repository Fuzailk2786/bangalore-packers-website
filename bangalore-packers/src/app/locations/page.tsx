import { Metadata } from 'next';
import QuoteForm from '@/components/forms/QuoteForm';

export const metadata: Metadata = {
  title: 'Areas We Serve in Bangalore | Apex Packers and Movers',
  description: 'Check our comprehensive service area list across Bangalore, including key hubs like HSR Layout, Whitefield, Indiranagar, Electronic City, and Koramangala.',
};

export default function LocationsPage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-7">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-6">Our Fleet Coverage Across Bangalore</h1>
        <p className="text-slate-600 leading-relaxed mb-6">
          With localized fleet hubs positioned across key Bangalore sectors, we guarantee on-time arrivals for packing crews and delivery trucks, helping you avoid common city traffic delays.
        </p>
        <div className="bg-slate-100 p-6 rounded-xl">
          <h3 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-4">Immediate Service Hub Coordinates:</h3>
          <p className="text-sm text-slate-700 font-medium">📍 East Zone: Whitefield, Marathahalli, Indiranagar</p>
          <p className="text-sm text-slate-700 font-medium mt-2">📍 South Zone: HSR Layout, Koramangala, Jayanagar, BTM Layout</p>
          <p className="text-sm text-slate-700 font-medium mt-2">📍 North & West Zone: Yelahanka, Hebbal, Malleshwaram</p>
        </div>
      </div>
      <div className="lg:col-span-5"><QuoteForm /></div>
    </div>
  );
}