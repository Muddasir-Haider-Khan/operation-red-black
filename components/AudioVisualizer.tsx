'use client';

import { motion } from 'framer-motion';

// Static seed data to ensure purity during render
const STATIC_BAR_DATA = [
  { h1: 45, h2: 82, h3: 30, duration: 1.2, delay: 0.1 },
  { h1: 30, h2: 95, h3: 40, duration: 1.5, delay: 0.3 },
  { h1: 60, h2: 40, h3: 85, duration: 1.1, delay: 0.5 },
  { h1: 20, h2: 60, h3: 15, duration: 1.8, delay: 0.2 },
  { h1: 85, h2: 25, h3: 70, duration: 1.3, delay: 0.6 },
  { h1: 40, h2: 90, h3: 50, duration: 1.6, delay: 0.4 },
  { h1: 75, h2: 35, h3: 80, duration: 1.4, delay: 0.7 },
  { h1: 55, h2: 75, h3: 25, duration: 1.7, delay: 0.0 },
  { h1: 90, h2: 45, h3: 65, duration: 1.2, delay: 0.2 },
  { h1: 25, h2: 80, h3: 35, duration: 1.5, delay: 0.5 },
  { h1: 50, h2: 20, h3: 90, duration: 1.1, delay: 0.3 },
  { h1: 70, h2: 55, h3: 75, duration: 1.8, delay: 0.1 },
  { h1: 35, h2: 70, h3: 45, duration: 1.3, delay: 0.4 },
  { h1: 80, h2: 30, h3: 85, duration: 1.6, delay: 0.6 },
  { h1: 15, h2: 60, h3: 20, duration: 1.4, delay: 0.2 },
  { h1: 65, h2: 85, h3: 40, duration: 1.7, delay: 0.0 },
];

export default function AudioVisualizer() {
  // Use the static data doubled to reach 32 bars
  const displayBars = [...STATIC_BAR_DATA, ...STATIC_BAR_DATA];

  return (
    <div className="flex items-end justify-center w-full h-24 gap-1 sm:gap-1.5 mb-10 overflow-hidden">
      {displayBars.map((bar, i) => (
        <motion.div 
          key={`wave-${i}`} 
          className="w-1 sm:w-2 bg-red-accent shadow-[0_0_10px_rgba(220,38,38,0.5)]"
          animate={{ height: [`${bar.h1}%`, `${bar.h2}%`, `${bar.h3}%`] }}
          transition={{ 
            duration: bar.duration, 
            repeat: Infinity, 
            repeatType: "mirror",
            ease: "easeInOut",
            delay: bar.delay + (i * 0.05) // Add deterministic offset
          }}
        />
      ))}
    </div>
  );
}
