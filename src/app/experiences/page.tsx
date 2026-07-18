'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  Compass, 
  Map, 
  Hotel, 
  Users, 
  Headphones, 
  ArrowRight,
  Sparkles,
  Camera,
  CalendarDays,
  Gem,
  CheckCircle2,
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
  const planImg = PlaceHolderImages.find(img => img.id === 'exp-plan-img');
  
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
          className="object-cover animate-in fade-in duration-1000"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-headline text-4xl md:text-7xl mb-4 tracking-wider uppercase animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
            EXPERIENCE IN SRI LANKA
          </h1>
          <p className="text-sm md:text-lg tracking-[0.4em] uppercase font-bold opacity-80 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both">
            Experience In Sri Lanka
          </p>
        </div>
      </section>

      {/* Breadcrumbs & Intro */}
      <section className="pt-16 pb-24 container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-24 animate-in fade-in slide-in-from-left-4 duration-700">
          <Link href="/" className="hover:text-accent">HOME</Link>
          <span>/</span>
          <span className="text-foreground">EXPERIENCES</span>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
            DISCOVER SRI LANKA
          </span>
          <h2 className="font-headline text-4xl md:text-5xl text-foreground mb-8">
            Choose Your Experience
          </h2>
          <p className="text-muted-foreground leading-relaxed italic max-w-2xl mx-auto">
            Find the perfect blend of adventure, relaxation, culture or luxury. Choose a category below and let the story of your journey begin to unfold.
          </p>
        </div>

        {/* Categories Carousel */}
        <div className="relative px-12 animate-in fade-in zoom-in-95 duration-1000 delay-200">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4 items-stretch">
              {categories.map((cat, index) => {
                const img = PlaceHolderImages.find(i => i.id === cat.id);
                const CatIcon = cat.icon;
                return (
                  <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                    <div 
                      className="group relative cursor-pointer bg-white rounded-2xl shadow-md border border-border/50 hover:shadow-xl transition-all duration-500 h-full flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative aspect-square overflow-hidden shrink-0">
                        <Image src={img?.imageUrl || ''} alt={cat.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                      </div>
                      
                      {/* Overlapping Icon */}
                      <div className="absolute top-[calc(50%-24px)] left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-border/50 text-accent z-20 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                        <CatIcon className="w-6 h-6" />
                      </div>

                      <div className="relative flex flex-col flex-grow items-center text-center p-6 pt-10">
                        <h4 className="font-headline text-lg mb-2 group-hover:text-accent transition-colors">{cat.title}</h4>
                        <p className="text-[10px] text-muted-foreground leading-relaxed px-2">
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
            <Button asChild className="rounded-none bg-[#1F5145] text-white hover:bg-[#1F5145]/90 px-10 h-12 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105">
              <Link href="/experiences/all">EXPLORE ALL EXPERIENCES</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Plan Your Journey */}
      <section className="py-24 bg-[#F8F5EF] border-y border-border/50">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#B08C45] font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block animate-in fade-in duration-700">
            YOUR JOURNEY, OUR EXPERTISE
          </span>
          <h2 className="font-headline text-4xl md:text-5xl mb-16 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
            How We Plan Your Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto relative">
            {/* Steps */}
            {[
              { icon: Compass, title: 'Dream Your Escape', desc: 'Tell us your dreams, interests and expectations.' },
              { icon: Map, title: 'We Design Your Journey', desc: 'We craft a unique itinerary exclusively for you.' },
              { icon: Hotel, title: 'Refine & Confirm', desc: 'Every detail is curated and adjusted until it\'s perfect.' },
              { icon: CalendarDays, title: 'Arrive in Sri Lanka', desc: 'We handle every detail from the moment you land.' },
              { icon: Camera, title: 'Unforgettable Memories', desc: 'Go home with a heart full of stories.' },
            ].map((step, i) => (
              <div 
                key={i} 
                className="relative z-10 flex flex-col items-center p-6 md:p-0 rounded-xl md:rounded-none bg-white md:bg-transparent shadow-sm md:shadow-none border border-border/50 md:border-none group animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <span className="md:hidden absolute top-4 left-4 w-6 h-6 rounded-full bg-[#E47E25] text-white text-[10px] flex items-center justify-center font-bold shadow-md">
                  0{i + 1}
                </span>

                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center mb-6 text-[#B08C45] border border-[#B08C45]/20 group-hover:bg-[#B08C45] group-hover:text-white transition-all duration-500 relative z-20">
                  <step.icon className="w-6 h-6" />
                </div>
                
                <span className="hidden md:flex w-6 h-6 rounded-full bg-[#E47E25] text-white text-[10px] items-center justify-center font-bold shadow-md mb-4 relative z-20 transition-transform group-hover:scale-110">
                  0{i + 1}
                </span>
                
                <h4 className="font-bold tracking-widest uppercase text-[10px] mb-4 text-foreground text-center">{step.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed px-4 text-center">{step.desc}</p>
              </div>
            ))}
            
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-[#B08C45]/20 z-0 animate-in fade-in duration-1000 delay-700" />
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-24 md:py-32 container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="text-[#E47E25] font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
            HANDPICKED EXPERIENCES
          </span>
          <h2 className="font-headline text-4xl md:text-5xl mb-6 text-foreground">
            Featured Experiences
          </h2>
          <p className="text-muted-foreground text-sm italic leading-relaxed">
            Discover carefully curated moments designed by our local experts to immerse you in the authentic heart of paradise.
          </p>
        </div>

        <div className="relative px-6 md:px-12 mb-16">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-6">
              {featured.map((feat, index) => {
                return (
                  <CarouselItem key={index} className="pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                    <Card 
                      className="bg-white border-none shadow-md overflow-hidden group h-full flex flex-col hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-right-8 fill-mode-both"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Internal Image Slider */}
                      <div className="relative aspect-[4/5] overflow-hidden shrink-0">
                        <Carousel opts={{ loop: true }} className="w-full h-full">
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
                          {/* Navigation for nested slider */}
                          <CarouselPrevious className="left-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 hover:bg-white/40 border-none text-white" />
                          <CarouselNext className="right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 hover:bg-white/40 border-none text-white" />
                        </Carousel>
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

      {/* Value Props */}
      <section className="py-24 bg-[#F8F5EF]">
        <div className="container mx-auto px-6 text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="text-[#B08C45] font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
            THE CEYLON VELO WAY
          </span>
          <h2 className="font-headline text-4xl md:text-5xl mb-6 text-foreground">
            Travel Designed Around You
          </h2>
          <p className="text-muted-foreground text-sm italic max-w-2xl mx-auto">
            Every journey is a bespoke masterpiece, crafted with local expertise, personalized service, and attention to every detail.
          </p>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Sparkles, title: 'Personalized Itineraries', desc: 'Every journey is bespoke to match your unique travel style.' },
            { icon: Gem, title: 'Handpicked Luxury Stays', desc: 'Access exclusive villas and hand-selected heritage stays.' },
            { icon: Users, title: 'Local Expertise', desc: 'Insightful experiences guided by true local connoisseurs.' },
            { icon: Headphones, title: '24/7 Concierge Support', desc: 'Seamless assistance before, during, and after your journey.' },
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-xl shadow-md border border-border/50 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-in fade-in zoom-in-95 fill-mode-both"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 bg-[#B08C45]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#B08C45]">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold tracking-widest uppercase text-[10px] mb-4 text-foreground">{item.title}</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Generation Form */}
      <section className="py-24 bg-white border-t border-border/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Image Section */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-left-8 duration-1000">
               <Image src={planImg?.imageUrl || ''} alt="Plan Journey" fill className="object-cover" />
               <div className="absolute inset-0 bg-black/10" />
               <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white animate-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
                  <h4 className="font-headline text-2xl mb-4 italic">"Nature does not hurry, yet everything is accomplished."</h4>
                  <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#E47E25]">Discover Your Soul in Sri Lanka</p>
               </div>
            </div>

            {/* Right Form Section */}
            <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
               <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-[1px] bg-[#B08C45]" />
                  <span className="w-2 h-2 rounded-full border border-[#B08C45]" />
                  <span className="w-8 h-[1px] bg-[#B08C45]" />
               </div>
               <h2 className="font-headline text-4xl md:text-5xl mb-6 text-foreground italic">
                  Let's Plan Your <br /> Sri Lankan Journey
               </h2>
               <p className="text-muted-foreground text-sm mb-12 leading-relaxed max-w-md">
                  Tell us what you are looking for, and our bespoke travel specialists will create a personalized itinerary designed exclusively for you.
               </p>

               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Full Name *</Label>
                       <Input className="border-border/50 h-12 bg-[#F8F5EF]/30 focus:bg-white transition-all rounded-sm" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                       <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email Address *</Label>
                       <Input className="border-border/50 h-12 bg-[#F8F5EF]/30 focus:bg-white transition-all rounded-sm" placeholder="john@example.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Phone / WhatsApp</Label>
                    <Input className="border-border/50 h-12 bg-[#F8F5EF]/30 focus:bg-white transition-all rounded-sm" placeholder="+123 456 7890" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Detail about your journey</Label>
                    <Textarea className="border-border/50 min-h-[140px] bg-[#F8F5EF]/30 focus:bg-white transition-all rounded-sm" placeholder="Tell us about your travel dates, group size, and interests..." />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6 pt-4">
                     <Button className="bg-[#B08C45] hover:bg-[#A2712E] text-white rounded-none h-14 px-12 font-bold tracking-[0.2em] text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
                        ENQUIRE
                     </Button>
                     <Button className="bg-[#1F5145] hover:bg-[#1F5145]/90 text-white rounded-none h-14 px-12 font-bold tracking-[0.2em] text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
                        SEND REQUEST
                     </Button>
                  </div>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Overlay Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
         <Image src={heroImage?.imageUrl || ''} alt="CTA Background" fill className="object-cover" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
         <div className="relative z-10 text-left container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-end justify-between animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="max-w-2xl text-white">
               <h2 className="font-headline text-5xl md:text-6xl mb-4 leading-tight">
                  Your Sri Lankan <br /> story <br />
                  <span className="text-[#E47E25] italic">starts here..</span>
               </h2>
            </div>
            <Button className="bg-[#E47E25] hover:bg-[#E47E25]/90 text-white rounded-lg h-12 px-10 font-bold tracking-widest transition-transform hover:scale-105 shadow-2xl active:scale-95">
               BOOK NOW
            </Button>
         </div>
      </section>

      <Footer />
    </main>
  );
}
