import type { Metadata } from 'next';
import Link from 'next/link';
import { POSTS } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Moving Guides',
  description: 'Practical guides for planning, pricing and packing your move in Bangalore.',
};

export default function BlogPage() {
  return (
    <main>
      <section className="bg-slate-950 py-20 text-white">
        <div className="page-shell max-w-3xl text-center">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">Moving guides</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Useful advice before the first box is packed</h1>
          <p className="mt-5 leading-relaxed text-slate-300">Straightforward guides to help you plan, prepare and ask better questions about your move.</p>
        </div>
      </section>
      <section className="bg-stone-50 py-20">
        <div className="page-shell grid gap-6 lg:grid-cols-3">
          {POSTS.map((post, index) => (
            <article key={post.slug} className={`flex flex-col rounded-3xl border p-8 ${index === 0 ? 'border-orange-600 bg-orange-600 text-white lg:col-span-2' : 'border-slate-200 bg-white'}`}>
              <div className={`text-xs font-extrabold uppercase tracking-[0.16em] ${index === 0 ? 'text-orange-100' : 'text-orange-600'}`}>{post.category} · {post.date}</div>
              <h2 className="mt-8 text-2xl font-black tracking-tight sm:text-3xl">{post.title}</h2>
              <p className={`mt-4 text-sm leading-relaxed ${index === 0 ? 'text-orange-50' : 'text-slate-600'}`}>{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="mt-8 inline-flex min-h-11 items-center text-sm font-extrabold">Read guide &rarr;</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
