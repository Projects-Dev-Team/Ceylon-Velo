'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const tourItems = [
  { id: 'tour-1', slug: 'tour-one', title: 'TOUR ONE', desc: 'Enjoy A Quick Snapshot Of Sri Lanka From Wildlife To Holy Temples...' },
  { id: 'tour-2', slug: '#', title: 'TOUR TWO', desc: 'Enjoy A Quick Snapshot Of Sri Lanka From Wildlife To Holy Temples...' },
  { id: 'tour-3', slug: '#', title: 'TOUR THREE', desc: 'Enjoy A Quick Snapshot Of Sri Lanka From Wildlife To Holy Temples...' },
  { id: 'tour-1', slug: 'tour-one', title: 'TOUR ONE', desc: 'Enjoy A Quick Snapshot Of Sri Lanka From Wildlife To Holy Temples...' },
  { id: 'tour-2', slug: '#', title: 'TOUR TWO', desc: 'Enjoy A Quick Snapshot Of Sri Lanka From Wildlife To Holy Temples...' },
  { id: 'tour-3', slug: '#', title: 'TOUR THREE', desc: 'Enjoy A Quick Snapshot Of Sri Lanka From Wildlife To Holy Temples...' },
  { id: 'tour-1', slug: 'tour-one', title: 'TOUR ONE', desc: 'Enjoy A Quick Snapshot Of Sri Lanka From Wildlife To Holy Temples...' },
  { id: 'tour-2', slug: '#', title: 'TOUR TWO', desc: 'Enjoy A Quick Snapshot Of Sri Lanka From Wildlife To Holy Temples...' },
  { id: 'tour-3', slug: '#', title: 'TOUR THREE', desc: 'Enjoy A Quick Snapshot Of Sri Lanka From Wildlife To Holy Temples...' },
  { id: 'tour-1', slug: 'tour-one', title: 'TOUR ONE', desc: 'Enjoy A Quick Snapshot Of Sri Lanka From Wildlife To Holy Temples...' },
  { id: 'tour-2', slug: '#', title: 'TOUR TWO', desc: 'Enjoy A Quick Snapshot Of Sri Lanka From Wildlife To Holy Temples...' },
  { id: 'tour-3', slug: '#', title: 'TOUR THREE', desc: 'Enjoy A Quick Snapshot Of Sri Lanka From Wildlife To Holy Temples...' },
];

export default function ToursPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'tours-hero');

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage?.imageUrl || ''}
          alt="Tours Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-headline text-4xl mb-4 tracking-wider animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
            DISCOVER YOUR NEXT ADVENTURE
          </h1>
          <p className="text-sm md:text-lg tracking-[0.4em] uppercase font-bold animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 fill-mode-both">
            CREATE UNFORGETTABLE TRAVEL MEMORIES
          </p>
        </div>
      </section>

      {/* Breadcrumbs & Title Section */}
      <section className="py-16 md:py-16 container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-8">
          <Link href="/" className="hover:text-accent">HOME</Link>
          <span>/</span>
          <span className="text-foreground">TOURS</span>
        </div>

        <div className="max-w-8xl mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            Explore Our <span className="text-accent italic font-brand text-6xl md:text-7xl normal-case">Signature Journeys</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
            Exotic locations, wild adventures, romantic escapes, or off the beaten track: which path will you choose to explore our paradise isle? We offer you many to pick from, and, as there is much to see and do in Sri Lanka, tours to suit your specific interests and duration of stay can be tailor-made too.
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="pb-32 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {tourItems.map((tour, index) => {
            const imgData = PlaceHolderImages.find(img => img.id === tour.id);
            return (
              <Link 
                href={tour.slug === 'tour-one' ? `/tours/${tour.slug}` : '#'}
                key={index} 
                className="group flex flex-col bg-white rounded-lg shadow-sm border border-border/50 overflow-hidden transition-all duration-500 hover:shadow-xl animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both"
                style={{ animationDelay: `${(index % 3) * 200}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={imgData?.imageUrl || ''}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex flex-col items-start">
                  <h3 className="font-headline text-xl text-foreground mb-4 tracking-wide group-hover:text-accent transition-colors">{tour.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-6 font-medium">
                    {tour.desc}
                  </p>
                  <span 
                    className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors flex items-center gap-1 group/link"
                  >
                    LEARN MORE...
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4">
          <Button variant="outline" className="w-10 h-10 p-0 rounded-md border-border bg-[#B68D40] text-white hover:bg-[#B68D40]/90">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button className="w-10 h-10 p-0 rounded-md bg-[#B68D40] text-white hover:bg-[#B68D40]/90 font-bold">1</Button>
          <Button variant="ghost" className="w-10 h-10 p-0 rounded-md text-foreground hover:bg-secondary font-bold">2</Button>
          <Button variant="ghost" className="w-10 h-10 p-0 rounded-md text-foreground hover:bg-secondary font-bold">3</Button>
          <Button variant="outline" className="w-10 h-10 p-0 rounded-md border-border bg-[#B68D40] text-white hover:bg-[#B68D40]/90">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
