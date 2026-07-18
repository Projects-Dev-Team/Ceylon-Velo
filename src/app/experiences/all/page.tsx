'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
<<<<<<< HEAD
import { 
  ArrowRight, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Gem,
  Map,
  Compass,
  Hotel,
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';

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
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = ['All', ...Array.from(new Set(allExperiences.map(e => e.category)))];

  const filteredExperiences = useMemo(() => {
    return selectedCategory === 'All' 
      ? allExperiences 
      : allExperiences.filter(e => e.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredExperiences.length / itemsPerPage);
  const displayedItems = filteredExperiences.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
=======
import { ChevronLeft, ChevronRight, Compass } from 'lucide-react';
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
>>>>>>> 7ef611a80e4fa21367ec1f4c9134c57b26f92145

  const heroImage = PlaceHolderImages.find(img => img.id === 'exp-hero');

  return (
    <main className="min-h-screen bg-white">
      <Header />

<<<<<<< HEAD
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage?.imageUrl || ''}
          alt="All Experiences Hero"
          fill
          className="object-cover animate-in fade-in duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-headline text-4xl md:text-6xl mb-4 tracking-wider uppercase animate-in fade-in slide-in-from-bottom-8 duration-1000">
            ALL EXPERIENCES
          </h1>
          <p className="text-[10px] tracking-[0.4em] uppercase font-bold opacity-80 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            Discover the Heart of Paradise
          </p>
=======
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
>>>>>>> 7ef611a80e4fa21367ec1f4c9134c57b26f92145
        </div>
      </section>

      {/* Main Content */}
<<<<<<< HEAD
      <section className="py-24 container mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-16 animate-in fade-in slide-in-from-left-4 duration-700">
          <Link href="/" className="hover:text-accent">HOME</Link>
          <span>/</span>
          <Link href="/experiences" className="hover:text-accent">EXPERIENCES</Link>
=======
      <section className="py-16 container mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-12">
          <Link href="/" className="hover:text-accent transition-colors">HOME</Link>
          <span>/</span>
          <Link href="/experiences" className="hover:text-accent transition-colors">EXPERIENCES</Link>
>>>>>>> 7ef611a80e4fa21367ec1f4c9134c57b26f92145
          <span>/</span>
          <span className="text-foreground">ALL</span>
        </div>

<<<<<<< HEAD
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-20 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
              className={cn(
                "px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase border transition-all duration-300",
                selectedCategory === cat 
                  ? "bg-primary text-white border-primary" 
                  : "bg-transparent text-muted-foreground border-border hover:border-accent hover:text-accent"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px]">
          {displayedItems.map((exp, idx) => {
            const img = PlaceHolderImages.find(i => i.id === exp.id);
            const CatIcon = categoryIcons[exp.category] || Compass;
            return (
              <Card 
                key={idx} 
                className="bg-white border-none shadow-md overflow-hidden group hover:shadow-xl transition-all duration-500 h-full flex flex-col animate-in fade-in slide-in-from-bottom-12 fill-mode-both"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden shrink-0">
                  <Image src={img?.imageUrl || ''} alt={exp.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 text-[8px] font-bold tracking-widest uppercase text-accent rounded-full flex items-center gap-2 shadow-sm">
                      <CatIcon className="w-3 h-3" /> {exp.category}
=======
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
>>>>>>> 7ef611a80e4fa21367ec1f4c9134c57b26f92145
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
<<<<<<< HEAD
                  <h4 className="font-headline text-2xl mb-4 leading-tight group-hover:text-accent transition-colors">{exp.title}</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {exp.desc}
                  </p>
                  <Link 
                    href={exp.slug !== '#' ? `/experiences/${exp.slug}` : '#'} 
                    className="mt-auto text-[10px] font-bold tracking-widest uppercase text-primary flex items-center gap-2 group/link"
                  >
                    Explore Journey <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
=======
                  <h3 className="font-headline text-xl mb-4 text-primary group-hover:text-accent transition-colors">{exp.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-grow">{exp.desc}</p>
                  <Button variant="link" className="p-0 h-auto text-[10px] font-bold tracking-widest uppercase text-accent mt-6 self-start group/btn">
                    Details <ChevronRight className="w-3 h-3 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
>>>>>>> 7ef611a80e4fa21367ec1f4c9134c57b26f92145
                </div>
              </Card>
            );
          })}
        </div>

<<<<<<< HEAD
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-20 animate-in fade-in duration-700">
            <Button 
              variant="outline" 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 p-0 bg-secondary/30 hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {[...Array(totalPages)].map((_, i) => (
              <Button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={cn(
                  "w-10 h-10 p-0 font-bold",
                  currentPage === i + 1 ? "bg-primary text-white" : "bg-transparent text-foreground hover:bg-secondary"
                )}
              >
                {i + 1}
              </Button>
            ))}
            <Button 
              variant="outline" 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 p-0 bg-secondary/30 hover:bg-primary hover:text-white"
            >
              <ChevronRight className="w-4 h-4" />
=======
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
>>>>>>> 7ef611a80e4fa21367ec1f4c9134c57b26f92145
            </Button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
