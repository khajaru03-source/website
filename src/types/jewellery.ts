export type MetalType = "Gold" | "Silver" | "Diamond" | "Bridal";

export type SubCategory = 
  | "Necklace"
  | "Earrings"
  | "Bangles"
  | "Ring"
  | "Pendant"
  | "Chain"
  | "Anklet"
  | "Bracelet"
  | "Bridal Set"
  | "Kada"
  | "Choker"
  | "Mangalsutra"
  | "Hathphool"
  | "Matha Patti"
  | "Nose Ring"
  | "Toe Rings";

export interface ProductDetailSpec {
  metal: string;
  metalGu?: string;
  metalPurity?: string;
  approxWeight?: string;
  craftsmanshipStyle: string;
  craftsmanshipStyleGu?: string;
  stoneSetting?: string;
  stoneSettingGu?: string;
  customizationAvailable: boolean;
}

export interface JewelleryProduct {
  id: string;
  name: string;
  nameGu: string;
  category: MetalType;
  subCategory: SubCategory;
  subCategoryGu: string;
  tagline: string;
  taglineGu: string;
  description: string;
  descriptionGu: string;
  primaryImage: string;
  galleryImages: string[];
  views?: {
    front?: string;
    model?: string;
    detail?: string;
  };
  specs: ProductDetailSpec;
  isFeatured?: boolean;
  isSampleCatalogueItem: true;
  priceDisplay: "Enquire for Price";
  priceDisplayGu: "ભાવ માટે પૂછપરછ કરો";
  occasion?: string;
  occasionGu?: string;
}

export type ActiveView = 
  | "home"
  | "catalogue"
  | "about"
  | "contact";

export interface FilterState {
  category: "all" | "Gold" | "Silver" | "Diamond" | "Bridal";
  subCategory: "all" | SubCategory;
  searchQuery: string;
  sortBy: "featured" | "name-asc" | "name-desc";
}
