'use client';

import { motion } from 'framer-motion';

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="mt-16 space-y-8">
      <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
        <span className="w-8 h-1 bg-red-primary mr-4"></span>
        Gallery
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-xl border border-red-primary/10 aspect-[4/3] ${
              index === 0 ? 'md:col-span-2 md:aspect-[21/9]' : ''
            }`}
          >
            <img
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
