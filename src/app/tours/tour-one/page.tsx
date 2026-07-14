'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Phone, Mail, User, Info } from 'lucide-react';

export default function TourOnePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'tour-one-hero');
  const mapImage = PlaceHolderImages.find(img => img.id === 'tour-one-map');
  const galleryImages = [
    PlaceHolderImages.find(img => img.id === 'gallery-1'),
    PlaceHolderImages.find(img => img.id === 'gallery-2'),
    PlaceHolderImages.find(img => img.id === 'gallery-3'),
    PlaceHolderImages.find(img => img.id === 'gallery-4'),
    PlaceHolderImages.find(img => img.id === 'gallery-3'),
    PlaceHolderImages.find(img => img.id === 'gallery-4'),
    PlaceHolderImages.find(img => img.id === 'gallery-1'),
    PlaceHolderImages.find(img => img.id === 'gallery-2'),
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage?.imageUrl || ''}
          alt="Tour One Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-headline text-4xl md:text-7xl mb-4 tracking-widest uppercase">TOUR ONE</h1>
          <p className="text-xs md:text-sm tracking-[0.5em] uppercase font-bold opacity-80">Plan Your Tour One</p>
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
          <span className="text-foreground">TOUR ONE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Main Text Content */}
          <div className="lg:col-span-2 space-y-16 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl mb-12 leading-tight text-primary uppercase">
                COURTYARDS & VERANDAHS – GEOFFREY BAWA ARCHITECTURE TOUR IN SRI LANKA
              </h2>
              <div className="space-y-8 text-muted-foreground leading-relaxed text-sm">
                <p>
                  Sri Lanka's Most Renowned Architect Geoffrey Bawa Redefined And Influenced South-East Asian Architecture. This Unforgettable Journey Takes You Through A Collection Of Iconic Spaces Inspired And Designed By The Legendary Architect Himself. Experience Timeless Tropical Modernism While Exploring The Cultural Beauty And Breathtaking Landscapes Of Sri Lanka.
                </p>
                <p>
                  Begin Your Adventure With Two Nights In The Cultural Triangle At One Of Bawa's Most Iconic Creations, Surrounded By Lush Greenery And Serene Lakes. Continue Your Journey Through The Scenic Hill Country To Ella, Where Misty Mountains And Tea Plantations Create A Peaceful Retreat. Finally, Travel South To The Historic Coastal City Of Galle And Stay At One Of Geoffrey Bawa's Most Celebrated Architectural Masterpieces Overlooking The Ocean.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-headline text-2xl mb-8 uppercase text-primary">WHY YOU'LL LOVE THIS GEOFFREY BAWA TOUR PACKAGE</h3>
              <ul className="space-y-6 text-sm text-muted-foreground">
                <li className="flex gap-4">
                  <span className="text-accent shrink-0">●</span>
                  <p>Experience The Perfect Blend Of Architecture, Culture And Nature While Exploring Sri Lanka's Most Iconic Geoffrey Bawa-Inspired Locations And Luxury Retreats.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent shrink-0">●</span>
                  <p>Enjoy Breathtaking Landscapes Ranging From Ancient Cultural Sites And Tea Plantations To Stunning Southern Coastlines And Tropical Gardens.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent shrink-0">●</span>
                  <p>Relax In Carefully Selected Boutique Hotels And Heritage Properties That Offer Elegance, Tranquility And Authentic Sri Lankan Hospitality.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent shrink-0">●</span>
                  <p>Savor Delicious Sri Lankan Cuisine And Gourmet Dining Experiences That Reflect The Island's Rich Culinary Heritage And Unique Flavors.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent shrink-0">●</span>
                  <p>Discover Hidden Courtyards, Open Verandahs And Beautifully Designed Tropical Spaces That Seamlessly Connect Architecture With Nature.</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-headline text-2xl mb-8 uppercase text-primary">IS THIS TRIP RIGHT FOR YOU?</h3>
              <ul className="space-y-6 text-sm text-muted-foreground">
                <li className="flex gap-4">
                  <span className="text-accent shrink-0">●</span>
                  <p>This Tour Is Ideal For Architecture Enthusiasts And Travelers Who Appreciate Timeless Design, Cultural Heritage And Artistic Experiences.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent shrink-0">●</span>
                  <p>Perfect For Travelers Seeking A Balance Between Exploration And Relaxation, With Scenic Surroundings And Peaceful Accommodations Throughout The Journey.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent shrink-0">●</span>
                  <p>An Excellent Choice For Photographers And Creatives Looking To Capture Sri Lanka's Stunning Landscapes, Colonial Charm And Tropical Architecture.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent shrink-0">●</span>
                  <p>Suitable For Luxury Travelers Who Enjoy Staying In Boutique Hotels, Heritage Villas And Unique Properties With Character And History.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent shrink-0">●</span>
                  <p>Ideal For Couples, Solo Travelers And Small Groups Looking For A Sophisticated And Immersive Sri Lankan Travel Experience.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-1000">
            {/* Map Card */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl border border-border">
              <Image src={mapImage?.imageUrl || ''} alt="Tour Map" fill className="object-cover" />
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
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-32">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="font-headline text-4xl uppercase tracking-wide">Gallery</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="relative aspect-square rounded-sm overflow-hidden group shadow-md transition-all duration-500 hover:shadow-2xl">
                <Image 
                  src={img?.imageUrl || ''} 
                  alt={`Tour Gallery ${index}`} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
