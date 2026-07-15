'use client';

import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import heroImage from '@/assets/images/about/hero.jpg';
import introImage from '@/assets/images/about/introImage.png';
import offerBg from '@/assets/images/about/offer/offerBg.png';
import tours from '@/assets/images/about/offer/tour.png';
import accommodation from '@/assets/images/about/offer/accommodation.png';
import transport from '@/assets/images/about/offer/transport.png';
import expertise from '@/assets/images/about/offer/expertise.png';
import visionBg from '@/assets/images/about/vission/visionBg.jpg';
import visionImg from '@/assets/images/about/vission/vision.png';
import misionImg from '@/assets/images/about/vission/mision.png';

import { Users, Heart, ShieldCheck, Globe, Plane, Handshake, Mountain, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {


  const offerImages = {
    tours: tours,
    accommodation: accommodation,
    transport: transport,
    expertise: expertise,
  };


  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage || ''}
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
          <div className="relative w-full max-w-sm mx-auto overflow-hidden animate-in fade-in slide-in-from-right-8 duration-1000">
            <Image
              src={introImage || ''}
              alt="Ceylon Velo Introduction"
              width={400}
              height={500}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={offerBg || ''}
            alt="Offer Background"
            fill
            className="object-cover "
          />
          <div className="absolute inset-0 bg-primary/10" />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl mb-4 text-white ">
            What <span className="text-accent font-bold">WE OFFER</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto uppercase tracking-widest text-xs ">
            We believe that every traveller is unique, and so should their journey be. That’s why we specialize in customized travel packages designed to cater to individual preferences, interests, and budgets. Our services include:
          </p>
        </div>

        <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'TAILOR MADE TOURS', img: offerImages.tours, desc: 'We create personalized travel experiences designed to match your interests, schedule, comfort level, and budget for unforgettable adventures.' },
            { title: 'COMFORTABLE ACCOMMODATION', img: offerImages.accommodation, desc: 'Enjoy carefully selected hotels, villas, and stays that provide comfort, relaxation, safety, and authentic Sri Lankan hospitality throughout your journey.' },
            { title: 'RELIABLE TRANSPORTATION', img: offerImages.transport, desc: 'Travel conveniently with professional drivers, comfortable vehicles, and smooth transportation services that ensure safe and stress-free island exploration experiences.' },
            { title: 'LOCAL TRAVEL EXPERTISE', img: offerImages.expertise, desc: 'Our experienced local team provides valuable guidance, hidden destination recommendations, and friendly support to make every trip memorable and enjoyable.' },
          ].map((item, index) => (
            <div key={index} className="group relative aspect-[3/6] overflow-hidden rounded-xl animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
              <Image
                src={item.img || ''}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/80 group-hover:via-black/40 group-hover:to-black/20 transition-all duration-500" />
              {/* Title - starts at bottom, moves to top on hover */}
              <div className="absolute inset-x-0 bottom-0 group-hover:bottom-auto group-hover:top-0 p-8 text-white z-10 transition-all duration-500">
                <h3 className="font-headline text-2xl leading-tight">{item.title}</h3>
              </div>
              {/* Description - appears from bottom on hover */}
              <div className="absolute inset-x-0 bottom-0 p-8 text-white z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <p className="text-sm text-white/90 leading-relaxed">
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
          src={visionBg || ''}
          alt="Vision Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl text-white mb-4">
              Explore The Beauty Of <span className="text-accent italic">SRI LANKA</span>
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto text-sm leading-relaxed">
              Experience the perfect blend of nature, culture, adventure, and relaxation with unforgettable journeys across Sri Lanka. From golden beaches and lush green mountains to ancient heritage sites and vibrant local traditions, every destination offers a unique story. Let Ceylon Cozy guide you through remarkable experiences filled with comfort, discovery, and lasting memories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="relative rounded-2xl border border-white/20 text-center animate-in fade-in slide-in-from-left-8 duration-1000 overflow-hidden">
              <Image
                src={visionImg}
                alt="Our Vision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
              <div className="relative z-10 p-12">
                <h3 className="font-headline text-3xl text-white mb-6 uppercase tracking-widest">OUR VISION</h3>
                <p className="text-white/80 text-sm leading-relaxed italic">
                  &quot;To become the world&apos;s most trusted luxury travel partner for exploring the authentic soul of Sri Lanka, setting the benchmark for premium island hospitality.&quot;
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl border border-white/20 text-center animate-in fade-in slide-in-from-right-8 duration-1000 overflow-hidden">
              <Image
                src={misionImg}
                alt="Our Mission"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
              <div className="relative z-10 p-12">
                <h3 className="font-headline text-3xl text-white mb-6 uppercase tracking-widest">OUR MISSION</h3>
                <p className="text-white/80 text-sm leading-relaxed italic">
                  &quot;Our mission is to provide exceptional, personalized travel services that showcase the breathtaking destinations and cultural heritage of our beautiful nation.&quot;
                </p>
              </div>
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
