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
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 mb-4">📍 Major Localities Served in Bangalore</h3>
          <div className="grid grid-cols-2 gap-2">
            {LOCAL_AREAS.map((area) => (
              <Link key={area} href={`/locations?area=${encodeURIComponent(area.toLowerCase())}`} className="text-sm text-slate-600 hover:text-orange-600 transition flex items-center gap-1">
                • Packers and Movers in {area}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 mb-4">🚚 Domestic Shifting From Bangalore</h3>
          <div className="grid grid-cols-2 gap-2">
            {DOMESTIC_CITIES.map((city) => (
              <Link key={city} href={`/services/domestic-relocation?to=${encodeURIComponent(city.toLowerCase())}`} className="text-sm text-slate-600 hover:text-orange-600 transition flex items-center gap-1">
                → Bangalore to {city} Relocation
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}