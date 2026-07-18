'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronLeft, ChevronRight, Compass, Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const allExperiences = [
  { id: 'exp-beach', category: 'Beaches', title: 'Sunset at Mirissa', desc: 'Experience the magic of the southern coast at dusk.' },
  { id: 'exp-wildlife', category: 'Wildlife', title: 'Yala Leopard Safari', desc: 'Track the elusive Sri Lankan leopard in its natural habitat.' },
  { id: 'exp-heritage', category: 'Heritage', title: 'Anuradhapura Ruins', desc: 'Walk through the ancient capital of Sri Lanka.' },
  { id: 'exp-train', category: 'Scenic', title: 'Kandy to Ella Rail', desc: 'The world\'s most beautiful train ride through tea estates.' },
  { id: 'exp-tea', category: 'Nature', title: 'Tea Plucking in Nuwara Eliya', desc: 'Learn the art of tea plucking from local experts.' },
  { id: 'exp-food', category: 'Culinary', title: 'Colombo Food Walk', desc: 'Sample the diverse flavors of the island\'s capital.' },
  { id: 'exp-whale', category: 'Wildlife', title: 'Blue Whale Watching', desc: 'Observe the ocean\'s giants off the coast of Mirissa.' },
  { id: 'exp-highlands', category: 'Nature', title: 'Horton Plains Trek', desc: 'Hike to the World\'s End for breathtaking vistas.' },
  { id: 'exp-sigiriya', category: 'Heritage', title: 'Sigiriya Lion Rock', desc: 'Ascend the ancient fortress in the sky.' },
  { id: 'exp-yala', category: 'Wildlife', title: 'Elephant Gathering', desc: 'Witness hundreds of elephants in Minneriya.' },
  { id: 'exp-bentota', category: 'Beaches', title: 'Bentota Water Sports', desc: 'Adrenaline and fun on the pristine western shore.' },
  { id: 'exp-galle', category: 'Heritage', title: 'Galle Fort Heritage Walk', desc: 'Explore the colonial charm of the Dutch Fort.' },
  { id: 'exp-beach', category: 'Beaches', title: 'Weligama Surf Session', desc: 'Catch the perfect waves in the heart of the surf coast.' },
  { id: 'exp-food', category: 'Culinary', title: 'Ayurvedic Cooking Class', desc: 'Discover the health benefits of Sri Lankan spices.' },
  { id: 'exp-tea', category: 'Nature', title: 'Mist-Covered Tea Trails', desc: 'Quiet walks through century-old tea bungalows.' },
];

const categories = ['All', 'Beaches', 'Wildlife', 'Heritage', 'Scenic', 'Nature', 'Culinary'];

export default function AllExperiencesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const itemsPerPage = 8;

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
    <main className="min-h-screen bg-white">
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
          <h1 className="font-headline text-4xl md:text-6xl mb-4 tracking-wider uppercase">ALL EXPERIENCES</h1>
          <p className="text-sm tracking-[0.4em] uppercase font-bold opacity-80">Every Story Sri Lanka Has To Tell</p>
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border-b border-border pb-8">
          <div>
            <h2 className="font-headline text-3xl mb-2">Explore Your Passion</h2>
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
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {currentItems.map((exp, idx) => {
            const img = PlaceHolderImages.find(i => i.id === exp.id);
            return (
              <Card key={idx} className="bg-white border-none shadow-md overflow-hidden group hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden shrink-0">
                  <Image src={img?.imageUrl || ''} alt={exp.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-[9px] font-bold tracking-[0.2em] px-3 py-1 rounded-full uppercase shadow-lg">
                      {exp.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-headline text-xl mb-4 text-primary group-hover:text-accent transition-colors">{exp.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-grow">{exp.desc}</p>
                  <Button variant="link" className="p-0 h-auto text-[10px] font-bold tracking-widest uppercase text-accent mt-6 self-start group/btn">
                    Details <ChevronRight className="w-3 h-3 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

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
