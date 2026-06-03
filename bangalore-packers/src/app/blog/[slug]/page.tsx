import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import QuoteForm from '@/components/forms/QuoteForm';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (params.slug !== "packers-movers-charges-bangalore-guide") return {};
  return {
    title: 'Packers and Movers Charges in Bangalore (2026 Guide)',
    description: 'Avoid hidden fees. Learn about real shifting costs in Bangalore, including average rates for 1 BHK, 2 BHK, and 3 BHK homes, along with helpful cost-saving tips.',
  };
}

export default function BlogPostPage({ params }: Props) {
  if (params.slug !== "packers-movers-charges-bangalore-guide") {
    notFound();
  }

  return (
    <article className="py-12 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-8 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
        <span className="text-xs text-orange-600 font-bold uppercase tracking-wider">Pricing & Estimates</span>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-2 mb-6">
          Packers and Movers Charges in Bangalore: Detailed Cost Guides
        </h1>
        <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            Planning a move inside India's tech capital often brings up one big question: <strong>What are the actual charges for professional packers and movers in Bangalore?</strong>
          </p>
          <p>
            While many generic online estimators give vague answers, clear, reliable pricing depends on three main factors: the total volume of goods, the quality of packing materials needed, and the exact distance between properties.
          </p>
          <h2 className="text-xl font-bold text-slate-900 pt-4">Estimated Average Pricing Matrix</h2>
          <p>
            Local shifting costs within Bangalore generally follow these structural baseline estimates:
          </p>
          <ul className="space-y-1 list-disc pl-5 text-sm">
            <li><strong>1 BHK Apartment Unit:</strong> ₹4,500 to ₹9,000</li>
            <li><strong>2 BHK Apartment Unit:</strong> ₹7,500 to ₹14,500</li>
            <li><strong>3 BHK Premium Apartment:</strong> ₹11,000 to ₹22,000</li>
          </ul>
        </div>
      </div>
      <div className="lg:col-span-4 sticky top-24"><QuoteForm /></div>
    </article>
  );
}