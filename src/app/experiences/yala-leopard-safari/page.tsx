'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Compass, 
  Users, 
  CheckCircle2,
  Gem,
  Camera,
  Heart
} from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function YalaSafariPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'exp-yala');
  const gallery = [
    PlaceHolderImages.find(img => img.id === 'insta-1'),
    PlaceHolderImages.find(img => img.id === 'insta-2'),
    PlaceHolderImages.find(img => img.id === 'insta-3'),
    PlaceHolderImages.find(img => img.id === 'insta-4'),
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage?.imageUrl || ''}
          alt="Yala Safari Hero"
          fill
          className="object-cover animate-in fade-in duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-headline text-4xl md:text-8xl mb-6 tracking-wider uppercase animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
            YALA LEOPARD SAFARI
          </h1>
          <div className="flex items-center justify-center gap-8 text-[10px] font-bold tracking-[0.4em] uppercase opacity-90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Yala National Park</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> Dawn & Dusk</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-16 animate-in fade-in slide-in-from-left-4 duration-700">
          <Link href="/" className="hover:text-accent">HOME</Link>
          <span>/</span>
          <Link href="/experiences" className="hover:text-accent">EXPERIENCES</Link>
          <span>/</span>
          <span className="text-foreground">YALA SAFARI</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Left Side: Narrative */}
          <div className="lg:col-span-2 space-y-16 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="space-y-8">
              <h2 className="font-headline text-4xl md:text-5xl text-primary italic">Deep into the Wild</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed font-light space-y-6">
                <p>
                  Yala National Park, a sprawling sanctuary of dry woodlands, open plains, and coastal lagoons, is world-renowned for its high density of Sri Lankan leopards. Here, the raw power of nature is on full display as majestic predators roam their ancestral hunting grounds.
                </p>
                <p>
                  Our bespoke safaris are designed to take you beyond the ordinary. Led by expert trackers and naturalists who know the heartbeat of the park, you'll venture deep into the wilderness in premium open-top jeeps. Beyond the leopards, expect to encounter elephants, sloth bears, crocodiles, and a vibrant array of tropical birds in a landscape that shifts from scrub jungle to golden coastlines.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border">
              {[
                { icon: Gem, label: 'Key Species', value: 'Leopards' },
                { icon: Camera, label: 'Experience', value: 'Wildlife Photography' },
                { icon: Heart, label: 'Vibe', value: 'Thrilling Adventure' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 bg-secondary/20 rounded-xl animate-in fade-in zoom-in-95 fill-mode-both" style={{ animationDelay: `${i * 150}ms` }}>
                  <item.icon className="w-6 h-6 text-accent mb-4" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-1">{item.label}</span>
                  <span className="font-headline text-xl text-primary">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <h3 className="font-headline text-3xl text-primary">Signature Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Exclusive dawn and dusk safari entries',
                  'Professional naturalist and expert tracker',
                  'Premium, low-impact safari vehicles',
                  'Leopard tracking expertise',
                  'Bush breakfast in a scenic park location',
                  'Sloth bear and elephant encounters',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted-foreground animate-in fade-in slide-in-from-left-4 fill-mode-both" style={{ animationDelay: `${i * 100}ms` }}>
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Quick Booking/Stats */}
          <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-1000">
            <Card className="bg-primary text-white border-none rounded-2xl p-10 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -translate-y-16 translate-x-16" />
              <div className="relative z-10">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent mb-4 block">BESPOKE WILDLIFE</span>
                <h4 className="font-headline text-3xl mb-8">Adventure awaits?</h4>
                <div className="space-y-6 mb-12">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-xs font-light opacity-70">Duration</span>
                    <span className="font-bold">4-5 Hours</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-xs font-light opacity-70">Experience</span>
                    <span className="font-bold">Private Safari</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-xs font-light opacity-70">Season</span>
                    <span className="font-bold">Feb - Sept</span>
                  </div>
                </div>
                <Button className="w-full h-14 bg-accent text-white hover:bg-accent/90 rounded-none font-bold tracking-widest shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
                  ENQUIRE NOW
                </Button>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {gallery.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-md group animate-in fade-in zoom-in-95 fill-mode-both" style={{ animationDelay: `${i * 100}ms` }}>
                  <Image src={img?.imageUrl || ''} alt={`Yala Gallery ${i}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
