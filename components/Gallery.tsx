'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="mt-16 space-y-12">
      <div className="flex items-center space-x-6">
        <div className="h-1 w-12 bg-red-primary"></div>
        <h3 className="text-3xl font-bold text-white tracking-tight">
          Visual Gallery
        </h3>
      </div>
      
      <div className="columns-1 md:columns-2 gap-8 space-y-8">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="break-inside-avoid relative overflow-hidden rounded-2xl border border-red-primary/10 shadow-2xl group"
          >
            <Image
              src={img}
              alt={`Cinematic gallery asset ${index + 1}`}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ width: '100%', height: 'auto' }}
              className="transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-red-primary/40 to-transparent pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
