'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import serviceImage from '@/assets/service.png';

const services = [
  {
    id: 'service-villa',
    title: 'Boutique Villas',
    description: 'Hand-picked private retreats with colonial charm and modern luxury.',
    buttonText: 'DISCOVER'
  },
  {
    id: 'service-tour',
    title: 'Signature Tours',
    description: 'Train rides, highlands, temples and hidden waterfalls of the hill country.',
    buttonText: 'EXPLORE'
  },
  {
    id: 'service-food',
    title: 'Authentic Cuisine',
    description: 'Banana-leaf meals, spice tours and private cooking masterclasses.',
    buttonText: 'TASTE'
  }
];

export function Services() {
  return (
    <section 
      id="villas" 
      className="relative isolate overflow-hidden py-24 md:py-32"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={serviceImage}
          alt="Our Services Background"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
      </div>

      {/* Content */}
       <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
            CEYLON VELO EXPERIENCES
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground tracking-widest uppercase text-[10px] font-bold">
            Three pillars of an unforgettable island journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const imgData = PlaceHolderImages.find(img => img.id === service.id);
            return (
              <div 
                key={service.id} 
                className="group relative h-[450px] overflow-hidden rounded-lg shadow-xl cursor-pointer animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Image
                  src={imgData?.imageUrl || ''}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  data-ai-hint={imgData?.imageHint || 'travel'}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start transform transition-all duration-500 group-hover:-translate-y-4">
                  <h3 className="font-headline text-3xl text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-white/80 text-sm mb-6 max-w-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {service.description}
                  </p>

                  <Button 
                    variant="link" 
                    className="p-0 text-accent font-bold tracking-[0.2em] text-[10px] h-auto uppercase hover:no-underline group/btn"
                  >
                    {service.buttonText} 
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}