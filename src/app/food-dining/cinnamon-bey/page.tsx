'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Utensils, MapPin, Wifi, Car, TreePine, Wind, UserCircle, Sun, Music, ChefHat } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

export default function CinnamonBeyPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'res-cinnamon');
  const legacy1 = PlaceHolderImages.find(img => img.id === 'res-legacy-1');
  const legacy2 = PlaceHolderImages.find(img => img.id === 'res-legacy-2');
  const visualImages = [
    PlaceHolderImages.find(img => img.id === 'visual-1'),
    PlaceHolderImages.find(img => img.id === 'visual-2'),
    PlaceHolderImages.find(img => img.id === 'visual-3'),
    PlaceHolderImages.find(img => img.id === 'visual-4'),
  ];
  const guestExpBg = PlaceHolderImages.find(img => img.id === 'guest-exp-bg');
  const menuCrab = PlaceHolderImages.find(img => img.id === 'menu-crab');
  const mapImg = PlaceHolderImages.find(img => img.id === 'res-map');

  const menuItems = {
    'sri-lankan': [
      { name: 'Ceylon Lagoon Crab', price: '$42', desc: 'Freshly caught crab simmered in a rich, spicy coconut milk gravy with local spices.' },
      { name: 'Traditional Rice & Curry', price: '$28', desc: 'An assortment of 5 seasonal curries served with heirloom red rice and crispy papadums.' },
    ],
    'seafood': [
      { name: 'Grilled Jumbo Prawns', price: '$38', desc: 'Marinated in garlic butter and served with a zesty lemon-herb reduction and grilled asparagus.' },
      { name: 'Seafood Platter for Two', price: '$75', desc: 'A selection of lobster, calamari, mussels, and fish, grilled to perfection over coconut husks.' },
    ],
    'italian': [
      { name: 'Truffle Porcini Risotto', price: '$32', desc: 'Creamy Arborio rice with wild mushrooms, finished with white truffle oil and aged parmesan.' },
      { name: 'Homemade Lobster Ravioli', price: '$36', desc: 'Hand-stretched pasta filled with fresh lobster meat in a delicate saffron cream sauce.' },
    ],
    'asian': [
      { name: 'Thai Green Curry', price: '$26', desc: 'Authentic spicy green curry with tender chicken, pea aubergine, and aromatic basil leaves.' },
      { name: 'Dim Sum Selection', price: '$24', desc: 'A curated basket of steamed prawn har gow, chicken sui mai, and vegetable dumplings.' },
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <Image
          src={heroImage?.imageUrl || ''}
          alt="Cinnamon Bey Hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-headline text-4xl md:text-7xl mb-6 tracking-wide">Cinnamon Bey</h1>
          <p className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto italic opacity-90">
            Discover the best restaurants, cafes, dining experience.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase">
             <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
                <span>4.8/5 (1k+ reviews)</span>
             </div>
             <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-accent" />
                <span>Boutique / Luxury</span>
             </div>
             <div className="flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-accent" />
                <span>Food</span>
             </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs & Title Section */}
      <section className="py-12 container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-24">
          <Link href="/" className="hover:text-accent">HOME</Link>
          <span>/</span>
          <Link href="/food-dining" className="hover:text-accent">FOOD & DINING</Link>
          <span>/</span>
          <span className="text-foreground">RESTAURANT</span>
        </div>

        {/* Legacy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <h2 className="font-headline text-4xl md:text-5xl mb-12 leading-tight">
              A Legacy of <span className="text-accent">Culinary Innovation</span>
            </h2>
            <div className="space-y-8 text-muted-foreground leading-relaxed text-sm">
              <p>
                Founded by Chef Julian Vance in the heart of Marbella, Lumière d'Or began as a humble family bistro. Over three decades, it has evolved into a sanctuary for those who seek the extraordinary. Our concept revolves around 'Elemental Gastronomy'—respecting the raw integrity of ingredients while using modern precision to unlock hidden flavors.
              </p>
              <p>
                Every dish tells a story of the soil, the sea, and the season. We believe that luxury is not just about the ingredients, but the soul that prepares them.
              </p>
            </div>
          </div>
          <div className="relative flex justify-end">
            <div className="relative w-full max-w-lg aspect-square">
                <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl z-10 rotate-3 transition-transform hover:rotate-0 duration-500">
                   <Image src={legacy1?.imageUrl || ''} alt="Legacy 1" fill className="object-cover" />
                </div>
                <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl z-20 -rotate-6 transition-transform hover:rotate-0 duration-500 border-8 border-white">
                   <Image src={legacy2?.imageUrl || ''} alt="Legacy 2" fill className="object-cover" />
                </div>
            </div>
          </div>
        </div>

        {/* The Visual Story */}
        <div className="mb-32">
          <div className="mb-12">
            <h3 className="font-headline text-3xl mb-2">The Visual Story</h3>
            <p className="text-muted-foreground text-xs uppercase tracking-widest font-medium">A glimpse into our world of taste and design.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {visualImages.map((img, index) => (
              <div key={index} className="relative aspect-[3/5] rounded-2xl overflow-hidden group shadow-lg">
                <Image 
                  src={img?.imageUrl || ''} 
                  alt={`Visual Story ${index}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Our Curated Menu */}
        <div className="mb-32 text-center">
            <h3 className="font-headline text-3xl mb-2">Our Curated Menu</h3>
            <p className="text-muted-foreground text-xs uppercase tracking-widest font-medium mb-12">A celebration of global flavors crafted with local soul.</p>
            
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
                
                {Object.entries(menuItems).map(([category, items]) => (
                  <TabsContent key={category} value={category} className="mt-0 animate-in fade-in duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                      {items.map((item, i) => (
                        <Card key={i} className="border-none shadow-sm bg-secondary/10 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-500">
                          <CardContent className="p-0 flex items-center gap-6">
                             <div className="relative w-32 h-32 shrink-0">
                                <Image src={menuCrab?.imageUrl || ''} alt={item.name} fill className="object-cover p-4" />
                             </div>
                             <div className="text-left py-6 pr-8 w-full">
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-headline text-xl text-primary">{item.name}</h4>
                                  <span className="text-accent font-bold">{item.price}</span>
                                </div>
                                <p className="text-xs text-muted-foreground mb-6 line-clamp-2">{item.desc}</p>
                                <Button variant="outline" className="h-8 rounded-full text-[9px] font-bold tracking-widest border-accent text-accent hover:bg-accent hover:text-white uppercase transition-colors">
                                  Order Online
                                </Button>
                             </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
            </Tabs>
        </div>
      </section>

      {/* The Guest Experience */}
      <section className="relative py-32 overflow-hidden text-white text-center">
        <Image src={guestExpBg?.imageUrl || ''} alt="Guest Experience Bg" fill className="object-cover" sizes="100vw" quality={100} />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        
        <div className="container relative z-10 mx-auto px-6">
          <h3 className="font-headline text-4xl mb-24">The Guest Experience</h3>
          
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
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-accent/40 flex items-center justify-center mb-6 text-accent group hover:bg-accent hover:text-white transition-all duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold tracking-widest uppercase mb-2">{item.title}</h4>
                <p className="text-[10px] text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="font-headline text-4xl mb-4">Location</h3>
            <p className="text-muted-foreground mb-16 italic font-light">Find us in the heart of the Golden Mile.</p>
            
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold tracking-widest uppercase text-xs mb-2">Address</h4>
                  <p className="text-sm text-muted-foreground">Cinnamon Bey Beruwala, Beruwala 12070</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold tracking-widest uppercase text-xs mb-2">Coordinates</h4>
                  <p className="text-sm text-muted-foreground">6.4764° N, 79.9818° E</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border">
            <Image src={mapImg?.imageUrl || ''} alt="Map Location" fill className="object-cover" />
            <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-xs font-bold text-primary cursor-pointer hover:bg-secondary transition-colors">
              Open in Maps <UserCircle className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
