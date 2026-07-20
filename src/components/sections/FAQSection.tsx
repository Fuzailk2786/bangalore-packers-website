import { getFAQSchema } from '@/lib/schema-markup';

const FAQS = [
  { question: 'How is my moving quote calculated?', answer: 'Pricing depends on the volume of goods, travel distance, floors and lift access, packing needs, vehicle size and any additional services. A survey helps us give a more accurate estimate.' },
  { question: 'How early should I book my move?', answer: 'Booking one to two weeks ahead is usually helpful, especially near month-end and on weekends. Contact us even for urgent moves and we will confirm availability.' },
  { question: 'Do you handle moves outside Bangalore?', answer: 'Yes. We coordinate local Bangalore moves as well as intercity household, office and vehicle transport from Bangalore to cities across India.' },
  { question: 'Can you pack only selected items?', answer: 'Yes. You can request full packing, fragile-item packing, selected-room packing or packing as a standalone service.' },
];

export default function FAQSection() {
  const schema = getFAQSchema(FAQS);

  return (
    <section className="bg-slate-950 py-20 text-white">
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-4xl px-4">
        <p className="mb-3 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">Useful answers</p>
        <h2 className="mb-10 text-center text-3xl font-black tracking-tight sm:text-4xl">Frequently asked questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="mb-2 text-base font-extrabold text-white md:text-lg">{faq.question}</h3>
              <p className="text-sm leading-relaxed text-slate-400 md:text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
