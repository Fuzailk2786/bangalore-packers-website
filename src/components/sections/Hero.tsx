import QuoteForm from '../forms/QuoteForm';

export default function Hero() {
  return (
    <section className="relative bg-slate-900 overflow-hidden py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 text-white text-center lg:text-left">
          <span className="bg-orange-600/20 text-orange-400 border border-orange-500/30 text-xs uppercase font-extrabold tracking-widest px-3 py-1.5 rounded-full inline-block mb-4">
            IBA Approved Packers and Movers Bangalore
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Stress-Free Shifting <br />
            <span className="text-orange-500">Done Professional Way.</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0">
            Ranked #1 for domestic, home, and commercial corporate relocation across Bangalore. Zero damage guaranteed with premium multi-layer packing material.
          </p>
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5">✓ Free Pre-Move Survey</span>
            <span className="flex items-center gap-1.5">✓ Zero Hidden Costs</span>
            <span className="flex items-center gap-1.5">✓ Live Consignment Tracking</span>
          </div>
        </div>
        
        <div className="lg:col-span-5 flex justify-center">
          <QuoteForm />
        </div>
      </div>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
    </section>
  );
}