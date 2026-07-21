'use client';

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer, slideInLeftVariant, slideInRightVariant } from '@/lib/animations';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Phone, Mail, User, Info } from 'lucide-react';
import { tourList } from '@/lib/tour-data';

export default function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  
  const tour = tourList.find((t) => t.slug === slug);
  
  if (!tour) {
    notFound();
  }

  const heroImage = PlaceHolderImages.find(img => img.id === tour.heroImageId);
  const mapImage = PlaceHolderImages.find(img => img.id === tour.mapImageId);
  const galleryImages = tour.galleryImages.map(id => PlaceHolderImages.find(img => img.id === id));

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        {heroImage?.imageUrl && (
          <Image
            src={heroImage.imageUrl}
            alt={tour.heroTitle}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={100}
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUpVariant}
            className="font-headline text-4xl md:text-7xl mb-4 tracking-widest uppercase"
          >{tour.heroTitle}</motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUpVariant} transition={{ delay: 0.2 }}
            className="text-xs md:text-sm tracking-[0.5em] uppercase font-bold opacity-80"
          >{tour.heroSubtitle}</motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 container mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-16">
          <Link href="/" className="hover:text-accent">HOME</Link>
          <span>/</span>
          <Link href="/tours" className="hover:text-accent">TOURS</Link>
          <span>/</span>
          <span className="text-foreground">{tour.title}</span>
        </div>

        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start"
        >
          {/* Main Text Content */}
          <motion.div variants={slideInLeftVariant} className="lg:col-span-2 space-y-16">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl mb-12 leading-tight text-primary uppercase">
                {tour.detailTitle}
              </h2>
              <div className="space-y-8 text-muted-foreground leading-relaxed text-sm">
                <p>{tour.description1}</p>
                <p>{tour.description2}</p>
              </div>
            </div>

            <div>
              <h3 className="font-headline text-2xl mb-8 uppercase text-primary">WHY YOU'LL LOVE THIS TOUR PACKAGE</h3>
              <ul className="space-y-6 text-sm text-muted-foreground">
                {tour.whyLoveThis.map((point, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-accent shrink-0">●</span>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-headline text-2xl mb-8 uppercase text-primary">IS THIS TRIP RIGHT FOR YOU?</h3>
              <ul className="space-y-6 text-sm text-muted-foreground">
                {tour.isThisRight.map((point, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-accent shrink-0">●</span>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div variants={slideInRightVariant} className="space-y-12">
            {/* Map Card */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl border border-border bg-muted">
              {mapImage?.imageUrl && <Image src={mapImage.imageUrl} alt="Tour Map" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />}
            </div>

            {/* Specialist Card */}
            <Card className="border-none shadow-2xl rounded-2xl overflow-hidden bg-white">
              <CardContent className="p-10 text-center">
                <h4 className="font-headline text-2xl mb-12 uppercase tracking-wide">Speak To A <br /> Travel Specialist</h4>
                
                <div className="flex items-center gap-6 bg-secondary/20 p-6 rounded-xl mb-12 group hover:bg-secondary/40 transition-colors">
                  <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center shrink-0">
                    <User className="text-accent w-8 h-8" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm uppercase tracking-widest text-primary">Let's Talk To</p>
                    <p className="text-xs text-muted-foreground">Travels Tour Adviser</p>
                  </div>
                </div>

                <div className="space-y-8 text-left text-sm">
                  <div className="flex gap-6 items-center">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shrink-0 shadow-lg">
                      <Phone className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-xs uppercase tracking-widest mb-1">Contact Number</p>
                      <p className="text-muted-foreground">+94 77 123 4567</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shrink-0 shadow-lg">
                      <Mail className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-xs uppercase tracking-widest mb-1">Email</p>
                      <p className="text-muted-foreground">tours@ceylonvelo.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="mt-32"
        >
          <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-12">
            <h3 className="font-headline text-4xl uppercase tracking-wide">Gallery</h3>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div key={index} variants={fadeUpVariant} className="relative aspect-square rounded-sm overflow-hidden group shadow-md transition-all duration-500 hover:shadow-2xl bg-muted">
                {img?.imageUrl && (
                  <Image 
                    src={img.imageUrl} 
                    alt={`Tour Gallery ${index}`} 
                    fill 
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
