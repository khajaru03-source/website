import React, { useState, useEffect } from "react";
import { BrandLogo } from "../common/BrandLogo";
import { Search, Menu, X, MessageCircle, Languages } from "lucide-react";
import { ActiveView } from "../../types/jewellery";
import { createWhatsAppUrl, getGeneralWhatsAppMessage } from "../../utils/whatsapp";
import { useLanguage } from "../../i18n/LanguageContext";

interface NavbarProps {
  activeView: ActiveView;
  activeCategoryFilter: "all" | "Gold" | "Silver" | "Diamond" | "Bridal";
  onNavigate: (view: ActiveView, category?: "all" | "Gold" | "Silver" | "Diamond" | "Bridal") => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  activeCategoryFilter,
  onNavigate,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = createWhatsAppUrl(
    getGeneralWhatsAppMessage("Jewellery Catalogue Enquiry", language)
  );

  const navLinks = [
    { label: t.nav.home, view: "home" as ActiveView, category: "all" as const },
    { label: t.nav.gold, view: "catalogue" as ActiveView, category: "Gold" as const },
    { label: t.nav.silver, view: "catalogue" as ActiveView, category: "Silver" as const },
    { label: t.nav.diamond, view: "catalogue" as ActiveView, category: "Diamond" as const },
    { label: t.nav.bridal, view: "catalogue" as ActiveView, category: "Bridal" as const },
    { label: t.nav.about, view: "about" as ActiveView, category: undefined },
    { label: t.nav.contact, view: "contact" as ActiveView, category: undefined },
  ];

  const handleLinkClick = (view: ActiveView, category?: "all" | "Gold" | "Silver" | "Diamond" | "Bridal") => {
    onNavigate(view, category);
    setMobileMenuOpen(false);
  };

  const isLinkActive = (item: typeof navLinks[0]) => {
    if (item.view === "home") {
      return activeView === "home";
    }
    if (item.view === "about") {
      return activeView === "about";
    }
    if (item.view === "contact") {
      return activeView === "contact";
    }
    if (item.view === "catalogue") {
      return activeView === "catalogue" && activeCategoryFilter === item.category;
    }
    return false;
  };

  return (
    <>
      {/* Scroll Progress Bar at very top of screen */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#C6A15B] via-[#E5CC91] to-[#FFF8E7] z-50 transition-all duration-75 ease-out shadow-[0_0_8px_rgba(198,161,91,0.6)]"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header className="sticky top-0 z-40 bg-[#11100E]/95 backdrop-blur-md border-b border-[#24201A] transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-2 sm:gap-6 lg:gap-8">
            
            {/* Zone 1: Brand Wordmark / Logo */}
            <div className="shrink-0">
              <BrandLogo
                size="md"
                onClick={() => handleLinkClick("home", "all")}
              />
            </div>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium tracking-wide"
            >
              {navLinks.map((item) => {
                const active = isLinkActive(item);
                return (
                  <button
                    key={`${item.label}-${item.category || ""}`}
                    onClick={() => handleLinkClick(item.view, item.category)}
                    className={`relative py-1 whitespace-nowrap transition-colors duration-150 ${
                      active
                        ? "text-[#E5CC91] font-semibold"
                        : "text-[#A8A29A] hover:text-[#F7F4EE]"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C6A15B] to-[#E5CC91] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Language Toggle, Search & WhatsApp Action */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              
              {/* Bilingual Language Switcher Toggle */}
              <button
                onClick={() => setLanguage(language === "en" ? "gu" : "en")}
                className="px-2.5 py-1.5 text-xs border border-[#C6A15B]/40 hover:border-[#E5CC91] text-[#E5CC91] hover:text-white transition-all tracking-wider flex items-center gap-1.5 bg-[#161411]"
                title={language === "en" ? "ગુજરાતીમાં જુઓ (Switch to Gujarati)" : "Switch to English"}
                aria-label="Toggle language between English and Gujarati"
              >
                <Languages className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span className={language === "en" ? "font-bold text-white" : "text-[#A8A29A]"}>EN</span>
                <span className="text-[#C6A15B]/40">|</span>
                <span className={language === "gu" ? "font-bold text-[#E5CC91]" : "text-[#A8A29A]"}>ગુજરાતી</span>
              </button>

              {/* Search Trigger */}
              <button
                onClick={onOpenSearch}
                className="p-2 text-[#A8A29A] hover:text-[#E5CC91] rounded-full hover:bg-[#1B1916] transition-colors"
                aria-label={t.nav.search}
                title={t.nav.search}
              >
                <Search className="w-5 h-5" />
              </button>

              {/* WhatsApp Enquiry Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#11100E] bg-gradient-to-r from-[#E5CC91] to-[#C6A15B] rounded-none hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_14px_rgba(198,161,91,0.2)]"
                aria-label={`${t.nav.whatsappEnquiry} with Shakti Jewellers`}
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.nav.whatsappEnquiry}</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#A8A29A] hover:text-[#E5CC91] hover:bg-[#1B1916] rounded-md transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#24201A] bg-[#161411] px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Language Switcher in Mobile Drawer */}
            <div className="flex items-center justify-between pb-3 border-b border-[#24201A]">
              <span className="text-xs text-[#A8A29A] flex items-center gap-1.5">
                <Languages className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Language / ભાષા:</span>
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 text-xs tracking-wider transition-colors ${
                    language === "en"
                      ? "bg-[#C6A15B] text-[#11100E] font-bold"
                      : "bg-[#1B1916] text-[#A8A29A] hover:text-white"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("gu")}
                  className={`px-3 py-1 text-xs tracking-wider transition-colors ${
                    language === "gu"
                      ? "bg-[#C6A15B] text-[#11100E] font-bold"
                      : "bg-[#1B1916] text-[#A8A29A] hover:text-white"
                  }`}
                >
                  ગુજરાતી
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#24201A]">
              {navLinks.map((item) => {
                const active = isLinkActive(item);
                return (
                  <button
                    key={`mobile-${item.label}`}
                    onClick={() => handleLinkClick(item.view, item.category)}
                    className={`text-left px-3 py-2.5 rounded text-sm font-medium tracking-wide transition-colors ${
                      active
                        ? "bg-[#25211B] text-[#E5CC91] font-semibold border-l-2 border-[#C6A15B]"
                        : "text-[#A8A29A] hover:text-[#F7F4EE] hover:bg-[#1B1916]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="flex items-center justify-between w-full px-3 py-2.5 text-sm text-[#A8A29A] hover:text-white bg-[#1B1916] rounded"
              >
                <span className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#C6A15B]" />
                  <span>{t.nav.searchPlaceholder}</span>
                </span>
                <span className="text-xs text-[#A8A29A]">Tap</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#11100E] bg-gradient-to-r from-[#E5CC91] to-[#C6A15B] rounded-none shadow-[0_2px_10px_rgba(198,161,91,0.2)]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.nav.whatsappEnquiry}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
