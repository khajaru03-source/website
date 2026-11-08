import React from "react";
import { ArrowRight, MessageCircle, Heart } from "lucide-react";
import { createWhatsAppUrl, getGeneralWhatsAppMessage } from "../../utils/whatsapp";
import { useLanguage } from "../../i18n/LanguageContext";

interface BridalCampaignSectionProps {
  onExploreBridal: () => void;
}

export const BridalCampaignSection: React.FC<BridalCampaignSectionProps> = ({
  onExploreBridal,
}) => {
  const { language, t } = useLanguage();
  const whatsappUrl = createWhatsAppUrl(
    getGeneralWhatsAppMessage("Bridal Troussseau & Wedding Sets Consultation", language)
  );

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0F0E0C]">
      {/* Background Photography with Luxury Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/brand/bridal_jewellery_campaign.jpg"
          alt="Royal Indian Bridal Jewellery Set by Shakti Jewellers"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#11100E] via-[#11100E]/85 to-[#11100E]/60" />
        <div className="absolute inset-0 bg-[#540914]/20 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6">
          
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E5CC91] font-semibold border-b border-[#C6A15B]/30 pb-1">
            <Heart className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>{t.bridalBanner.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-[#F7F4EE] leading-[1.15]">
            {t.bridalBanner.headingLine1} <br />
            <span className="italic text-[#E5CC91]">{t.bridalBanner.headingLine2}</span>
          </h2>

          <p className="text-sm sm:text-base text-[#D5CEBF] font-light leading-relaxed">
            {t.bridalBanner.description}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreBridal}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#E5CC91] to-[#C6A15B] text-[#11100E] text-xs font-semibold tracking-widest uppercase hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(198,161,91,0.3)]"
            >
              <span>{t.bridalBanner.exploreBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#11100E]/80 backdrop-blur-sm border border-[#C6A15B]/50 hover:border-[#E5CC91] text-[#E5CC91] text-xs font-semibold tracking-widest uppercase transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>{t.bridalBanner.bookAppointmentBtn}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
