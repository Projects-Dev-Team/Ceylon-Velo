'use client';

import React, { useState } from 'react';
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
import heroImage from '@/assets/images/villa/vilaHeroImage1.jpg'

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
  {
    id: 'villa-ayurveda',
    slug: 'ayurveda-pavilions',
    title: 'Serene Sanctuary',
    category: 'Boutique',
    desc: 'A peaceful retreat tucked away in the hills, offering panoramic views of the valley.',
  },
  {
    id: 'villa-broomfield',
    slug: '#',
    title: 'Heritage Haven',
    category: 'Traditional',
    desc: 'Experience colonial elegance in this beautifully restored heritage property.',
  },
  {
    id: 'villa-beach',
    slug: '#',
    title: 'Ocean Breeze Villa',
    category: 'Luxury',
    desc: 'Step directly onto the sand from this stunning contemporary beachfront estate.',
  },
];

export default function VillasPage() {
  
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(villaList.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedVillas = villaList.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to the top of the villa section
      const section = document.getElementById('villa-listings');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage || ''}
          alt="Villas Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-headline text-4xl md:text-7xl uppercase mb-4 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
            Your Haven Away
          </h1>
          <p className="text-lg md:text-2xl font-light opacity-90 tracking-wide animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 fill-mode-both">
            Stay. Belong. Feel the cozy Vibe
          </p>
        </div>
      </section>

      {/* Story & Concept Section */}
      <section className="pb-32 container mx-auto px-6 md:px-12" id="villa-listings">
        {/* Breadcrumbs */}
        <div className="flex mt-16 items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-14 justify-start animate-in fade-in duration-700">
          <Link href="/" className="hover:text-accent">HOME</Link>
          <span>/</span>
          <span className="text-foreground">VILLAS</span>
        </div>

        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="font-headline text-4xl md:text-5xl text-accent mb-4">Our Story & Concept</h2>
          <h3 className="font-headline text-2xl md:text-3xl text-foreground mb-8">Discover the Art of Coziness</h3>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-6xl mx-auto font-light mb-10">
            Experience curated getaways designed to soothe your soul, connect with nature, and elevate your island escape in our handpicked luxurious villas.
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Select A Location</label>
            <Select>
              <SelectTrigger className="bg-secondary/30 border-none h-12 rounded-sm focus:ring-accent">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="colombo">Colombo</SelectItem>
                <SelectItem value="galle">Galle</SelectItem>
                <SelectItem value="kandy">Kandy</SelectItem>
                <SelectItem value="mirissa">Mirissa</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Select A Category</label>
            <Select>
              <SelectTrigger className="bg-secondary/30 border-none h-12 rounded-sm focus:ring-accent">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="boutique">Boutique</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
                <SelectItem value="cafe">Cafe</SelectItem>
                <SelectItem value="traditional">Traditional</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Villa Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 text-left min-h-[800px]">
          {displayedVillas.map((villa, index) => {
            const imgData = PlaceHolderImages.find(img => img.id === villa.id);
            return (
              <Link
                href={villa.slug === 'ayurveda-pavilions' ? `/villas/${villa.slug}` : '#'}
                key={`${villa.title}-${index}`}
                className="group flex flex-col bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden transition-all duration-500 hover:shadow-xl animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both"
                style={{ animationDelay: `${(index % 3) * 150}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={imgData?.imageUrl || ''}
                    alt={villa.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex flex-col items-start flex-grow">
                  <h4 className="font-headline text-2xl text-foreground mb-4 tracking-wide group-hover:text-accent transition-colors">
                    {villa.title}
                  </h4>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-4 py-1 px-3 bg-accent/5 rounded-full">
                    {villa.category}
                  </span>
                  <p className="text-muted-foreground text-xs leading-relaxed font-light mb-0">
                    {villa.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center items-center gap-4 pt-24 animate-in fade-in duration-700">
          <Button 
            variant="outline" 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-10 h-10 p-0 rounded-md border-border bg-[#B68D40] text-white hover:bg-[#B68D40]/90 transition-all hover:scale-105 disabled:opacity-50 disabled:scale-100"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          {[...Array(totalPages)].map((_, i) => (
            <Button 
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`w-10 h-10 p-0 rounded-md transition-all hover:scale-105 font-bold ${
                currentPage === i + 1 
                ? 'bg-[#B68D40] text-white hover:bg-[#B68D40]/90 shadow-md' 
                : 'bg-transparent text-foreground hover:bg-secondary'
              }`}
            >
              {i + 1}
            </Button>
          ))}
          
          <Button 
            variant="outline" 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 p-0 rounded-md border-border bg-[#B68D40] text-white hover:bg-[#B68D40]/90 transition-all hover:scale-105 disabled:opacity-50 disabled:scale-100"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
