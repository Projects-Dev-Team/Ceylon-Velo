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

import heroImage from '@/assets/images/food/foodHeroImage4.jpg'

const diningList = [
  {
    id: 'res-cinnamon',
    slug: 'cinnamon-bey',
    title: 'Cinnamon Bey',
    category: 'Boutique',
    desc: 'Enjoy a delightful dining experience with expertly prepared dishes, welcoming service, and a comfortable atmosphere perfect for family meals, gatherings, and special occasions.',
  },
  {
    id: 'res-villey',
    slug: '#',
    title: 'Villey Restaurant',
    category: 'Luxury',
    desc: 'Relax in a stylish, breezy setting reflecting sea surges and warm sand motifs, creating a serene environment while adding vibrancy for a casual and fun vibe.',
  },
  {
    id: 'res-hilton',
    slug: '#',
    title: 'Hilton Hotel',
    category: 'Luxury',
    desc: 'Discover authentic local flavors and traditional recipes that showcase the unique culinary heritage and culture of the destination.',
  },
  {
    id: 'res-cinnamon',
    slug: 'cinnamon-bey',
    title: 'Amber Room',
    category: 'Boutique',
    desc: 'An intimate dining experience focusing on the spice routes of old Ceylon.',
  },
  {
    id: 'res-villey',
    slug: '#',
    title: 'Azure Terrace',
    category: 'Cafe',
    desc: 'Fresh sea breezes and lighter fare make this the perfect afternoon retreat.',
  },
  {
    id: 'res-hilton',
    slug: '#',
    title: 'The Spice Cellar',
    category: 'Traditional',
    desc: 'Dive deep into the roots of Sri Lankan curry and rice in a heritage setting.',
  },
  {
    id: 'res-cinnamon',
    slug: 'cinnamon-bey',
    title: 'Golden Sands',
    category: 'Boutique',
    desc: 'Beachfront luxury dining with a focus on sustainable seafood.',
  },
];

export default function FoodDiningPage() {


  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(diningList.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedDining = diningList.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const section = document.getElementById('dining-listings');
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
          alt="Food and Dining Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Breadcrumbs & Title Section */}
      <section className="py-16 md:py-16 container mx-auto px-6 md:px-12" id="dining-listings">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-8">
          <Link href="/" className="hover:text-accent">HOME</Link>
          <span>/</span>
          <span className="text-foreground">FOOD & DINING</span>
        </div>

        <div className="max-w-8xl mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            Where to <span className="text-accent italic font-brand text-6xl md:text-7xl normal-case">Eat & Drink</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
            Experience the destination through its food culture. Browse top-rated restaurants, charming cafés, and unique dining experiences that showcase the flavors, traditions, and hospitality of the region.
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-2xl">
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

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20 min-h-[600px]">
          {displayedDining.map((item, index) => {
            const imgData = PlaceHolderImages.find(img => img.id === item.id);
            return (
              <Link 
                href={item.slug === 'cinnamon-bey' ? `/food-dining/${item.slug}` : '#'}
                key={`${item.title}-${index}`} 
                className="group flex flex-col bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden transition-all duration-500 hover:shadow-xl animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both"
                style={{ animationDelay: `${(index % 3) * 200}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={imgData?.imageUrl || ''}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex flex-col items-start flex-grow">
                  <h3 className="font-headline text-2xl text-foreground mb-4 tracking-wide group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-4 py-1 px-3 bg-accent/5 rounded-full">
                    {item.category}
                  </span>
                  <p className="text-muted-foreground text-xs leading-relaxed font-light mb-0">
                    {item.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 py-12 animate-in fade-in duration-700">
          <Button 
            variant="outline" 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-10 h-10 p-0 rounded-md border-border bg-[#B68D40] text-white hover:bg-[#B68D40]/90 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          {[...Array(totalPages)].map((_, i) => (
            <Button 
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`w-10 h-10 p-0 rounded-md font-bold transition-all ${
                currentPage === i + 1 
                ? 'bg-[#B68D40] text-white hover:bg-[#B68D40]/90' 
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
            className="w-10 h-10 p-0 rounded-md border-border bg-[#B68D40] text-white hover:bg-[#B68D40]/90 disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
