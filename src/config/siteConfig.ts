/**
 * Centralised configuration for Shakti Jewellers
 * Note: Configurable placeholders are provided as per client specifications.
 */

export const SITE_CONFIG = {
  brandName: "SHAKTI JEWELLERS",
  tagline: "Timeless Elegance. Eternal Beauty.",
  subTagline: "Handcrafted Gold, Silver, Diamond & Bridal Jewellery in Gujarat, India",
  
  // WhatsApp Configuration - International format without spaces or +
  whatsappNumber: "919876543210", // Configurable WhatsApp contact number
  
  // Contact details & placeholders (no invented official business history or fake certifications)
  location: "Gujarat, India",
  addressPlaceholder: "Main Heritage Boulevard, Jewellers Quarter, Gujarat 380001, India (Demo Showroom Address)",
  phonePlaceholder: "+91 98765 43210",
  emailPlaceholder: "enquiry@shaktijewellers-catalogue.in",
  googleMapsUrl: "https://maps.google.com/?q=Gujarat+India+Jewellery+Market",
  
  businessHours: {
    weekdays: "Monday – Saturday: 10:30 AM – 8:30 PM IST",
    sunday: "Sunday: 11:00 AM – 4:00 PM (By Prior Appointment)",
  },
  
  announcement: "Exquisite Handcrafted Jewellery Catalogue · Bespoke Appointments & WhatsApp Consultations Available",

  socials: {
    instagram: "https://instagram.com/shaktijewellers.sample",
    facebook: "https://facebook.com/shaktijewellers.sample",
    pinterest: "https://pinterest.com/shaktijewellers.sample",
  },

  disclaimer: "All items shown are sample catalogue selections for bespoke design reference. Shakti Jewellers welcomes personal consultation and price quotation on enquiry.",
};

export type CategoryId = "all" | "gold" | "silver" | "diamond" | "bridal";

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "gold",
    name: "Gold Jewellery",
    tagline: "Pure 22 Karat Heritage Splendour",
    description: "Intricately detailed gold necklaces, handcrafted bangles, statement rings, and traditional temple motifs.",
    imageUrl: "/assets/brand/editorial_gold_collection.jpg",
  },
  {
    id: "silver",
    name: "Silver Jewellery",
    tagline: "Sterling Brilliance & Contemporary Charms",
    description: "Finely sculpted sterling silver anklets, lightweight daily chains, bracelets, and artisanal silver rings.",
    imageUrl: "/assets/brand/editorial_silver_collection.jpg",
  },
  {
    id: "diamond",
    name: "Diamond Jewellery",
    tagline: "Luminous Brilliance in Every Facet",
    description: "Handset solitaires, tennis necklaces, elegant diamond studs, and modern architectural rings.",
    imageUrl: "/assets/brand/editorial_diamond_collection.jpg",
  },
  {
    id: "bridal",
    name: "Bridal Collection",
    tagline: "Royal Masterpieces for Your Unforgettable Day",
    description: "Grand bridal choker sets, kundan matha patti, wedding bangles, and heirloom royal ornamentation.",
    imageUrl: "/assets/brand/editorial_bridal_collection.jpg",
  },
];
