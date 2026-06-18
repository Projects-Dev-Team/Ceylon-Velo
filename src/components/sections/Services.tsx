
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
    <section id="villas" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-headline text-4xl md:text-5xl text-foreground mb-4">OUR SERVICES</h2>
          <p className="text-muted-foreground tracking-widest uppercase text-sm font-medium">
            Three pillars of an unforgettable island journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const imgData = PlaceHolderImages.find(img => img.id === service.id);
            return (
              <div 
                key={service.id} 
                className="group relative h-[600px] overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <Image
                  src={imgData?.imageUrl || ''}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={imgData?.imageHint || 'travel'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start transform transition-transform duration-500 group-hover:-translate-y-4">
                  <h3 className="font-headline text-3xl text-white mb-3">{service.title}</h3>
                  <p className="text-white/80 text-sm mb-6 max-w-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.description}
                  </p>
                  <Button 
                    variant="link" 
                    className="p-0 text-white font-bold tracking-[0.2em] text-xs h-auto uppercase hover:no-underline"
                  >
                    {service.buttonText} <span className="ml-2">→</span>
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
