import {StaticImageData} from "next/image";

export type ExperienceHighlight = {
  icon: string;
  label: string;
  value: string;
};

export type Experience = {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  shortDesc: string;
  narrativeTitle: string;
  img: StaticImageData;
  description: string[];
  heroImageId: string;
  galleryImageIds: string[];
  stats: ExperienceHighlight[];
  features: string[];
  bookingStats: {
    duration: string;
    groupSize: string;
    bestTime: string;
  };
};

import mirissa from '@/assets/images/experience/mirissa.jpg';
import sigiriya from '@/assets/images/experience/sigiriya.jpg';
import yala from '@/assets/images/experience/yala.jpg';
import ella from '@/assets/images/experience/elle.jpg';

export const allExperiencesData: Experience[] = [
  {
    id: 'exp-sigiriya',
    slug: 'sigiriya-lion-rock',
    title: 'SIGIRIYA LION ROCK',
    category: 'Heritage & Culture',
    location: 'Cultural Triangle',
    duration: 'Full Day',
    shortDesc: 'Climb the ancient Lion Rock and witness a palace above the clouds.',
    narrativeTitle: 'A Palace Above the Clouds',
    img: sigiriya,
    description: [
      "Rising 200 meters from the central plains, the Sigiriya Rock Fortress is a testament to the architectural and engineering brilliance of ancient Sri Lanka. Built by King Kashyapa in the 5th century, this UNESCO World Heritage site is a masterpiece of urban planning, water engineering, and artistic expression.",
      "As you ascend the 1,200 steps, you'll encounter the famous 'Mirror Wall' and the world-renowned Sigiriya frescoes—vibrant depictions of celestial maidens that have survived for over 1,500 years. The journey culminates at the summit, where the ruins of a sprawling royal palace offer breathtaking 360-degree views of the surrounding jungle."
    ],
    heroImageId: 'exp-sigiriya',
    galleryImageIds: ['gallery-1', 'gallery-2', 'gallery-3', 'gallery-4'],
    stats: [
      { icon: 'Mountain', label: 'Elevation', value: '200 Meters' },
      { icon: 'ShieldCheck', label: 'Status', value: 'UNESCO Site' },
      { icon: 'Zap', label: 'Effort', value: 'Moderate' }
    ],
    features: [
      'Private guided climb with heritage expert',
      'Sunrise or sunset viewing options',
      'Explore the royal pleasure gardens',
      'Access to the iconic Lion\'s Paw entrance',
      'Gourmet picnic lunch overlooking the rock',
      'Visit to the Sigiriya museum'
    ],
    bookingStats: {
      duration: '6-8 Hours',
      groupSize: 'Private',
      bestTime: 'Sunrise'
    }
  },
  {
    id: 'exp-yala',
    slug: 'yala-leopard-safari',
    title: 'YALA LEOPARD SAFARI',
    category: 'Wildlife & Safari',
    location: 'Yala National Park',
    duration: 'Dawn & Dusk',
    shortDesc: 'An adrenaline-fueled journey into leopard country and wild wilderness.',
    narrativeTitle: 'Deep into the Wild',
    img: yala,
    description: [
      "Yala National Park, a sprawling sanctuary of dry woodlands, open plains, and coastal lagoons, is world-renowned for its high density of Sri Lankan leopards. Here, the raw power of nature is on full display as majestic predators roam their ancestral hunting grounds.",
      "Our bespoke safaris are designed to take you beyond the ordinary. Led by expert trackers and naturalists who know the heartbeat of the park, you'll venture deep into the wilderness in premium open-top jeeps. Beyond the leopards, expect to encounter elephants, sloth bears, crocodiles, and a vibrant array of tropical birds."
    ],
    heroImageId: 'exp-yala',
    galleryImageIds: ['insta-1', 'insta-2', 'insta-3', 'insta-4'],
    stats: [
      { icon: 'Gem', label: 'Key Species', value: 'Leopards' },
      { icon: 'Camera', label: 'Experience', value: 'Wildlife Photography' },
      { icon: 'Heart', label: 'Vibe', value: 'Thrilling Adventure' }
    ],
    features: [
      'Exclusive dawn and dusk safari entries',
      'Professional naturalist and expert tracker',
      'Premium, low-impact safari vehicles',
      'Leopard tracking expertise',
      'Bush breakfast in a scenic park location',
      'Sloth bear and elephant encounters'
    ],
    bookingStats: {
      duration: '4-5 Hours',
      groupSize: 'Private Safari',
      bestTime: 'Feb - Sept'
    }
  },
  {
    id: 'exp-whale',
    slug: 'mirissa-whale-watching',
    title: 'MIRISSA WHALE WATCHING',
    category: 'Beaches & Sunset',
    location: 'Mirissa',
    duration: 'Early Morning',
    shortDesc: 'Encounter these gentle giants in the deep blue waters of the south.',
    narrativeTitle: 'Giants of the Deep',
    img: mirissa,
    description: [
      "The warm waters of the Indian Ocean off Mirissa are one of the best places in the world to witness Blue Whales in their natural habitat. This journey takes you on a private charter, away from the crowds, for an intimate encounter with the largest animals on earth.",
      "Guided by marine experts, you will learn about the behavior and conservation of these majestic mammals while enjoying the serene horizon of the southern coast."
    ],
    heroImageId: 'exp-whale',
    galleryImageIds: ['insta-4', 'insta-5', 'insta-6', 'insta-1'],
    stats: [
      { icon: 'Sparkles', label: 'Marine Life', value: 'Blue Whales' },
      { icon: 'Compass', label: 'Vessel', value: 'Private Charter' },
      { icon: 'Clock', label: 'Duration', value: '4-5 Hours' }
    ],
    features: [
      'Private luxury boat charter',
      'Expert marine naturalist on board',
      'Gourmet breakfast at sea',
      'High success rate of sightings',
      'Responsible whale watching practices',
      'Dolphin and turtle spotting'
    ],
    bookingStats: {
      duration: 'Half Day',
      groupSize: 'Up to 6',
      bestTime: 'Nov - April'
    }
  },
  {
    id: 'exp-highlands',
    slug: 'ella-highlands-trek',
    title: 'ELLA HIGHLANDS',
    category: 'Tea Country Retreats',
    location: 'Ella',
    duration: 'Full Day',
    shortDesc: 'Trek through misty peaks and lush tea estates for breathtaking views.',
    narrativeTitle: 'Mist-Covered Peaks',
    img: ella,
    description: [
      "Ella is a mountain town that feels like a world away. Famous for its tea estates and the iconic Nine Arch Bridge, it offers some of the most scenic hiking trails in the country.",
      "Our trek takes you through private tea trails and up to Little Adam's Peak, where you can witness the clouds rolling over the valley before enjoying a traditional tea tasting at a heritage factory."
    ],
    heroImageId: 'exp-highlands',
    galleryImageIds: ['insta-2', 'insta-1', 'gallery-3', 'gallery-2'],
    stats: [
      { icon: 'Mountain', label: 'Views', value: '360 Peaks' },
      { icon: 'Hotel', label: 'Stay', value: 'Tea Retreat' },
      { icon: 'Zap', label: 'Effort', value: 'Light' }
    ],
    features: [
      'Private guided mountain trek',
      'Visit to the Nine Arch Bridge',
      'Exclusive tea factory tour',
      'Authentic Sri Lankan rice & curry lunch',
      'Sunrise hike to Little Adam\'s Peak',
      'Waterfall visits in the valley'
    ],
    bookingStats: {
      duration: 'Full Day',
      groupSize: 'Private',
      bestTime: 'All Year'
    }
  }
];
