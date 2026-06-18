'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-[#0A1A17]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || ''}
          alt={heroImage?.description || 'Hero Image'}
          fill
          className="object-cover"
          priority
          data-ai-hint="luxury villa"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Realistic Cloud/Mist Parallax Layers */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Left Side Cloud Cluster */}
        <div 
          className="absolute -left-40 -top-20 w-[1000px] h-[800px] opacity-60 blur-[120px] rounded-full transition-transform duration-150 ease-out"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)',
            transform: `translateX(-${scrollY * 0.6}px) rotate(-10deg)` 
          }}
        />
        <div 
          className="absolute -left-20 top-1/4 w-[700px] h-[600px] opacity-40 blur-[90px] rounded-full transition-transform duration-150 ease-out"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 65%)',
            transform: `translateX(-${scrollY * 0.4}px) rotate(15deg)` 
          }}
        />
        <div 
          className="absolute left-0 bottom-0 w-[600px] h-[500px] opacity-30 blur-[150px] rounded-full transition-transform duration-150 ease-out"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%)',
            transform: `translateX(-${scrollY * 0.25}px)` 
          }}
        />

        {/* Right Side Cloud Cluster */}
        <div 
          className="absolute -right-40 -top-10 w-[1000px] h-[800px] opacity-60 blur-[120px] rounded-full transition-transform duration-150 ease-out"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)',
            transform: `translateX(${scrollY * 0.6}px) rotate(10deg)` 
          }}
        />
        <div 
          className="absolute -right-20 top-1/3 w-[700px] h-[600px] opacity-40 blur-[90px] rounded-full transition-transform duration-150 ease-out"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 65%)',
            transform: `translateX(${scrollY * 0.4}px) rotate(-15deg)` 
          }}
        />
        <div 
          className="absolute right-0 bottom-10 w-[600px] h-[500px] opacity-30 blur-[150px] rounded-full transition-transform duration-150 ease-out"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%)',
            transform: `translateX(${scrollY * 0.25}px)` 
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-start mt-20">
        <span className="text-white/80 font-medium tracking-[0.3em] uppercase text-xs mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
          Experience Sri Lanka
        </span>
        <h1 className="font-headline text-4xl md:text-7xl text-white max-w-3xl leading-tight mb-6 italic animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 fill-mode-both">
          Experience Sri Lanka in Comfort
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-lg mb-10 font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 fill-mode-both">
          Encounter leopards, elephants and jungle silence in our hand-picked collection of sanctuaries.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600 fill-mode-both">
          <Button 
            className="rounded-none bg-accent text-white hover:bg-accent/90 px-8 h-14 text-sm font-bold tracking-widest transition-transform hover:scale-105 shadow-2xl"
          >
            EXPLORE SRI LANKA
          </Button>
          <Button 
            variant="outline"
            className="rounded-none border-white/40 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 px-8 h-14 text-sm font-bold tracking-widest transition-all duration-300 hover:scale-105"
          >
            VIEW VILLAS
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
