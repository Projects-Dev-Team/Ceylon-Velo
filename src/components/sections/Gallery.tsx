'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';
import { Instagram } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import diary1 from '@/assets/d1.jpg'
import diary2 from '@/assets/d2.jpg'
import diary3 from '@/assets/d3.jpg'
import diary4 from '@/assets/d4.jpg'
import diary5 from '@/assets/d5.jpg'
import diary6 from '@/assets/d6.jpg'

const galleryItems = [diary1, diary2, diary3, diary4, diary5, diary6];

export function Gallery() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Centered Header with Instagram Info on top */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div variants={fadeUpVariant} className="flex items-center gap-2 text-primary mb-4">
            <Instagram className="w-5 h-5" />
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">@ceylonvelo</span>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="font-headline text-4xl md:text-5xl text-foreground">Follow our island diary</motion.h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2"
        >
        {galleryItems.map((img, index) => {
            return (
              <motion.div 
                key={index} 
                variants={fadeUpVariant}
                className="group relative aspect-square overflow-hidden bg-muted"
              >
                <Image
                  src={img || ''}
                  alt="Gallery image"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <Instagram className="text-white w-6 h-6 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
