import React from "react";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { createWhatsAppUrl, getGeneralWhatsAppMessage } from "../../utils/whatsapp";
import { useLanguage } from "../../i18n/LanguageContext";

interface HeroSectionProps {
  onExploreCollections: () => void;
  onDiscoverDesigns: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCollections,
  onDiscoverDesigns,
}) => {
  const { language, t } = useLanguage();
  const whatsappUrl = createWhatsAppUrl(
    getGeneralWhatsAppMessage("Bespoke Bridal & Gold Consultations", language)
  );

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#11100E]">
      {/* Background Campaign Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_luxury_jewellery_1794052851788.jpg"
          alt="Shakti Jewellers Heritage Campaign - Handcrafted 22k Gold & Diamond Necklace"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-100 animate-in fade-in zoom-in-105 duration-1000"
        />
        {/* Editorial Scrim Gradients - ensures high contrast text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#11100E] via-[#11100E]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#11100E]/90 via-[#11100E]/60 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Subtle Tagline / Location Kicker */}
          <div className="inline-flex items-center gap-2.5 text-xs tracking-[0.25em] uppercase text-[#E5CC91] font-medium border-b border-[#C6A15B]/30 pb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>{t.hero.locationBadge}</span>
          </div>

          {/* Headline - Timeless Elegance. Eternal Beauty. */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif-luxury font-normal tracking-tight text-[#F7F4EE] leading-[1.1] text-balance">
            {t.hero.titleLine1} <br />
            <span className="italic font-light gold-gradient-text">{t.hero.titleLine2}</span>
          </h1>

          {/* Supporting Text about Gold, Silver and Diamond collections */}
          <p className="text-base sm:text-lg text-[#D5CEBF] font-light leading-relaxed max-w-2xl">
            {t.hero.description}
          </p>

          {/* Dual CTAs & WhatsApp Prompt */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            {/* CTA 1: Explore Collections */}
            <button
              onClick={onExploreCollections}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#E5CC91] to-[#C6A15B] text-[#11100E] text-xs font-semibold tracking-widest uppercase hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(198,161,91,0.25)]"
            >
              <span>{t.hero.exploreBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* CTA 2: Discover Our Designs */}
            <button
              onClick={onDiscoverDesigns}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#E5CC91]/40 text-[#F7F4EE] hover:border-[#E5CC91] hover:text-[#E5CC91] text-xs font-semibold tracking-widest uppercase transition-all"
            >
              <span>{t.hero.discoverBtn}</span>
            </button>

            {/* Direct WhatsApp link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-[#A8A29A] hover:text-[#25D366] transition-colors py-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="underline underline-offset-4 decoration-[#25D366]/40">{t.hero.whatsappConsultation}</span>
            </a>
          </div>

          {/* Quick Pillar Strip */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#2D2720]/80">
            <div className="space-y-1">
              <span className="block text-xs uppercase tracking-widest text-[#C6A15B]">{t.hero.pillars.gold.title}</span>
              <span className="text-xs text-[#A8A29A]">{t.hero.pillars.gold.desc}</span>
            </div>
            <div className="space-y-1">
              <span className="block text-xs uppercase tracking-widest text-[#C6A15B]">{t.hero.pillars.silver.title}</span>
              <span className="text-xs text-[#A8A29A]">{t.hero.pillars.silver.desc}</span>
            </div>
            <div className="space-y-1">
              <span className="block text-xs uppercase tracking-widest text-[#C6A15B]">{t.hero.pillars.diamond.title}</span>
              <span className="text-xs text-[#A8A29A]">{t.hero.pillars.diamond.desc}</span>
            </div>
            <div className="space-y-1">
              <span className="block text-xs uppercase tracking-widest text-[#C6A15B]">{t.hero.pillars.bridal.title}</span>
              <span className="text-xs text-[#A8A29A]">{t.hero.pillars.bridal.desc}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
