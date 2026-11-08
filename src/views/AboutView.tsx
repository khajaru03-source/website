import React from "react";
import { Sparkles, MessageCircle, Heart, Gem, ShieldCheck } from "lucide-react";
import { createWhatsAppUrl, getGeneralWhatsAppMessage } from "../utils/whatsapp";
import { ActiveView } from "../types/jewellery";
import { useLanguage } from "../i18n/LanguageContext";

interface AboutViewProps {
  onNavigate: (view: ActiveView, category?: any) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const whatsappUrl = createWhatsAppUrl(
    getGeneralWhatsAppMessage("About Shakti Jewellers & Bespoke Design Services", language)
  );

  const values = [
    {
      title: t.about.v1Title,
      desc: t.about.v1Desc,
      icon: Sparkles,
    },
    {
      title: t.about.v2Title,
      desc: t.about.v2Desc,
      icon: Gem,
    },
    {
      title: t.about.v3Title,
      desc: t.about.v3Desc,
      icon: Heart,
    },
    {
      title: t.about.v4Title,
      desc: t.about.v4Desc,
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="py-12 lg:py-20 bg-[#11100E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>{t.about.kicker}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-[#F7F4EE]">
            {t.about.heading}
          </h1>
          <p className="text-base text-[#D5CEBF] font-light leading-relaxed">
            {t.about.subheading}
          </p>
        </div>

        {/* Narrative & Visual Split: Showcasing High-End Luxury Showroom Interior */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-[#C6A15B]/40 shadow-2xl group">
            <img
              src="/src/assets/images/luxury_showroom_interior_1794054598664.jpg"
              alt="Shakti Jewellers High-End Luxury Showroom Interior in Gujarat"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11100E]/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Showroom Caption Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#11100E]/90 border border-[#C6A15B]/30 p-3 backdrop-blur-sm">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A15B] font-semibold block mb-0.5">
                {language === "gu" ? "લક્ઝરી શોરૂમ અનુભવ" : "Luxury Boutique Experience"}
              </span>
              <p className="text-xs text-[#E5CC91] font-serif-luxury">
                {language === "gu" ? "શક્તિ જ્વેલર્સ પ્રીમિયમ શોરૂમ · ગુજરાત, ભારત" : "Shakti Jewellers Flagship Showroom · Gujarat, India"}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#F7F4EE]">
              {t.about.approachHeading}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#A8A29A] font-light leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E5CC91] to-[#C6A15B] text-[#11100E] text-xs uppercase tracking-widest font-semibold hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(198,161,91,0.2)]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.about.enquireBtn}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Collection Overview Strip */}
        <div className="bg-[#161411] border border-[#24201A] p-8 lg:p-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-semibold">
              {t.about.portfoliosKicker}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#F7F4EE]">
              {t.about.portfoliosHeading}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2 p-5 bg-[#11100E] border border-[#26211A] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#E5CC91]">22K Gold</span>
                <h4 className="font-serif-luxury text-lg text-white mt-1">
                  {language === "gu" ? "સોનાના દાગીના" : "Heritage & Temple Gold"}
                </h4>
                <p className="text-xs text-[#A8A29A] font-light leading-relaxed mt-2">
                  {t.about.goldOverview}
                </p>
              </div>
              <button
                onClick={() => onNavigate("catalogue", "Gold")}
                className="text-xs text-[#C6A15B] hover:underline pt-4 block text-left cursor-pointer"
              >
                {t.collections.gold.explore} →
              </button>
            </div>

            <div className="space-y-2 p-5 bg-[#11100E] border border-[#26211A] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#E5CC91]">925 Silver</span>
                <h4 className="font-serif-luxury text-lg text-white mt-1">
                  {language === "gu" ? "ચાંદીના દાગીના" : "Sterling & Kutch Silver"}
                </h4>
                <p className="text-xs text-[#A8A29A] font-light leading-relaxed mt-2">
                  {t.about.silverOverview}
                </p>
              </div>
              <button
                onClick={() => onNavigate("catalogue", "Silver")}
                className="text-xs text-[#C6A15B] hover:underline pt-4 block text-left cursor-pointer"
              >
                {t.collections.silver.explore} →
              </button>
            </div>

            <div className="space-y-2 p-5 bg-[#11100E] border border-[#26211A] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#E5CC91]">Diamonds</span>
                <h4 className="font-serif-luxury text-lg text-white mt-1">
                  {language === "gu" ? "હીરાના દાગીના" : "Solitaires & High Jewels"}
                </h4>
                <p className="text-xs text-[#A8A29A] font-light leading-relaxed mt-2">
                  {t.about.diamondOverview}
                </p>
              </div>
              <button
                onClick={() => onNavigate("catalogue", "Diamond")}
                className="text-xs text-[#C6A15B] hover:underline pt-4 block text-left cursor-pointer"
              >
                {t.collections.diamond.explore} →
              </button>
            </div>

            <div className="space-y-2 p-5 bg-[#11100E] border border-[#26211A] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#E5CC91]">Bridal</span>
                <h4 className="font-serif-luxury text-lg text-white mt-1">
                  {language === "gu" ? "શાહી લગ્ન સેટ્સ" : "Royal Wedding Troussseau"}
                </h4>
                <p className="text-xs text-[#A8A29A] font-light leading-relaxed mt-2">
                  {t.about.bridalOverview}
                </p>
              </div>
              <button
                onClick={() => onNavigate("catalogue", "Bridal")}
                className="text-xs text-[#C6A15B] hover:underline pt-4 block text-left cursor-pointer"
              >
                {t.collections.bridal.explore} →
              </button>
            </div>
          </div>
        </div>

        {/* Brand Values */}
        <div className="space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
              {t.about.valuesKicker}
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#F7F4EE]">
              {t.about.valuesHeading}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="bg-[#181613] p-6 border border-[#2B2620] space-y-3">
                  <div className="w-10 h-10 bg-[#24201A] border border-[#C6A15B]/30 flex items-center justify-center text-[#E5CC91]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif-luxury text-lg text-white">{v.title}</h4>
                  <p className="text-xs text-[#A8A29A] font-light leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Customer-First Philosophy Banner */}
        <div className="bg-gradient-to-r from-[#181613] via-[#201C17] to-[#181613] border border-[#C6A15B]/30 p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#F7F4EE]">
            {t.about.philosophyHeading}
          </h3>
          <p className="text-xs sm:text-sm text-[#D5CEBF] font-light max-w-2xl mx-auto leading-relaxed">
            {t.about.philosophyDesc}
          </p>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#E5CC91] to-[#C6A15B] text-[#11100E] text-xs uppercase tracking-widest font-semibold hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(198,161,91,0.2)]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.about.connectBtn}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
