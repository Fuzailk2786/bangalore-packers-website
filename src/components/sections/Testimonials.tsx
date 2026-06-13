export default function Testimonials() {
  const reviews = [
    { name: "Rahul Sharma", role: "Moved from Whitefield to HSR Layout", text: "Completely seamless transition. The crew handled my premium teakwood dining table and OLED TV with double layer air-bubble layers. Absolute value for money with zero surprise fees." },
    { name: "Priya Nair", role: "Relocated from Bangalore to Mumbai", text: "Extremely professional domestic moving execution. Got live container position tracking updates via WhatsApp, and all items arrived completely unharmed within 3 days." }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12 tracking-tight">Trusted by Thousands of Bengaluru Residents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-slate-600 text-sm md:text-base italic mb-4">"{rev.text}"</p>
              <div>
                <h4 className="font-bold text-slate-950 text-sm md:text-base">{rev.name}</h4>
                <p className="text-xs text-orange-600 font-medium">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}