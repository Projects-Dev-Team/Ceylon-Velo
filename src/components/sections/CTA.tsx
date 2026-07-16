
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function CTA() {
  const bgImage = PlaceHolderImages.find(img => img.id === 'cta-bg');

  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      <Image
        src={bgImage?.imageUrl || ''}
        alt="CTA Background"
        fill
        className="object-cover"
        data-ai-hint="misty mountain"
        sizes="100vw"
        quality={100}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="max-w-2xl text-white">
          <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">
            READY TO BEGIN?
          </span>
          <h2 className="font-headline text-5xl md:text-7xl mb-10 leading-tight">
            Your Sri Lankan <br /> 
            <span className="italic">story</span> starts here.
          </h2>
          <Button 
            className="rounded-none bg-white text-primary hover:bg-white/90 px-12 h-16 text-sm font-bold tracking-[0.2em]"
          >
            BOOK YOUR STAY
          </Button>
        </div>
      </div>
    </section>
  );
}
