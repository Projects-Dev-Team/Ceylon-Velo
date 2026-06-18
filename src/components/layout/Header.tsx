
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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent text-white'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="font-headline text-2xl font-bold tracking-tight">
            Ceylon Cozy
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'text-xs font-medium tracking-widest transition-colors hover:text-accent',
                isScrolled ? 'text-foreground' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            className={cn(
              'rounded-none px-8 font-medium tracking-widest text-xs h-10',
              isScrolled 
                ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                : 'bg-white text-primary hover:bg-white/90'
            )}
          >
            BOOK NOW
          </Button>
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-background z-40 transition-transform duration-500 md:hidden flex flex-col items-center justify-center space-y-8',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2"
        >
          <X className="w-8 h-8" />
        </button>
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
        <Button className="mt-8 rounded-none px-12 py-6 bg-primary text-white font-medium tracking-widest text-sm">
          BOOK NOW
        </Button>
      </div>
    </header>
  );
}
