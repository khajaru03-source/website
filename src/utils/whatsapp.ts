import { SITE_CONFIG } from "../config/siteConfig";
import { Language } from "../i18n/translations";

/**
 * Clean phone number removing any accidental spaces, dashes, or leading plus
 */
export function sanitizePhoneNumber(phone: string): string {
  return phone.replace(/[^0-9]/g, "");
}

/**
 * Generate standard WhatsApp click-to-chat URL with properly encoded message
 */
export function createWhatsAppUrl(customMessage: string, phoneNumber: string = SITE_CONFIG.whatsappNumber): string {
  const sanitizedNumber = sanitizePhoneNumber(phoneNumber);
  const encodedText = encodeURIComponent(customMessage);
  return `https://wa.me/${sanitizedNumber}?text=${encodedText}`;
}

/**
 * Requirement: WhatsApp enquiry for specific product with English/Gujarati support:
 * English: "Hello Shakti Jewellers, I am interested in [PRODUCT NAME]. Please share more details and pricing."
 * Gujarati: "નમસ્તે શક્તિ જ્વેલર્સ, મને [પ્રોડક્ટનું નામ] માં રસ છે. કૃપા કરીને વધુ વિગતો અને ભાવ જણાવશો."
 */
export function getProductWhatsAppMessage(productName: string, productId?: string, language: Language = "en"): string {
  if (language === "gu") {
    if (productId) {
      return `નમસ્તે શક્તિ જ્વેલર્સ, મને ${productName} (સંદર્ભ: ${productId}) માં રસ છે. કૃપા કરીને વધુ વિગતો અને ભાવ જણાવશો.`;
    }
    return `નમસ્તે શક્તિ જ્વેલર્સ, મને ${productName} માં રસ છે. કૃપા કરીને વધુ વિગતો અને ભાવ જણાવશો.`;
  }

  if (productId) {
    return `Hello Shakti Jewellers, I am interested in ${productName} (Item Ref: ${productId}). Please share more details and pricing.`;
  }
  return `Hello Shakti Jewellers, I am interested in ${productName}. Please share more details and pricing.`;
}

/**
 * General consultation WhatsApp message in English or Gujarati
 */
export function getGeneralWhatsAppMessage(topic?: string, language: Language = "en"): string {
  if (language === "gu") {
    if (topic) {
      return `નમસ્તે શક્તિ જ્વેલર્સ, હું ${topic} વિશે પૂછપરછ કરવા માંગુ છું. કૃપા કરીને મને કેટલોગ અને પરામર્શ વિશે માર્ગદર્શન આપશો.`;
    }
    return `નમસ્તે શક્તિ જ્વેલર્સ, હું તમારા દાગીના કલેક્શન વિશે માહિતી મેળવવા અને પરામર્શ કરવા માંગુ છું.`;
  }

  if (topic) {
    return `Hello Shakti Jewellers, I would like to enquire about ${topic}. Please guide me with your catalogue and consultation options.`;
  }
  return `Hello Shakti Jewellers, I would like to enquire about your jewellery collections and arrange a consultation.`;
}
