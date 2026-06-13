import { getFAQSchema } from '@/lib/schema-markup';

const FAQS = [
  { question: "How much do packers and movers charge in Bangalore?", answer: "Local house shifting charges within Bangalore generally range between ₹4,500 to ₹18,000 depending on the volume of household items and distance between locations." },
  { question: "Do you offer international relocation from Bangalore?", answer: "Yes, we offer door-to-door international logistics, handling customs clearance, air/sea freight shipping, and localized destination drop-offs across major global regions." },
  { question: "Is insurance included in your packing services?", answer: "We provide options for transparent transit insurance policies covering up to 100% of declared item values against unexpected physical transit damage." }
];

export default function FAQSection() {
  const schema = getFAQSchema(FAQS);

  return (
    <section className="py-16 bg-slate-100">
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-8 tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base md:text-lg mb-1">{faq.question}</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}