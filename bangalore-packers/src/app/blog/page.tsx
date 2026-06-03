import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Moving Guide & Packing Relocation Tips Blog | Bangalore',
  description: 'Expert moving advice, packing checklists, and guides on shifting costs to help you plan a smooth, stress-free move in Bangalore.',
};

export default function BlogIndexPage() {
  const posts = [
    { slug: "packers-movers-charges-bangalore-guide", title: "Complete Breakdown of Packers and Movers Charges in Bangalore", date: "June 2026", desc: "An itemized look at actual local household moving costs, vehicle transport fees, and optional transit insurance expenses." }
  ];

  return (
    <div className="py-16 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-black mb-2 tracking-tight text-center">Relocation Guides & Moving Resources</h1>
      <p className="text-center text-slate-500 mb-12 text-sm">Expert tips and cost checklists compiled by our veteran logistics team.</p>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.slug} className="p-6 bg-white border border-slate-100 shadow-sm rounded-xl hover:shadow-md transition">
            <span className="text-xs text-slate-400 block mb-1">{post.date}</span>
            <h2 className="text-xl font-bold text-slate-900 mb-2 hover:text-orange-600 transition">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-sm text-slate-600 mb-4">{post.desc}</p>
            <Link href={`/blog/${post.slug}`} className="text-xs font-bold text-orange-600 uppercase tracking-widest">Read Article →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}