'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
          className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center"
        >
          {/* Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-geist-mono text-white mb-8 uppercase tracking-widest"
            >
              <span className="text-red-primary">TARGET:</span> HABIBULLAH
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-muted text-base leading-relaxed font-geist-mono border-l-2 border-red-primary/30 pl-6"
            >
              <p>
                <span className="text-white/40">[ ENTRY_LOG : IDENT ]</span><br/>
                Hi, I&apos;m <span className="text-red-accent font-semibold bg-red-primary/10 px-1">Habibullah</span>.
                <br /><br />
                I&apos;ve always enjoyed being part of creative projects, especially when it comes to organizing and managing events. While I do photography and love capturing moments, I&apos;m more drawn to the planning side of things—bringing ideas together, handling the details, and making sure everything runs smoothly on the day.
              </p>

              <p>
                Videography hasn&apos;t really been my favorite area, but every project is still a learning experience. I&apos;m constantly figuring out what I enjoy most and where I can do my best work—and for me, that&apos;s event management.
              </p>

              <p>
                Other than work, I really enjoy travelling, especially when it&apos;s connected to projects or events. I also spend a lot of time following cricket; I love the strategy and energy of the game.
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
              <div className="absolute inset-0 border border-red-primary/50 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(220,38,38,0.05)_10px,rgba(220,38,38,0.05)_20px)]" />
              <div className="absolute inset-4 border border-red-accent/20 bg-black" />

              {/* Image content */}
              <div className="absolute inset-8 overflow-hidden flex items-center justify-center bg-black-tertiary group">
                <Image
                  src="/creative-director.jpg"
                  alt="Habibullah - Creative Director"
                  fill
                  priority
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-primary/90 via-black-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-red-accent text-sm font-bold tracking-widest uppercase mb-1">Lead Creative</p>
                  <p className="text-white font-bold text-2xl">Habibullah</p>
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