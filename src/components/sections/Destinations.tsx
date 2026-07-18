'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ella from '@/assets/images/home/destination/highland.jpg';
import sigiriya from '@/assets/images/home/destination/heritage.jpg';
import yala from '@/assets/images/home/destination/wildlife.jpg';
import beach from '@/assets/images/home/destination/beach.jpg';

const destinations = [
  { id: 'dest-mirissa', tag: 'BEACH', location: 'Mirissa Beach', img: beach },
  { id: 'dest-ella', tag: 'HIGHLANDS', location: 'Ella Mountains', img: ella },
  { id: 'dest-sigiriya', tag: 'HERITAGE', location: 'Sigiriya Rock', img: sigiriya },
  { id: 'dest-yala', tag: 'WILDLIFE', location: 'Yala Safari', img: yala },
];

export function Destinations() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Updated Heading Section */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center justify-center text-center mb-16 gap-4"
        >
          <motion.p variants={fadeUpVariant} className="text-accent font-medium tracking-widest text-xs uppercase">
           HANDPICKED EXPERIENCES
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground">
             Featured Experiences
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-muted-foreground font-medium tracking-widest text-xs ">
           Discover handpicked experiences inspired by Sri Lanka 's most extraordinary places
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {destinations.map((dest, index) => {
            const imgData = PlaceHolderImages.find(img => img.id === dest.id);
            return (
              <motion.div 
                key={dest.id}
                variants={fadeUpVariant}
                className="group relative aspect-[3/4] overflow-hidden rounded-md cursor-pointer"
              >
                <Image
                  src={dest?.img || imgData?.imageUrl || ''}
                  alt={dest.location}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  data-ai-hint={imgData?.imageHint || 'destination'}
                />
                
                {/* Animated Badge */}
                <div className="absolute top-4 left-4 z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-5rem)] group-hover:translate-x-[-20%] md:group-hover:left-[calc(100%-6rem)]">
                  <span className="bg-white/90 backdrop-blur-none group-hover:bg-white/30 group-hover:backdrop-blur-md text-primary group-hover:text-white px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] rounded-full uppercase shadow-sm border border-transparent group-hover:border-white/20 transition-all duration-500 whitespace-nowrap">
                    {dest.tag}
                  </span>
                </div>

                {/* Info Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-start z-10">
                  <h4 className="font-headline text-xl text-white mb-1">{dest.location}</h4>
                  <div className="h-0 group-hover:h-8 transition-all duration-300 overflow-hidden flex items-center">
                    <span className="text-[10px] text-white/90 font-bold tracking-widest uppercase">Explore <span className="ml-1">→</span></span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}