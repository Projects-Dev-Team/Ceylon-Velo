'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
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

  const heroImage = PlaceHolderImages.find(img => img.id === 'exp-hero');

  return (
    <main className="min-h-screen bg-white">
      <Header />

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
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 container mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-16 animate-in fade-in slide-in-from-left-4 duration-700">
          <Link href="/" className="hover:text-accent">HOME</Link>
          <span>/</span>
          <Link href="/experiences" className="hover:text-accent">EXPERIENCES</Link>
          <span>/</span>
          <span className="text-foreground">ALL</span>
        </div>

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
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
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
                </div>
              </Card>
            );
          })}
        </div>

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
            </Button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
