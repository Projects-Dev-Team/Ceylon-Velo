
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles, MapPin, Calendar, Compass } from 'lucide-react';
import { generatePersonalizedItinerary, type PersonalizedItineraryOutput } from '@/ai/flows/personalized-itinerary-generation';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function ItineraryPlanner() {
  const [preferences, setPreferences] = useState('');
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<PersonalizedItineraryOutput | null>(null);

  const handleGenerate = async () => {
    if (!preferences.trim()) return;
    setLoading(true);
    try {
      const result = await generatePersonalizedItinerary({ travelerPreferences: preferences });
      setItinerary(result);
    } catch (error) {
      console.error('Failed to generate itinerary:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Interactive Input */}
          <div className="sticky top-24">
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4 flex items-center gap-2">
              <Sparkles className="w-3 h-3" /> Island Curator AI
            </span>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Bespoke Journeys <br /> Generated for You
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-md leading-relaxed">
              Describe your dream Sri Lankan escape—interests in wildlife, relaxation, culture, or adventure—and our AI will craft a personalized itinerary just for you.
            </p>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-2xl">
              <Textarea
                placeholder="Example: I want a 7-day luxury wildlife and beach safari focusing on leopards in Yala and relaxation in Mirissa. I love high-end villas."
                className="bg-transparent border-white/20 text-white placeholder:text-white/40 min-h-[140px] mb-6 focus-visible:ring-accent"
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
              />
              <Button 
                onClick={handleGenerate} 
                disabled={loading}
                className="w-full h-14 bg-accent text-white hover:bg-accent/90 rounded-none font-bold tracking-widest"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> CURATING YOUR JOURNEY...
                  </>
                ) : (
                  'CREATE MY ITINERARY'
                )}
              </Button>
            </div>
          </div>

          {/* Right: Output Display */}
          <div className="relative min-h-[500px]">
            {!itinerary && !loading && (
              <div className="flex flex-col items-center justify-center h-full border-2 border-dashed border-white/20 rounded-xl p-12 text-center opacity-50">
                <Compass className="w-16 h-16 mb-4 text-white/20" />
                <p className="font-headline text-2xl">Your personalized adventure awaits...</p>
                <p className="text-sm text-white/40 mt-2">Enter your preferences on the left to begin.</p>
              </div>
            )}

            {loading && (
              <div className="flex flex-col items-center justify-center h-full space-y-4 animate-pulse">
                <div className="w-full h-12 bg-white/10 rounded-md" />
                <div className="w-full h-64 bg-white/10 rounded-md" />
                <div className="w-full h-32 bg-white/10 rounded-md" />
              </div>
            )}

            {itinerary && !loading && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Card className="bg-white text-foreground border-none rounded-xl overflow-hidden shadow-2xl">
                  <CardContent className="p-8 md:p-12">
                    <h3 className="font-headline text-3xl md:text-4xl text-primary mb-2 italic">
                      {itinerary.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-muted-foreground mb-8 uppercase border-b border-border pb-4">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-accent" /> {itinerary.durationDays} Days</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-accent" /> Bespoke Route</span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-10 italic">
                      "{itinerary.overview}"
                    </p>

                    <Accordion type="single" collapsible className="w-full mb-10">
                      {itinerary.itinerary.map((day) => (
                        <AccordionItem key={day.dayNumber} value={`day-${day.dayNumber}`}>
                          <AccordionTrigger className="hover:no-underline py-6">
                            <div className="flex flex-col items-start text-left">
                              <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-1">Day {day.dayNumber}: {day.theme}</span>
                              <span className="font-headline text-xl">{day.location}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed pb-8">
                            {day.description}
                            <div className="mt-4 space-y-4">
                              {day.activities.map((act, i) => (
                                <div key={i} className="flex gap-4 p-4 bg-secondary/30 rounded-lg">
                                  <div className="text-[10px] font-bold text-primary whitespace-nowrap pt-1 uppercase tracking-widest">{act.time}</div>
                                  <div>
                                    <div className="font-bold text-foreground text-sm">{act.name}</div>
                                    <div className="text-xs">{act.details}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>

                    <div className="space-y-6">
                      <div className="p-6 bg-primary/5 rounded-lg border-l-4 border-accent">
                        <h4 className="text-xs font-bold tracking-widest uppercase mb-2 text-primary">Luxury Stays</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{itinerary.accommodationSuggestions}</p>
                      </div>
                      <div className="p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                        <h4 className="text-xs font-bold tracking-widest uppercase mb-2 text-primary">Curator's Tips</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{itinerary.travelTips}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
