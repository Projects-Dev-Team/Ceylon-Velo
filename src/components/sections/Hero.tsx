'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/images/home/hero1.jpg';

export function Hero() {


  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-[#0A1A17]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage || ''}
          alt={'Hero Image'}
          fill
          className="object-cover"
          priority
          data-ai-hint="luxury villa"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-start mt-20"
      >
        <motion.span variants={fadeUpVariant} className="text-white/80 font-medium tracking-[0.3em] uppercase text-xs mb-4">
          Experience Sri Lanka
        </motion.span>
        <motion.h1 variants={fadeUpVariant} className="font-headline text-4xl md:text-7xl text-white max-w-3xl leading-tight mb-6">
          One Island. Endless Experiences
        </motion.h1>
        <motion.p variants={fadeUpVariant} className="text-white/90 text-lg md:text-xl max-w-lg mb-10 font-light">
          Encounter leopards, elephants and jungle silence in our hand-picked collection of sanctuaries.
        </motion.p>

        <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4">
          <Button
            className="rounded-none bg-accent text-white hover:bg-accent/90 px-8 h-14 text-sm font-bold tracking-widest transition-transform hover:scale-105 shadow-2xl"
            asChild
          >
            <Link href="/tours">EXPLORE SRI LANKA</Link>
          </Button>
          <Button
            variant="outline"
            className="rounded-none border-white/40 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 px-8 h-14 text-sm font-bold tracking-widest transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link href="/villas">VIEW VILLAS</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 right-12 z-20 flex flex-col items-center animate-bounce hidden md:flex"
      >
        <span className="text-white text-[10px] tracking-widest uppercase mb-2 [writing-mode:vertical-lr]">
          SCROLL
        </span>
        <ArrowDown className="text-white w-4 h-4" />
      </motion.div>
    </section>
  );
}
