import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Sparkles, ExternalLink, HelpCircle } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { createWhatsAppUrl } from "../utils/whatsapp";
import { useLanguage } from "../i18n/LanguageContext";

export const ContactView: React.FC = () => {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "Gold Jewellery (22K)",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const preparedMsg = language === "gu"
      ? `નમસ્તે શક્તિ જ્વેલર્સ,\nમારું નામ: ${formData.name || "ગ્રાહક"}.\nપસંદગીનું કલેક્શન: ${formData.category}.\nસંપર્ક નંબર: ${formData.phone || "નથી જણાવેલ"}\nવિગત / પ્રશ્ન: ${formData.message || "હું આપના ઘરેણાં અને ભાવ વિશે પૂછપરછ કરવા માંગુ છું."}`
      : `Hello Shakti Jewellers,\nMy name is ${formData.name || "Customer"}.\nI am interested in: ${formData.category}.\nContact: ${formData.phone || "Not specified"}\nMessage: ${formData.message || "I would like to enquire about your catalogue and pricing."}`;
    
    const url = createWhatsAppUrl(preparedMsg);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const directWhatsappUrl = createWhatsAppUrl(
    language === "gu"
      ? "નમસ્તે શક્તિ જ્વેલર્સ, હું તમારા દાગીના કલેક્શન વિશે માહિતી મેળવવા અને ગુજરાત સ્થિત શોરૂમની મુલાકાત લેવા માંગુ છું."
      : "Hello Shakti Jewellers, I would like to enquire about your jewellery collections and visit your showroom in Gujarat."
  );

  const faqs = [
    {
      q: t.contact.faq1Q,
      a: t.contact.faq1A,
    },
    {
      q: t.contact.faq2Q,
      a: t.contact.faq2A,
    },
    {
      q: t.contact.faq3Q,
      a: t.contact.faq3A,
    },
  ];

  return (
    <div className="py-12 lg:py-20 bg-[#11100E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>{t.contact.kicker}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-[#F7F4EE]">
            {t.contact.heading}
          </h1>

          <p className="text-sm text-[#A8A29A] font-light max-w-xl mx-auto leading-relaxed">
            {t.contact.subheading}
          </p>
        </div>

        {/* Contact Grid: Details on Left, Interactive Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Configurable Placeholders & Location Info (lg: 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#181613] p-8 border border-[#2B2620] space-y-6">
              <h3 className="text-2xl font-serif-luxury text-[#F7F4EE]">
                {t.contact.showroomInfo}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Location & Address */}
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">
                      {t.contact.locationLabel}
                    </span>
                    <span className="text-white font-medium block">{SITE_CONFIG.location}</span>
                    <span className="text-[#A8A29A] text-xs block mt-0.5">{t.contact.locationSub}</span>
                  </div>
                </div>

                {/* WhatsApp Contact */}
                <div className="flex items-start gap-3.5">
                  <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#25D366] font-semibold">
                      {t.contact.whatsappLabel}
                    </span>
                    <span className="text-white font-medium block">+{SITE_CONFIG.whatsappNumber}</span>
                    <span className="text-[#A8A29A] text-xs block mt-0.5">{t.contact.whatsappSub}</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">
                      {t.contact.phoneLabel}
                    </span>
                    <span className="text-white font-medium block">{SITE_CONFIG.phonePlaceholder}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">
                      {t.contact.emailLabel}
                    </span>
                    <span className="text-white font-medium block">{SITE_CONFIG.emailPlaceholder}</span>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-[#26211A]">
                  <Clock className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">
                      {t.contact.hoursLabel}
                    </span>
                    <span className="text-[#F7F4EE] block">{SITE_CONFIG.businessHours.weekdays}</span>
                    <span className="text-[#A8A29A] text-xs block mt-0.5">{SITE_CONFIG.businessHours.sunday}</span>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="pt-2">
                <a
                  href={directWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-[#E5CC91] to-[#C6A15B] text-[#11100E] text-xs font-semibold uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(198,161,91,0.2)] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{t.contact.startChatBtn}</span>
                </a>
              </div>
            </div>

            {/* Google Maps Location Placeholder Card */}
            <div className="bg-[#181613] p-6 border border-[#2B2620] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">
                  {t.contact.mapHeading}
                </span>
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#E5CC91] hover:underline"
                >
                  <span>{t.contact.openMaps}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Styled Interactive Map Placeholder Frame */}
              <div className="relative aspect-[16/9] bg-[#11100E] border border-[#2D2720] overflow-hidden flex flex-col items-center justify-center text-center p-4 group">
                <MapPin className="w-8 h-8 text-[#C6A15B] mb-2 animate-bounce" />
                <span className="text-sm font-serif-luxury text-[#F7F4EE] font-medium">
                  {language === "gu" ? "શક્તિ જ્વેલર્સ શોરૂમ" : "Shakti Jewellers Showroom"}
                </span>
                <span className="text-xs text-[#A8A29A] mt-1">
                  Gujarat Jewellery Market Hub, India
                </span>
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 px-3 py-1.5 bg-[#1F1B16] border border-[#C6A15B]/40 hover:bg-[#C6A15B] hover:text-[#11100E] text-[11px] text-[#E5CC91] uppercase tracking-wider font-semibold transition-colors"
                >
                  {t.contact.getDirections}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct WhatsApp Enquiry Form (lg: 7 cols) */}
          <div className="lg:col-span-7 bg-[#161411] p-8 sm:p-10 border border-[#2D2720] space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-semibold">
                {t.contact.formKicker}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury font-normal text-[#F7F4EE]">
                {t.contact.formHeading}
              </h2>
              <p className="text-xs text-[#A8A29A]">
                {t.contact.formSub}
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A29A] mb-1.5 font-medium">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full bg-[#11100E] border border-[#2D2720] focus:border-[#C6A15B] text-xs sm:text-sm text-[#F7F4EE] placeholder-[#A8A29A]/50 px-3.5 py-2.5 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A29A] mb-1.5 font-medium">
                    {t.contact.phoneInputLabel}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-[#11100E] border border-[#2D2720] focus:border-[#C6A15B] text-xs sm:text-sm text-[#F7F4EE] placeholder-[#A8A29A]/50 px-3.5 py-2.5 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A8A29A] mb-1.5 font-medium">
                  {t.contact.interestLabel}
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-[#11100E] border border-[#2D2720] focus:border-[#C6A15B] text-xs sm:text-sm text-[#F7F4EE] px-3.5 py-2.5 outline-none cursor-pointer"
                >
                  <option value={language === "gu" ? "સોનાના દાગીના (૨૨K)" : "Gold Jewellery (22K)"}>
                    {language === "gu" ? "સોનાના દાગીના (૨૨K પરંપરાગત & આધુનિક)" : "Gold Jewellery (22K Traditional & Modern)"}
                  </option>
                  <option value={language === "gu" ? "ચાંદીના દાગીના (૯૨૫)" : "Silver Jewellery (925)"}>
                    {language === "gu" ? "ચાંદીના દાગીના (પાયલ, કડા અને ચેઇન)" : "Silver Jewellery (Payal, Kada & Chains)"}
                  </option>
                  <option value={language === "gu" ? "હીરાના દાગીના" : "Diamond Jewellery"}>
                    {language === "gu" ? "હીરાના દાગીના (સોલિટેર અને નેકલેસ)" : "Diamond Solitaires & High Jewellery"}
                  </option>
                  <option value={language === "gu" ? "શાહી લગ્ન સેટ્સ" : "Bridal Collection"}>
                    {language === "gu" ? "શાહી લગ્ન સેટ્સ અને દુલ્હન ઘરેણાં" : "Royal Bridal Sets & Wedding Troussseau"}
                  </option>
                  <option value={language === "gu" ? "કસ્ટમ ડિઝાઇન ઓર્ડર" : "Custom Bespoke Order"}>
                    {language === "gu" ? "કસ્ટમ ડિઝાઇન / વિશેષ પરામર્શ" : "Custom Bespoke Design / Consultation"}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A8A29A] mb-1.5 font-medium">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full bg-[#11100E] border border-[#2D2720] focus:border-[#C6A15B] text-xs sm:text-sm text-[#F7F4EE] placeholder-[#A8A29A]/50 p-3.5 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-[#E5CC91] to-[#C6A15B] text-[#11100E] text-xs font-semibold uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(198,161,91,0.25)] cursor-pointer"
              >
                <Send className="w-4 h-4 fill-current" />
                <span>{t.contact.submitBtn}</span>
              </button>

              <p className="text-[11px] text-[#A8A29A] text-center pt-1">
                {t.contact.spamNotice}
              </p>
            </form>

            {/* FAQs */}
            <div className="pt-8 border-t border-[#26211A] space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">
                <HelpCircle className="w-4 h-4 text-[#C6A15B]" />
                <span>{t.contact.faqKicker}</span>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="p-3.5 bg-[#11100E] border border-[#26211A] space-y-1">
                    <span className="text-xs font-semibold text-[#F7F4EE] block">
                      {faq.q}
                    </span>
                    <p className="text-xs text-[#A8A29A] font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
