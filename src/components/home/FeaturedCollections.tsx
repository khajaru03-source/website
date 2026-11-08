import React from "react";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "../../config/siteConfig";
import { MetalType } from "../../types/jewellery";
import { useLanguage } from "../../i18n/LanguageContext";

interface FeaturedCollectionsProps {
  onSelectCategory: (category: MetalType) => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({
  onSelectCategory,
}) => {
  const { language, t } = useLanguage();

  const categoryMeta: Record<string, { metal: MetalType; title: string; desc: string; explore: string }> = {
    gold: {
      metal: "Gold",
      title: t.collections.gold.title,
      desc: t.collections.gold.desc,
      explore: t.collections.gold.explore,
    },
    silver: {
      metal: "Silver",
      title: t.collections.silver.title,
      desc: t.collections.silver.desc,
      explore: t.collections.silver.explore,
    },
    diamond: {
      metal: "Diamond",
      title: t.collections.diamond.title,
      desc: t.collections.diamond.desc,
      explore: t.collections.diamond.explore,
    },
    bridal: {
      metal: "Bridal",
      title: t.collections.bridal.title,
      desc: t.collections.bridal.desc,
      explore: t.collections.bridal.explore,
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-[#11100E] border-t border-[#1F1B16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
              {t.collections.kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-[#F7F4EE]">
              {t.collections.heading}
            </h2>
          </div>
          <p className="text-sm text-[#A8A29A] max-w-md font-light leading-relaxed">
            {t.collections.subheading}
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => {
            const meta = categoryMeta[cat.id];
            const title = meta ? meta.title : cat.name;
            const description = meta ? meta.desc : cat.description;
            const exploreLabel = meta ? meta.explore : `Explore ${cat.name}`;
            const metal = meta ? meta.metal : "Gold";

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(metal)}
                className="group relative h-[420px] rounded-none overflow-hidden bg-[#1B1916] cursor-pointer border border-[#2D2720]/60 hover:border-[#C6A15B]/60 transition-all duration-500 flex flex-col justify-end p-6"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectCategory(metal);
                  }
                }}
                aria-label={`View ${title} Collection`}
              >
                {/* Background Image with zoom on hover */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={cat.imageUrl}
                    alt={`${title} - Shakti Jewellers`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Subtle luxury scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11100E] via-[#11100E]/60 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.2em] uppercase text-[#C6A15B] font-medium">
                      {language === "gu" ? "કલેક્શન" : "Collection"}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#11100E]/80 border border-[#C6A15B]/40 flex items-center justify-center text-[#E5CC91] group-hover:bg-[#C6A15B] group-hover:text-[#11100E] transition-all">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif-luxury font-normal text-white group-hover:text-[#E5CC91] transition-colors">
                    {title}
                  </h3>

                  <p className="text-xs text-[#D5CEBF] font-light line-clamp-2">
                    {description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#E5CC91] font-semibold border-b border-[#E5CC91]/50 group-hover:border-[#E5CC91] transition-all">
                      {exploreLabel}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
