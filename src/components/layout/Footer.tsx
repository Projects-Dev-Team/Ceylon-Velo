
'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80 pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          
          {/* Brand */}
          <div className="flex flex-col">
            <Link href="/" className="font-headline text-3xl text-white mb-6 font-bold tracking-tight">
              Ceylon Cozy
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
                <span>concierge@ceyloncozy.com</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase opacity-40">
          <span>© 2026 Ceylon Velo Luxe. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-8">
            <Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
