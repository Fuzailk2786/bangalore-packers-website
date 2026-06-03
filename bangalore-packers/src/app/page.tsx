import Hero from '@/components/sections/Hero';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import Testimonials from '@/components/sections/Testimonials';
import FAQSection from '@/components/sections/FAQSection';
import TargetLocations from '@/components/sections/TargetLocations';
import { getLocalBusinessSchema } from '@/lib/schema-markup';

export default function HomePage() {
  const schema = getLocalBusinessSchema();

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <Hero />
      
      {/* Dynamic Trust Badges Section */}
      <section className="bg-white py-8 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><p className="text-3xl font-extrabold text-blue-900">15,000+</p><p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Moves Completed</p></div>
          <div><p className="text-3xl font-extrabold text-blue-900">4.9/5</p><p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Google Rating</p></div>
          <div><p className="text-3xl font-extrabold text-blue-900">100%</p><p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Insured Transit</p></div>
          <div><p className="text-3xl font-extrabold text-blue-900">0%</p><p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Hidden Charges</p></div>
        </div>
      </section>

      <ProcessTimeline />
      <TargetLocations />
      <Testimonials />
      <FAQSection />
    </>
  );
}