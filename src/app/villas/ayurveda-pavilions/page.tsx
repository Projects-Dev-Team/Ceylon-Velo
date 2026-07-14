'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronRight } from 'lucide-react';

export default function VillaDetailPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'villa-ayurveda-hero');
  const g1 = PlaceHolderImages.find(img => img.id === 'villa-g1');
  const g2 = PlaceHolderImages.find(img => img.id === 'villa-g2');
  const g3 = PlaceHolderImages.find(img => img.id === 'villa-g3');
  const g4 = PlaceHolderImages.find(img => img.id === 'villa-g4');
  const g5 = PlaceHolderImages.find(img => img.id === 'villa-g5');
  const g6 = PlaceHolderImages.find(img => img.id === 'villa-g6');

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage?.imageUrl || ''}
          alt="Ayurveda Pavilions Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-headline text-4xl md:text-7xl mb-4 tracking-tight">An island of wonder</h1>
          <p className="text-sm md:text-lg font-light opacity-90 tracking-[0.2em] uppercase">Come explore with us</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 container mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-16 justify-center">
          <Link href="/" className="hover:text-accent">HOME</Link>
          <span>/</span>
          <Link href="/villas" className="hover:text-accent">VILLAS</Link>
          <span>/</span>
          <span className="text-foreground">AYURVEDA PAVILIONS</span>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent mb-4 block">
            Our Signature Home Of Sri Lankan Hospitality
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground mb-2">
            Ayurveda Pavilions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 font-light italic">Bentota</p>
          
          <div className="space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base font-light max-w-3xl mx-auto">
            <p>
              Crafted around an ancient healing science rooted in the heart of Sri Lankan hospitality is a captivating fusion of the old and the new. Nestled amidst lush gardens and rustic courtyards, our tranquil ambiance exudes a comforting luxury, resonates with tales and whispers of historical wisdom that inspire the natural revitalisation of your overall well-being.
            </p>
            <p>
              As one of the premier Ayurveda hotels in Sri Lanka, our resort extends a warm invitation for you to immerse yourself in this timeless art. Here generations of wisdom come alive, enhanced by our signature embrace of family values, ensuring a rejuvenating experience that not only indulges but also meaningfully rejuvenates your mind, body, and soul.
            </p>
          </div>
        </div>

        {/* Custom Gallery Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16 animate-in fade-in zoom-in-95 duration-1000">
          {/* Main Large Image */}
          <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full rounded-lg overflow-hidden shadow-xl">
             <Image src={g1?.imageUrl || ''} alt="Villa Gallery 1" fill className="object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          
          {/* Right Grid of 6 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
             {[g2, g3, g4, g5, g6, g2].map((img, i) => (
               <div key={i} className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                 <Image 
                    src={img?.imageUrl || ''} 
                    alt={`Gallery ${i + 2}`} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
               </div>
             ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center animate-in fade-in slide-in-from-top-4 duration-700 delay-500">
           <Button className="bg-accent hover:bg-accent/90 text-white rounded-none h-14 px-12 font-bold tracking-[0.2em] text-sm flex items-center gap-4 transition-all duration-300 hover:scale-105 shadow-xl">
             Enquire Now <ChevronRight className="w-5 h-5 bg-white/20 rounded-full p-1" />
           </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
