import { Metadata } from 'next';
import QuoteForm from '@/components/forms/QuoteForm';

export const metadata: Metadata = {
  title: 'Contact Apex Packers and Movers Bangalore | Customer Support Helpdesk',
  description: 'Get in touch with our support team. Contact our Bangalore office for booking inquiries, pre-move support, or live transit updates.',
};

export default function ContactPage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-7 space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Connect With Our Customer Support Helpdesk</h1>
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          Have questions about an upcoming move, an active booking, or transit insurance options? Our central support team is here to give you fast, clear assistance.
        </p>
        <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm space-y-3 text-sm text-slate-700">
          <p><strong>🏢 Registered Business Entity:</strong> Apex Logistics Cargo Operations Ltd.</p>
          <p><strong>📧 Immediate Email Support:</strong> support@yourdomain.com</p>
          <p><strong>📞 Direct Hotline:</strong> +91 98765 43210</p>
        </div>
      </div>
      <div className="lg:col-span-5"><QuoteForm /></div>
    </div>
  );
}