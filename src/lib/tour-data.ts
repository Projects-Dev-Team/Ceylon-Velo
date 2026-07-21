export type Tour = {
  id: string;
  slug: string;
  title: string;
  desc: string;
  heroImageId: string;
  mapImageId: string;
  galleryImages: string[];
  heroTitle: string;
  heroSubtitle: string;
  detailTitle: string;
  description1: string;
  description2: string;
  whyLoveThis: string[];
  isThisRight: string[];
};

const defaultTourContent = {
  desc: 'Enjoy A Quick Snapshot Of Sri Lanka From Wildlife To Holy Temples...',
  heroImageId: 'tour-one-hero',
  mapImageId: 'tour-one-map',
  galleryImages: [
    'gallery-1',
    'gallery-2',
    'gallery-3',
    'gallery-4',
    'gallery-3',
    'gallery-4',
    'gallery-1',
    'gallery-2',
  ],
  detailTitle: 'COURTYARDS & VERANDAHS – GEOFFREY BAWA ARCHITECTURE TOUR IN SRI LANKA',
  description1: "Sri Lanka's Most Renowned Architect Geoffrey Bawa Redefined And Influenced South-East Asian Architecture. This Unforgettable Journey Takes You Through A Collection Of Iconic Spaces Inspired And Designed By The Legendary Architect Himself. Experience Timeless Tropical Modernism While Exploring The Cultural Beauty And Breathtaking Landscapes Of Sri Lanka.",
  description2: "Begin Your Adventure With Two Nights In The Cultural Triangle At One Of Bawa's Most Iconic Creations, Surrounded By Lush Greenery And Serene Lakes. Continue Your Journey Through The Scenic Hill Country To Ella, Where Misty Mountains And Tea Plantations Create A Peaceful Retreat. Finally, Travel South To The Historic Coastal City Of Galle And Stay At One Of Geoffrey Bawa's Most Celebrated Architectural Masterpieces Overlooking The Ocean.",
  whyLoveThis: [
    "Experience The Perfect Blend Of Architecture, Culture And Nature While Exploring Sri Lanka's Most Iconic Geoffrey Bawa-Inspired Locations And Luxury Retreats.",
    "Enjoy Breathtaking Landscapes Ranging From Ancient Cultural Sites And Tea Plantations To Stunning Southern Coastlines And Tropical Gardens.",
    "Relax In Carefully Selected Boutique Hotels And Heritage Properties That Offer Elegance, Tranquility And Authentic Sri Lankan Hospitality.",
    "Savor Delicious Sri Lankan Cuisine And Gourmet Dining Experiences That Reflect The Island's Rich Culinary Heritage And Unique Flavors.",
    "Discover Hidden Courtyards, Open Verandahs And Beautifully Designed Tropical Spaces That Seamlessly Connect Architecture With Nature."
  ],
  isThisRight: [
    "This Tour Is Ideal For Architecture Enthusiasts And Travelers Who Appreciate Timeless Design, Cultural Heritage And Artistic Experiences.",
    "Perfect For Travelers Seeking A Balance Between Exploration And Relaxation, With Scenic Surroundings And Peaceful Accommodations Throughout The Journey.",
    "An Excellent Choice For Photographers And Creatives Looking To Capture Sri Lanka's Stunning Landscapes, Colonial Charm And Tropical Architecture.",
    "Suitable For Luxury Travelers Who Enjoy Staying In Boutique Hotels, Heritage Villas And Unique Properties With Character And History.",
    "Ideal For Couples, Solo Travelers And Small Groups Looking For A Sophisticated And Immersive Sri Lankan Travel Experience."
  ]
};

export const tourList: Tour[] = [
  {
    id: 'tour-1',
    slug: 'tour-one',
    title: 'TOUR ONE',
    heroTitle: 'TOUR ONE',
    heroSubtitle: 'Plan Your Tour One',
    ...defaultTourContent
  },
  {
    id: 'tour-2',
    slug: 'tour-two',
    title: 'TOUR TWO',
    heroTitle: 'TOUR TWO',
    heroSubtitle: 'Plan Your Tour Two',
    ...defaultTourContent
  },
  {
    id: 'tour-3',
    slug: 'tour-three',
    title: 'TOUR THREE',
    heroTitle: 'TOUR THREE',
    heroSubtitle: 'Plan Your Tour Three',
    ...defaultTourContent
  },
  {
    id: 'tour-1', // keeping the image id mapping as it was in original
    slug: 'tour-four',
    title: 'TOUR FOUR',
    heroTitle: 'TOUR FOUR',
    heroSubtitle: 'Plan Your Tour Four',
    ...defaultTourContent
  },
  {
    id: 'tour-2',
    slug: 'tour-five',
    title: 'TOUR FIVE',
    heroTitle: 'TOUR FIVE',
    heroSubtitle: 'Plan Your Tour Five',
    ...defaultTourContent
  },
  {
    id: 'tour-3',
    slug: 'tour-six',
    title: 'TOUR SIX',
    heroTitle: 'TOUR SIX',
    heroSubtitle: 'Plan Your Tour Six',
    ...defaultTourContent
  },
  {
    id: 'tour-1',
    slug: 'tour-seven',
    title: 'TOUR SEVEN',
    heroTitle: 'TOUR SEVEN',
    heroSubtitle: 'Plan Your Tour Seven',
    ...defaultTourContent
  },
  {
    id: 'tour-2',
    slug: 'tour-eight',
    title: 'TOUR EIGHT',
    heroTitle: 'TOUR EIGHT',
    heroSubtitle: 'Plan Your Tour Eight',
    ...defaultTourContent
  },
  {
    id: 'tour-3',
    slug: 'tour-nine',
    title: 'TOUR NINE',
    heroTitle: 'TOUR NINE',
    heroSubtitle: 'Plan Your Tour Nine',
    ...defaultTourContent
  },
  {
    id: 'tour-1',
    slug: 'tour-ten',
    title: 'TOUR TEN',
    heroTitle: 'TOUR TEN',
    heroSubtitle: 'Plan Your Tour Ten',
    ...defaultTourContent
  },
  {
    id: 'tour-2',
    slug: 'tour-eleven',
    title: 'TOUR ELEVEN',
    heroTitle: 'TOUR ELEVEN',
    heroSubtitle: 'Plan Your Tour Eleven',
    ...defaultTourContent
  },
  {
    id: 'tour-3',
    slug: 'tour-twelve',
    title: 'TOUR TWELVE',
    heroTitle: 'TOUR TWELVE',
    heroSubtitle: 'Plan Your Tour Twelve',
    ...defaultTourContent
  }
];
