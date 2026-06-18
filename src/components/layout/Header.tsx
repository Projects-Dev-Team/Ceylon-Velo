'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'HOME', href: '#' },
  { name: 'VILLAS', href: '#villas' },
  { name: 'TOURS', href: '#tours' },
  { name: 'FOOD & DINING', href: '#dining' },
  { name: 'ABOUT', href: '#about' },
  { name: 'CONTACT', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12',
        isScrolled 
          ? 'bg-white/40 backdrop-blur-xl shadow-sm border-b border-black/5 py-3' 
          : 'bg-white/10 backdrop-blur-md text-white'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="font-brand text-4xl tracking-wide text-[#FFDAB9]">
            Ceylon Velo
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'text-[10px] font-bold tracking-[0.2em] transition-colors hover:text-accent',
                isScrolled ? 'text-foreground' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            className="rounded-none px-8 font-bold tracking-[0.2em] text-[10px] h-10 transition-all duration-500 bg-accent text-white hover:bg-accent/90"
          >
            BOOK NOW
          </Button>
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn("p-2 transition-colors", isScrolled ? "text-foreground" : "text-white")}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-3xl z-40 transition-transform duration-500 md:hidden flex flex-col items-center justify-center space-y-8',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="mb-4">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-brand text-6xl text-[#FFDAB9]">
            Ceylon Velo
          </Link>
        </div>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-headline text-3xl font-medium tracking-tight hover:text-accent transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Button className="mt-8 rounded-none px-12 py-6 bg-accent text-white hover:bg-accent/90 font-bold tracking-[0.2em] text-sm">
          BOOK NOW
        </Button>
      </div>
    </header>
  );
}