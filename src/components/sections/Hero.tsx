'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-start mt-20">
        <span className="text-white/80 font-medium tracking-[0.3em] uppercase text-xs mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
          Experience Sri Lanka
        </span>
        <h1 className="font-headline text-4xl md:text-7xl text-white max-w-3xl leading-tight mb-6  animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 fill-mode-both">
          One Island. Endless Experiences
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-lg mb-10 font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 fill-mode-both">
          Encounter leopards, elephants and jungle silence in our hand-picked collection of sanctuaries.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600 fill-mode-both">
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
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-12 z-20 flex flex-col items-center animate-bounce hidden md:flex animate-in fade-in duration-1000 delay-1000 fill-mode-both">
        <span className="text-white text-[10px] tracking-widest uppercase mb-2 [writing-mode:vertical-lr]">
          SCROLL
        </span>
        <ArrowDown className="text-white w-4 h-4" />
      </div>
    </section>
  );
}
