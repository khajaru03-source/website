import React from "react";
import { Instagram, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "../../config/siteConfig";
import { useLanguage } from "../../i18n/LanguageContext";

export const InstagramGallery: React.FC = () => {
  const { t } = useLanguage();

  const sampleGalleryItems = [
    {
      image: "/assets/brand/editorial_gold_collection.jpg",
      tag: "#HeritageGold",
      caption: "A timeless dialogue between 22k gold and royal craftsmanship.",
    },
    {
      image: "/assets/brand/editorial_bridal_collection.jpg",
      tag: "#BridalOpulence",
      caption: "Uncut polki emerald accents draped in regal crimson silk.",
    },
    {
      image: "/assets/brand/editorial_silver_collection.jpg",
      tag: "#SterlingSilver",
      caption: "Luminous sterling silver handcrafted ornaments.",
    },
    {
      image: "/assets/brand/editorial_diamond_collection.jpg",
      tag: "#SolitaireBrilliance",
      caption: "Reflecting prismatic light on deep obsidian stone.",
    },
    {
      image: "/assets/brand/luxury_showroom_interior.jpg",
      tag: "#ShowroomGujarat",
      caption: "Our luxury jewellery boutique showroom in Gujarat.",
    },
    {
      image: "/assets/hero/hero_luxury_jewellery.jpg",
      tag: "#ShaktiJewellers",
      caption: "Gujarat's bespoke jewellery design sanctuary.",
    },
  ];

  return (
    <section className="py-20 bg-[#11100E] border-t border-[#221D17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
              <Instagram className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>{t.gallery.kicker}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#F7F4EE]">
              {t.gallery.heading}
            </h2>
          </div>

          <a
            href={SITE_CONFIG.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#E5CC91] hover:text-white transition-colors py-1 border-b border-[#C6A15B]/50"
          >
            <span>{t.gallery.followBtn}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6-Grid Editorial Gallery with high-fashion model & showroom photos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {sampleGalleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-square overflow-hidden bg-[#181613] border border-[#2B2620]/60 cursor-pointer"
            >
              <img
                src={item.image}
                alt={`Sample Jewellery Gallery ${idx + 1}`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#11100E]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <Instagram className="w-4 h-4 text-[#E5CC91]" />
                  <span className="text-[10px] text-[#A8A29A] uppercase tracking-wider">Sample</span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#E5CC91] block mb-1">
                    {item.tag}
                  </span>
                  <p className="text-[11px] text-[#D5CEBF] font-light line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <span className="text-[11px] text-[#A8A29A]/70 uppercase tracking-widest">
            {t.gallery.disclaimer}
          </span>
        </div>

      </div>
    </section>
  );
};
