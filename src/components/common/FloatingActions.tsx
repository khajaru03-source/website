import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { createWhatsAppUrl, getGeneralWhatsAppMessage } from "../../utils/whatsapp";
import { useLanguage } from "../../i18n/LanguageContext";

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = createWhatsAppUrl(
    getGeneralWhatsAppMessage("Jewellery Consultation & Custom Design Enquiry", language)
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside
      aria-label="Quick contact and back to top actions"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#1B1916]/90 hover:bg-[#25211B] text-[#E5CC91] border border-[#C6A15B]/40 shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label={t.floating.backToTop}
          title={t.floating.backToTop}
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating WhatsApp Action Pill with Tooltip */}
      <div className="relative group">
        {showTooltip && (
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 hidden sm:flex items-center">
            <div className="bg-[#181613] text-[#F7F4EE] text-xs py-1.5 px-3 rounded shadow-xl border border-[#C6A15B]/30 whitespace-nowrap flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>{t.floating.tooltip}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="text-[#A8A29A] hover:text-white ml-1 text-xs cursor-pointer"
                title="Dismiss"
              >
                ✕
              </button>
            </div>
            <div className="w-2 h-2 bg-[#181613] rotate-45 border-r border-t border-[#C6A15B]/30 -ml-1" />
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#20ba59] to-[#25D366] text-white flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] transition-all hover:scale-108 active:scale-95 group cursor-pointer"
          aria-label="Chat with Shakti Jewellers on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white text-transparent group-hover:scale-110 transition-transform" />
          <span className="sr-only">Chat on WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
