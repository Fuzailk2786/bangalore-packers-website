import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Areas Served in Bangalore',
  description: 'MoveSafe serves HSR Layout and major localities across Bangalore, with domestic relocation services throughout India.',
};

const regions = [
  { zone: 'South Bangalore', areas: ['HSR Layout', 'Koramangala', 'BTM Layout', 'Jayanagar', 'JP Nagar', 'Electronic City'] },
  { zone: 'East Bangalore', areas: ['Whitefield', 'Marathahalli', 'Bellandur', 'Sarjapur Road', 'Indiranagar', 'KR Puram'] },
  { zone: 'North Bangalore', areas: ['Hebbal', 'Yelahanka', 'Hennur', 'Jakkur', 'Thanisandra', 'Devanahalli'] },
  { zone: 'West & Central', areas: ['Rajajinagar', 'Vijayanagar', 'Malleshwaram', 'Yeshwanthpur', 'Richmond Town', 'MG Road'] },
];

const cities = ['Chennai', 'Hyderabad', 'Mumbai', 'Pune', 'Delhi NCR', 'Kochi', 'Kolkata', 'Ahmedabad'];

export default function LocationsPage() {
  return (
    <main>
      <section className="bg-slate-950 py-20 text-center text-white">
        <div className="page-shell">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">Areas served</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Moving across Bangalore and beyond</h1>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-300">From our base in HSR Layout, we coordinate moves throughout Bangalore and to major cities across India.</p>
        </div>
      </section>
      <section className="bg-stone-50 py-20">
        <div className="page-shell">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {regions.map((region) => (
              <div key={region.zone} className="rounded-3xl border border-slate-200 bg-white p-7">
                <h2 className="text-lg font-black">{region.zone}</h2>
                <ul className="mt-5 space-y-3 text-sm text-slate-600">{region.areas.map((area) => <li key={area} className="border-b border-slate-100 pb-2">{area}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="mt-16 rounded-3xl bg-orange-600 p-8 text-white md:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-100">Popular intercity routes</p>
            <h2 className="mt-3 text-3xl font-black">From Bangalore to cities across India</h2>
            <div className="mt-6 flex flex-wrap gap-2">{cities.map((city) => <span key={city} className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold">{city}</span>)}</div>
            <Link href="/request-quote" className="secondary-button mt-8 border-white">Check Your Route</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
