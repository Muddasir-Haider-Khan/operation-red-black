import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import blogPostsData from '@/src/data/blog-posts.json';
import { BlogPost } from '@/src/types/blog';
import InterceptVisualizer from '@/components/InterceptVisualizer';

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
            <div className="mb-4 text-red-accent font-geist-mono text-xs tracking-widest flex items-center justify-center">
              <span className="animate-pulse mr-2">●</span> [ ACCESS LEVEL: {post.badge || 'RESTRICTED'} ]
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold font-geist-mono text-white mb-6 uppercase tracking-widest">
              &gt; {post.title}
            </h1>
            <div className="flex items-center justify-center text-gray-500 text-xs font-geist-mono space-x-6 tracking-widest border-y border-white/10 py-2 w-fit mx-auto">
              <span>LOG_DAT: {post.date || '████'}</span>
              <span>OPR: H. WAHAJ</span>
            </div>
          </header>

          {/* Main Media Section */}
          <div className="relative aspect-video bg-black border-2 border-red-primary/30 overflow-hidden mb-12 flex items-center justify-center group">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-accent z-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-accent z-20 pointer-events-none" />
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
              <InterceptVisualizer />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black-primary/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Body Content */}
          <div className="prose prose-invert prose-red mx-auto max-w-none">
            {/* Description Paragraphs */}
            {paragraphs.map((paragraph, idx) => (
              <p key={`desc-${idx}`} className="text-gray-300 text-base leading-relaxed mb-6 font-geist-mono border-l-2 border-red-primary/20 pl-4">
                {paragraph}
              </p>
            ))}

            {/* PDF Download Button */}
            {post.pdfUrl && (
              <div className="my-10 flex justify-center">
                <a
                  href={post.pdfUrl}
                  download
                  className="inline-flex items-center px-8 py-4 bg-red-primary/10 hover:bg-red-primary/30 text-red-accent border-2 border-red-primary font-geist-mono tracking-[0.2em] uppercase transition-all duration-100 font-black text-sm group shadow-[0_0_30px_rgba(220,38,38,0.2)]"
                >
                  <svg
                    className="w-6 h-6 mr-3 group-hover:translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth={2}
                      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  [ EXTRACT_MANIFEST_DATA ]
                </a>
              </div>
            )}

            {/* Full Content (e.g. Script) */}
            {fullContent.length > 0 && (
              <div className="mt-12">
                <div className="p-8 bg-black border-2 border-red-primary/20 font-geist-mono text-sm sm:text-base relative w-full">
                  <div className="absolute top-2 left-2 text-[10px] text-red-primary/50 tracking-widest">RAW_FEED</div>
                  {fullContent.map((line, idx) => (
                    <p
                      key={`content-${idx}`}
                      className={`mb-2 ${
                        line.startsWith('SCENE')
                          ? 'text-red-accent font-bold text-lg mt-8 mb-4'
                          : 'text-gray-400'
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Image Gallery */}
          <Gallery images={post.images || []} />

          {/* Back Navigation */}
          <div className="mt-16 pt-8 border-t border-black-secondary flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-transparent border border-red-primary/50 font-geist-mono text-xs tracking-widest uppercase text-red-accent hover:bg-red-accent hover:text-white transition-all duration-100 font-bold group"
            >
              <svg className="mr-3 w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              [ CLOSE CONNECTION ]
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
