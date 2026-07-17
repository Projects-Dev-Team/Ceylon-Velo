'use client';

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronRight } from 'lucide-react';
import { villaList } from '@/lib/villa-data';

export default function VillaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  
  const villa = villaList.find((v) => v.slug === slug);
  
  if (!villa) {
    notFound();
  }

  // Get gallery images
  const g1 = PlaceHolderImages.find(img => img.id === villa.galleryImages[0]);
  const g2 = PlaceHolderImages.find(img => img.id === villa.galleryImages[1]);
  const g3 = PlaceHolderImages.find(img => img.id === villa.galleryImages[2]);
  const g4 = PlaceHolderImages.find(img => img.id === villa.galleryImages[3]);
  const g5 = PlaceHolderImages.find(img => img.id === villa.galleryImages[4]);
  const g6 = PlaceHolderImages.find(img => img.id === villa.galleryImages[5]);
  
  // Get Hero image
  const heroImageData = PlaceHolderImages.find(img => img.id === villa.heroImageId);
  const heroImageUrl = heroImageData?.imageUrl || '';

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        {heroImageUrl && (
          <Image
            src={heroImageUrl}
            alt={villa.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUpVariant}
            className="font-headline text-4xl md:text-7xl mb-4 tracking-tight"
          >{villa.heroTitle}</motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUpVariant} transition={{ delay: 0.2 }}
            className="text-sm md:text-lg font-light opacity-90 tracking-[0.2em] uppercase"
          >{villa.heroSubtitle}</motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 container mx-auto px-6 md:px-12">
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        >
          {/* Breadcrumbs */}
          <motion.div variants={fadeUpVariant} className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-16 justify-start">
            <Link href="/" className="hover:text-accent">HOME</Link>
            <span>/</span>
            <Link href="/villas" className="hover:text-accent">VILLAS</Link>
            <span>/</span>
            <span className="text-foreground uppercase">{villa.title}</span>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="max-w-4xl mx-auto text-center mb-20">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent mb-4 block">
              {villa.subtitleTop}
            </span>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground mb-2">
              {villa.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 font-light italic">{villa.location}</p>
            
            <div className="space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base font-light max-w-3xl mx-auto">
              <p>{villa.description1}</p>
              <p>{villa.description2}</p>
            </div>
          </motion.div>

          {/* Custom Gallery Collage */}
          <motion.div variants={fadeUpVariant} className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
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
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={fadeUpVariant} className="flex justify-center">
             <Button className="bg-accent hover:bg-accent/90 text-white rounded-none h-14 px-12 font-bold tracking-[0.2em] text-sm flex items-center gap-4 transition-all duration-300 hover:scale-105 shadow-xl">
               Enquire Now <ChevronRight className="w-5 h-5 bg-white/20 rounded-full p-1" />
             </Button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
