export type Language = "en" | "gu";

export interface TranslationDictionary {
  // Navigation
  nav: {
    home: string;
    gold: string;
    silver: string;
    diamond: string;
    bridal: string;
    about: string;
    contact: string;
    search: string;
    searchPlaceholder: string;
    whatsappEnquiry: string;
  };
  // Announcement
  announcement: {
    location: string;
    craftsmanship: string;
    banner: string;
    whatsappText: string;
  };
  // Hero
  hero: {
    locationBadge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    exploreBtn: string;
    discoverBtn: string;
    whatsappConsultation: string;
    pillars: {
      gold: { title: string; desc: string };
      silver: { title: string; desc: string };
      diamond: { title: string; desc: string };
      bridal: { title: string; desc: string };
    };
  };
  // Categories Section
  collections: {
    kicker: string;
    heading: string;
    subheading: string;
    gold: { title: string; desc: string; explore: string };
    silver: { title: string; desc: string; explore: string };
    diamond: { title: string; desc: string; explore: string };
    bridal: { title: string; desc: string; explore: string };
  };
  // Featured Products
  featured: {
    kicker: string;
    heading: string;
    countNote: string;
    viewAllBtn: string;
    exploreAllBtn: string;
  };
  // Product Card & Modal
  product: {
    enquireForPrice: string;
    bespokeQuote: string;
    viewDetails: string;
    details: string;
    enquire: string;
    ref: string;
    designNarrative: string;
    artisanalDetails: string;
    preciousMetal: string;
    purityStandard: string;
    approxWeight: string;
    craftStyle: string;
    stoneSetting: string;
    customization: string;
    availableOnRequest: string;
    recommendedFor: string;
    enquireWhatsAppBtn: string;
    shareDesign: string;
    linkCopied: string;
    similarCreations: string;
    sampleCatalogueNotice: string;
    frontView: string;
    modelView: string;
    craftsmanshipView: string;
  };
  // Brand Story
  story: {
    kicker: string;
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    quoteTitle: string;
    quoteText: string;
    discoverBtn: string;
    speakArtisanBtn: string;
  };
  // Bridal Banner
  bridalBanner: {
    kicker: string;
    headingLine1: string;
    headingLine2: string;
    description: string;
    exploreBtn: string;
    bookAppointmentBtn: string;
  };
  // Why Choose Us
  whyChooseUs: {
    kicker: string;
    heading: string;
    subheading: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    p4Title: string;
    p4Desc: string;
    badge: string;
  };
  // Testimonials
  testimonials: {
    kicker: string;
    heading: string;
    subheading: string;
    disclaimer: string;
    t1: { quote: string; client: string; location: string };
    t2: { quote: string; client: string; location: string };
    t3: { quote: string; client: string; location: string };
  };
  // Gallery
  gallery: {
    kicker: string;
    heading: string;
    followBtn: string;
    disclaimer: string;
  };
  // Catalogue View
  catalogue: {
    kicker: string;
    heading: string;
    description: string;
    sampleNotice: string;
    searchPlaceholder: string;
    clear: string;
    sortBy: string;
    sortFeatured: string;
    sortNameAsc: string;
    sortNameDesc: string;
    reset: string;
    metalLabel: string;
    allCollections: string;
    goldJewellery: string;
    silverJewellery: string;
    diamondJewellery: string;
    bridalJewellery: string;
    typeLabel: string;
    allTypes: string;
    showing: string;
    designsIn: string;
    matching: string;
    clearFilters: string;
    emptyTitle: string;
    emptyDesc: string;
    resetFiltersBtn: string;
  };
  // About Page
  about: {
    kicker: string;
    heading: string;
    subheading: string;
    approachHeading: string;
    p1: string;
    p2: string;
    p3: string;
    enquireBtn: string;
    portfoliosKicker: string;
    portfoliosHeading: string;
    goldOverview: string;
    silverOverview: string;
    diamondOverview: string;
    bridalOverview: string;
    valuesKicker: string;
    valuesHeading: string;
    v1Title: string;
    v1Desc: string;
    v2Title: string;
    v2Desc: string;
    v3Title: string;
    v3Desc: string;
    v4Title: string;
    v4Desc: string;
    philosophyHeading: string;
    philosophyDesc: string;
    connectBtn: string;
  };
  // Contact Page
  contact: {
    kicker: string;
    heading: string;
    subheading: string;
    showroomInfo: string;
    locationLabel: string;
    locationSub: string;
    whatsappLabel: string;
    whatsappSub: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    startChatBtn: string;
    mapHeading: string;
    openMaps: string;
    getDirections: string;
    formKicker: string;
    formHeading: string;
    formSub: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneInputLabel: string;
    interestLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    spamNotice: string;
    faqKicker: string;
    faq1Q: string;
    faq1A: string;
    faq2Q: string;
    faq2A: string;
    faq3Q: string;
    faq3A: string;
  };
  // Footer
  footer: {
    brandDesc: string;
    directEnquiryBtn: string;
    exploreTitle: string;
    collectionsTitle: string;
    contactTitle: string;
    rightsReserved: string;
    disclaimer: string;
  };
  // Floating Actions
  floating: {
    tooltip: string;
    backToTop: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: "Home",
      gold: "Gold",
      silver: "Silver",
      diamond: "Diamond",
      bridal: "Bridal",
      about: "About",
      contact: "Contact",
      search: "Search",
      searchPlaceholder: "Search jewellery pieces, metals, or styles...",
      whatsappEnquiry: "WhatsApp Enquiry",
    },
    announcement: {
      location: "Gujarat, India",
      craftsmanship: "Fine Gold, Silver & Diamond Craftsmanship",
      banner: "Exquisite Handcrafted Jewellery Catalogue · Bespoke Appointments & WhatsApp Consultations Available",
      whatsappText: "WhatsApp Enquiry",
    },
    hero: {
      locationBadge: "Shakti Jewellers · Gujarat, India",
      titleLine1: "Timeless Elegance.",
      titleLine2: "Eternal Beauty.",
      description: "Celebrating the rich artisanal heritage of Gujarat with bespoke creations in pure 22K Gold, Sterling Silver, Certified Diamonds, and Royal Bridal Heirloom sets. Each piece is crafted to endure through generations.",
      exploreBtn: "Explore Collections",
      discoverBtn: "Discover Our Designs",
      whatsappConsultation: "Personal WhatsApp Consultation",
      pillars: {
        gold: { title: "Gold", desc: "22K Heritage & Temple Jewels" },
        silver: { title: "Silver", desc: "925 Sterling & Kutch Payal" },
        diamond: { title: "Diamond", desc: "Solitaires & High Jewellery" },
        bridal: { title: "Bridal", desc: "Bespoke Wedding Sets" },
      },
    },
    collections: {
      kicker: "Curated Offerings",
      heading: "Featured Collections",
      subheading: "Explore our signature creations spanning majestic gold heritage, luminous silver ornaments, brilliant diamonds, and royal bridal heirlooms.",
      gold: {
        title: "Gold Jewellery",
        desc: "Intricately detailed gold necklaces, handcrafted bangles, statement rings, and traditional temple motifs.",
        explore: "Explore Gold",
      },
      silver: {
        title: "Silver Jewellery",
        desc: "Finely sculpted sterling silver anklets, lightweight daily chains, bracelets, and artisanal silver rings.",
        explore: "Explore Silver",
      },
      diamond: {
        title: "Diamond Jewellery",
        desc: "Handset solitaires, tennis necklaces, elegant diamond studs, and modern architectural rings.",
        explore: "Explore Diamond",
      },
      bridal: {
        title: "Bridal Collection",
        desc: "Grand bridal choker sets, kundan matha patti, wedding bangles, and heirloom royal ornamentation.",
        explore: "Explore Bridal",
      },
    },
    featured: {
      kicker: "Signature Pieces · Sample Catalogue",
      heading: "Featured Masterpieces",
      countNote: "Showing curated highlights",
      viewAllBtn: "View Full Catalogue",
      exploreAllBtn: "Explore All Catalogue Items",
    },
    product: {
      enquireForPrice: "Enquire for Price",
      bespokeQuote: "Bespoke Quote",
      viewDetails: "View Details",
      details: "Details",
      enquire: "Enquire",
      ref: "Ref",
      designNarrative: "Design Narrative",
      artisanalDetails: "Artisanal Details",
      preciousMetal: "Precious Metal",
      purityStandard: "Purity Standard",
      approxWeight: "Approx. Weight",
      craftStyle: "Craft Style",
      stoneSetting: "Stone Setting",
      customization: "Customization",
      availableOnRequest: "Available on Request",
      recommendedFor: "Recommended for",
      enquireWhatsAppBtn: "Enquire for Price via WhatsApp",
      shareDesign: "Share Design",
      linkCopied: "Link Copied",
      similarCreations: "Similar Creations",
      sampleCatalogueNotice: "Sample catalogue entry for design reference. Price & customization provided on enquiry.",
      frontView: "Front View",
      modelView: "Model View",
      craftsmanshipView: "Craftsmanship Detail",
    },
    story: {
      kicker: "Gujarat Heritage · Bespoke Artistry",
      heading: "The Art of Timeless Jewellery",
      p1: "At Shakti Jewellers, jewellery is not merely an ornament—it is a cherished symbol of love, heritage, and auspicious beginnings. Rooted in Gujarat, India, our collections honour centuries-old goldsmithing traditions alongside refined modern design sensibilities.",
      p2: "From classic 22 Karat gold temple filigree and royal kundan necklaces to contemporary solitaire diamonds and pure sterling silver ornaments, every piece is curated to offer lasting prestige.",
      p3: "Whether selecting an heirloom for a royal wedding or seeking a bespoke everyday pendant, our team provides personalized guidance directly via WhatsApp to ensure your jewellery journey is as luminous as our craft.",
      quoteTitle: "Gujarat Goldsmithing",
      quoteText: "“Every ornament begins with pure intent, shaped by hands dedicated to timeless beauty.”",
      discoverBtn: "Discover Our Story",
      speakArtisanBtn: "Speak with an Artisan",
    },
    bridalBanner: {
      kicker: "The Wedding Symphony · Gujarat",
      headingLine1: "Sacred Vows.",
      headingLine2: "Unrivalled Grandeur.",
      description: "From the auspicious Pheras to the grand wedding reception, our royal bridal collection unites Jadau polki choker sets, carved emerald droplets, heirloom wedding bangles, and delicate matha pattis. Designed to make the Indian bride feel sovereign.",
      exploreBtn: "Explore Bridal Collection",
      bookAppointmentBtn: "Book Bridal WhatsApp Appointment",
    },
    whyChooseUs: {
      kicker: "Our Commitment",
      heading: "Why Choose Shakti Jewellers",
      subheading: "Dedicated to delivering timeless beauty and personalized assistance for jewellery lovers across Gujarat and beyond.",
      p1Title: "Elegant Craftsmanship",
      p1Desc: "Every piece reflects meticulous artisanal attention, blending intricate traditional Gujarati goldsmithing techniques with contemporary refinement.",
      p2Title: "Beautiful Collections",
      p2Desc: "Thoughtfully curated designs spanning classic 22K Gold, Sterling Silver, luminous Diamonds, and bespoke Royal Bridal sets for every milestone.",
      p3Title: "Personal Assistance",
      p3Desc: "Direct one-on-one consultation on WhatsApp. We share detailed photos, sizing advice, and design options tailored to your personal aesthetic.",
      p4Title: "Customer-Focused Service",
      p4Desc: "A transparent and warm experience prioritizing your peace of mind, custom design requests, and personal jewellery aspirations.",
      badge: "Shakti Quality",
    },
    testimonials: {
      kicker: "Client Perspectives · Sample Demonstration",
      heading: "Words of Appreciation",
      subheading: "Illustrative customer experiences highlighting our personalized WhatsApp consultation and bespoke craftsmanship.",
      disclaimer: "* Note: These are illustrative sample testimonials demonstrating typical customer consultation experiences.",
      t1: {
        quote: "The WhatsApp consultation was exceptionally smooth. They sent high-resolution video clips of the gold necklace in different lighting, making our decision effortless.",
        client: "Sample Feedback · Bridal Jewellery Enquiry",
        location: "Ahmedabad, Gujarat",
      },
      t2: {
        quote: "Exquisite attention to the filigree work on the bangles. Having direct personal assistance to discuss weight and sizing gave us complete clarity.",
        client: "Sample Feedback · Heritage Gold Collection",
        location: "Vadodara, Gujarat",
      },
      t3: {
        quote: "The solitaire ring design was tailored with remarkable finesse. Courteous communication from start to finish.",
        client: "Sample Feedback · Diamond Solitaire Consultation",
        location: "Surat, Gujarat",
      },
    },
    gallery: {
      kicker: "Visual Gallery · Sample Showcase",
      heading: "Curated Moments & Moods",
      followBtn: "Follow @shaktijewellers.sample",
      disclaimer: "* All gallery visuals are sample editorial imagery displayed for design demonstration.",
    },
    catalogue: {
      kicker: "Exquisite Catalogue · Gujarat, India",
      heading: "The Jewellery Catalogue",
      description: "Discover our curated creations across 22K Gold, Sterling Silver, Fine Diamonds, and Royal Bridal adornments. All pieces are handcrafted reference designs available for bespoke quotation via WhatsApp.",
      sampleNotice: "Note: Sample design catalogue. Official pricing and customization are quoted on WhatsApp enquiry.",
      searchPlaceholder: "Search by name, metal, or ornament (e.g. Necklace, Jhumka, Choker, Solitaire)...",
      clear: "Clear",
      sortBy: "Sort by:",
      sortFeatured: "Featured Curations",
      sortNameAsc: "Design Name (A – Z)",
      sortNameDesc: "Design Name (Z – A)",
      reset: "Reset",
      metalLabel: "Metal:",
      allCollections: "All Collections",
      goldJewellery: "Gold Jewellery",
      silverJewellery: "Silver Jewellery",
      diamondJewellery: "Diamond Jewellery",
      bridalJewellery: "Bridal Jewellery",
      typeLabel: "Type:",
      allTypes: "All Types",
      showing: "Showing",
      designsIn: "designs in",
      matching: "matching",
      clearFilters: "Clear filters",
      emptyTitle: "No jewellery pieces match your criteria",
      emptyDesc: "We couldn't find any designs matching your search. Try resetting your filters or contact us directly on WhatsApp for bespoke design requests.",
      resetFiltersBtn: "Reset All Filters",
    },
    about: {
      kicker: "Artisanal Legacy · Gujarat, India",
      heading: "The Spirit of Shakti Jewellers",
      subheading: "Crafting ornaments that weave the sacred poetry of gold, the celestial shimmer of diamonds, and the enduring brilliance of sterling silver into cherished heirlooms.",
      approachHeading: "A Dedicated Approach to Precious Adornment",
      p1: "Based in Gujarat, India, Shakti Jewellers serves discerning connoisseurs who seek distinctive elegance over mass production. Our atelier brings together seasoned artisans versed in traditional repoussé, granulation, pacchi kundan, and modern micro-pavé stone setting.",
      p2: "Jewellery holds a unique place in Indian life: it celebrates sacred vows at the wedding mandap, marks festive prosperity during Diwali and Dhanteras, and passes from grandmother to granddaughter as a timeless blessing.",
      p3: "We believe that every customer deserves undivided attention. By offering direct WhatsApp consultations, we make exploring, customizing, and acquiring jewellery an intimate, joyful conversation.",
      enquireBtn: "Enquire via WhatsApp",
      portfoliosKicker: "Our Portfolios",
      portfoliosHeading: "Jewellery Collections Overview",
      goldOverview: "Opulent necklace sets, embossed bangles, statement cocktail rings, and lightweight gold chains.",
      silverOverview: "Traditional Ghungroo payal anklets, filigree kada bracelets, and contemporary silver rings.",
      diamondOverview: "Brilliant engagement solitaires, tennis necklaces, halo pendants, and delicate diamond studs.",
      bridalOverview: "Imperial Jadau polki choker suites, wedding bangles, matha pattis, and hathphool sets.",
      valuesKicker: "Guiding Ethos",
      valuesHeading: "Our Brand Values",
      v1Title: "Heritage & Craft",
      v1Desc: "Honouring Gujarat's rich artistic traditions, from intricate Kutch filigree to traditional Rajwadi gold carving.",
      v2Title: "Artisanal Integrity",
      v2Desc: "Each creation is shaped with unwavering dedication to metalwork precision, balanced proportions, and fine finishing.",
      v3Title: "Personalized Relationship",
      v3Desc: "We consider jewellery a personal milestone, offering direct consultative care without automated impersonal friction.",
      v4Title: "Respect & Transparency",
      v4Desc: "Clear communication, verified specifications upon request, and thoughtful guidance tailored to your occasion.",
      philosophyHeading: "Our Customer-First Philosophy",
      philosophyDesc: "We value your confidence above all else. Whether you seek guidance on jewellery weight, custom sizing, design alterations, or matching bridal themes, our personal advisors are just a message away on WhatsApp.",
      connectBtn: "Connect on WhatsApp",
    },
    contact: {
      kicker: "Showroom & Enquiries · Gujarat, India",
      heading: "Contact Shakti Jewellers",
      subheading: "We invite you to connect directly with our jewellery specialists for catalogue inquiries, bridal bookings, or custom design consultations.",
      showroomInfo: "Showroom Information",
      locationLabel: "Location",
      locationSub: "Main Heritage Boulevard, Jewellers Quarter, Gujarat 380001, India (Demo Showroom Address)",
      whatsappLabel: "WhatsApp Direct",
      whatsappSub: "Primary conversion line for instant quotes",
      phoneLabel: "Telephone",
      emailLabel: "Email",
      hoursLabel: "Showroom Hours",
      startChatBtn: "Start WhatsApp Chat Now",
      mapHeading: "Google Maps Location",
      openMaps: "Open in Maps",
      getDirections: "Get Directions (Placeholder)",
      formKicker: "Direct Inquiry",
      formHeading: "Send an Enquiry via WhatsApp",
      formSub: "Fill out the details below to generate a pre-formatted WhatsApp message for instant consultation.",
      nameLabel: "Your Name *",
      namePlaceholder: "Enter full name",
      phoneInputLabel: "Contact Number (Optional)",
      interestLabel: "Collection of Interest",
      messageLabel: "Your Enquiry or Custom Requirements",
      messagePlaceholder: "Tell us about the piece you are looking for (approximate weight, preferred metal, budget range, or reference design)...",
      submitBtn: "Submit & Chat on WhatsApp",
      spamNotice: "Submitting opens WhatsApp with your pre-filled inquiry. No spam guaranteed.",
      faqKicker: "Common Questions",
      faq1Q: "How can I enquire about jewellery prices?",
      faq1A: "Since gold rates fluctuate daily and custom craftsmanship varies by piece, please click the WhatsApp Enquiry button on any product. Our team will promptly share current pricing and custom specifications.",
      faq2Q: "Do you offer bespoke or custom design services?",
      faq2A: "Yes. We collaborate closely with clients to craft customized bridal sets, ring sizing, personalized engravings, and family heirlooms in 22K Gold and Diamonds.",
      faq3Q: "Where is Shakti Jewellers located?",
      faq3A: "Our showroom is located in Gujarat, India. For showroom visits and bridal consultations, appointments can be arranged via WhatsApp.",
    },
    footer: {
      brandDesc: "Shakti Jewellers presents fine handcrafted Gold, Silver, Diamond, and Bridal jewellery in Gujarat, India. Every creation pays homage to rich artisanal heritage and timeless luxury.",
      directEnquiryBtn: "Direct WhatsApp Enquiry",
      exploreTitle: "Explore",
      collectionsTitle: "Collections",
      contactTitle: "Contact & Location",
      rightsReserved: "All rights reserved. Gujarat, India.",
      disclaimer: "All items shown are sample catalogue selections for bespoke design reference. Shakti Jewellers welcomes personal consultation and price quotation on enquiry.",
    },
    floating: {
      tooltip: "Enquire on WhatsApp",
      backToTop: "Back to Top",
    },
  },
  gu: {
    nav: {
      home: "હોમ",
      gold: "સોનું",
      silver: "ચાંદી",
      diamond: "હીરા",
      bridal: "બ્રાઇડલ",
      about: "અમારા વિશે",
      contact: "સંપર્ક",
      search: "શોધો",
      searchPlaceholder: "દાગીના, ધાતુ અથવા શૈલી શોધો...",
      whatsappEnquiry: "વોટ્સએપ પૂછપરછ",
    },
    announcement: {
      location: "ગુજરાત, ભારત",
      craftsmanship: "ઉત્કૃષ્ટ સોનું, ચાંદી અને હીરાની કારીગરી",
      banner: "હસ્તનિર્મિત દાગીના કેટલોગ · વિશેષ પરામર્શ અને વોટ્સએપ પૂછપરછ ઉપલબ્ધ",
      whatsappText: "વોટ્સએપ પૂછપરછ",
    },
    hero: {
      locationBadge: "શક્તિ જ્વેલર્સ · ગુજરાત, ભારત",
      titleLine1: "શાશ્વત સુંદરતા.",
      titleLine2: "અનંત લાવણ્ય.",
      description: "શુદ્ધ ૨૨ કેરેટ સોનું, સ્ટર્લિંગ ચાંદી, પ્રમાણિત હીરા અને શાહી લગ્ન કલેક્શન સાથે ગુજરાતના સમૃદ્ધ વારસાની ઉજવણી. દરેક ઘરેણું પેઢીઓ સુધી ટકી રહે તેવી કારીગરી સાથે બનેલું છે.",
      exploreBtn: "કલેક્શન જુઓ",
      discoverBtn: "અમારી ડિઝાઇન જાણો",
      whatsappConsultation: "વોટ્સએપ પરામર્શ",
      pillars: {
        gold: { title: "સોનું", desc: "૨૨ કેરેટ મંદિર અને હેરીટેજ ઘરેણાં" },
        silver: { title: "ચાંદી", desc: "૯૨૫ સ્ટર્લિંગ અને કચ્છી પાયલ" },
        diamond: { title: "હીરા", desc: "સોલિટેર અને પ્રીમિયમ જ્વેલરી" },
        bridal: { title: "બ્રાઇડલ", desc: "શાહી લગ્ન દુલ્હન સેટ્સ" },
      },
    },
    collections: {
      kicker: "વિશિષ્ટ સંગ્રહ",
      heading: "મુખ્ય કલેક્શન્સ",
      subheading: "ભવ્ય ગોલ્ડ હેરીટેજ, ચમકદાર ચાંદીના અલંકારો, ઝળહળતા હીરા અને શાહી લગ્ન ઘરેણાંની સુંદરતા માણો.",
      gold: {
        title: "સોનાના દાગીના",
        desc: "બારીક કોતરણીવાળા સોનાના હાર, હસ્તનિર્મિત બંગડીઓ, આકર્ષક વીંટીઓ અને પરંપરાગત મંદિર ઘરેણાં.",
        explore: "સોનું જુઓ",
      },
      silver: {
        title: "ચાંદીના દાગીના",
        desc: "સુંદર કચ્છી ચાંદીના ઝાંઝર, હળવી ડેઇલી ચેઇન, કડા અને શિલ્પકારી ચાંદીની વીંટીઓ.",
        explore: "ચાંદી જુઓ",
      },
      diamond: {
        title: "હીરાના દાગીના",
        desc: "હાથે જડેલા સોલિટેર, ટેનિસ નેકલેસ, સુંદર ડાયમંડ સ્ટડ્સ અને આધુનિક રિંગ્સ.",
        explore: "હીરા જુઓ",
      },
      bridal: {
        title: "બ્રાઇડલ કલેક્શન",
        desc: "ભવ્ય બ્રાઇડલ ચોકર સેટ્સ, કુંદન માથા પટ્ટી, લગ્નની બંગડીઓ અને શાહી ઘરેણાં.",
        explore: "બ્રાઇડલ જુઓ",
      },
    },
    featured: {
      kicker: "સિગ્નેચર ઘરેણાં · નમૂના કેટલોગ",
      heading: "અમારી શ્રેષ્ઠ કૃતિઓ",
      countNote: "પસંદગીના ખાસ ઘરેણાં દર્શાવવામાં આવ્યા છે",
      viewAllBtn: "સંપૂર્ણ કેટલોગ જુઓ",
      exploreAllBtn: "બધા જ દાગીના જુઓ",
    },
    product: {
      enquireForPrice: "ભાવ માટે પૂછપરછ કરો",
      bespokeQuote: "કસ્ટમ ક્વોટ",
      viewDetails: "વિગતો જુઓ",
      details: "વિગત",
      enquire: "પૂછપરછ",
      ref: "સંદર્ભ",
      designNarrative: "ડિઝાઇન વર્ણન",
      artisanalDetails: "કારીગરી વિગતો",
      preciousMetal: "મૂલ્યવાન ધાતુ",
      purityStandard: "શુદ્ધતા ધોરણ",
      approxWeight: "અંદાજિત વજન",
      craftStyle: "ઘડતર શૈલી",
      stoneSetting: "રત્ન જડતર",
      customization: "કસ્ટમાઇઝેશન",
      availableOnRequest: "વિનંતી પર ઉપલબ્ધ",
      recommendedFor: "ભલામણ કરેલ પ્રસંગ",
      enquireWhatsAppBtn: "વોટ્સએપ પર ભાવ પૂછો",
      shareDesign: "ડિઝાઇન શેર કરો",
      linkCopied: "લિંક કોપી થઈ ગઈ",
      similarCreations: "આવા જ અન્ય ઘરેણાં",
      sampleCatalogueNotice: "ડિઝાઇન સંદર્ભ માટે નમૂના કેટલોગ. ભાવ અને કસ્ટમાઇઝેશન વોટ્સએપ પૂછપરછ પર પૂરા પાડવામાં આવશે.",
      frontView: "સામેનો વ્યુ",
      modelView: "મોડલ વ્યુ",
      craftsmanshipView: "કારીગરી વિગત",
    },
    story: {
      kicker: "ગુજરાત વારસો · હસ્તકળા",
      heading: "શાશ્વત ઘરેણાંની કળા",
      p1: "શક્તિ જ્વેલર્સમાં, દાગીના એ માત્ર ઘરેણું નથી—તે પ્રેમ, સંસ્કૃતિ અને શુભ શરૂઆતનું અમૂલ્ય પ્રતીક છે. ગુજરાતની પવિત્ર ભૂમિમાં મૂળ ધરાવતું અમારું કલેક્શન સદીઓ જૂની સોની પરંપરાઓને આધુનિક ડિઝાઇન સાથે જોડે છે.",
      p2: "પરંપરાગત ૨૨ કેરેટ સોનાની ફિલિગ્રી અને શાહી કુંદન હારથી લઈને આધુનિક સોલિટેર હીરા અને શુદ્ધ ચાંદીના અલંકારો સુધી, દરેક ઘરેણું અમૂલ્ય સુંદરતા અર્પે છે.",
      p3: "શાહી લગ્ન માટે વારસાગત સેટ પસંદ કરવો હોય કે રોજીંદા પહેરવેશ માટે પેન્ડન્ટ, અમારી ટીમ વોટ્સએપ પર વ્યક્તિગત સલાહ આપે છે જેથી તમારી ખરીદી સંતોષકારક રહે.",
      quoteTitle: "ગુજરાતી સોની કળા",
      quoteText: "“દરેક ઘરેણાંની શરૂઆત શુદ્ધ ભાવનાથી થાય છે, જે કુશળ હાથો દ્વારા સુંદરતામાં ઢળે છે.”",
      discoverBtn: "અમારો ઇતિહાસ જાણો",
      speakArtisanBtn: "કારીગર સાથે વાત કરો",
    },
    bridalBanner: {
      kicker: "લગ્ન મહોત્સવ · ગુજરાત",
      headingLine1: "પવિત્ર ફેરા.",
      headingLine2: "અતુલ્ય ભવ્યતા.",
      description: "મંગળ ફેરાથી લઈને ભવ્ય રિસેપ્શન સુધી, અમારું શાહી બ્રાઇડલ કલેક્શન જડતર પોલકી ચોકર સેટ, નીલમ અને માણેક, પરંપરાગત ચૂડા અને કુંદન માથા પટ્ટી સાથે દુલ્હનને રાણી જેવો ભવ્ય લુક આપે છે.",
      exploreBtn: "બ્રાઇડલ કલેક્શન જુઓ",
      bookAppointmentBtn: "લગ્ન પરામર્શ બુક કરો",
    },
    whyChooseUs: {
      kicker: "અમારી પ્રતિબદ્ધતા",
      heading: "શા માટે શક્તિ જ્વેલર્સ?",
      subheading: "ગુજરાત અને સમગ્ર દેશમાં ઘરેણાંના શોખીનો માટે શ્રેષ્ઠ ગુણવત્તા અને પારદર્શક સેવા.",
      p1Title: "ઉત્કૃષ્ટ કારીગરી",
      p1Desc: "દરેક ઘરેણાંમાં ગુજરાતી સોનીકામની અજોડ બારીકાઈ અને આધુનિક ફિનિશિંગ જોવા મળે છે.",
      p2Title: "સુંદર કલેક્શન્સ",
      p2Desc: "૨૨ કેરેટ સોનું, ૯૨૫ ચાંદી, ચમકદાર હીરા અને ભવ્ય લગ્ન સેટ્સની વિશાળ શ્રેણી.",
      p3Title: "વ્યક્તિગત સહાય",
      p3Desc: "વોટ્સએપ પર સીધો સંપર્ક. અમે હાઇ-ડેફિનેશન ફોટા, વજન અને સાઇઝિંગની સંપૂર્ણ માહિતી આપીએ છીએ.",
      p4Title: "ગ્રાહક-કેન્દ્રિત સેવા",
      p4Desc: "વિશ્વાસ અને સંતોષ સાથે તમારી ઇચ્છા મુજબના ઘરેણાં બનાવવાની પારદર્શક પ્રક્રિયા.",
      badge: "શક્તિ ગુણવત્તા",
    },
    testimonials: {
      kicker: "ગ્રાહક અભિપ્રાય · ડેમોસ્ટ્રેશન",
      heading: "ગ્રાહકોના અનુભવો",
      subheading: "અમારી વોટ્સએપ સેવા અને વ્યક્તિગત પરામર્શ દર્શાવતા ગ્રાહક પ્રતિભાવો.",
      disclaimer: "* નોંધ: આ ગ્રાહક પરામર્શ અનુભવ દર્શાવતા નમૂનારૂપ અભિપ્રાય છે.",
      t1: {
        quote: "વોટ્સએપ પર પરામર્શ ખૂબ જ સંતોષકારક રહ્યો. તેમણે સોનાના હારના અલગ અલગ લાઇટિંગમાં વીડિયો મોકલ્યા, જેથી નિર્ણય લેવો સરળ બન્યો.",
        client: "નમૂના પ્રતિભાવ · બ્રાઇડલ પૂછપરછ",
        location: "અમદાવાદ, ગુજરાત",
      },
      t2: {
        quote: "બંગડીઓ પરનું ફિલિગ્રી વર્ક અદ્ભુત છે. વજન અને માપ અંગે સીધી વાતચીતથી અમને પૂરો સંતોષ થયો.",
        client: "નમૂના પ્રતિભાવ · ગોલ્ડ કલેક્શન",
        location: "વડોદરા, ગુજરાત",
      },
      t3: {
        quote: "સોલિટેર રિંગની ડિઝાઇન ખૂબ જ સુંદર અને કાળજીપૂર્વક તૈયાર કરવામાં આવી. ઉત્તમ સેવા.",
        client: "નમૂના પ્રતિભાવ · ડાયમંડ રિંગ પૂછપરછ",
        location: "સુરત, ગુજરાત",
      },
    },
    gallery: {
      kicker: "વિઝ્યુઅલ ગેલેરી · નમૂના પ્રદર્શન",
      heading: "અદભુત ક્ષણો અને ઝાંખી",
      followBtn: "ઇન્સ્ટાગ્રામ ફોલો કરો",
      disclaimer: "* તમામ તસવીરો માત્ર ડિઝાઇન પ્રદર્શન માટે ઉપયોગમાં લેવાયેલ છે.",
    },
    catalogue: {
      kicker: "શ્રેષ્ઠ કેટલોગ · ગુજરાત, ભારત",
      heading: "દાગીના કેટલોગ",
      description: "૨૨ કેરેટ સોનું, ૯૨૫ ચાંદી, હીરા અને લગ્ન ઘરેણાંનો અદભુત સંગ્રહ. તમામ ડિઝાઇન વોટ્સએપ પર પૂછપરછ અને કસ્ટમ ઓર્ડર માટે ઉપલબ્ધ છે.",
      sampleNotice: "નોંધ: ડિઝાઇન પ્રદર્શન માટેનો નમૂના કેટલોગ. ભાવ અને વિગતો વોટ્સએપ પર જણાવવામાં આવશે.",
      searchPlaceholder: "નામ, ધાતુ અથવા દાગીનાનું નામ શોધો (હાર, ઝૂમખાં, બંગડી, સોલિટેર)...",
      clear: "સાફ કરો",
      sortBy: "ક્રમમાં ગોઠવો:",
      sortFeatured: "ખાસ પસંદગી",
      sortNameAsc: "નામ (A થી Z)",
      sortNameDesc: "નામ (Z થી A)",
      reset: "રીસેટ",
      metalLabel: "ધાતુ:",
      allCollections: "બધા કલેક્શન",
      goldJewellery: "સોનાના દાગીના",
      silverJewellery: "ચાંદીના દાગીના",
      diamondJewellery: "હીરાના દાગીના",
      bridalJewellery: "બ્રાઇડલ દાગીના",
      typeLabel: "પ્રકાર:",
      allTypes: "બધા પ્રકાર",
      showing: "દર્શાવેલ",
      designsIn: "ડિઝાઇન",
      matching: "શોધ પરિણામ",
      clearFilters: "ફિલ્ટર સાફ કરો",
      emptyTitle: "તમારી શોધ મુજબ કોઈ ઘરેણાં મળ્યા નથી",
      emptyDesc: "કૃપા કરીને અન્ય શબ્દો અજમાવો અથવા વોટ્સએપ પર સીધો સંપર્ક કરીને તમારી મનપસંદ ડિઝાઇન જણાવો.",
      resetFiltersBtn: "બધા ફિલ્ટર રીસેટ કરો",
    },
    about: {
      kicker: "વારસાગત કારીગરી · ગુજરાત, ભારત",
      heading: "શક્તિ જ્વેલર્સની પરંપરા",
      subheading: "સોનાની પવિત્રતા, હીરાની ચમક અને ચાંદીના તેજને પેઢીઓ સુધી સચવાય તેવા વારસાગત અલંકારોમાં કંડારતી સંસ્થા.",
      approachHeading: "મૂલ્યવાન ઘરેણાં પ્રત્યેનો અમારો અભિગમ",
      p1: "ગુજરાતમાં સ્થિત, શક્તિ જ્વેલર્સ એવા ગ્રાહકોની સેવા કરે છે જેઓ અનોખી સુંદરતા અને ઉચ્ચ ગુણવત્તાની કદર કરે છે. અમારી ટીમ પરંપરાગત જડતર, ફિલિગ્રી, પોલકી અને આધુનિક માઇક્રો-પેવે સેટિંગમાં પારંગત છે.",
      p2: "ભારતીય સંસ્કૃતિમાં દાગીનાનું સ્થાન અનન્ય છે: તે લગ્નના મંડપમાં વચનોને પવિત્ર કરે છે, દિવાળી અને ધનતેરસમાં સમૃદ્ધિ લાવે છે, અને દાદી તરફથી પૌત્રીને આશીર્વાદરૂપે મળે છે.",
      p3: "અમારું માનવું છે કે દરેક ગ્રાહકને વિશેષ સમય મળવો જોઈએ. વોટ્સએપ દ્વારા સીધા પરામર્શથી ઘરેણાંની ખરીદી એક સુખદ અનુભવ બને છે.",
      enquireBtn: "વોટ્સએપ પર વાત કરો",
      portfoliosKicker: "અમારા સંગ્રહો",
      portfoliosHeading: "દાગીના કલેક્શન ઝાંખી",
      goldOverview: "ભવ્ય હાર સેટ, કોતરણીવાળી બંગડીઓ, સ્ટેટમેન્ટ રિંગ્સ અને સોનાની ચેઇન.",
      silverOverview: "પરંપરાગત કચ્છી ઝાંઝર, ફિલિગ્રી કડા અને આધુનિક ચાંદીની વીંટીઓ.",
      diamondOverview: "સોલિટેર સગાઈની વીંટીઓ, ટેનિસ નેકલેસ, પેન્ડન્ટ અને ડાયમંડ સ્ટડ્સ.",
      bridalOverview: "શાહી જડતર પોલકી ચોકર સેટ, લગ્નની બંગડીઓ, માથા પટ્ટી અને હાથફૂલ.",
      valuesKicker: "માર્ગદર્શક સિદ્ધાંતો",
      valuesHeading: "અમારા મૂલ્યો",
      v1Title: "વારસો અને કારીગરી",
      v1Desc: "કચ્છી ફિલિગ્રીથી લઈને રાજવાડી સોનાકામ સુધીના ગુજરાતના કળાવૈભવનું સન્માન.",
      v2Title: "શુદ્ધતા અને ગુણવત્તા",
      v2Desc: "દરેક ઘરેણાંમાં ધાતુની ગુણવત્તા, સંતુલિત આકાર અને શ્રેષ્ઠ ફિનિશિંગ.",
      v3Title: "વિશ્વાસભર્યો સંબંધ",
      v3Desc: "દાગીના ખરીદીને એક વિશેષ અવસર માની વ્યક્તિગત સેવા આપવાનો સંકલ્પ.",
      v4Title: "પારદર્શિતા",
      v4Desc: "સ્પષ્ટ માહિતી, વજન અને વિગતોની પ્રામાણિક સમજણ.",
      philosophyHeading: "અમારો ગ્રાહક-કેન્દ્રિત અભિગમ",
      philosophyDesc: "તમારો વિશ્વાસ એ જ અમારું સાચું ધન છે. ઘરેણાંનું વજન, સાઇઝ, કસ્ટમ ફેરફારો કે લગ્નની થીમ અંગે અમારા સલાહકારો વોટ્સએપ પર સદાય હાજર છે.",
      connectBtn: "વોટ્સએપ પર સંપર્ક કરો",
    },
    contact: {
      kicker: "શોરૂમ અને પૂછપરછ · ગુજરાત, ભારત",
      heading: "શક્તિ જ્વેલર્સ સંપર્ક",
      subheading: "કેટલોગ માહિતી, લગ્ન બુકિંગ અથવા કસ્ટમ ઘરેણાં માટે અમારા નિષ્ણાતો સાથે સીધો સંપર્ક કરો.",
      showroomInfo: "શોરૂમ માહિતી",
      locationLabel: "સ્થળ",
      locationSub: "મેઇન હેરીટેજ બુલેવાર્ડ, જ્વેલર્સ બજાર, ગુજરાત ૩૮૦૦૦૧, ભારત (નમૂના સરનામું)",
      whatsappLabel: "વોટ્સએપ સીધો સંપર્ક",
      whatsappSub: "ઝડપી ભાવ જાણવા માટે મુખ્ય લાઇન",
      phoneLabel: "ફોન નંબર",
      emailLabel: "ઇમેઇલ",
      hoursLabel: "શોરૂમ સમય",
      startChatBtn: "વોટ્સએપ ચેટ શરૂ કરો",
      mapHeading: "ગુગલ મેપ્સ લોકેશન",
      openMaps: "મેપ્સમાં જુઓ",
      getDirections: "દિશાનિર્દેશ મેળવો",
      formKicker: "સીધી પૂછપરછ",
      formHeading: "વોટ્સએપ દ્વારા પૂછપરછ મોકલો",
      formSub: "ત્વરિત પરામર્શ માટે નીચે વિગતો ભરો.",
      nameLabel: "તમારું નામ *",
      namePlaceholder: "આખું નામ લખો",
      phoneInputLabel: "સંપર્ક નંબર (મરજિયાત)",
      interestLabel: "પસંદગીનું કલેક્શન",
      messageLabel: "તમારી જરૂરિયાત અથવા પ્રશ્ન",
      messagePlaceholder: "તમે કેવા ઘરેણાં શોધી રહ્યા છો તે જણાવો (અંદાજિત વજન, ધાતુ, બજેટ અથવા ડિઝાઇન)...",
      submitBtn: "સબમિટ કરો અને વોટ્સએપ પર ચેટ કરો",
      spamNotice: "સબમિટ કરવાથી તમારી વિગતો સાથે વોટ્સએપ ખુલશે.",
      faqKicker: "સામાન્ય પ્રશ્નો",
      faq1Q: "દાગીનાના ભાવ કેવી રીતે જાણી શકાય?",
      faq1A: "સોના-ચાંદીના દૈનિક ભાવ અને કારીગરી મુજબ દર બદલાતા હોવાથી કોઈપણ પ્રોડક્ટ પર વોટ્સએપ બટન દબાવીને તુરંત ભાવ જાણી શકો છો.",
      faq2Q: "શું તમે કસ્ટમ ઓર્ડર બનાવો છો?",
      faq2A: "હા, અમે ગ્રાહકની પસંદગી મુજબ લગ્ન સેટ્સ, વીંટીનું માપ અને વિશેષ ડિઝાઇન ૨૨ કેરેટ સોના અને હીરામાં બનાવી આપીએ છીએ.",
      faq3Q: "શક્તિ જ્વેલર્સ ક્યાં આવેલું છે?",
      faq3A: "અમારો શોરૂમ ગુજરાત, ભારતમાં આવેલો છે. રૂબરૂ મુલાકાત માટે વોટ્સએપ પર અગાઉથી સમય નક્કી કરી શકો છો.",
    },
    footer: {
      brandDesc: "શક્તિ જ્વેલર્સ ગુજરાત, ભારતમાં ઉત્કૃષ્ટ સોના, ચાંદી, હીરા અને બ્રાઇડલ ઘરેણાં રજૂ કરે છે. દરેક ઘરેણું અમૂલ્ય કળા અને ભવ્યતાનું પ્રતીક છે.",
      directEnquiryBtn: "વોટ્સએપ પૂછપરછ",
      exploreTitle: "શોધો",
      collectionsTitle: "કલેક્શન્સ",
      contactTitle: "સંપર્ક અને સરનામું",
      rightsReserved: "સર્વાધિકાર સુરક્ષિત. ગુજરાત, ભારત.",
      disclaimer: "તમામ દર્શાવેલ વસ્તુઓ ડિઝાઇન સંદર્ભ માટે નમૂના છે. શક્તિ જ્વેલર્સ વોટ્સએપ પૂછપરછ પર વ્યક્તિગત પરામર્શ અને ભાવ પૂરા પાડે છે.",
    },
    floating: {
      tooltip: "વોટ્સએપ પર પૂછપરછ કરો",
      backToTop: "ટોચ પર જાઓ",
    },
  },
};
