import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import blogPostsData from '@/src/data/blog-posts.json';
import { BlogPost } from '@/src/types/blog';

// Generate dynamic metadata for each post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = (blogPostsData as BlogPost[]).find((p) => p.id === resolvedParams.slug);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Operation Red & Black`,
    description: post.description.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.description.substring(0, 160),
      images: post.image ? [post.image] : [],
    },
  };
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const posts = blogPostsData as BlogPost[];
  const post = posts.find((p) => p.id === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Format paragraphs from description
  const paragraphs = post.description?.split('\n\n').filter((p: string) => p.trim() !== '') || [];
  
  // Format long content if available (e.g. for the Script)
  const fullContent = post.content?.split('\n').filter(line => line.trim() !== '') || [];

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

          {/* Main Media Section */}
          <div className="relative aspect-video bg-black-secondary border border-red-primary/20 rounded-xl overflow-hidden mb-12 flex items-center justify-center group">
            {post.videoEmbed ? (
              <iframe
                src={post.videoEmbed}
                title={post.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : post.localVideo ? (
              <video
                src={post.localVideo}
                controls
                className="w-full h-full object-contain bg-black"
                playsInline
              />
            ) : post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="flex flex-col items-center">
                 <div className="w-24 h-24 rounded-full bg-red-primary/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-12 h-12 text-red-accent/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                 </div>
                 <span className="text-gray-muted text-sm uppercase tracking-widest font-semibold">Cinematic Preview</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black-primary/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Body Content */}
          <div className="prose prose-invert prose-red mx-auto max-w-none">
            {/* Description Paragraphs */}
            {paragraphs.map((paragraph, idx) => (
              <p key={`desc-${idx}`} className="text-gray-300 text-lg leading-relaxed mb-6 font-geist-sans">
                {paragraph}
              </p>
            ))}

            {/* Full Content (e.g. Script) */}
            {fullContent.length > 0 && (
              <div className="mt-12 p-8 bg-black-secondary border border-red-primary/10 rounded-xl font-geist-mono text-sm sm:text-base">
                {fullContent.map((line, idx) => (
                  <p key={`content-${idx}`} className={`mb-2 ${line.startsWith('SCENE') ? 'text-red-accent font-bold text-lg mt-8 mb-4' : 'text-gray-400'}`}>
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Image Gallery */}
          <Gallery images={post.images || []} />

          {/* Back Navigation */}
          <div className="mt-16 pt-8 border-t border-black-secondary flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-black-secondary border border-red-primary/20 rounded-full text-gray-muted hover:text-white hover:border-red-primary/60 transition-all duration-300 font-medium group"
            >
              <svg className="mr-3 w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Cinematic Logs
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
