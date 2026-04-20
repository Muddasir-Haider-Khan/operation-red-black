'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-secondary via-black-primary to-black-secondary" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1),transparent_70%)]"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Counter */}
          <div className="inline-flex items-center justify-center mb-8 relative">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative p-6 border-2 border-red-primary/50 bg-black shadow-[0_0_20px_rgba(220,38,38,0.2)]"
            >
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-red-accent" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-red-accent" />
              <span className="text-4xl font-bold font-geist-mono text-white tracking-tighter">12</span>
              <div className="text-[10px] font-geist-mono text-red-accent/60 mt-1 uppercase tracking-widest">Active_Ops</div>
            </motion.div>
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold font-geist-mono text-white mb-6 uppercase tracking-widest"
          >
            &gt;_ MISSION: <span className="text-red-accent">LIVE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-muted mb-10 max-w-2xl mx-auto font-geist-mono border-l-2 border-red-primary/30 pl-6 text-left sm:text-center sm:border-l-0 sm:pl-0"
          >
            Visual feed established. The official trailer log is now available for decryption. Observe the trajectory of Operation Red & Black.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://youtu.be/h1AySNglvgU" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center px-10 py-5 text-sm font-bold font-geist-mono text-white overflow-hidden border-2 border-red-primary bg-black hover:bg-red-primary transition-all duration-100 uppercase tracking-widest shadow-[0_0_20px_rgba(220,38,38,0.3)]"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-red-accent group-hover:border-white" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-red-accent group-hover:border-white" />

              <span className="relative flex items-center">
                &lt; DECRYPT_TRAILER_LOG &gt;
              </span>
            </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-primary/50 to-transparent" />
    </section>
  );
}