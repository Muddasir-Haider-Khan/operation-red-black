'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-secondary border-t border-red-primary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <Link href="/" className="inline-block">
              <h3 className="text-xl font-bold">
                <span className="text-red-accent">OPERATION</span>{' '}
                <span className="text-white">RED & BLACK</span>
              </h3>
            </Link>
            <p className="text-gray-muted text-sm mt-2">
              A cinematic thriller experience
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-8"
          >
            <Link
              href="/"
              className="text-gray-muted hover:text-red-accent transition-colors duration-300 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-gray-muted hover:text-red-accent transition-colors duration-300 text-sm font-medium"
            >
              Blog
            </Link>
          </motion.div>

          {/* Attribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-gray-muted text-sm">
              &copy; {currentYear} Operation Red & Black. All rights reserved.
            </p>
            <p className="text-gray-muted text-xs mt-1">
              Built with{' '}
              <span className="text-red-accent">Next.js</span>
            </p>
          </motion.div>
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-black-tertiary"
        >
          <div className="h-1 w-20 bg-gradient-to-r from-red-primary to-red-accent mx-auto rounded-full" />
        </motion.div>
      </div>
    </footer>
  );
}