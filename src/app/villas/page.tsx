
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const villaList = [
  {
    id: 'villa-broomfield',
    slug: '#',
    title: 'Broomfield by CeylonVelo',
    category: 'Boutique',
    desc: 'Broomfield is a luxury, charming six bedroom villa located in a 100-acre fruit farm...',
  },
  {
    id: 'villa-ayurveda',
    slug: 'ayurveda-pavilions',
    title: 'Ayurveda Pavilions',
    category: 'Luxury',
    desc: "Ceylon Cozy's first ever healing space, which is more than just an escape...",
  },
  {
    id: 'villa-beach',
    slug: '#',
    title: 'Beach',
    category: 'Luxury',
    desc: 'Destinations name of the exquisite architecture that front and house at the...',
  },
  {
    id: 'villa-broomfield',
    slug: '#',
    title: 'Broomfield by CeylonVelo',
    category: 'Boutique',
    desc: 'Broomfield is a luxury, charming six bedroom villa located in a 100-acre fruit farm...',
  },
  {
    id: 'villa-ayurveda',
    slug: 'ayurveda-pavilions',
    title: 'Ayurveda Pavilions',
    category: 'Luxury',
    desc: "Ceylon Cozy's first ever healing space, which is more than just an escape...",
  },
  {
    id: 'villa-beach',
    slug: '#',
    title: 'Beach',
    category: 'Luxury',
    desc: 'Destinations name of the exquisite architecture that front and house at the...',
  },
  {
    id: 'villa-broomfield',
    slug: '#',
    title: 'Broomfield by CeylonVelo',
    category: 'Boutique',
    desc: 'Broomfield is a luxury, charming six bedroom villa located in a 100-acre fruit farm...',
  },
  {
    id: 'villa-ayurveda',
    slug: 'ayurveda-pavilions',
    title: 'Ayurveda Pavilions',
    category: 'Luxury',
    desc: "Ceylon Cozy's first ever healing space, which is more than just an escape...",
  },
  {
    id: 'villa-beach',
    slug: '#',
    title: 'Beach',
    category: 'Luxury',
    desc: 'Destinations name of the exquisite architecture that front and house at the...',
  },
];

export default function VillasPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'villas-hero');

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage?.imageUrl || ''}
          alt="Villas Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-headline text-5xl md:text-8xl mb-4 tracking-tight">Your Haven Away</h1>
          <p className="text-lg md:text-2xl font-light opacity-90 tracking-wide">Stay. Belong. Feel the cozzy Vibe</p>
        </div>
      </section>

      {/* Story & Concept Section */}
      <section className="py-24 md:py-32 container mx-auto px-6 text-center max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h2 className="font-headline text-4xl md:text-5xl text-accent mb-4">Our Story & Concept</h2>
        <h3 className="font-headline text-2xl md:text-3xl text-foreground mb-12">Discover the Art of Coziness</h3>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto font-light mb-16">
          Experience curated getaways designed to soothe your soul, connect with nature, and elevate your island escape in our handpicked luxurious villas.
        </p>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-xl mx-auto text-left">
          <div className="space-y-3">
            <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Select A Location</label>
            <Select>
              <SelectTrigger className="bg-secondary/30 border-none h-10 rounded-sm focus:ring-accent">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="galle">Galle</SelectItem>
                <SelectItem value="bentota">Bentota</SelectItem>
                <SelectItem value="sigiriya">Sigiriya</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Select A Category</label>
            <Select>
              <SelectTrigger className="bg-secondary/30 border-none h-10 rounded-sm focus:ring-accent">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="boutique">Boutique</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Villa Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 text-left">
          {villaList.map((villa, index) => {
            const imgData = PlaceHolderImages.find(img => img.id === villa.id);
            return (
              <Link
                href={villa.slug === 'ayurveda-pavilions' ? `/villas/${villa.slug}` : '#'}
                key={index} 
                className="group flex flex-col animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both"
                style={{ animationDelay: `${(index % 3) * 150}ms` }}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-md transition-shadow hover:shadow-xl">
                  <Image
                    src={imgData?.imageUrl || ''}
                    alt={villa.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="px-2">
                  <h4 className="font-headline text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">
                    {villa.title}
                  </h4>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
                    {villa.category}
                  </span>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light line-clamp-3">
                    {villa.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 pt-24">
          <Button variant="outline" className="w-10 h-10 p-0 rounded-md border-none bg-accent text-white hover:bg-accent/90">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button className="w-10 h-10 p-0 rounded-md bg-accent text-white hover:bg-accent/90 font-bold">1</Button>
          <Button variant="ghost" className="w-10 h-10 p-0 rounded-md text-foreground hover:bg-secondary font-bold">2</Button>
          <Button variant="ghost" className="w-10 h-10 p-0 rounded-md text-foreground hover:bg-secondary font-bold">3</Button>
          <Button variant="outline" className="w-10 h-10 p-0 rounded-md border-none bg-accent text-white hover:bg-accent/90">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
