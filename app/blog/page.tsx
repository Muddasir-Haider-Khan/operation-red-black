'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import blogPostsData from '@/src/data/blog-posts.json';

export default function BlogPage() {
  const blogPosts = blogPostsData;
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black-primary pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-black-secondary to-black-primary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-red-accent font-semibold tracking-wider uppercase text-sm">
                Blog
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Latest Updates
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-red-primary to-red-accent mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:gap-12">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-black-secondary border border-red-primary/20 rounded-xl overflow-hidden hover:border-red-primary/50 transition-all duration-300"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Image */}
                    <div className="relative aspect-video md:aspect-square bg-black-tertiary">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-primary/10 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-red-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg
                            className="w-8 h-8 text-red-accent"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.668z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-red-primary/90 text-white text-xs font-semibold rounded-full">
                          {post.badge}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                      <div className="text-gray-muted text-sm mb-2">{post.date}</div>
                      <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-red-accent transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="text-gray-muted leading-relaxed mb-6">
                      {post.description && post.description.substring(0, 150) + '...'}
                      </p>
                      <Link href={`/blog/${post.id}`} className="flex items-center text-red-accent font-medium mt-auto group-hover:underline">
                        <span>View Details</span>
                        <svg
                          className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center text-gray-muted hover:text-red-accent transition-colors duration-300"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}