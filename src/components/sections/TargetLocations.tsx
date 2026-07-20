import Link from 'next/link';

const LOCAL_AREAS = [
  "Whitefield", "Electronic City", "HSR Layout", "Indiranagar", "Marathahalli", 
  "Jayanagar", "Koramangala", "Yelahanka", "BTM Layout", "Bannerghatta Road"
];

const DOMESTIC_CITIES = [
  "Mumbai", "Delhi NCR", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad"
];

export default function TargetLocations() {
  return (
    <section className="border-t border-slate-200 bg-stone-50 py-20">
      <div className="page-shell grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-3">Local moves</p>
          <h3 className="mb-5 text-2xl font-black text-slate-900">Bangalore localities we serve</h3>
          <div className="grid grid-cols-2 gap-2">
            {LOCAL_AREAS.map((area) => (
              <Link key={area} href={`/locations?area=${encodeURIComponent(area.toLowerCase())}`} className="flex min-h-11 items-center gap-1 text-sm text-slate-600 transition hover:text-orange-600">
                Packers and Movers in {area}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow mb-3">Intercity moves</p>
          <h3 className="mb-5 text-2xl font-black text-slate-900">Popular routes from Bangalore</h3>
          <div className="grid grid-cols-2 gap-2">
            {DOMESTIC_CITIES.map((city) => (
              <Link key={city} href={`/services/domestic-relocation?to=${encodeURIComponent(city.toLowerCase())}`} className="flex min-h-11 items-center gap-1 text-sm text-slate-600 transition hover:text-orange-600">
                Bangalore to {city}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
