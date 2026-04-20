'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black-primary via-black-secondary to-black-primary">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-primary/10 border-r border-t border-red-primary/10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-accent/10 border-l border-b border-red-accent/10" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        >
          {/* Top accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-red-primary to-red-accent mx-auto mb-8"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-widest font-geist-mono mb-6 leading-none uppercase"
        >
          <span className="text-white">OPERATION</span>
          <br />
          <span className="text-red-primary">
            RED & BLACK
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
          className="text-base sm:text-xl font-geist-mono text-gray-muted max-w-3xl mx-auto mb-12 flex-relaxed tracking-wider border-l-2 border-red-primary/30 pl-4 text-left"
        >
          Operation Red and black is a Thriller inspired by the Mission Impossible and John Wick Series&apos;. It features two characters Red and black who are mastermind infiltrators and our hired for a job that many others have failed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-10 py-5 text-base font-geist-mono font-bold text-white bg-black/50 backdrop-blur-sm border border-red-primary shadow-[0_0_20px_-5px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_-10px_rgba(239,68,68,0.7)] hover:bg-red-primary/20 transition-all duration-100 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-primary/10 via-transparent to-red-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
            <span className="relative z-10 flex items-center tracking-widest uppercase">
            [ INITIATE DATABASE ]
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {/* Bottom accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-red-primary to-red-accent mx-auto mt-12"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-red-accent font-geist-mono text-xs tracking-widest mt-8"
        >
          {'< SCROLL TO SCAN >'}
        </motion.div>
      </motion.div>
    </section>
  );
}