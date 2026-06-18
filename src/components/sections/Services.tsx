'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import serviceImage from '@/assets/service.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      className="relative isolate overflow-hidden py-16 md:py-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={serviceImage}
          alt="Our Services Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
            CEYLON VELO EXPERIENCES
          </span>
          <h2 className="font-headline text-4xl md:text-5xl text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground tracking-widest uppercase text-[10px] font-bold">
            Three pillars of an unforgettable island journey.
          </p>
        </div>

        {/* Carousel implementation */}
        <div className="max-w-5xl mx-auto px-12 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service, index) => {
                const imgData = PlaceHolderImages.find(img => img.id === service.id);
                return (
                  <CarouselItem key={service.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div 
                      className="group relative h-[420px] overflow-hidden rounded-lg shadow-xl cursor-pointer transition-all duration-500 hover:shadow-2xl"
                    >
                      <Image
                        src={imgData?.imageUrl || ''}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        data-ai-hint={imgData?.imageHint || 'travel'}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />

                      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start transform transition-all duration-500 group-hover:-translate-y-2">
                        <h3 className="font-headline text-2xl text-white mb-2">
                          {service.title}
                        </h3>

                        <p className="text-white/80 text-xs mb-4 max-w-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500">
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
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-full bg-white/10 border-white/20 text-foreground hover:bg-accent hover:text-white" />
            <CarouselNext className="right-0 translate-x-full bg-white/10 border-white/20 text-foreground hover:bg-accent hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
