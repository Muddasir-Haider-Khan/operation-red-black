import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import blogPostsData from '@/src/data/blog-posts.json';

export async function generateStaticParams() {
  return blogPostsData.map((post: any) => ({
    slug: post.id,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const posts = blogPostsData;
  const post = posts.find((p: any) => p.id === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Format paragraphs from double newlines
  const paragraphs = post.description.split('\n\n').filter((p: string) => p.trim() !== '');

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black-primary pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12 text-center">
            <span className="inline-block px-3 py-1 bg-red-primary/10 text-red-accent border border-red-primary/20 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
              {post.badge || 'Article'}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center text-gray-muted text-sm space-x-4">
              <span>{post.date || '2024'}</span>
              <span>&bull;</span>
              <span>Habibullah Wahaaj</span>
            </div>
          </header>

          {/* Placeholder Image (Strict adherence to rule 5) */}
          <div className="relative aspect-video bg-black-secondary border border-red-primary/20 rounded-xl overflow-hidden mb-12 flex items-center justify-center">
             <div className="w-24 h-24 rounded-full bg-red-primary/10 flex items-center justify-center">
               <svg
                 className="w-12 h-12 text-red-accent/60"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
               >
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
             </div>
             <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-md text-xs text-gray-400 border border-gray-800">
               Image Placeholder
             </div>
          </div>

          {/* Body Content */}
          <div className="prose prose-invert prose-red mx-auto max-w-none">
            {paragraphs.map((paragraph: string, idx: number) => (
              <p key={idx} className="text-gray-300 text-lg leading-relaxed mb-6 font-geist-sans">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Back Navigation */}
          <div className="mt-16 pt-8 border-t border-black-secondary flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-muted hover:text-red-accent transition-colors duration-300 font-medium"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Posts
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
