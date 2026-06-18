'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import footerImage from '@/assets/footer.png';

export function Footer() {
  return (
    <footer className="relative min-h-[500px] flex flex-col justify-end overflow-hidden pb-8 pt-6">
      {/* Background Image - Clean with no global overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={footerImage}
          alt="Footer Background"
          fill
          className="object-cover transition-transform duration-[10s] hover:scale-105"
          priority
        />
      </div>

      {/* Top CTA Section - Transparent Background */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 mb-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block animate-in fade-in slide-in-from-left-4 duration-1000 delay-200">
              READY TO BEGIN?
            </span>
            <h2 className="font-headline text-3xl md:text-5xl mb-0 leading-tight text-black">
              Your Sri Lankan <br className="hidden md:block" /> 
              <span>story</span> starts here.
            </h2>
          </div>
          <div className="flex-shrink-0">
            <Button 
              className="rounded-none bg-accent text-white hover:bg-accent/90 px-12 h-14 text-sm font-bold tracking-[0.2em] transition-all duration-500 hover:scale-105 active:scale-95 shadow-xl"
            >
              BOOK YOUR STAY
            </Button>
          </div>
        </div>
      </div>

      {/* Middle Content - Black Transparent Section with rounded corners and margins */}
      <div className="container relative z-10 mx-auto px-4 md:px-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 fill-mode-both">
        <div className="bg-black/50 backdrop-blur-md rounded-2xl p-6 md:p-8 overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:bg-black/60 group">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-white/90">
            
            {/* Brand column */}
            <div className="flex flex-col">
              <Link href="/" className="font-brand text-4xl text-[#FFDAB9] mb-4 tracking-wide transition-transform duration-300 hover:scale-105 inline-block">
                Ceylon Velo
              </Link>
              <p className="text-xs leading-relaxed max-w-xs mb-6 text-white/70 font-light">
                Boutique villas and signature journeys across the pearl of the Indian Ocean. Curating the essence of Sri Lankan luxury.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="p-2 rounded-full border border-white/10 hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1"><Instagram className="w-4 h-4" /></Link>
                <Link href="#" className="p-2 rounded-full border border-white/10 hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1"><Facebook className="w-4 h-4" /></Link>
                <Link href="#" className="p-2 rounded-full border border-white/10 hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1"><Twitter className="w-4 h-4" /></Link>
              </div>
            </div>

            {/* Explore column */}
            <div className="flex flex-col">
              <h4 className="font-bold tracking-[0.2em] text-[9px] uppercase text-white mb-4 border-b border-white/10 pb-2">EXPLORE</h4>
              <nav className="flex flex-col space-y-1.5 text-xs font-medium">
                <Link href="#" className="hover:text-accent hover:translate-x-1 transition-all duration-300">Home</Link>
                <Link href="#villas" className="hover:text-accent hover:translate-x-1 transition-all duration-300">Boutique Villas</Link>
                <Link href="#tours" className="hover:text-accent hover:translate-x-1 transition-all duration-300">Signature Tours</Link>
                <Link href="#about" className="hover:text-accent hover:translate-x-1 transition-all duration-300">The Experience</Link>
                <Link href="#" className="hover:text-accent hover:translate-x-1 transition-all duration-300">Guest Reviews</Link>
              </nav>
            </div>

            {/* Regions column */}
            <div className="flex flex-col">
              <h4 className="font-bold tracking-[0.2em] text-[9px] uppercase text-white mb-4 border-b border-white/10 pb-2">REGIONS</h4>
              <nav className="flex flex-col space-y-1.5 text-xs font-medium">
                <Link href="#" className="hover:text-accent hover:translate-x-1 transition-all duration-300">Mirissa Beach</Link>
                <Link href="#" className="hover:text-accent hover:translate-x-1 transition-all duration-300">Ella Mountains</Link>
                <Link href="#" className="hover:text-accent hover:translate-x-1 transition-all duration-300">Sigiriya Rock</Link>
                <Link href="#" className="hover:text-accent hover:translate-x-1 transition-all duration-300">Yala National Park</Link>
                <Link href="#" className="hover:text-accent hover:translate-x-1 transition-all duration-300">Galle Dutch Fort</Link>
              </nav>
            </div>

            {/* Contact column */}
            <div className="flex flex-col">
              <h4 className="font-bold tracking-[0.2em] text-[9px] uppercase text-white mb-4 border-b border-white/10 pb-2">CONTACT</h4>
              <div className="space-y-3 text-xs">
                <div className="flex gap-4 group/item cursor-pointer">
                  <MapPin className="w-4 h-4 text-accent shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="group-hover/item:text-white transition-colors">45 Heritage Row, Galle Fort,<br />Sri Lanka</span>
                </div>
                <div className="flex gap-4 items-center group/item cursor-pointer">
                  <Phone className="w-4 h-4 text-accent shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="group-hover/item:text-white transition-colors">+94 77 123 4567</span>
                </div>
                <div className="flex gap-4 items-center group/item cursor-pointer">
                  <Mail className="w-4 h-4 text-accent shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="group-hover/item:text-white transition-colors">concierge@ceylonvelo.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar - Outside the black container */}
        <div className="mt-6 pb-6 px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold tracking-[0.2em] uppercase text-white/70 animate-in fade-in duration-1000 delay-700 fill-mode-both">
          <span>© 2026 Ceylon Velo Luxe. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white hover:underline transition-all underline-offset-4">Privacy Policy</Link>
            <Link href="#" className="hover:text-white hover:underline transition-all underline-offset-4">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}