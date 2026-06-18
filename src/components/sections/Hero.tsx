'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        < Image
          src={heroImage?.imageUrl || ''}
          alt={heroImage?.description || 'Hero Image'}
          fill
          className="object-cover"
          priority
          data-ai-hint="luxury villa"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-start mt-20">
        <span className="text-white/80 font-medium tracking-[0.3em] uppercase text-xs mb-4 animate-fade-in">
          Experience Sri Lanka
        </span>
        <h1 className="font-headline text-5xl md:text-8xl text-white max-w-3xl leading-tight mb-6 italic">
          Experience Sri Lanka in Comfort
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-lg mb-10 font-light">
          Encounter leopards, elephants and jungle silence in our hand-picked collection of sanctuaries.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            className="rounded-none bg-accent text-white hover:bg-accent/90 px-8 h-14 text-sm font-bold tracking-widest"
          >
            EXPLORE SRI LANKA
          </Button>
          <Button 
            variant="outline"
            className="rounded-none border-white/40 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 px-8 h-14 text-sm font-bold tracking-widest transition-all duration-300"
          >
            VIEW VILLAS
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-12 z-10 flex flex-col items-center animate-bounce hidden md:flex">
        <span className="text-white text-[10px] tracking-widest uppercase mb-2 [writing-mode:vertical-lr]">
          SCROLL
        </span>
        <ArrowDown className="text-white w-4 h-4" />
      </div>
    </section>
  );
}
