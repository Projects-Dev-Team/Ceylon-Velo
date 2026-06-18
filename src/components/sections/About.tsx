'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import sriLanka from '@/assets/sri.png';

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-map');

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with Badge */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src={sriLanka || aboutImage?.imageUrl || ''}
                alt="About Sri Lanka"
                fill
                className="object-cover"
                data-ai-hint="coastal landscape"
              />
            </div>
            {/* Circular Badge */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary text-white rounded-full flex flex-col items-center justify-center p-6 text-center border-4 border-background">
              <span className="font-headline text-3xl font-bold">12+</span>
              <span className="text-[10px] tracking-widest uppercase font-medium">Years Curating</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-[10px] mb-4">
              ABOUT CEYLON VELO
            </span>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              The Home of Sri Lankan Beauty
            </h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed max-w-xl">
              Discover paradise where pristine beaches, ancient history, vibrant culture, and wild adventures meet. Our expert curators design every moment of your journey with meticulous attention to detail.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
