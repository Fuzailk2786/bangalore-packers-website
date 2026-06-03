import { Metadata } from 'next';
import QuoteForm from '@/components/forms/QuoteForm';

export const metadata: Metadata = {
  title: 'Domestic Packers and Movers Bangalore | Intercity Shifting',
  description: 'Verified intercity packers and movers from Bangalore to all major Indian cities. Enclosed container transport with comprehensive transit insurance policy protection.',
};

export default function DomesticPage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-7">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Seamless Intercity Moving Services From Bangalore</h1>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Relocating long-distance requires experienced coordination, precision safety handling, and verified legal authorizations. Our long-distance team utilizes specialized container trucks explicitly engineered to prevent friction damage during highway transit across state borders.
        </p>
        <h2 className="text-xl font-bold mb-2">Why Our Domestic Transport System Stands Out:</h2>
        <ul className="space-y-2 text-sm text-slate-600 mb-6">
          <li>✨ Comprehensive multi-state operating permits and license validations.</li>
          <li>✨ Complete digital documentation along with toll and state receipt disclosures.</li>
          <li>✨ Optional shared container options to maximize cost efficiencies.</li>
        </ul>
      </div>
      <div className="lg:col-span-5"><QuoteForm /></div>
    </div>
  );
}