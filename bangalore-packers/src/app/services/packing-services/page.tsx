import { Metadata } from 'next';
import QuoteForm from '@/components/forms/QuoteForm';

export const metadata: Metadata = {
  title: 'Premium Packing and Unpacking Services Bangalore',
  description: 'Top-tier household packaging solutions in Bangalore using 5-layer heavy corrugated boxes, premium bubble wraps, and tailored wooden crates.',
};

export default function PackingPage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-7">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Professional Multi-Layer Packing and Unpacking Support</h1>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Great packing is the secret to a damage-free move. Our trained packing crews treat your belongings with the utmost care, using premium materials like heavy-duty boxes, bubble wrap, foam sheets, and custom crates for high-value items to guarantee everything arrives safely.
        </p>
      </div>
      <div className="lg:col-span-5"><QuoteForm /></div>
    </div>
  );
}