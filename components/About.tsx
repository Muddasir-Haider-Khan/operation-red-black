'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-black-secondary relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-primary/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="text-red-accent font-semibold tracking-wider uppercase text-sm">
                About Me
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8"
            >
              The Vision Behind the Project
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-muted text-lg leading-relaxed"
            >
              <p>
                Hello! I&apos;m <span className="text-red-accent font-semibold">Habibullah</span>,
                a creative professional with a passion for storytelling through visual media.
                My journey in creative projects and event management has shaped my approach
                to bringing ambitious ideas to life.
              </p>

              <p>
                With extensive experience in photography and videography, I&apos;ve developed
                a keen eye for capturing moments that resonate. My background in creative
                projects has taught me the importance of attention to detail and the power
                of visual storytelling.
              </p>

              <p>
                Beyond my professional pursuits, I find inspiration in traveling and cricket.
                These experiences fuel my creativity and provide fresh perspectives that
                influence my work.
              </p>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute inset-0 border-2 border-red-primary/30 rounded-lg" />
              <div className="absolute inset-4 border border-red-accent/20 rounded-lg" />

              {/* Content placeholder */}
              <div className="absolute inset-8 bg-gradient-to-br from-black-tertiary to-black-primary rounded-lg flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-primary to-red-accent flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">H</span>
                  </div>
                  <p className="text-gray-muted text-sm">Creative Director</p>
                  <p className="text-white font-semibold mt-2">Habibullah</p>
                </div>
              </div>

              {/* Accent corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-primary" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-primary" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-primary" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-primary" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}