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
import heroImage from '@/assets/images/villa/vilaHeroImage1.jpg'
import { villaList } from '@/lib/villa-data';

export default function VillasPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [locationFilter, setLocationFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  const itemsPerPage = 6;

  // Filter Logic
  const filteredVillas = useMemo(() => {
    return villaList.filter(villa => {
      const matchLocation = locationFilter === 'all' || villa.location === locationFilter;
      const matchCategory = categoryFilter === 'all' || villa.category.toLowerCase() === categoryFilter;
      return matchLocation && matchCategory;
    });
  }, [locationFilter, categoryFilter]);

  const totalPages = Math.ceil(filteredVillas.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedVillas = filteredVillas.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const section = document.getElementById('villa-listings');
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
          alt="Villas Hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUpVariant}
            className="font-headline text-4xl md:text-7xl uppercase mb-4 tracking-tight"
          >
            Your Haven Away
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUpVariant} transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl font-light opacity-90 tracking-wide"
          >
            Stay. Belong. Feel the cozy Vibe
          </motion.p>
        </div>
      </section>

      {/* Story & Concept Section */}
      <section className="pb-32 container mx-auto px-6 md:px-12" id="villa-listings">
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        >
          {/* Breadcrumbs */}
          <motion.div variants={fadeUpVariant} className="flex mt-16 items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-14 justify-start">
            <Link href="/" className="hover:text-accent">HOME</Link>
            <span>/</span>
            <span className="text-foreground">VILLAS</span>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl text-accent mb-4">Our Story & Concept</h2>
            <h3 className="font-headline text-2xl md:text-3xl text-foreground mb-8">Discover the Art of Coziness</h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-6xl mx-auto font-light mb-10">
              Experience curated getaways designed to soothe your soul, connect with nature, and elevate your island escape in our handpicked luxurious villas.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-2xl">
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
                <SelectItem value="traditional">Traditional</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Villa Grid */}
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 text-left min-h-[400px]"
        >
          {displayedVillas.length > 0 ? (
            displayedVillas.map((villa, index) => {
              const imgData = PlaceHolderImages.find(img => img.id === villa.id);
              return (
                <motion.div key={`${villa.title}-${index}`} variants={fadeUpVariant} className="h-full">
                  <Link
                    href={`/villas/${villa.slug}`}
                    className="group flex flex-col bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden transition-all duration-500 hover:shadow-xl h-full"
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
                    <div className="flex gap-2 mb-4">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase py-1 px-3 bg-accent/5 rounded-full">
                        {villa.category}
                      </span>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase py-1 px-3 bg-primary/5 rounded-full">
                        {villa.location}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed font-light mb-0">
                      {villa.desc}
                    </p>
                  </div>
                  </Link>
                </motion.div>
              );
            })
          ) : (
            <motion.div variants={fadeUpVariant} className="col-span-full py-20 text-center">
              <p className="text-muted-foreground italic">No villas found matching your criteria.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Pagination Section */}
        {totalPages > 1 && (
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
            className="flex justify-center items-center gap-4 pt-24"
          >
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
          </motion.div>
        )}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
