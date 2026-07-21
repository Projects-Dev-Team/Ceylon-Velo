export type Villa = {
  id: string;
  slug: string;
  title: string;
  category: string;
  desc: string;
  location: string;
  heroTitle: string;
  heroSubtitle: string;
  subtitleTop: string;
  description1: string;
  description2: string;
  heroImageId: string;
  galleryImages: string[];
};

export const villaList: Villa[] = [
  {
    id: 'villa-broomfield',
    slug: 'broomfield',
    title: 'Broomfield by CeylonVelo',
    category: 'Boutique',
    desc: 'Broomfield is a luxury, charming six bedroom villa located in a 100-acre fruit farm...',
    location: "Nuwara Eliya",
    heroTitle: "A charming boutique escape",
    heroSubtitle: "Experience the hill country",
    subtitleTop: "Luxury Living amidst Nature",
    description1: "Broomfield is a luxury, charming six bedroom villa located in a 100-acre fruit farm. It offers a unique blend of colonial architecture and modern amenities, surrounded by misty mountains and lush greenery.",
    description2: "Enjoy a perfect getaway with your family and friends, indulging in personalized services, farm-to-table dining experiences, and breathtaking views of the surrounding landscape.",
    heroImageId: "hero-image",
    galleryImages: ["villa-g1", "villa-g2", "villa-g3", "villa-g4", "villa-g5", "villa-g6"]
  },
  {
    id: 'villa-ayurveda',
    slug: 'ayurveda-pavilions',
    title: 'Ayurveda Pavilions',
    category: 'Luxury',
    desc: "Ceylon Cozy's first ever healing space, which is more than just an escape...",
    location: "Bentota",
    heroTitle: "An island of wonder",
    heroSubtitle: "Come explore with us",
    subtitleTop: "Our Signature Home Of Sri Lankan Hospitality",
    description1: "Crafted around an ancient healing science rooted in the heart of Sri Lankan hospitality is a captivating fusion of the old and the new. Nestled amidst lush gardens and rustic courtyards, our tranquil ambiance exudes a comforting luxury, resonates with tales and whispers of historical wisdom that inspire the natural revitalisation of your overall well-being.",
    description2: "As one of the premier Ayurveda hotels in Sri Lanka, our resort extends a warm invitation for you to immerse yourself in this timeless art. Here generations of wisdom come alive, enhanced by our signature embrace of family values, ensuring a rejuvenating experience that not only indulges but also meaningfully rejuvenates your mind, body, and soul.",
    heroImageId: "villa-ayurveda-hero",
    galleryImages: ["villa-g1", "villa-g2", "villa-g3", "villa-g4", "villa-g5", "villa-g6"]
  },
  {
    id: 'villa-beach',
    slug: 'beach-villa',
    title: 'Beach',
    category: 'Luxury',
    desc: 'Destinations name of the exquisite architecture that front and house at the...',
    location: "Mirissa",
    heroTitle: "Oceanfront serenity",
    heroSubtitle: "Feel the ocean breeze",
    subtitleTop: "Exquisite Architecture by the Sea",
    description1: "Step directly onto the sand from this stunning contemporary beachfront estate. Designed for those who seek the ultimate in coastal luxury and privacy.",
    description2: "Wake up to the sound of waves and enjoy unparalleled views of the Indian Ocean from your private infinity pool or spacious terrace.",
    heroImageId: "tour-1",
    galleryImages: ["villa-g1", "villa-g2", "villa-g3", "villa-g4", "villa-g5", "villa-g6"]
  },
  {
    id: 'villa-broomfield-2',
    slug: 'broomfield-2',
    title: 'Broomfield by CeylonVelo (2)',
    category: 'Boutique',
    desc: 'Broomfield is a luxury, charming six bedroom villa located in a 100-acre fruit farm...',
    location: "Nuwara Eliya",
    heroTitle: "A charming boutique escape",
    heroSubtitle: "Experience the hill country",
    subtitleTop: "Luxury Living amidst Nature",
    description1: "Broomfield is a luxury, charming six bedroom villa located in a 100-acre fruit farm. It offers a unique blend of colonial architecture and modern amenities, surrounded by misty mountains and lush greenery.",
    description2: "Enjoy a perfect getaway with your family and friends, indulging in personalized services, farm-to-table dining experiences, and breathtaking views of the surrounding landscape.",
    heroImageId: "hero-image",
    galleryImages: ["villa-g1", "villa-g2", "villa-g3", "villa-g4", "villa-g5", "villa-g6"]
  },
  {
    id: 'villa-ayurveda-2',
    slug: 'ayurveda-pavilions-2',
    title: 'Ayurveda Pavilions (2)',
    category: 'Luxury',
    desc: "Ceylon Cozy's first ever healing space, which is more than just an escape...",
    location: "Bentota",
    heroTitle: "An island of wonder",
    heroSubtitle: "Come explore with us",
    subtitleTop: "Our Signature Home Of Sri Lankan Hospitality",
    description1: "Crafted around an ancient healing science rooted in the heart of Sri Lankan hospitality is a captivating fusion of the old and the new. Nestled amidst lush gardens and rustic courtyards, our tranquil ambiance exudes a comforting luxury, resonates with tales and whispers of historical wisdom that inspire the natural revitalisation of your overall well-being.",
    description2: "As one of the premier Ayurveda hotels in Sri Lanka, our resort extends a warm invitation for you to immerse yourself in this timeless art. Here generations of wisdom come alive, enhanced by our signature embrace of family values, ensuring a rejuvenating experience that not only indulges but also meaningfully rejuvenates your mind, body, and soul.",
    heroImageId: "villa-ayurveda-hero",
    galleryImages: ["villa-g1", "villa-g2", "villa-g3", "villa-g4", "villa-g5", "villa-g6"]
  },
  {
    id: 'villa-beach-2',
    slug: 'beach-villa-2',
    title: 'Beach (2)',
    category: 'Luxury',
    desc: 'Destinations name of the exquisite architecture that front and house at the...',
    location: "Mirissa",
    heroTitle: "Oceanfront serenity",
    heroSubtitle: "Feel the ocean breeze",
    subtitleTop: "Exquisite Architecture by the Sea",
    description1: "Step directly onto the sand from this stunning contemporary beachfront estate. Designed for those who seek the ultimate in coastal luxury and privacy.",
    description2: "Wake up to the sound of waves and enjoy unparalleled views of the Indian Ocean from your private infinity pool or spacious terrace.",
    heroImageId: "tour-1",
    galleryImages: ["villa-g1", "villa-g2", "villa-g3", "villa-g4", "villa-g5", "villa-g6"]
  },
  {
    id: 'villa-broomfield-3',
    slug: 'broomfield-3',
    title: 'Broomfield by CeylonVelo (3)',
    category: 'Boutique',
    desc: 'Broomfield is a luxury, charming six bedroom villa located in a 100-acre fruit farm...',
    location: "Nuwara Eliya",
    heroTitle: "A charming boutique escape",
    heroSubtitle: "Experience the hill country",
    subtitleTop: "Luxury Living amidst Nature",
    description1: "Broomfield is a luxury, charming six bedroom villa located in a 100-acre fruit farm. It offers a unique blend of colonial architecture and modern amenities, surrounded by misty mountains and lush greenery.",
    description2: "Enjoy a perfect getaway with your family and friends, indulging in personalized services, farm-to-table dining experiences, and breathtaking views of the surrounding landscape.",
    heroImageId: "hero-image",
    galleryImages: ["villa-g1", "villa-g2", "villa-g3", "villa-g4", "villa-g5", "villa-g6"]
  },
  {
    id: 'villa-ayurveda-3',
    slug: 'ayurveda-pavilions-3',
    title: 'Ayurveda Pavilions (3)',
    category: 'Luxury',
    desc: "Ceylon Cozy's first ever healing space, which is more than just an escape...",
    location: "Bentota",
    heroTitle: "An island of wonder",
    heroSubtitle: "Come explore with us",
    subtitleTop: "Our Signature Home Of Sri Lankan Hospitality",
    description1: "Crafted around an ancient healing science rooted in the heart of Sri Lankan hospitality is a captivating fusion of the old and the new. Nestled amidst lush gardens and rustic courtyards, our tranquil ambiance exudes a comforting luxury, resonates with tales and whispers of historical wisdom that inspire the natural revitalisation of your overall well-being.",
    description2: "As one of the premier Ayurveda hotels in Sri Lanka, our resort extends a warm invitation for you to immerse yourself in this timeless art. Here generations of wisdom come alive, enhanced by our signature embrace of family values, ensuring a rejuvenating experience that not only indulges but also meaningfully rejuvenates your mind, body, and soul.",
    heroImageId: "villa-ayurveda-hero",
    galleryImages: ["villa-g1", "villa-g2", "villa-g3", "villa-g4", "villa-g5", "villa-g6"]
  },
  {
    id: 'villa-beach-3',
    slug: 'beach-villa-3',
    title: 'Beach (3)',
    category: 'Luxury',
    desc: 'Destinations name of the exquisite architecture that front and house at the...',
    location: "Mirissa",
    heroTitle: "Oceanfront serenity",
    heroSubtitle: "Feel the ocean breeze",
    subtitleTop: "Exquisite Architecture by the Sea",
    description1: "Step directly onto the sand from this stunning contemporary beachfront estate. Designed for those who seek the ultimate in coastal luxury and privacy.",
    description2: "Wake up to the sound of waves and enjoy unparalleled views of the Indian Ocean from your private infinity pool or spacious terrace.",
    heroImageId: "tour-1",
    galleryImages: ["villa-g1", "villa-g2", "villa-g3", "villa-g4", "villa-g5", "villa-g6"]
  },
  {
    id: 'villa-serene',
    slug: 'serene-sanctuary',
    title: 'Serene Sanctuary',
    category: 'Boutique',
    desc: 'A peaceful retreat tucked away in the hills, offering panoramic views of the valley.',
    location: "Kandy",
    heroTitle: "Peaceful retreat",
    heroSubtitle: "Find your inner peace",
    subtitleTop: "Tucked away in the hills",
    description1: "A peaceful retreat tucked away in the hills, offering panoramic views of the valley. Perfect for those looking to disconnect and recharge.",
    description2: "Our sanctuary provides holistic wellness programs, yoga sessions, and meditation spaces to help you find balance and harmony.",
    heroImageId: "vision-mission-bg",
    galleryImages: ["villa-g1", "villa-g2", "villa-g3", "villa-g4", "villa-g5", "villa-g6"]
  },
  {
    id: 'villa-heritage',
    slug: 'heritage-haven',
    title: 'Heritage Haven',
    category: 'Traditional',
    desc: 'Experience colonial elegance in this beautifully restored heritage property.',
    location: "Galle",
    heroTitle: "Colonial elegance",
    heroSubtitle: "Step back in time",
    subtitleTop: "Beautifully restored heritage",
    description1: "Experience colonial elegance in this beautifully restored heritage property. Every corner tells a story of a bygone era, carefully preserved for your enjoyment.",
    description2: "Located in the heart of the historic Galle Fort, this haven offers easy access to quaint cafes, boutique shops, and centuries-old architecture.",
    heroImageId: "gallery-4",
    galleryImages: ["villa-g1", "villa-g2", "villa-g3", "villa-g4", "villa-g5", "villa-g6"]
  },
  {
    id: 'villa-ocean',
    slug: 'ocean-breeze',
    title: 'Ocean Breeze Villa',
    category: 'Luxury',
    desc: 'Step directly onto the sand from this stunning contemporary beachfront estate.',
    location: "Tangalle",
    heroTitle: "Contemporary beachfront",
    heroSubtitle: "Your private slice of paradise",
    subtitleTop: "Stunning Oceanfront Estate",
    description1: "Step directly onto the sand from this stunning contemporary beachfront estate. Features expansive glass walls that blur the line between indoor and outdoor living.",
    description2: "Enjoy private chef services, a dedicated butler, and exclusive access to a pristine stretch of beach where you can relax in total seclusion.",
    heroImageId: "hero-image",
    galleryImages: ["villa-g1", "villa-g2", "villa-g3", "villa-g4", "villa-g5", "villa-g6"]
  }
];
