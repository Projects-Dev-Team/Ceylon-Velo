
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer, slideInLeftVariant, slideInRightVariant } from '@/lib/animations';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  MapPin, 
  Clock, 
  CheckCircle2,
  Mountain,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function SigiriyaDetailPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'exp-sigiriya');
  const gallery = [
    PlaceHolderImages.find(img => img.id === 'gallery-1'),
    PlaceHolderImages.find(img => img.id === 'gallery-2'),
    PlaceHolderImages.find(img => img.id === 'gallery-3'),
    PlaceHolderImages.find(img => img.id === 'gallery-4'),
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage?.imageUrl || ''}
          alt="Sigiriya Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-headline text-4xl md:text-8xl mb-6 tracking-wider uppercase"
          >
            SIGIRIYA LION ROCK
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-8 text-[10px] font-bold tracking-[0.4em] uppercase opacity-90"
          >
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Cultural Triangle</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> Full Day</span>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-16">
          <Link href="/" className="hover:text-accent">HOME</Link>
          <span>/</span>
          <Link href="/experiences" className="hover:text-accent">EXPERIENCES</Link>
          <span>/</span>
          <span className="text-foreground">SIGIRIYA</span>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-20"
        >
          {/* Left Side: Narrative */}
          <div className="lg:col-span-2 space-y-16">
            <motion.div variants={slideInLeftVariant} className="space-y-8">
              <h2 className="font-headline text-4xl md:text-5xl text-primary italic">A Palace Above the Clouds</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed font-light space-y-6">
                <p>
                  Rising 200 meters from the central plains, the Sigiriya Rock Fortress is a testament to the architectural and engineering brilliance of ancient Sri Lanka. Built by King Kashyapa in the 5th century, this UNESCO World Heritage site is a masterpiece of urban planning, water engineering, and artistic expression.
                </p>
                <p>
                  As you ascend the 1,200 steps, you'll encounter the famous "Mirror Wall" and the world-renowned Sigiriya frescoes—vibrant depictions of celestial maidens that have survived for over 1,500 years. The journey culminates at the summit, where the ruins of a sprawling royal palace offer breathtaking 360-degree views of the surrounding jungle.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border">
              {[
                { icon: Mountain, label: 'Elevation', value: '200 Meters' },
                { icon: ShieldCheck, label: 'Status', value: 'UNESCO Site' },
                { icon: Zap, label: 'Effort', value: 'Moderate' },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUpVariant} className="flex flex-col items-center text-center p-6 bg-secondary/20 rounded-xl">
                  <item.icon className="w-6 h-6 text-accent mb-4" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-1">{item.label}</span>
                  <span className="font-headline text-xl text-primary">{item.value}</span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUpVariant} className="space-y-8">
              <h3 className="font-headline text-3xl text-primary">Signature Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Private guided climb with heritage expert',
                  'Sunrise or sunset viewing options',
                  'Explore the royal pleasure gardens',
                  'Access to the iconic Lion\'s Paw entrance',
                  'Gourmet picnic lunch overlooking the rock',
                  'Visit to the Sigiriya museum',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Side: Quick Booking/Stats */}
          <motion.div variants={slideInRightVariant} className="space-y-12">
            <Card className="bg-primary text-white border-none rounded-2xl p-10 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -translate-y-16 translate-x-16" />
              <div className="relative z-10">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent mb-4 block">PREMIUM JOURNEY</span>
                <h4 className="font-headline text-3xl mb-8">Ready to explore?</h4>
                <div className="space-y-6 mb-12">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-xs font-light opacity-70">Duration</span>
                    <span className="font-bold">6-8 Hours</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-xs font-light opacity-70">Group Size</span>
                    <span className="font-bold">Private</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-xs font-light opacity-70">Best Time</span>
                    <span className="font-bold">Sunrise</span>
                  </div>
                </div>
                <Button className="w-full h-14 bg-accent text-white hover:bg-accent/90 rounded-none font-bold tracking-widest shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
                  ENQUIRE NOW
                </Button>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {gallery.map((img, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUpVariant}
                  className="relative aspect-square rounded-xl overflow-hidden shadow-md group"
                >
                  <Image src={img?.imageUrl || ''} alt={`Sigiriya Gallery ${i}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
