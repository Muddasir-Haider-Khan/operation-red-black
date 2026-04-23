'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import blogPostsData from '@/src/data/blog-posts.json';
import { BlogPost } from '@/src/types/blog';

export default function FeaturedPosts() {
  // Take first 2 posts as featured
  const getYouTubeThumbnail = (url: string) => {
    const videoId = url.split('/').pop();
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const posts = (blogPostsData as BlogPost[]).filter(post => post.featured);
  
  return (
    <section className="py-20 lg:py-32 bg-black-primary relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-accent font-semibold tracking-wider uppercase text-sm">
            Featured
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Featured Posts
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-red-primary to-red-accent mx-auto" />
        </motion.div>

        {/* Posts Grid */}
        <div className={`grid ${posts.length > 1 ? 'md:grid-cols-2' : 'max-w-2xl mx-auto'} gap-8 lg:gap-12`}>
          {posts.map((post: BlogPost, index) => {
            const hasMedia = post.image || post.videoEmbed || post.localVideo || (post.images && post.images.length > 0);
            const mediaSource = post.image || (post.images && post.images[0]) || (post.videoEmbed ? getYouTubeThumbnail(post.videoEmbed) : null);

            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.id}`} className="block group h-full">
                  <article className="bg-black border border-red-primary/30 hover:border-red-primary transition-all duration-100 h-full flex flex-col relative group">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-accent z-20" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-accent z-20" />
                    {/* Image/Media Section */}
                    {hasMedia && (
                      <div className="relative aspect-video bg-transparent overflow-hidden">
                        {post.localVideo ? (
                          <video
                            src={post.localVideo}
                            muted
                            loop
                            playsInline
                            onMouseOver={(e) => e.currentTarget.play()}
                            onMouseOut={(e) => e.currentTarget.pause()}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : mediaSource ? (
                          <Image
                            src={mediaSource}
                            alt={post.title}
                            fill
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : null}
                        <div className="absolute inset-0 bg-gradient-to-t from-black-primary/80 via-transparent to-transparent z-10" />

                        {(post.videoEmbed || post.localVideo) && (
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="w-16 h-16 rounded-full bg-red-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-red-primary/20">
                              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        )}

                        {/* Dossier Badge */}
                        <div className="absolute top-4 left-4 z-20">
                          <span className="px-3 py-1 bg-black border border-red-primary font-geist-mono text-red-accent text-[10px] font-bold uppercase tracking-widest flex items-center shadow-lg shadow-black/50">
                            <span className="mr-2 text-red-primary animate-pulse">●</span> {"//"} {post.badge}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-8 flex-grow flex flex-col relative z-10">
                      {!hasMedia && (
                        <div className="absolute top-8 right-8 z-20">
                          <span className="px-3 py-1 bg-black border border-red-primary font-geist-mono text-red-accent text-[10px] font-bold uppercase tracking-widest flex items-center shadow-lg shadow-black/50">
                            <span className="mr-2 text-red-primary animate-pulse">●</span> {"//"} {post.badge}
                          </span>
                        </div>
                      )}
                      <h3 className="text-xl sm:text-2xl font-bold font-geist-mono text-white mb-4 group-hover:text-red-accent transition-colors duration-100 uppercase tracking-widest border-b border-white/10 pb-4">
                        &gt;_ {post.title}
                      </h3>
                      <p className="text-gray-muted leading-relaxed flex-grow line-clamp-3 font-geist-mono text-sm tracking-wide">
                        {post.description}
                      </p>

                      {/* Read more */}
                      <div className="mt-8 flex justify-between items-center text-red-accent text-xs font-geist-mono font-bold tracking-widest uppercase transition-all">
                        <span className="text-white/40">[{post.date || '████'}]</span>
                        <span className="bg-red-accent/10 border border-red-primary/30 px-3 py-2 group-hover:bg-red-accent group-hover:text-white transition-colors duration-100">[ DECRYPT FILE ]</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}