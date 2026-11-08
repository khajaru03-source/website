import React from "react";
import { Sparkles, Gem, MessageCircle, HeartHandshake } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Sparkles,
      title: t.whyChooseUs.p1Title,
      description: t.whyChooseUs.p1Desc,
    },
    {
      icon: Gem,
      title: t.whyChooseUs.p2Title,
      description: t.whyChooseUs.p2Desc,
    },
    {
      icon: MessageCircle,
      title: t.whyChooseUs.p3Title,
      description: t.whyChooseUs.p3Desc,
    },
    {
      icon: HeartHandshake,
      title: t.whyChooseUs.p4Title,
      description: t.whyChooseUs.p4Desc,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#11100E] border-t border-[#221D17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
            {t.whyChooseUs.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-[#F7F4EE]">
            {t.whyChooseUs.heading}
          </h2>
          <p className="text-sm text-[#A8A29A] font-light">
            {t.whyChooseUs.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#181613] p-8 border border-[#2B2620]/60 hover:border-[#C6A15B]/40 transition-colors space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-none bg-[#24201A] border border-[#C6A15B]/30 flex items-center justify-center text-[#E5CC91]">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-serif-luxury font-medium text-[#F7F4EE]">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A8A29A] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#26211A] flex items-center gap-2">
                  <span className="text-[10px] tracking-widest uppercase text-[#C6A15B] font-medium">
                    {t.whyChooseUs.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
