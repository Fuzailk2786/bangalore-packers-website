export default function ProcessTimeline() {
  const steps = [
    { title: "1. Virtual / In-Home Survey", desc: "Share items via our instant quote framework or request a detailed verification walkthrough." },
    { title: "2. Strategic Multi-Layer Packing", desc: "Heavy furniture and items are packed with zero-bubble sheets, corrugated sheets, and durable boxes." },
    { title: "3. Secure Loading & Transit", desc: "Handled strictly by our direct, verified logistics crew using specialized enclosed auto-containers." },
    { title: "4. Fast Unloading & Setup", desc: "Safe unloading, unpackaging, and placement setup inside your newly allocated property structure." }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-2 tracking-tight">Our Precision Operational Workflow</h2>
        <p className="text-center text-slate-500 max-w-xl mx-auto mb-12 text-sm">Four structured execution steps engineered to avoid structural damage and moving delays.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-100 relative">
              <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}