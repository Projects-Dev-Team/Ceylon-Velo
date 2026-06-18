'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const footerBg = PlaceHolderImages.find(img => img.id === 'footer-bg');

  return (
    <footer className="relative min-h-[900px] flex flex-col justify-end overflow-hidden pb-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={footerBg?.imageUrl || ''}
          alt="Footer Background"
          fill
          className="object-cover"
          data-ai-hint="misty forest"
        />
        {/* Subtle base overlay for the whole footer */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Top CTA Section */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">
              READY TO BEGIN?
            </span>
            <h2 className="font-headline text-5xl md:text-7xl mb-0 leading-tight text-white">
              Your Sri Lankan <br className="hidden md:block" /> 
              <span className="italic text-accent">story</span> starts here.
            </h2>
          </div>
          <div className="flex-shrink-0">
            <Button 
              className="rounded-none bg-accent text-white hover:bg-accent/90 px-12 h-16 text-sm font-bold tracking-[0.2em] transition-all duration-300 shadow-xl"
            >
              BOOK YOUR STAY
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Details Section with Rounded Corners and Margins */}
      <div className="container relative z-10 mx-auto px-4 md:px-12">
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-16 lg:p-24 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-16 text-white/80">
            
            {/* Brand */}
            <div className="flex flex-col">
              <Link href="/" className="font-brand text-5xl text-accent mb-6 tracking-wide">
                Ceylon Velo
              </Link>
              <p className="text-sm leading-relaxed max-w-xs mb-8">
                Boutique villas and signature journeys across the pearl of the Indian Ocean. Curating the essence of Sri Lankan luxury.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-accent transition-colors"><Instagram className="w-4 h-4" /></Link>
                <Link href="#" className="hover:text-accent transition-colors"><Facebook className="w-4 h-4" /></Link>
                <Link href="#" className="hover:text-accent transition-colors"><Twitter className="w-4 h-4" /></Link>
              </div>
            </div>

            {/* Explore */}
            <div className="flex flex-col">
              <h4 className="font-bold tracking-[0.2em] text-[10px] uppercase text-white mb-8">EXPLORE</h4>
              <nav className="flex flex-col space-y-4 text-sm font-medium">
                <Link href="#" className="hover:text-white transition-colors">Home</Link>
                <Link href="#villas" className="hover:text-white transition-colors">Boutique Villas</Link>
                <Link href="#tours" className="hover:text-white transition-colors">Signature Tours</Link>
                <Link href="#about" className="hover:text-white transition-colors">The Experience</Link>
                <Link href="#" className="hover:text-white transition-colors">Guest Reviews</Link>
              </nav>
            </div>

            {/* Regions */}
            <div className="flex flex-col">
              <h4 className="font-bold tracking-[0.2em] text-[10px] uppercase text-white mb-8">REGIONS</h4>
              <nav className="flex flex-col space-y-4 text-sm font-medium">
                <Link href="#" className="hover:text-white transition-colors">Mirissa Beach</Link>
                <Link href="#" className="hover:text-white transition-colors">Ella Mountains</Link>
                <Link href="#" className="hover:text-white transition-colors">Sigiriya Rock</Link>
                <Link href="#" className="hover:text-white transition-colors">Yala National Park</Link>
                <Link href="#" className="hover:text-white transition-colors">Galle Dutch Fort</Link>
              </nav>
            </div>

            {/* Contact */}
            <div className="flex flex-col">
              <h4 className="font-bold tracking-[0.2em] text-[10px] uppercase text-white mb-8">CONTACT</h4>
              <div className="space-y-6 text-sm">
                <div className="flex gap-4">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>45 Heritage Row, Galle Fort,<br />Sri Lanka</span>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <span>+94 77 123 4567</span>
                </div>
                <div className="flex gap-4 items-center">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <span>concierge@ceylonvelo.com</span>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase opacity-40 text-white">
            <span>© 2026 Ceylon Velo Luxe. ALL RIGHTS RESERVED.</span>
            <div className="flex gap-8">
              <Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}