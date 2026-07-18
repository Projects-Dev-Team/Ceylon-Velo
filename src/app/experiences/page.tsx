
'use client';

import React from 'react';
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
  Compass, 
  Map, 
  Hotel, 
  Users, 
  ArrowRight,
  Sparkles,
  Camera,
  CalendarDays,
  Gem,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ExperiencesPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'exp-hero');
  
  const categories = [
    { id: 'exp-beach', title: 'Beaches & Sunset', desc: 'Relax on golden shores and watch the magic unfold.', icon: Sparkles },
    { id: 'exp-wildlife', title: 'Wildlife & Safari', desc: 'Encounter majestic leopards and elephants in their habitat.', icon: Gem },
    { id: 'exp-heritage', title: 'Heritage & Culture', desc: 'Explore ancient temples and UNESCO heritage sites.', icon: Map },
    { id: 'exp-train', title: 'Scenic Train Journeys', desc: 'Traverse lush highlands on the world\'s most beautiful trains.', icon: Compass },
    { id: 'exp-tea', title: 'Tea Country Retreats', desc: 'Wake up to misty mountains and endless green estates.', icon: Hotel },
    { id: 'exp-food', title: 'Fine Dining & Culinary', desc: 'Savor traditional spices and world-class gourmet cuisine.', icon: Users },
  ];

  const featured = [
    { 
      id: 'exp-whale', 
      slug: '#', 
      title: 'Mirissa Whale Watching', 
      desc: 'Encounter these gentle giants in the deep blue waters of the south.',
      images: ['exp-whale', 'insta-4', 'insta-5'] 
    },
    { 
      id: 'exp-highlands', 
      slug: '#', 
      title: 'Ella Highlands', 
      desc: 'Trek through misty peaks and lush tea estates for breathtaking views.',
      images: ['exp-highlands', 'insta-2', 'insta-1']
    },
    { 
      id: 'exp-sigiriya', 
      slug: 'sigiriya-lion-rock', 
      title: 'Sigiriya Rock Fortress', 
      desc: 'Climb the ancient Lion Rock and witness a palace above the clouds.',
      images: ['exp-sigiriya', 'gallery-1', 'gallery-2']
    },
    { 
      id: 'exp-yala', 
      slug: 'yala-leopard-safari', 
      title: 'Yala Safari', 
      desc: 'An adrenaline-fueled journey into leopard country and wild wilderness.',
      images: ['exp-yala', 'insta-1', 'insta-2']
    },
    { 
      id: 'exp-bentota', 
      slug: '#', 
      title: 'Bentota Beach Massage', 
      desc: 'Indulge in ancient Ayurveda practices right by the ocean waves.',
      images: ['exp-bentota', 'insta-4', 'insta-3']
    },
    { 
      id: 'exp-galle', 
      slug: '#', 
      title: 'Galle Fort Experience', 
      desc: 'Walk through history in this colonial gem at the island\'s edge.',
      images: ['exp-galle', 'insta-6', 'insta-3']
    },
  ];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage?.imageUrl || ''}
          alt="Experiences Hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-headline text-4xl md:text-7xl mb-4 tracking-wider uppercase"
          >
            EXPERIENCE IN SRI LANKA
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-sm md:text-lg tracking-[0.4em] uppercase font-bold opacity-80"
          >
            Experience In Sri Lanka
          </motion.p>
        </div>
      </section>

      {/* Choose Your Experience Section */}
      <section className="pt-16 pb-24 container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-24">
          <Link href="/" className="hover:text-accent">HOME</Link>
          <span>/</span>
          <span className="text-foreground">EXPERIENCES</span>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.span 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block"
          >
            DISCOVER SRI LANKA
          </motion.span>
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="font-headline text-4xl md:text-5xl text-foreground mb-8"
          >
            Choose Your Experience
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-muted-foreground leading-relaxed italic max-w-2xl mx-auto"
          >
            Find the perfect blend of adventure, relaxation, culture or luxury. Choose a category below and let the story of your journey begin to unfold.
          </motion.p>
        </div>

        {/* Categories Carousel - Updated to show 4 cards at once and visible descriptions */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          className="relative px-12"
        >
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4 items-stretch">
              {categories.map((cat, index) => {
                const img = PlaceHolderImages.find(i => i.id === cat.id);
                const CatIcon = cat.icon;
                return (
                  <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="group relative cursor-pointer bg-white rounded-2xl shadow-md border border-border/50 hover:shadow-xl transition-all duration-500 h-full flex flex-col overflow-hidden">
                      <div className="relative aspect-square overflow-hidden shrink-0">
                        <Image src={img?.imageUrl || ''} alt={cat.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                      </div>
                      
                      {/* Overlapping Icon */}
                      <div className="absolute top-[calc(50%-24px)] left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-border/50 text-accent z-20 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                        <CatIcon className="w-6 h-6" />
                      </div>

                      <div className="relative flex flex-col flex-grow items-center text-center p-6 pt-10">
                        <h4 className="font-headline text-lg mb-2 group-hover:text-accent transition-colors">{cat.title}</h4>
                        <p className="text-[10px] text-muted-foreground leading-relaxed px-2 transition-opacity duration-300">
                          {cat.desc}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-full border-none bg-secondary/50 hover:bg-accent hover:text-white" />
            <CarouselNext className="right-0 translate-x-full border-none bg-secondary/50 hover:bg-accent hover:text-white" />
          </Carousel>
          <div className="mt-12 flex justify-center">
            <Button asChild className="rounded-none bg-[#1F5145] text-white hover:bg-[#1F5145]/90 px-10 h-12 text-[10px] font-bold tracking-[0.2em] uppercase">
              <Link href="/experiences/all">EXPLORE ALL EXPERIENCES</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* How We Plan Your Journey */}
      <section className="py-24 bg-[#F8F5EF] border-y border-border/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-[#B08C45] font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
              YOUR JOURNEY, OUR EXPERTISE
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-foreground">
              How We Plan Your Journey
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto relative">
            {[
              { icon: Compass, title: 'Dream Your Escape', desc: 'Tell us your dreams, interests and expectations.' },
              { icon: Map, title: 'We Design Your Journey', desc: 'We craft a unique itinerary exclusively for you.' },
              { icon: Hotel, title: 'Refine & Confirm', desc: 'Every detail is curated and adjusted until it\'s perfect.' },
              { icon: CalendarDays, title: 'Arrive in Sri Lanka', desc: 'We handle every detail from the moment you land.' },
              { icon: Camera, title: 'Unforgettable Memories', desc: 'Go home with a heart full of stories.' },
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center p-8 md:p-0 rounded-xl bg-white md:bg-transparent shadow-sm md:shadow-none border border-border/50 md:border-none group"
              >
                {/* Mobile Number Icon (Top Left) */}
                <span className="md:hidden absolute top-2 left-2 w-6 h-6 rounded-full bg-[#E47E25] text-white text-[10px] flex items-center justify-center font-bold shadow-md">
                  0{i + 1}
                </span>

                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center mb-6 text-[#B08C45] border border-[#B08C45]/20 group-hover:bg-[#B08C45] group-hover:text-white transition-all duration-500 relative z-20">
                  <step.icon className="w-6 h-6" />
                </div>
                
                {/* Desktop Number Icon below main icon */}
                <span className="hidden md:flex w-6 h-6 rounded-full bg-[#E47E25] text-white text-[10px] items-center justify-center font-bold shadow-md mb-4 relative z-20 transition-transform group-hover:scale-110 mx-auto">
                  0{i + 1}
                </span>
                
                <h4 className="font-bold tracking-widest uppercase text-[10px] mb-4 text-foreground text-center">{step.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed px-4 text-center">{step.desc}</p>
              </motion.div>
            ))}
            
            {/* Connector Line (Desktop) - Connects between main icons */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-[#B08C45]/20 z-0" />
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-24 md:py-32 container mx-auto px-6 md:px-12">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUpVariant} className="text-[#E47E25] font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
            HANDPICKED EXPERIENCES
          </motion.span>
          <motion.h2 variants={fadeUpVariant} className="font-headline text-4xl md:text-5xl text-foreground mb-6">
            Featured Experiences
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-muted-foreground text-sm italic leading-relaxed">
            Discover carefully curated moments designed by our local experts to immerse you in the authentic heart of paradise.
          </motion.p>
        </motion.div>

        <div className="relative px-6 md:px-12 mb-16">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-6 items-stretch">
              {featured.map((feat, index) => {
                return (
                  <CarouselItem key={index} className="pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <motion.div
                      variants={fadeUpVariant}
                      className="h-full"
                    >
                      <Card className="bg-white border-none shadow-md overflow-hidden group h-full flex flex-col hover:shadow-xl transition-all duration-500">
                        {/* Internal Image Slider */}
                        <div className="relative aspect-[4/5] overflow-hidden shrink-0">
                          <Carousel opts={{ loop: true }} className="w-full h-full group/inner">
                            <CarouselContent className="m-0 h-full">
                              {feat.images.map((imgId, imgIdx) => {
                                const img = PlaceHolderImages.find(i => i.id === imgId);
                                return (
                                  <CarouselItem key={imgIdx} className="p-0 h-full relative">
                                    <Image 
                                      src={img?.imageUrl || ''} 
                                      alt={`${feat.title} ${imgIdx + 1}`} 
                                      fill 
                                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                                    />
                                  </CarouselItem>
                                )
                              })}
                            </CarouselContent>
                            <CarouselPrevious className="left-2 opacity-0 group-hover/inner:opacity-100 h-8 w-8 bg-white/40 hover:bg-white/60 border-none text-white transition-opacity" />
                            <CarouselNext className="right-2 opacity-0 group-hover/inner:opacity-100 h-8 w-8 bg-white/40 hover:bg-white/60 border-none text-white transition-opacity" />
                          </Carousel>
                        </div>

                        <div className="p-6 flex-grow flex flex-col">
                          <h4 className="font-headline text-xl mb-3 leading-tight group-hover:text-[#B08C45] transition-colors">{feat.title}</h4>
                          <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                            {feat.desc}
                          </p>
                          <Link 
                            href={feat.slug !== '#' ? `/experiences/${feat.slug}` : '#'} 
                            className="mt-auto text-[9px] font-bold tracking-widest uppercase text-[#E47E25] flex items-center gap-2 group/link"
                          >
                            Discover More <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden xl:flex left-0 -translate-x-full border-none bg-secondary/50 hover:bg-[#B08C45] hover:text-white" />
            <CarouselNext className="hidden xl:flex right-0 translate-x-full border-none bg-secondary/50 hover:bg-[#B08C45] hover:text-white" />
          </Carousel>
        </div>
        <div className="flex justify-center">
          <Button asChild variant="outline" className="rounded-none border-[#1F5145] text-[#1F5145] hover:bg-[#1F5145] hover:text-white px-10 h-12 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105">
            <Link href="/experiences/all">VIEW ALL EXPERIENCES</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
