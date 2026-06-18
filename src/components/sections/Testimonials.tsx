
'use client';

import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    quote: "From the moment we landed, every detail felt magical. The private villas exceeded our highest expectations.",
    author: "Sophia Laurent",
    location: "Paris, France"
  },
  {
    quote: "An unparalleled experience of wildlife and luxury. The signature safari tour was the highlight of our year.",
    author: "James Miller",
    location: "London, UK"
  },
  {
    quote: "Ceylon Velo Luxe understands true hospitality. The food, the views, and the service were flawless.",
    author: "Elena Petrova",
    location: "Milan, Italy"
  }
];

export function Testimonials() {
  const bgImage = PlaceHolderImages.find(img => img.id === 'review-bg');

  return (
    <section className="relative py-32 overflow-hidden bg-foreground">
      <Image
        src={bgImage?.imageUrl || ''}
        alt="Testimonial Background"
        fill
        className="object-cover opacity-30"
        data-ai-hint="sunset ocean"
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center text-white">
        <h2 className="font-headline text-4xl md:text-5xl mb-16 italic">Stories from our travellers</h2>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((t, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center px-4 md:px-12">
                    <Quote className="w-12 h-12 text-accent mb-8 opacity-60" />
                    <p className="font-headline text-2xl md:text-4xl leading-relaxed mb-10 italic">
                      "{t.quote}"
                    </p>
                    <div className="flex flex-col items-center">
                      <span className="font-bold tracking-widest uppercase text-sm mb-1">{t.author}</span>
                      <span className="text-white/60 text-xs uppercase tracking-wider">{t.location}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 text-white border-white/20 bg-transparent hover:bg-white/10" />
            <CarouselNext className="hidden md:flex -right-12 text-white border-white/20 bg-transparent hover:bg-white/10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
