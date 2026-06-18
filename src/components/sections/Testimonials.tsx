'use client';

import React from 'react';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "From the moment we landed, every detail felt magical. The private villas exceeded our highest expectations.",
    author: "Sophia Laurent",
    location: "Paris, France",
    rating: 5
  },
  {
    quote: "An unparalleled experience of wildlife and luxury. The signature safari tour was the highlight of our year.",
    author: "James Miller",
    location: "London, UK",
    rating: 5
  },
  {
    quote: "Ceylon Velo Luxe understands true hospitality. The food, the views, and the service were flawless.",
    author: "Elena Petrova",
    location: "Milan, Italy",
    rating: 5
  }
];

export function Testimonials() {
  const bgImage = PlaceHolderImages.find(img => img.id === 'review-bg');

  return (
    <section className="relative py-32 overflow-hidden min-h-[700px] flex items-center">
      {/* Nature Background Image */}
      <Image
        src={bgImage?.imageUrl || ''}
        alt="Testimonial Background"
        fill
        className="object-cover"
        data-ai-hint="lush jungle"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
            GUEST EXPERIENCES
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-white italic">
            Stories from our travellers
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-xl border-white/10 text-white hover:bg-white/20 transition-all duration-500 rounded-none shadow-2xl"
            >
              <CardContent className="p-10 flex flex-col items-start h-full">
                <Quote className="w-10 h-10 text-accent mb-8 opacity-80" />
                
                <div className="flex mb-6 gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>

                <p className="font-headline text-xl md:text-2xl leading-relaxed mb-10 italic flex-grow">
                  "{t.quote}"
                </p>
                
                <div className="flex flex-col border-t border-white/20 pt-6 w-full">
                  <span className="font-bold tracking-widest uppercase text-[10px] mb-1 text-[#FFDAB9]">
                    {t.author}
                  </span>
                  <span className="text-white/40 text-[9px] uppercase tracking-[0.2em]">
                    {t.location}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
