import React from "react";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { createWhatsAppUrl, getGeneralWhatsAppMessage } from "../../utils/whatsapp";
import { useLanguage } from "../../i18n/LanguageContext";

interface BrandStorySectionProps {
  onLearnMore: () => void;
}

export const BrandStorySection: React.FC<BrandStorySectionProps> = ({ onLearnMore }) => {
  const { language, t } = useLanguage();
  const whatsappUrl = createWhatsAppUrl(
    getGeneralWhatsAppMessage("Artisanal Jewellery Consultation", language)
  );

  return (
    <section className="py-20 lg:py-28 bg-[#161411] border-y border-[#26211B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with Artisan Craftsmanship Photo */}
          <div className="relative group">
            <div className="relative overflow-hidden aspect-[4/3] border border-[#C6A15B]/30 shadow-2xl">
              <img
                src="/assets/brand/jewellery_artisan_craft.jpg"
                alt="Master Artisan Goldsmith crafting jewellery for Shakti Jewellers in Gujarat"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11100E]/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Subtle floating quote plaque */}
            <div className="absolute -bottom-6 right-4 sm:-bottom-8 sm:right-8 bg-[#11100E]/95 border border-[#C6A15B]/40 p-4 sm:p-5 max-w-xs shadow-xl backdrop-blur-sm">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-1">
                {t.story.quoteTitle}
              </span>
              <p className="text-xs text-[#E5CC91] font-serif-luxury italic">
                {t.story.quoteText}
              </p>
            </div>
          </div>

          {/* Right Column: Story Text Content */}
          <div className="space-y-6 lg:pl-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>{t.story.kicker}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-[#F7F4EE] leading-tight text-balance">
              {t.story.heading}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#C2BBAF] font-light leading-relaxed">
              <p>{t.story.p1}</p>
              <p>{t.story.p2}</p>
              <p>{t.story.p3}</p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-semibold text-[#11100E] bg-gradient-to-r from-[#E5CC91] to-[#C6A15B] hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <span>{t.story.discoverBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-widest font-medium text-[#F7F4EE] border border-[#2D2720] hover:border-[#C6A15B] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>{t.story.speakArtisanBtn}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
