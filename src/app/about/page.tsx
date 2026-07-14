'use client';

import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Users, Heart, ShieldCheck, Globe, Plane, Handshake, Mountain, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'about-hero');
  const introImage = PlaceHolderImages.find(img => img.id === 'about-intro-image');
  const offerImages = {
    tours: PlaceHolderImages.find(img => img.id === 'offer-tours'),
    accommodation: PlaceHolderImages.find(img => img.id === 'offer-accommodation'),
    transport: PlaceHolderImages.find(img => img.id === 'offer-transport'),
    expertise: PlaceHolderImages.find(img => img.id === 'offer-expertise'),
  };
  const visionBg = PlaceHolderImages.find(img => img.id === 'vision-mission-bg');

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage?.imageUrl || ''}
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-headline text-4xl md:text-7xl tracking-widest uppercase animate-in fade-in slide-in-from-bottom-8 duration-1000">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <h2 className="font-headline text-4xl md:text-5xl mb-8 leading-tight">
              About <span className="text-accent">CEYLON VELO</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Welcome to Ceylon Velo, your premium portal to the most captivating island in the world. Sri Lanka is a land of vibrant culture, rich history, and breathtaking landscapes, and we are here to ensure you experience every bit of it in absolute comfort and luxury.
              </p>
              <p>
                At Ceylon Velo, we take pride in our deep-rooted local knowledge and passion for excellence. We don't just book tours; we curate experiences that linger in your memory long after your journey ends. From hidden forest trails to pristine coastal retreats, we lead you where beauty meets tranquility.
              </p>
              <p>
                Our mission is to bridge the gap between authentic Sri Lankan adventures and world-class luxury. We believe that true travel is about connecting with people, culture, and nature, and we design every itinerary to foster those meaningful connections.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden animate-in fade-in slide-in-from-right-8 duration-1000">
             <Image
              src={introImage?.imageUrl || ''}
              alt="Ceylon Velo Introduction"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={visionBg?.imageUrl || ''}
            alt="Offer Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/10" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl mb-4">
            What <span className="text-accent italic">WE OFFER</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto uppercase tracking-widest text-xs font-bold">
            Delivering excellence in every aspect of your Sri Lankan journey.
          </p>
        </div>

        <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'TAILOR MADE TOURS', img: offerImages.tours, desc: 'Bespoke itineraries designed to match your unique interests and travel style.' },
            { title: 'COMFORTABLE ACCOMMODATION', img: offerImages.accommodation, desc: 'Hand-picked luxury villas and boutique hotels that define island comfort.' },
            { title: 'RELIABLE TRANSPORTATION', img: offerImages.transport, desc: 'Seamless travel across the island with our fleet of premium vehicles.' },
            { title: 'LOCAL TRAVEL EXPERTISE', img: offerImages.expertise, desc: 'In-depth knowledge of the best-kept secrets and hidden gems of Sri Lanka.' },
          ].map((item, index) => (
            <div key={index} className="group relative aspect-[3/5] overflow-hidden rounded-xl animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
              <Image
                src={item.img?.imageUrl || ''}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <h3 className="font-headline text-2xl mb-4 leading-tight">{item.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl mb-12">
            Why Choose <span className="text-accent italic">CEYLON VELO</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'EXPERIENCED TRAVEL TEAM', desc: 'Our passionate experts carefully plan every detail to ensure your journey is smooth and stress-free.', icon: Users },
              { title: 'PERSONALIZED TRAVEL EXPERIENCES', desc: 'We design customized travel packages based on your interests and budget for unforgettable moments.', icon: Heart },
              { title: 'TRUSTED & RELIABLE SERVICE', desc: 'Committed to providing professional support and exceptional guest satisfaction from start to finish.', icon: ShieldCheck },
              { title: 'DISCOVER AUTHENTIC SRI LANKA', desc: 'Explore breathtaking destinations, cultural attractions, and hidden gems while experiencing true warmth.', icon: Globe },
            ].map((item, index) => (
              <Card key={index} className="bg-secondary/30 border-none shadow-sm rounded-2xl p-8 hover:bg-white transition-colors duration-500 animate-in fade-in zoom-in-95 duration-700" style={{ animationDelay: `${index * 150}ms` }}>
                <item.icon className="w-8 h-8 text-accent mb-6 mx-auto" />
                <h4 className="font-headline text-lg mb-4 text-primary leading-tight">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src={visionBg?.imageUrl || ''}
          alt="Vision Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl text-white mb-4">
              Explore The Beauty Of <span className="text-accent italic">SRI LANKA</span>
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto text-sm leading-relaxed">
              Experience the perfect blend of luxury, adventure, and relaxation with our carefully curated journeys across the Pearl of the Indian Ocean.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-12 rounded-2xl border border-white/20 text-center animate-in fade-in slide-in-from-left-8 duration-1000">
              <h3 className="font-headline text-3xl text-white mb-6 uppercase tracking-widest">OUR VISION</h3>
              <p className="text-white/80 text-sm leading-relaxed italic">
                "To become the world's most trusted luxury travel partner for exploring the authentic soul of Sri Lanka, setting the benchmark for premium island hospitality."
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-12 rounded-2xl border border-white/20 text-center animate-in fade-in slide-in-from-right-8 duration-1000">
              <h3 className="font-headline text-3xl text-white mb-6 uppercase tracking-widest">OUR MISSION</h3>
              <p className="text-white/80 text-sm leading-relaxed italic">
                "Our mission is to provide exceptional, personalized travel services that showcase the breathtaking destinations and cultural heritage of our beautiful nation."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Grid */}
      <section className="py-24 container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl mb-12">
            Who <span className="text-accent italic">We Are</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Passionate Travel Experts', icon: Plane, desc: 'A dedicated team of local professionals who live and breathe the spirit of island adventure.' },
              { title: 'Trusted Sri Lankan Travel Partner', icon: Handshake, desc: 'Building long-lasting relationships through transparency, reliability, and local integrity.' },
              { title: 'Creating Meaningful Adventures', icon: Mountain, desc: 'We craft journeys that go beyond sight-seeing, focusing on deep cultural immersion and impact.' },
              { title: 'Dedicated To Customer Satisfaction', icon: MessageSquare, desc: 'Your happiness is our priority, with 24/7 support ensuring every moment is perfect.' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-8 p-8 bg-secondary/20 rounded-xl hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-headline text-xl mb-2 text-primary">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
