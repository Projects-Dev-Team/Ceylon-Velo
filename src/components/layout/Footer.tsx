'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import footerImage from '@/assets/footer.png';

export function Footer() {
  return (
    <footer className="relative min-h-[700px] flex flex-col justify-end overflow-hidden pb-12 pt-10">
      {/* Background Image - Clean with no global overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={footerImage}
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Top CTA Section - Transparent Background */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">
              READY TO BEGIN?
            </span>
            <h2 className="font-headline text-5xl md:text-7xl mb-0 leading-tight text-black">
              Your Sri Lankan <br className="hidden md:block" /> 
              <span className="italic">story</span> starts here.
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

      {/* Middle Content - Black Transparent Section with rounded corners and margins */}
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 md:p-12 overflow-hidden border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-white/90">
            
            {/* Brand column */}
            <div className="flex flex-col">
              <Link href="/" className="font-brand text-5xl text-[#FFDAB9] mb-6 tracking-wide">
                Ceylon Velo
              </Link>
              <p className="text-sm leading-relaxed max-w-xs mb-8">
                Boutique villas and signature journeys across the pearl of the Indian Ocean. Curating the essence of Sri Lankan luxury.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-[#FFDAB9] transition-colors"><Instagram className="w-4 h-4" /></Link>
                <Link href="#" className="hover:text-[#FFDAB9] transition-colors"><Facebook className="w-4 h-4" /></Link>
                <Link href="#" className="hover:text-[#FFDAB9] transition-colors"><Twitter className="w-4 h-4" /></Link>
              </div>
            </div>

            {/* Explore column */}
            <div className="flex flex-col">
              <h4 className="font-bold tracking-[0.2em] text-[10px] uppercase text-white mb-6">EXPLORE</h4>
              <nav className="flex flex-col space-y-3 text-sm font-medium">
                <Link href="#" className="hover:text-white transition-colors">Home</Link>
                <Link href="#villas" className="hover:text-white transition-colors">Boutique Villas</Link>
                <Link href="#tours" className="hover:text-white transition-colors">Signature Tours</Link>
                <Link href="#about" className="hover:text-white transition-colors">The Experience</Link>
                <Link href="#" className="hover:text-white transition-colors">Guest Reviews</Link>
              </nav>
            </div>

            {/* Regions column */}
            <div className="flex flex-col">
              <h4 className="font-bold tracking-[0.2em] text-[10px] uppercase text-white mb-6">REGIONS</h4>
              <nav className="flex flex-col space-y-3 text-sm font-medium">
                <Link href="#" className="hover:text-white transition-colors">Mirissa Beach</Link>
                <Link href="#" className="hover:text-white transition-colors">Ella Mountains</Link>
                <Link href="#" className="hover:text-white transition-colors">Sigiriya Rock</Link>
                <Link href="#" className="hover:text-white transition-colors">Yala National Park</Link>
                <Link href="#" className="hover:text-white transition-colors">Galle Dutch Fort</Link>
              </nav>
            </div>

            {/* Contact column */}
            <div className="flex flex-col">
              <h4 className="font-bold tracking-[0.2em] text-[10px] uppercase text-white mb-6">CONTACT</h4>
              <div className="space-y-4 text-sm">
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
        </div>

        {/* Bottom bar - Outside the black container */}
        <div className="mt-10 px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">
          <span>© 2026 Ceylon Velo Luxe. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
