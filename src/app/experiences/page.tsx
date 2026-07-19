
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer, slideInLeftVariant, slideInRightVariant } from '@/lib/animations';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
  ChevronRight,
  Headphones,
  Mail,
  Send
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
  ];

  const gallery = ['insta-1', 'insta-2', 'insta-3', 'insta-4', 'insta-5'];

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
            One Island. Endless Experiences
          </motion.p>
        </div>
      </section>

      {/* Choose Your Experience Section */}
      <section className="pt-16 pb-24 container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-24"
        >
          <Link href="/" className="hover:text-accent transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-foreground">EXPERIENCES</span>
        </motion.div>

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
                    <div className="group relative bg-white rounded-2xl shadow-md border border-border/50 hover:shadow-xl transition-all duration-500 h-full flex flex-col overflow-hidden">
                      <div className="relative aspect-square overflow-hidden shrink-0">
                        <Image src={img?.imageUrl || ''} alt={cat.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                      </div>
                      <div className="relative z-20 -mt-6 mx-auto w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-border/50 text-accent transition-all duration-500">
                        <CatIcon className="w-6 h-6" />
                      </div>
                      <div className="relative flex flex-col flex-grow items-center text-center p-6 pt-4">
                        <h4 className="font-headline text-lg mb-2 text-primary">{cat.title}</h4>
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
            <Button asChild className="rounded-none bg-primary text-white hover:bg-primary/90 px-10 h-12 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105">
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
                <span className="md:hidden absolute top-2 left-2 w-6 h-6 rounded-full bg-accent text-white text-[10px] flex items-center justify-center font-bold shadow-md">
                  0{i + 1}
                </span>

                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center mb-6 text-[#B08C45] border border-[#B08C45]/20 group-hover:bg-[#B08C45] group-hover:text-white transition-all duration-500 relative z-20">
                  <step.icon className="w-6 h-6" />
                </div>
                
                <span className="hidden md:flex w-6 h-6 rounded-full bg-accent text-white text-[10px] items-center justify-center font-bold shadow-md mb-4 relative z-20 transition-transform group-hover:scale-110 mx-auto">
                  0{i + 1}
                </span>
                
                <h4 className="font-bold tracking-widest uppercase text-[10px] mb-4 text-foreground text-center">{step.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed px-4 text-center">{step.desc}</p>
              </motion.div>
            ))}
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
          <motion.span variants={fadeUpVariant} className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
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
                  <CarouselItem key={index} className="pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <motion.div variants={fadeUpVariant} className="h-full">
                      <Card className="bg-white border-none shadow-md overflow-hidden group h-full flex flex-col hover:shadow-xl transition-all duration-500">
                        <div className="relative aspect-[4/3] overflow-hidden shrink-0">
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
                            <CarouselPrevious className="left-2 opacity-100 h-8 w-8 bg-white/40 hover:bg-white/60 border-none text-white" />
                            <CarouselNext className="right-2 opacity-100 h-8 w-8 bg-white/40 hover:bg-white/60 border-none text-white" />
                          </Carousel>
                        </div>
                        <div className="p-6 flex-grow flex flex-col">
                          <h4 className="font-headline text-xl mb-3 leading-tight group-hover:text-accent transition-colors">{feat.title}</h4>
                          <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                            {feat.desc}
                          </p>
                          <Link 
                            href={feat.slug !== '#' ? `/experiences/${feat.slug}` : '#'} 
                            className="mt-auto text-[9px] font-bold tracking-widest uppercase text-accent flex items-center gap-2 group/link"
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
          </Carousel>
        </div>
        <div className="flex justify-center">
          <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white px-10 h-12 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105">
            <Link href="/experiences/all">VIEW ALL EXPERIENCES</Link>
          </Button>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-[#F8F5EF]">
        <div className="container mx-auto px-6 text-center mb-16">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
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
            <div key={i} className="bg-white p-8 rounded-xl shadow-md border border-border/50 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold tracking-widest uppercase text-[10px] mb-4 text-foreground">{item.title}</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Journey */}
      <section className="py-24 md:py-32 container mx-auto px-6 md:px-12 text-center">
        <span className="text-[#B08C45] font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
          FOLLOW OUR JOURNEY
        </span>
        <h2 className="font-headline text-4xl md:text-5xl mb-6 text-foreground">
          Journey Through Sri Lanka
        </h2>
        <p className="text-muted-foreground text-sm italic max-w-2xl mx-auto mb-12">
          Discover breathtaking scenery, authentic experiences, and unforgettable moments from across the island.
        </p>
        <div className="flex justify-center mb-16">
          <Button className="rounded-none bg-primary text-white hover:bg-accent px-8 h-12 text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2">
            <Camera className="w-4 h-4" /> FOLLOW ON INSTAGRAM
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {gallery.map((id, index) => (
            <div key={index} className="relative aspect-square rounded-lg overflow-hidden group shadow-md transition-all duration-500">
              <Image 
                src={PlaceHolderImages.find(img => img.id === id)?.imageUrl || ''} 
                alt={`Gallery ${index}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Compass className="text-white w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Let's Plan Your Journey Section */}
      <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Image */}
            <motion.div variants={slideInLeftVariant} className="lg:col-span-4 relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
              <Image 
                src={PlaceHolderImages.find(img => img.id === 'contact-intro')?.imageUrl || ''} 
                alt="Plan your journey" 
                fill 
                className="object-cover"
              />
            </motion.div>

            {/* Center Content */}
            <motion.div variants={fadeUpVariant} className="lg:col-span-4 text-center px-4">
              <div className="flex justify-center gap-2 mb-8 text-[#B08C45]">
                <Sparkles className="w-4 h-4" />
                <Sparkles className="w-5 h-5 -mt-2" />
                <Sparkles className="w-4 h-4" />
              </div>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-primary">
                Let's Plan Your Sri Lankan Journey
              </h2>
              <div className="w-12 h-px bg-[#B08C45] mx-auto mb-8" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-xs mx-auto">
                Tell us about your dream holiday, and our travel specialists will create a personalized itinerary designed exclusively for you.
              </p>
              <Button className="bg-[#B08C45] hover:bg-[#967438] text-white rounded-md px-10 h-14 font-bold tracking-widest flex items-center gap-3 mx-auto shadow-lg transition-all hover:scale-105">
                <Mail className="w-5 h-5" /> SEND INQUIRY
              </Button>
            </motion.div>

            {/* Right Form */}
            <motion.div variants={slideInRightVariant} className="lg:col-span-4">
              <Card className="border-none shadow-2xl bg-white rounded-xl overflow-hidden">
                <CardContent className="p-8 space-y-4">
                  <div className="space-y-4">
                    <Input placeholder="Your Name *" className="h-12 border-border focus-visible:ring-accent" />
                    <Input placeholder="Email Address *" className="h-12 border-border focus-visible:ring-accent" />
                    <Input placeholder="Phone / WhatsApp" className="h-12 border-border focus-visible:ring-accent" />
                    <Textarea placeholder="Tell us about your dream holiday..." className="min-h-[120px] border-border focus-visible:ring-accent" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white h-14 font-bold tracking-widest rounded-md mt-4 flex items-center justify-center gap-2">
                    SEND INQUIRY <Send className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience CTA Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-center overflow-hidden">
        <Image 
          src={PlaceHolderImages.find(img => img.id === 'vision-mission-bg')?.imageUrl || ''} 
          alt="CTA Background" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 py-24">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
          >
            <div className="text-white max-w-xl">
              <motion.span variants={fadeUpVariant} className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
                READY TO BEGIN?
              </motion.span>
              <motion.h2 variants={fadeUpVariant} className="font-headline text-5xl md:text-7xl leading-tight mb-4">
                Your Sri Lankan story <br />
                <span className="font-brand italic text-accent normal-case text-6xl md:text-8xl">starts here.</span>
              </motion.h2>
              <motion.p variants={fadeUpVariant} className="text-white/80 text-sm max-w-md italic mt-4">
                Speak to our concierge and we'll craft a private itinerary tailored to your dates, dreams and pace.
              </motion.p>
            </div>
            <motion.div variants={fadeUpVariant} className="flex lg:justify-end">
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-12 h-16 text-sm font-bold tracking-[0.2em] shadow-2xl transition-all hover:scale-110">
                BOOK NOW
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Footer Overlay */}
        <div className="container relative z-20 mx-auto px-4 md:px-8 -mb-24 mt-12">
          <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-10 md:p-12 border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-white/90">
              <div>
                <h3 className="font-brand text-4xl text-accent mb-6">Ceylon Velo</h3>
                <p className="text-xs leading-relaxed text-white/60 font-light mb-8">
                  Boutique villas and signature journeys across Sri Lanka, designed by islanders for the world.
                </p>
                <div className="flex gap-4">
                  {['instagram', 'facebook', 'twitter'].map((social) => (
                    <Link key={social} href="#" className="p-2.5 rounded-full border border-white/10 hover:border-accent hover:text-accent transition-all duration-300">
                      <Camera className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold tracking-[0.2em] text-[10px] uppercase text-white/40 mb-6">EXPLORE</h4>
                <nav className="flex flex-col space-y-3 text-xs">
                  <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                  <Link href="/villas" className="hover:text-accent transition-colors">Villas</Link>
                  <Link href="/tours" className="hover:text-accent transition-colors">Tours</Link>
                  <Link href="/experiences" className="hover:text-accent transition-colors">Destinations</Link>
                  <Link href="/about" className="hover:text-accent transition-colors">Reviews</Link>
                </nav>
              </div>

              <div>
                <h4 className="font-bold tracking-[0.2em] text-[10px] uppercase text-white/40 mb-6">REGIONS</h4>
                <nav className="flex flex-col space-y-3 text-xs">
                  <Link href="#" className="hover:text-accent transition-colors">Mirissa Beach</Link>
                  <Link href="#" className="hover:text-accent transition-colors">Ella Mountains</Link>
                  <Link href="#" className="hover:text-accent transition-colors">Sigiriya Rock</Link>
                  <Link href="#" className="hover:text-accent transition-colors">Yala Safari</Link>
                  <Link href="#" className="hover:text-accent transition-colors">Galle Fort</Link>
                </nav>
              </div>

              <div>
                <h4 className="font-bold tracking-[0.2em] text-[10px] uppercase text-white/40 mb-6">CONTACT</h4>
                <div className="space-y-4 text-xs">
                  <div className="flex gap-3 items-start">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-white/70">23 Galle Face Terrace,<br />Colombo 03, Sri Lanka</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Phone className="w-4 h-4 text-accent" />
                    <span className="text-white/70">+94 11 234 5678</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Mail className="w-4 h-4 text-accent" />
                    <span className="text-white/70">hello@ceylonvelo.lk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold tracking-[0.2em] uppercase text-white/40 mt-4">
            <span>© 2026 Ceylon Velo. Crafted with ♡ In Sri Lanka.</span>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Spacer for floating footer */}
      <div className="h-48 md:h-24 bg-primary/10" />
    </main>
  );
}

function Phone(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
