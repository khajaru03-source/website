import React from "react";
import { MessageCircle, MapPin, Sparkles } from "lucide-react";
import { createWhatsAppUrl, getGeneralWhatsAppMessage } from "../../utils/whatsapp";
import { useLanguage } from "../../i18n/LanguageContext";

export const AnnouncementBar: React.FC = () => {
  const { language, t } = useLanguage();
  const whatsappUrl = createWhatsAppUrl(
    getGeneralWhatsAppMessage("Catalogue Consultation", language)
  );

  return (
    <aside
      aria-label="Announcement"
      className="bg-[#161411] border-b border-[#2D2720] text-[#E5CC91] text-xs py-2 px-4 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Location indicator */}
        <div className="hidden sm:flex items-center gap-1.5 text-[#A8A29A]">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
          <span className="tracking-wide">{t.announcement.location}</span>
          <span className="text-[#C6A15B]/40">·</span>
          <span>{t.announcement.craftsmanship}</span>
        </div>

        {/* Center: Brand Announcement */}
        <div className="flex items-center justify-center gap-2 mx-auto sm:mx-0 font-medium tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
          <span className="text-center truncate">
            {t.announcement.banner}
          </span>
        </div>

        {/* Right: Direct WhatsApp Chat */}
        <div className="hidden md:flex items-center gap-2 text-right shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#E5CC91] hover:text-white transition-colors duration-150 font-medium"
            title="Chat directly on WhatsApp with Shakti Jewellers"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>{t.announcement.whatsappText}</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
