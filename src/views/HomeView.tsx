import React from "react";
import { HeroSection } from "../components/home/HeroSection";
import { FeaturedCollections } from "../components/home/FeaturedCollections";
import { ProductCard } from "../components/common/ProductCard";
import { BrandStorySection } from "../components/home/BrandStorySection";
import { BridalCampaignSection } from "../components/home/BridalCampaignSection";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { InstagramGallery } from "../components/home/InstagramGallery";
import { JewelleryProduct, MetalType, ActiveView } from "../types/jewellery";
import { SAMPLE_PRODUCTS } from "../data/products";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

interface HomeViewProps {
  onNavigate: (view: ActiveView, category?: "all" | MetalType) => void;
  onViewProductDetails: (product: JewelleryProduct) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onViewProductDetails,
}) => {
  const { language, t } = useLanguage();
  // Requirement 4.E: Display 8 products in featured products section
  const featuredProducts = SAMPLE_PRODUCTS.slice(0, 8);

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <HeroSection
        onExploreCollections={() => onNavigate("catalogue", "all")}
        onDiscoverDesigns={() => onNavigate("catalogue", "Gold")}
      />

      {/* Featured Collections (Gold, Silver, Diamond, Bridal) */}
      <FeaturedCollections
        onSelectCategory={(cat) => onNavigate("catalogue", cat)}
      />

      {/* Featured Products Section (8 items) */}
      <section className="py-20 lg:py-28 bg-[#161411] border-t border-[#26211A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>{t.featured.kicker}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-[#F7F4EE]">
                {t.featured.heading}
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-xs text-[#A8A29A]">
                {language === "gu" ? "૮ પસંદગીના ખાસ ઘરેણાં" : "Showing 8 curated highlights"}
              </span>
              <button
                onClick={() => onNavigate("catalogue", "all")}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#E5CC91] hover:text-white transition-colors py-1 border-b border-[#C6A15B]/50"
              >
                <span>{t.featured.viewAllBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 8 Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewProductDetails}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate("catalogue", "all")}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1B1916] hover:bg-[#25211B] text-[#E5CC91] hover:text-white border border-[#C6A15B]/40 text-xs uppercase tracking-widest font-semibold transition-all"
            >
              <span>{language === "gu" ? "બધા જ ૬૦ દાગીના કેટલોગમાં જુઓ" : "Explore All 60 Catalogue Pieces"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Brand Story Section */}
      <BrandStorySection onLearnMore={() => onNavigate("about")} />

      {/* Bridal Collection Banner */}
      <BridalCampaignSection onExploreBridal={() => onNavigate("catalogue", "Bridal")} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Instagram-inspired Gallery */}
      <InstagramGallery />
    </div>
  );
};
