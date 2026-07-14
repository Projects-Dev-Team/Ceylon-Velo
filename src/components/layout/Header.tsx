
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'VILLAS', href: '/villas' },
  { name: 'TOURS', href: '/tours' },
  { name: 'FOOD & DINING', href: '/food-dining' },
  { name: 'ABOUT', href: '/about' },
  { name: 'CONTACT', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
        isMobileMenuOpen || isScrolled
          ? 'bg-white shadow-sm border-b border-black/5 py-3'
          : 'bg-white/10 backdrop-blur-md text-white'
      )}
      >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="font-brand text-4xl tracking-wide text-[#FFDAB9]">
            Ceylon Velo
          </Link>
        </div>

        <nav className="hidden xl:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'group relative text-[10px] font-bold tracking-[0.2em] transition-colors py-2',
                  isScrolled ? 'text-foreground' : 'text-white',
                  isActive ? 'text-[#FFDAB9]' : 'hover:text-[#FFDAB9]'
                )}
              >
                {link.name}
                <span 
                  className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[2px] bg-[#FFDAB9] rounded-full transition-all duration-300 origin-center",
                    isActive 
                      ? "opacity-100 scale-x-100" 
                      : "opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100"
                  )} 
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button
            className="rounded-none px-8 font-bold tracking-[0.2em] text-[10px] h-10 transition-all duration-500 bg-accent text-white hover:bg-accent/90"
          >
            BOOK NOW
          </Button>
        </div>

        <div className="xl:hidden relative z-[110]">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn("p-2 transition-colors", (isScrolled || isMobileMenuOpen) ? "text-foreground" : "text-white")}
          >
            {isMobileMenuOpen ? <X className="text-black" /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 w-3/4 bg-white z-[100] transition-transform duration-500 xl:hidden flex flex-col items-center justify-center space-y-6 shadow-xl',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="mb-4">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-brand text-2xl text-[#FFDAB9]">
            Ceylon Velo
          </Link>
        </div>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-lg font-medium tracking-tight transition-colors",
                isActive ? "text-accent" : "text-black hover:text-accent"
              )}
            >
              {link.name}
            </Link>
          );
        })}
        <Button className="mt-4 rounded-none px-12 py-6 bg-accent text-white hover:bg-accent/90 font-bold tracking-[0.2em] text-sm">
          BOOK NOW
        </Button>
      </div>
    </header>
  );
}
