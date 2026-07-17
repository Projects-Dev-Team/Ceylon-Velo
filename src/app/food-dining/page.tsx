'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';
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
import { diningList } from '@/lib/dining-data';

export default function FoodDiningPage() {
  // Filter and Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [locationFilter, setLocationFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  const itemsPerPage = 6;

  // Filter Logic
  const filteredDining = useMemo(() => {
    return diningList.filter(item => {
      const matchLocation = locationFilter === 'all' || item.location === locationFilter;
      const matchCategory = categoryFilter === 'all' || item.category.toLowerCase() === categoryFilter;
      return matchLocation && matchCategory;
    });
  }, [locationFilter, categoryFilter]);

  const totalPages = Math.ceil(filteredDining.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedDining = filteredDining.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const section = document.getElementById('dining-listings');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLocationChange = (val: string) => {
    setLocationFilter(val);
    setCurrentPage(1);
  };

  const handleCategoryChange = (val: string) => {
    setCategoryFilter(val);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[100vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage || ''}
          alt="Food and Dining Hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUpVariant}
            className="font-headline text-4xl md:text-7xl mb-4 tracking-tight"
          >
            Food & Dining
          </motion.h1>
        </div>
      </section>

      {/* Breadcrumbs & Title Section */}
      <section className="py-16 md:py-16 container mx-auto px-6 md:px-12" id="dining-listings">
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeUpVariant} className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-8">
            <Link href="/" className="hover:text-accent">HOME</Link>
            <span>/</span>
            <span className="text-foreground">FOOD & DINING</span>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="max-w-8xl mb-12">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Where to <span className="text-accent italic font-brand text-6xl md:text-7xl normal-case">Eat & Drink</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
              Experience the destination through its food culture. Browse top-rated restaurants, charming cafés, and unique dining experiences that showcase the flavors, traditions, and hospitality of the region.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-2xl">
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Select A Location</label>
            <Select value={locationFilter} onValueChange={handleLocationChange}>
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
            <Select value={categoryFilter} onValueChange={handleCategoryChange}>
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
        </motion.div>

        {/* Listings Grid */}
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20 min-h-[400px]"
        >
          {displayedDining.length > 0 ? (
            displayedDining.map((item, index) => {
              const imgData = PlaceHolderImages.find(img => img.id === item.id);
              return (
                <motion.div key={`${item.title}-${index}`} variants={fadeUpVariant} className="h-full">
                  <Link 
                    href={`/food-dining/${item.slug}`}
                    className="group flex flex-col bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden transition-all duration-500 hover:shadow-xl h-full"
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
                    <div className="flex gap-2 mb-4">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase py-1 px-3 bg-accent/5 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase py-1 px-3 bg-primary/5 rounded-full">
                        {item.location}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed font-light mb-0">
                      {item.desc}
                    </p>
                  </div>
                  </Link>
                </motion.div>
              );
            })
          ) : (
            <motion.div variants={fadeUpVariant} className="col-span-full py-20 text-center">
              <p className="text-muted-foreground italic">No dining experiences found matching your criteria.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
            className="flex justify-center items-center gap-4 py-12"
          >
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
          </motion.div>
        )}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
