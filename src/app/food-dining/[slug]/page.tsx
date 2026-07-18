'use client';

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer, slideInLeftVariant, slideInRightVariant } from '@/lib/animations';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Utensils, MapPin, Wifi, Car, TreePine, Wind, UserCircle, Sun, Music, ChefHat } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { diningList } from '@/lib/dining-data';

export default function DiningDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  
  const dining = diningList.find((d) => d.slug === slug);
  
  if (!dining) {
    notFound();
  }

  const heroImage = PlaceHolderImages.find(img => img.id === dining.heroImageId);
  const legacy1 = PlaceHolderImages.find(img => img.id === dining.legacy1Id);
  const legacy2 = PlaceHolderImages.find(img => img.id === dining.legacy2Id);
  
  const visualImages = dining.visualImageIds.map(id => PlaceHolderImages.find(img => img.id === id));
  
  const guestExpBg = PlaceHolderImages.find(img => img.id === 'guest-exp-bg');
  const menuCrab = PlaceHolderImages.find(img => img.id === 'menu-crab');
  const mapImg = PlaceHolderImages.find(img => img.id === dining.mapImgId);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={dining.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUpVariant}
            className="font-headline text-4xl md:text-7xl mb-6 tracking-wide"
          >{dining.title}</motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUpVariant} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto italic opacity-90"
          >
            {dining.heroSubtitle}
          </motion.p>
          
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUpVariant} transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase"
          >
             <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(Math.floor(dining.rating))].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
                <span>{dining.rating}/5 ({dining.reviewCount} reviews)</span>
             </div>
             <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-accent" />
                <span>{dining.category}</span>
             </div>
             <div className="flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-accent" />
                <span>Food</span>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumbs & Title Section */}
      <section className="py-12 container mx-auto px-6 md:px-12">
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeUpVariant} className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-24">
            <Link href="/" className="hover:text-accent">HOME</Link>
            <span>/</span>
            <Link href="/food-dining" className="hover:text-accent">FOOD & DINING</Link>
            <span>/</span>
            <span className="text-foreground uppercase">{dining.title}</span>
          </motion.div>

          {/* Legacy Section */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div variants={slideInLeftVariant}>
              <h2 className="font-headline text-4xl md:text-5xl mb-12 leading-tight">
                {dining.legacyTitlePrefix} <span className="text-accent">{dining.legacyTitleHighlight}</span>
              </h2>
              <div className="space-y-8 text-muted-foreground leading-relaxed text-sm">
                <p>{dining.legacyDescription1}</p>
                <p>{dining.legacyDescription2}</p>
              </div>
            </motion.div>
            <motion.div variants={slideInRightVariant} className="relative flex justify-end">
            <div className="relative w-full max-w-lg aspect-square">
                <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl z-10 rotate-3 transition-transform hover:rotate-0 duration-500">
                   {legacy1 && <Image src={legacy1.imageUrl} alt="Legacy 1" fill className="object-cover" />}
                </div>
                <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl z-20 -rotate-6 transition-transform hover:rotate-0 duration-500 border-8 border-white">
                   {legacy2 && <Image src={legacy2.imageUrl} alt="Legacy 2" fill className="object-cover" />}
                </div>
            </div>
          </motion.div>
        </motion.div>

        {/* The Visual Story */}
        <motion.div variants={staggerContainer} className="mb-32">
          <motion.div variants={fadeUpVariant} className="mb-12">
            <h3 className="font-headline text-3xl mb-2">The Visual Story</h3>
            <p className="text-muted-foreground text-xs uppercase tracking-widest font-medium">A glimpse into our world of taste and design.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {visualImages.map((img, index) => (
              <motion.div key={index} variants={fadeUpVariant} className="relative aspect-[3/5] rounded-2xl overflow-hidden group shadow-lg">
                {img && (
                  <Image 
                    src={img.imageUrl} 
                    alt={`Visual Story ${index}`} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Curated Menu */}
        <motion.div variants={staggerContainer} className="mb-32 text-center">
            <motion.h3 variants={fadeUpVariant} className="font-headline text-3xl mb-2">Our Curated Menu</motion.h3>
            <motion.p variants={fadeUpVariant} className="text-muted-foreground text-xs uppercase tracking-widest font-medium mb-12">A celebration of global flavors crafted with local soul.</motion.p>
            
            <motion.div variants={fadeUpVariant}>
              <Tabs defaultValue="sri-lankan" className="w-full">
                <TabsList className="bg-transparent gap-4 mb-16 h-auto p-0 flex-wrap justify-center">
                  {['Sri Lankan', 'Seafood', 'Italian', 'Asian'].map((tab) => (
                    <TabsTrigger 
                      key={tab} 
                      value={tab.toLowerCase().replace(' ', '-')}
                      className="rounded-none border border-border px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase data-[state=active]:bg-accent data-[state=active]:text-white data-[state=active]:border-accent transition-all"
                    >
                      {tab}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                <TabsContent value="sri-lankan" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {[1, 2].map((i) => (
                      <Card key={i} className="border-none shadow-sm bg-secondary/10 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-500">
                        <CardContent className="p-0 flex items-center gap-6">
                           <div className="relative w-32 h-32 shrink-0">
                              {menuCrab && <Image src={menuCrab.imageUrl} alt="Menu Item" fill className="object-cover p-4" />}
                           </div>
                           <div className="text-left py-6 pr-8 w-full">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-headline text-xl text-primary">Ceylon Lagoon Crab</h4>
                                <span className="text-accent font-bold">$42</span>
                              </div>
                              <p className="text-xs text-muted-foreground mb-6 line-clamp-2">Freshly caught crab simmered in a rich, spicy coconut milk gravy.</p>
                              <Button variant="outline" className="h-8 rounded-full text-[9px] font-bold tracking-widest border-accent text-accent hover:bg-accent hover:text-white uppercase transition-colors">
                                Order Online
                              </Button>
                           </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
        </motion.div>
      </motion.div>
      </section>

      {/* The Guest Experience */}
      <section className="relative py-32 overflow-hidden text-white text-center">
        {guestExpBg && <Image src={guestExpBg.imageUrl} alt="Guest Experience Bg" fill className="object-cover" />}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="container relative z-10 mx-auto px-6"
        >
          <motion.h3 variants={fadeUpVariant} className="font-headline text-4xl mb-24">The Guest Experience</motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 max-w-5xl mx-auto">
            {[
              { icon: Wifi, title: 'Complimentary WiFi', desc: 'Stay connected effortlessly.' },
              { icon: Car, title: 'Valet Parking', desc: 'Seamless arrival experience.' },
              { icon: TreePine, title: 'Garden Terrace', desc: 'Dine amidst lush greenery.' },
              { icon: Wind, title: 'Air Purified', desc: 'Advanced HEPA filtration.' },
              { icon: UserCircle, title: 'Private Suites', desc: 'Ideal for small gatherings.' },
              { icon: Sun, title: 'Sunset Terraces', desc: 'Breathtaking coastal views.' },
              { icon: Music, title: 'Live Lounge', desc: 'Low-fi lounge atmosphere.' },
              { icon: ChefHat, title: "Chef's Table", desc: 'Exclusive kitchen tasting.' },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeUpVariant} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-accent/40 flex items-center justify-center mb-6 text-accent group hover:bg-accent hover:text-white transition-all duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold tracking-widest uppercase mb-2">{item.title}</h4>
                <p className="text-[10px] text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Location Section */}
      <section className="py-32 container mx-auto px-6 md:px-12">
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20"
        >
          <motion.div variants={slideInLeftVariant}>
            <h3 className="font-headline text-4xl mb-4">Location</h3>
            <p className="text-muted-foreground mb-16 italic font-light">Find us in the heart of the Golden Mile.</p>
            
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold tracking-widest uppercase text-xs mb-2">Address</h4>
                  <p className="text-sm text-muted-foreground">{dining.locationAddress}</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold tracking-widest uppercase text-xs mb-2">Coordinates</h4>
                  <p className="text-sm text-muted-foreground">{dining.locationCoordinates}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={slideInRightVariant} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(dining.locationAddress)}&output=embed`}
            ></iframe>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dining.locationAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-xs font-bold text-primary cursor-pointer hover:bg-secondary transition-colors"
            >
              Open in Maps <MapPin className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
