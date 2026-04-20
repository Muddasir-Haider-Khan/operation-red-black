'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const posts = [
  {
    id: 'film-screening',
    title: 'Film Screening',
    description:
      'Experience the excitement of our college film screening event. The project was showcased on the SMD screen in the Gym Hall, bringing our vision to life for the entire college community.',
    image: '/images/film-screening.jpg',
    badge: 'Event',
  },
  {
    id: 'final-product',
    title: 'Final Product',
    description:
      'The culmination of dedication and creativity. Proud to be one of only 3 students whose first draft was accepted, marking a significant milestone in this cinematic journey.',
    image: '/images/final-product.jpg',
    badge: 'Project',
  },
];

export default function FeaturedPosts() {
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
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/blog" className="block group">
                <article className="bg-black-secondary border border-red-primary/20 rounded-xl overflow-hidden hover:border-red-primary/50 transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative aspect-video bg-black-tertiary overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black-primary/80 to-transparent z-10" />

                    {/* Placeholder image */}
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

                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-red-primary/90 text-white text-xs font-semibold rounded-full">
                        {post.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-accent transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-muted leading-relaxed">
                      {post.description}
                    </p>

                    {/* Read more */}
                    <div className="mt-4 flex items-center text-red-accent text-sm font-medium">
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
          ))}
        </div>
      </div>
    </section>
  );
}