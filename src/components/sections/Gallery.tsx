'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const galleryItems = ['insta-1', 'insta-2', 'insta-3', 'insta-4', 'insta-5', 'insta-6'];

export function Gallery() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        {/* Centered Header with Instagram Info on top */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-primary mb-4">
            <Instagram className="w-5 h-5" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#FFDAB9]">@ceylonvelo</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl text-foreground">Follow our island diary</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {galleryItems.map((id) => {
            const imgData = PlaceHolderImages.find(img => img.id === id);
            return (
              <div 
                key={id} 
                className="group relative aspect-square overflow-hidden bg-muted"
              >
                <Image
                  src={imgData?.imageUrl || ''}
                  alt="Gallery image"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={imgData?.imageHint || 'lifestyle'}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <Instagram className="text-white w-6 h-6" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
