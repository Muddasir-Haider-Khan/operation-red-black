'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black-primary/95 border-b border-red-primary/40 shadow-[0_4px_30px_rgba(220,38,38,0.1)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="text-white font-bold text-base tracking-widest uppercase flex items-center font-geist-mono"
            >
              <span className="text-red-accent animate-pulse mr-2">●</span>
              <span className="text-red-accent">OP:</span>
              <span className="text-white/90">RED_BLACK</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="block px-3 py-2 text-xs font-geist-mono uppercase tracking-widest font-medium nav-link hover:text-red-accent">
              Home
            </Link>
            <Link href="/blog" className="block px-3 py-2 text-xs font-geist-mono uppercase tracking-widest font-medium nav-link hover:text-red-accent">
              Blog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMenuOpen ? 'open' : 'closed'}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                className="w-6 h-0.5 bg-red-accent mb-1.5"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-6 h-0.5 bg-red-accent mb-1.5"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                className="w-6 h-0.5 bg-red-accent"
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { height: 'auto', opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        className="md:hidden overflow-hidden bg-black-secondary"
      >
        <div className="px-4 py-4 space-y-4">
          <Link href="/" className="block px-3 py-2 text-xs font-geist-mono uppercase tracking-widest font-medium nav-link hover:text-red-accent" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/blog" className="block px-3 py-2 text-xs font-geist-mono uppercase tracking-widest font-medium nav-link hover:text-red-accent" onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}