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
            <Link href="/" className="inline-block group">
              <h3 className="text-xl font-bold font-geist-mono tracking-tighter uppercase">
                <span className="text-red-primary">OP:</span>
                <span className="text-white group-hover:text-red-accent transition-colors duration-100">RED_BLACK</span>
              </h3>
            </Link>
            <p className="text-gray-500 text-[10px] font-geist-mono mt-2 tracking-[0.3em] uppercase">
              {"//"} CLASSIFIED_PRODUCTION_LOG
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
              className="text-gray-500 hover:text-red-accent transition-all duration-100 text-[10px] font-geist-mono uppercase tracking-widest"
            >
              [ HOME ]
            </Link>
            <Link
              href="/blog"
              className="text-gray-500 hover:text-red-accent transition-all duration-100 text-[10px] font-geist-mono uppercase tracking-widest"
            >
              [ BLOG ]
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
            <p className="text-gray-500 text-[10px] font-geist-mono uppercase tracking-widest">
              &copy; {currentYear} RED_BLACK_ARCHIVE.SEC
            </p>
            <p className="text-gray-600 text-[8px] mt-1 font-geist-mono uppercase tracking-[0.2em]">
              STATUS: <span className="text-red-accent animate-pulse">ACTIVE_SESSION</span>
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
          <div className="h-px w-full bg-gradient-to-r from-transparent via-red-primary/30 to-transparent" />
        </motion.div>
      </div>
    </footer>
  );
}