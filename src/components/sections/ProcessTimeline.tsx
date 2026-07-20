export default function ProcessTimeline() {
  const steps = [
    { number: '01', title: 'Share Your Move', desc: 'Tell us the locations, date and key items so we can understand the job.' },
    { number: '02', title: 'Survey & Estimate', desc: 'We confirm the inventory and access details, then share a clear estimate.' },
    { number: '03', title: 'Pack & Transport', desc: 'The crew packs, labels, loads and transports your belongings as planned.' },
    { number: '04', title: 'Unload & Settle In', desc: 'Items are unloaded by room, with unpacking support if included in your plan.' }
  ];

  return (
    <section className="bg-white py-20">
      <div className="page-shell">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">How it works</p>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">A clear plan from first call to final box</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative rounded-2xl border border-slate-200 bg-stone-50 p-6">
              <span className="mb-8 block text-3xl font-black text-orange-200">{step.number}</span>
              <h3 className="mb-2 text-lg font-extrabold text-slate-950">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
