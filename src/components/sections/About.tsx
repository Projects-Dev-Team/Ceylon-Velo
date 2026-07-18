'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer, slideInLeftVariant, scaleUpVariant } from '@/lib/animations';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import sriLanka from '@/assets/sri.png';

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-map');

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with Badge */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeftVariant}
            className="relative max-w-sm mx-auto lg:mx-0"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden group">
              <Image
                src={sriLanka || aboutImage?.imageUrl || ''}
                alt="About Sri Lanka"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint="coastal landscape"
              />
            </div>
            {/* Circular Badge */}
            <motion.div 
              variants={scaleUpVariant}
              className="absolute -bottom-6 -right-6 w-28 h-28 md:w-36 md:h-36 bg-primary text-white rounded-full flex flex-col items-center justify-center p-4 text-center border-4 border-white shadow-lg"
            >
              <span className="font-headline text-xl md:text-2xl font-bold">12+</span>
              <span className="text-[7px] md:text-[9px] tracking-widest uppercase font-medium">Years Curating</span>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <motion.span variants={fadeUpVariant} className="text-accent font-bold tracking-[0.2em] uppercase text-[10px] mb-4">
              WELCOME TO CEYLONE VELO
            </motion.span>
            <motion.h2 variants={fadeUpVariant} className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Experience Sri Lanka Beyond the Ordinary
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="text-muted-foreground text-lg mb-12 leading-relaxed max-w-xl">
              Discover paradise where pristine beaches, ancient history, vibrant culture, and wild adventures meet. Our expert curators design every moment of your journey with meticulous attention to detail.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="flex flex-col">
                <span className="font-headline text-3xl md:text-4xl font-bold text-primary">240+</span>
                <span className="text-[10px] tracking-wider uppercase text-muted-foreground mt-2 font-semibold">
                  Curated Stays
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-3xl md:text-4xl font-bold text-primary">98%</span>
                <span className="text-[10px] tracking-wider uppercase text-muted-foreground mt-2 font-semibold">
                  Guest Return Rate
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-3xl md:text-4xl font-bold text-primary">25</span>
                <span className="text-[10px] tracking-wider uppercase text-muted-foreground mt-2 font-semibold">
                  Island Regions
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
