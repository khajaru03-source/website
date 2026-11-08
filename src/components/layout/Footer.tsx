import React from "react";
import { BrandLogo } from "../common/BrandLogo";
import { MessageCircle, MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { SITE_CONFIG } from "../../config/siteConfig";
import { ActiveView } from "../../types/jewellery";
import { createWhatsAppUrl, getGeneralWhatsAppMessage } from "../../utils/whatsapp";
import { useLanguage } from "../../i18n/LanguageContext";

interface FooterProps {
  onNavigate: (view: ActiveView, category?: "all" | "Gold" | "Silver" | "Diamond" | "Bridal") => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const whatsappUrl = createWhatsAppUrl(
    getGeneralWhatsAppMessage("Catalogue & Showroom Enquiry", language)
  );

  return (
    <footer className="bg-[#0C0B0A] border-t border-[#221D17] text-[#A8A29A] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#221D17]">
          
          {/* Col 1 & 2: Brand Lockup & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="md" onClick={() => onNavigate("home", "all")} />
            
            <p className="text-sm text-[#C2BBAF] font-light leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>

            {/* Direct WhatsApp Callout */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1B1916] hover:bg-[#25211B] border border-[#C6A15B]/40 text-[#E5CC91] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span className="font-semibold uppercase tracking-wider text-xs">{t.footer.directEnquiryBtn}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#F7F4EE] font-semibold">
              {t.footer.exploreTitle}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate("home", "all")}
                  className="hover:text-[#E5CC91] transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("catalogue", "all")}
                  className="hover:text-[#E5CC91] transition-colors"
                >
                  {language === "gu" ? "સંપૂર્ણ કેટલોગ" : "Full Catalogue"}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-[#E5CC91] transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-[#E5CC91] transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Collections */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#F7F4EE] font-semibold">
              {t.footer.collectionsTitle}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate("catalogue", "Gold")}
                  className="hover:text-[#E5CC91] transition-colors"
                >
                  {language === "gu" ? "સોનાના દાગીના (૨૨K)" : "Gold Jewellery (22K)"}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("catalogue", "Silver")}
                  className="hover:text-[#E5CC91] transition-colors"
                >
                  {language === "gu" ? "ચાંદીના દાગીના (૯૨૫)" : "Silver Jewellery (925)"}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("catalogue", "Diamond")}
                  className="hover:text-[#E5CC91] transition-colors"
                >
                  {language === "gu" ? "હીરાના દાગીના & સોલિટેર" : "Diamond Solitaires & Pendants"}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("catalogue", "Bridal")}
                  className="hover:text-[#E5CC91] transition-colors"
                >
                  {language === "gu" ? "શાહી લગ્ન સેટ્સ" : "Bridal Troussseau Sets"}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Placeholders */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#F7F4EE] font-semibold">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D5CEBF]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.location}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.businessHours.weekdays}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>{SITE_CONFIG.phonePlaceholder}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span className="truncate">{SITE_CONFIG.emailPlaceholder}</span>
              </li>
            </ul>

            <div className="flex items-center gap-3 pt-2 text-[#E5CC91]">
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1B1916] border border-[#2D2720] flex items-center justify-center hover:border-[#C6A15B] hover:text-white transition-colors"
                aria-label="Instagram (Sample)"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1B1916] border border-[#2D2720] flex items-center justify-center hover:border-[#C6A15B] hover:text-white transition-colors"
                aria-label="Facebook (Sample)"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#A8A29A]/80">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.brandName}. {t.footer.rightsReserved}
          </p>
          <p className="text-center md:text-right max-w-xl">
            {t.footer.disclaimer}
          </p>
        </div>

      </div>
    </footer>
  );
};
