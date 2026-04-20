'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/src/types/blog';

interface BlogContentProps {
  posts: BlogPost[];
}

export default function BlogContent({ posts }: BlogContentProps) {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(posts.map(post => post.badge))];
  const filteredPosts = filter === 'All' ? posts : posts.filter(post => post.badge === filter);

  const getYouTubeThumbnail = (url: string) => {
    const videoId = url.split('/').pop();
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          Cinematic <span className="text-red-accent">Logs</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-muted text-lg max-w-2xl mx-auto"
        >
          Step behind the lens. A complete archive of pre-production, 
          bts footage, and critical reflections.
        </motion.p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
              filter === cat 
                ? 'bg-red-primary text-white border-red-primary shadow-lg shadow-red-primary/20' 
                : 'bg-black-secondary text-gray-400 border-red-primary/10 hover:border-red-primary/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <motion.div 
        layout
        className="columns-1 md:columns-2 lg:columns-3 gap-8 lg:gap-10 space-y-8 lg:space-y-10"
      >
        <AnimatePresence mode='popLayout'>
          {filteredPosts.map((post) => {
            const hasMedia = post.image || post.videoEmbed || post.localVideo || (post.images && post.images.length > 0);
            const mediaSource = post.image || (post.images && post.images[0]) || (post.videoEmbed ? getYouTubeThumbnail(post.videoEmbed) : null);

            return (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid shadow-lg relative group h-full mb-8 lg:mb-0"
              >
                <Link href={`/blog/${post.id}`} className="block group h-full">
                  <article className="bg-black border border-red-primary/30 hover:border-red-primary transition-all duration-100 h-full flex flex-col relative group">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-accent z-20" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-accent z-20" />
                    {/* Media Section */}
                    {hasMedia && (
                      <div className="relative aspect-[16/10] bg-transparent overflow-hidden">
                        {post.localVideo ? (
                          <video
                            src={post.localVideo}
                            muted
                            loop
                            playsInline
                            onMouseOver={(e) => e.currentTarget.play()}
                            onMouseOut={(e) => e.currentTarget.pause()}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        ) : mediaSource ? (
                          <Image
                            src={mediaSource}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : null}
                        <div className="absolute inset-0 bg-gradient-to-t from-black-primary/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                        
                        {/* Play Indicator for Video */}
                        {(post.videoEmbed || post.localVideo) && (
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-12 h-12 rounded-full bg-red-primary/80 flex items-center justify-center shadow-xl">
                              <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        )}

                        <div className="absolute top-4 left-4 z-20">
                          <span className="px-3 py-1 bg-black border border-red-primary font-geist-mono text-red-accent text-[10px] font-bold uppercase tracking-widest flex items-center shadow-lg shadow-black/50">
                            <span className="mr-2 text-red-primary animate-pulse">●</span> {"//"} {post.badge}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-8 flex-grow flex flex-col relative">
                      {!hasMedia && (
                        <div className="mb-4 z-20 relative">
                          <span className="px-3 py-1 inline-flex items-center bg-black border border-red-primary font-geist-mono text-red-accent text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-black/50">
                            <span className="mr-2 text-red-primary animate-pulse">●</span> {"//"} {post.badge}
                          </span>
                        </div>
                      )}
                      <h3 className="text-xl font-bold font-geist-mono text-white mb-4 group-hover:text-red-accent transition-colors duration-100 uppercase tracking-widest border-b border-white/10 pb-4">
                        &gt;_ {post.title}
                      </h3>
                      <p className="text-gray-muted text-sm leading-relaxed line-clamp-3 mb-8 flex-grow font-geist-mono">
                        {post.description}
                      </p>
                      <div className="flex justify-between items-center mt-auto pt-4 text-red-accent text-[10px] font-geist-mono font-bold tracking-widest uppercase transition-all">
                        <span className="text-white/40">[{post.date || '████'}]</span>
                        <span className="bg-red-accent/10 border border-red-primary/30 px-3 py-2 group-hover:bg-red-accent group-hover:text-white transition-colors duration-100">[ DECRYPT FILE ]</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
