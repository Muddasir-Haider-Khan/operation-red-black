'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import blogPostsData from '@/src/data/blog-posts.json';

export default function FeaturedPosts() {
  // Take first 2 posts as featured
  const getYouTubeThumbnail = (url: string) => {
    const videoId = url.split('/').pop();
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const posts = blogPostsData.slice(0, 2);
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
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {posts.map((post: any, index) => {
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
                <Link href="/blog" className="block group h-full">
                  <article className="bg-black-secondary border border-red-primary/20 rounded-xl overflow-hidden hover:border-red-primary/50 transition-all duration-300 h-full flex flex-col">
                    {/* Image/Media Section */}
                    {hasMedia && (
                      <div className="relative aspect-video bg-black-tertiary overflow-hidden">
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
                        ) : (
                          <img
                            src={mediaSource || ''}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black-primary/80 via-transparent to-transparent z-10" />

                        {(post.videoEmbed || post.localVideo) && (
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="w-16 h-16 rounded-full bg-red-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        )}

                        {/* Badge */}
                        <div className="absolute top-4 left-4 z-20">
                          <span className="px-3 py-1 bg-red-primary/90 text-white text-xs font-semibold rounded-full shadow-lg">
                            {post.badge}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col relative">
                      {!hasMedia && (
                        <div className="absolute top-6 right-6">
                           <span className="px-3 py-1 bg-red-primary/10 text-red-accent border border-red-primary/20 text-xs font-semibold rounded-full">
                             {post.badge}
                           </span>
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-accent transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-muted leading-relaxed flex-grow">
                        {post.description && post.description.length > 150 
                          ? post.description.substring(0, 150) + '...'
                          : post.description}
                      </p>

                      {/* Read more */}
                      <div className="mt-6 flex items-center text-red-accent text-sm font-medium">
                        <span>Read More</span>
                        <svg
                          className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
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