'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import heroImage from '@/assets/images/contact/contactHero1.jpg'
import introImage from '@/assets/images/contact/introImage.png'
import { MapPin, Phone, Mail, Share2, Globe, Building2, HelpCircle } from 'lucide-react';

export default function ContactPage() {


  const formBg = PlaceHolderImages.find(img => img.id === 'contact-form-bg');

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[100vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage || ''}
          alt="Contact Hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-headline text-4xl md:text-7xl mb-4 tracking-wider animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Connect with Heartfelt Hospitality
          </h1>
        </div>
      </section>

      {/* Breadcrumbs & Intro Section */}
      <section className="py-12 md:py-24 container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-16">
          <Link href="/" className="hover:text-accent">HOME</Link>
          <span>/</span>
          <span className="text-foreground">CONTACT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <h2 className="font-headline text-3xl md:text-4xl mb-8 leading-tight text-foreground">
              Have questions? We're ready to answer your call!
            </h2>
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p>
                Adventurer? Traveler? Explorer? If you're looking for world-class travel assistance, tour information, and reliable support, our friendly team is always ready to help you create unforgettable memories. Reach out for any comfort, convenience, and exceptional service tailored to your travel needs.
              </p>

              <div className="pt-8">
                <h3 className="font-headline text-2xl mb-4 text-foreground">
                  Get <span className="text-accent">In Touch</span>
                </h3>
                <p>
                  We would love to hear from you! Reach out for quick answers to your travel inquiries, tour planning, personalized assistance, or any information you need. Our dedicated team is here to provide friendly support and help you have a smooth, memorable, and unforgettable journey across beautiful Sri Lanka.
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-sm mx-auto overflow-hidden animate-in fade-in slide-in-from-right-8 duration-1000">
            <Image
              src={introImage || ''}
              alt="Couple overlooking mountain"

              width={400}
              height={500}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <Card className="bg-secondary/20 border-none rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-0 flex flex-col items-center text-center">
              <h4 className="font-headline text-2xl mb-6">Main Office</h4>
              <div className="mb-4">
                <Image src="https://picsum.photos/seed/japan-flag/32/24" width={32} height={24} alt="Japan Flag" className="rounded-sm mb-2 mx-auto" />
              </div>
              <p className="text-xs text-muted-foreground mb-4">45 Heritage Row, Galle Fort, Sri Lanka</p>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-sm">Galle Office Team</span>
                <span className="text-accent font-bold text-sm">+94 77 123 4567</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary/20 border-none rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-0 flex flex-col items-center text-center">
              <h4 className="font-headline text-2xl mb-6">Branch Of Sri Lanka</h4>
              <div className="mb-4">
                <Image src="https://picsum.photos/seed/sl-flag/32/24" width={32} height={24} alt="Sri Lanka Flag" className="rounded-sm mb-2 mx-auto" />
              </div>
              <p className="text-xs text-muted-foreground mb-4">Mirissa, Sri Lanka</p>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-sm">Island Support Team</span>
                <span className="text-accent font-bold text-sm">+94 77 987 6543</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How We Can Help */}
      <section className="py-24 bg-background border-y border-border/50">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl mb-12">
            How We <span className="text-accent">Can Help</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Tour Planning Assistance', desc: 'Crafting bespoke, personalized travel itineraries that match your interests, accommodation, and transport needs for the best experience.', icon: Globe },
              { title: 'Hotel & Accommodation Support', desc: 'Expert help in finding hand-picked luxury villas and boutique hotels that suit your travel needs and preferred level of comfort.', icon: Building2 },
              { title: 'Transportation Arrangements', desc: 'Seamless travel across the island with our fleet of premium vehicles and professional chauffeurs for your convenience.', icon: MapPin },
              { title: 'Travel Guidance & Recommendations', desc: 'Expert local knowledge on the best-kept secrets, cultural attractions, and authentic Sri Lankan experiences.', icon: HelpCircle },
              { title: 'Customer Support Services', desc: 'Dedicated 24/7 support ensuring every detail of your journey is perfect and stress-free from start to finish.', icon: Phone },
            ].map((item, index) => (
              <Card key={index} className="bg-white border-none shadow-sm rounded-xl p-8 hover:bg-secondary/10 transition-colors duration-300 flex flex-col items-start text-left">
                <h4 className="font-headline text-xl mb-4 text-primary leading-tight">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src={formBg?.imageUrl || ''}
          alt="Elephants at sunset"
          fill
          className="object-cover"
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Form */}
            <div className="bg-black/20 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl animate-in fade-in slide-in-from-left-8 duration-1000">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white text-xs uppercase tracking-widest font-bold">First Name</Label>
                    <Input className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white text-xs uppercase tracking-widest font-bold">Last Name</Label>
                    <Input className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12" placeholder="Doe" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white text-xs uppercase tracking-widest font-bold">Email</Label>
                    <Input className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12" placeholder="john@example.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white text-xs uppercase tracking-widest font-bold">Phone</Label>
                    <Input className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12" placeholder="+123456789" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white text-xs uppercase tracking-widest font-bold">Location</Label>
                    <Input className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12" placeholder="Your City" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white text-xs uppercase tracking-widest font-bold">Subject</Label>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white h-12">
                        <SelectValue placeholder="Select interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tour">Tour Inquiry</SelectItem>
                        <SelectItem value="villa">Villa Booking</SelectItem>
                        <SelectItem value="general">General Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-white text-xs uppercase tracking-widest font-bold">Describe Your Dream Journey</Label>
                  <Textarea className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[120px]" placeholder="Tell us about your travel plans..." />
                </div>
                <Button className="w-full h-14 bg-accent text-white hover:bg-accent/90 rounded-none font-bold tracking-[0.2em] shadow-xl">
                  SUBMIT
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="text-white animate-in fade-in slide-in-from-right-8 duration-1000">
              <h2 className="font-headline text-4xl md:text-5xl mb-12">Connect With Us Easily</h2>
              <div className="space-y-12">
                {[
                  { title: 'Visit Our Offices', icon: Building2, content: 'Visit our main office in Galle Fort or our Mirissa branch for face-to-face assistance.' },
                  { title: 'Call Us', icon: Phone, content: 'Speak directly with our travel experts at +94 77 123 4567 for immediate support.' },
                  { title: 'Email Us', icon: Mail, content: 'Send us your inquiries at concierge@ceylonvelo.com and get a response within 24 hours.' },
                  { title: 'Connect On Social Media', icon: Share2, content: 'Follow our island diary @ceylonvelo for daily travel inspiration and updates.' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-headline text-xl mb-2">{item.title}</h4>
                      <p className="text-sm text-white/70 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl mb-16">
            Why Contact <span className="text-accent italic font-brand text-5xl">Ceylon Velo</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Personalized Travel Assistance', desc: 'Crafting unique journeys that reflect your personal travel style and interests.' },
              { title: 'Quick & Friendly Support', desc: 'Our dedicated team is always here to provide warm, efficient assistance.' },
              { title: 'Expert Local Knowledge', desc: 'Deep insights into the best hidden gems and authentic cultural sites of Sri Lanka.' },
              { title: 'Reliable Tour Services', desc: 'Consistent, professional service you can trust throughout your entire island stay.' },
            ].map((item, index) => (
              <Card key={index} className="bg-secondary/10 border-none rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <h4 className="font-headline text-lg mb-4 text-primary leading-tight">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
