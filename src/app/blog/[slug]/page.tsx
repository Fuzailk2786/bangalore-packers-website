import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, POSTS } from '@/lib/blog';

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.description } : {};
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="bg-stone-50 py-16 lg:py-20">
      <article className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link href="/blog" className="inline-flex min-h-11 items-center text-sm font-extrabold text-orange-700">&larr; All moving guides</Link>
        <p className="eyebrow mb-3 mt-10">{post.category} · {post.date}</p>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">{post.intro}</p>
        <div className="mt-12 space-y-8">
          {post.sections.map((section) => (
            <section key={section.heading} className="rounded-2xl border border-slate-200 bg-white p-7">
              <h2 className="text-xl font-black">{section.heading}</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{section.text}</p>
            </section>
          ))}
        </div>
        <div className="mt-12 rounded-3xl bg-slate-950 p-8 text-white">
          <h2 className="text-2xl font-black">Planning a move?</h2>
          <p className="mt-2 text-slate-300">Share your route and requirements with the MoveSafe team.</p>
          <Link href="/request-quote" className="primary-button mt-6">Request a Quote</Link>
        </div>
      </article>
    </main>
  );
}
