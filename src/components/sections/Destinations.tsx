'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ella from '@/assets/ella.jpg';
import sigiriya from '@/assets/Sigiriya.jpg';
import yala from '@/assets/yala.jpg';
import beach from '@/assets/mirissa.jpg';

const destinations = [
  { id: 'dest-mirissa', tag: 'BEACH', location: 'Mirissa Beach', img: beach },
  { id: 'dest-ella', tag: 'HIGHLANDS', location: 'Ella Mountains', img: ella },
  { id: 'dest-sigiriya', tag: 'HERITAGE', location: 'Sigiriya Rock', img: sigiriya },
  { id: 'dest-yala', tag: 'WILDLIFE', location: 'Yala Safari', img: yala },
];

export function Destinations() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground">
            Four corners <br /> of paradise
          </h2>
          <p className="text-muted-foreground font-medium tracking-widest text-xs max-w-xs md:text-right uppercase">
            Curated experiences from the golden coast to the misty peaks.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {destinations.map((dest, index) => {
            const imgData = PlaceHolderImages.find(img => img.id === dest.id);
            return (
              <div 
                key={dest.id}
                className="group relative aspect-[3/4] overflow-hidden rounded-md cursor-pointer animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
