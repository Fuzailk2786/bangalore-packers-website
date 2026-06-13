import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Apex Packers and Movers Bangalore | Certified Shifting Professionals',
  description: 'Learn more about Apex Packers and Movers. Read about our journey, core values, specialized fleet, and commitment to safe, reliable moving across India.',
};

export default function AboutPage() {
  return (
    <div className="py-16 max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-black mb-6 tracking-tight">The Apex Logistics Professional Moving Journey</h1>
      <p className="text-slate-700 leading-relaxed text-base mb-4">
        Founded on transparency and absolute cargo safety, Apex Packers and Movers has evolved from a local Bangalore transport service into an industry-leading logistics network. 
      </p>
      <p className="text-slate-700 leading-relaxed text-base mb-6">
        We handle every move with direct, internal teams rather than relying on unverified third-party contractors. This approach ensures consistent quality, strict adherence to schedules, and clear accountability for every household and business asset we manage.
      </p>
      <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl">
        <h3 className="font-bold text-blue-900 mb-2">Our Operating Core Promise</h3>
        <p className="text-sm text-blue-800 leading-relaxed">No arbitrary price hikes on moving day, clear transit insurance policies, and premium multi-layer packing materials for every single move.</p>
      </div>
    </div>
  );
}