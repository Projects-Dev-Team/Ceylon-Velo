
'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Gem,
  Map,
  Compass,
  Hotel,
  Users
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const allExperiences = [
  { id: 'exp-whale', category: 'Beaches & Sunset', slug: '#', title: 'Mirissa Whale Watching', desc: 'Encounter these gentle giants in the deep blue waters of the south.' },
  { id: 'exp-highlands', category: 'Tea Country Retreats', slug: '#', title: 'Ella Highlands', desc: 'Trek through misty peaks and lush tea estates for breathtaking views.' },
  { id: 'exp-sigiriya', category: 'Heritage & Culture', slug: 'sigiriya-lion-rock', title: 'Sigiriya Rock Fortress', desc: 'Climb the ancient Lion Rock and witness a palace above the clouds.' },
  { id: 'exp-yala', category: 'Wildlife & Safari', slug: 'yala-leopard-safari', title: 'Yala Safari', desc: 'An adrenaline-fueled journey into leopard country and wild wilderness.' },
  { id: 'exp-bentota', category: 'Beaches & Sunset', slug: '#', title: 'Bentota Beach Massage', desc: 'Indulge in ancient Ayurveda practices right by the ocean waves.' },
  { id: 'exp-galle', category: 'Heritage & Culture', slug: '#', title: 'Galle Fort Experience', desc: 'Walk through history in this colonial gem at the island\'s edge.' },
  { id: 'exp-train', category: 'Scenic Train Journeys', slug: '#', title: 'Highland Odyssey', desc: 'The iconic blue train journey through the heart of tea country.' },
  { id: 'exp-food', category: 'Fine Dining & Culinary', slug: '#', title: 'Gourmet Colombo', desc: 'Experience the modern taste of Sri Lanka in its vibrant capital.' },
];

const categoryIcons: Record<string, any> = {
  'Beaches & Sunset': Sparkles,
  'Wildlife & Safari': Gem,
  'Heritage & Culture': Map,
  'Scenic Train Journeys': Compass,
  'Tea Country Retreats': Hotel,
  'Fine Dining & Culinary': Users,
};

export default function AllExperiencesPage() {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const categories = ['All', ...Array.from(new Set(allExperiences.map(e => e.category)))];

  const filteredExperiences = useMemo(() => {
    return allExperiences.filter(exp => 
      categoryFilter === 'All' || exp.category === categoryFilter
    );
  }, [categoryFilter]);

  const totalPages = Math.ceil(filteredExperiences.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredExperiences.slice(startIndex, startIndex + itemsPerPage);

  const heroImage = PlaceHolderImages.find(img => img.id === 'exp-hero');

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage?.imageUrl || ''}
          alt="All Experiences"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl md:text-6xl mb-4 tracking-wider uppercase"
          >
            ALL EXPERIENCES
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm tracking-[0.4em] uppercase font-bold opacity-80"
          >
            Every Story Sri Lanka Has To Tell
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-12">
          <Link href="/" className="hover:text-accent transition-colors">HOME</Link>
          <span>/</span>
          <Link href="/experiences" className="hover:text-accent transition-colors">EXPERIENCES</Link>
          <span>/</span>
          <span className="text-foreground">ALL</span>
        </div>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border-b border-border pb-8"
        >
          <div>
            <h2 className="font-headline text-3xl mb-2 text-primary">Explore Your Passion</h2>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Curated journeys by theme</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
             <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground hidden sm:block">Filter By:</label>
             <Select value={categoryFilter} onValueChange={(val) => { setCategoryFilter(val); setCurrentPage(1); }}>
                <SelectTrigger className="w-full md:w-[200px] bg-secondary/30 border-none rounded-none h-12">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
             </Select>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {currentItems.map((exp, idx) => {
            const img = PlaceHolderImages.find(i => i.id === exp.id);
            const CatIcon = categoryIcons[exp.category] || Compass;
            return (
              <motion.div key={idx} variants={fadeUpVariant} className="h-full">
                <Card className="bg-white border-none shadow-md overflow-hidden group hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                    <Image src={img?.imageUrl || ''} alt={exp.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 text-[8px] font-bold tracking-widest uppercase text-accent rounded-full flex items-center gap-2 shadow-sm">
                        <CatIcon className="w-3 h-3" /> {exp.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="font-headline text-xl mb-4 text-primary group-hover:text-accent transition-colors leading-tight">{exp.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-grow">{exp.desc}</p>
                    <Link 
                      href={exp.slug !== '#' ? `/experiences/${exp.slug}` : '#'} 
                      className="mt-6 text-[10px] font-bold tracking-widest uppercase text-accent flex items-center gap-2 group/btn"
                    >
                      Explore <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty State */}
        {currentItems.length === 0 && (
          <div className="text-center py-24">
             <Compass className="w-16 h-16 text-muted-foreground/20 mx-auto mb-6" />
             <p className="text-muted-foreground italic">No experiences found in this category.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))} 
              disabled={currentPage === 1}
              className="rounded-none border-border hover:bg-accent hover:text-white"
            >
              <ChevronLeft className="w-4 h-4 mr-2" /> Prev
            </Button>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Page {currentPage} of {totalPages}</span>
            <Button 
              variant="outline" 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} 
              disabled={currentPage === totalPages}
              className="rounded-none border-border hover:bg-accent hover:text-white"
            >
              Next <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

