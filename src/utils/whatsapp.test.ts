import test from "node:test";
import assert from "node:assert/strict";
import { sanitizePhoneNumber, createWhatsAppUrl, getProductWhatsAppMessage, getGeneralWhatsAppMessage } from "./whatsapp";

test("sanitizePhoneNumber removes non-digit characters", () => {
  assert.equal(sanitizePhoneNumber("+91 98765 43210"), "919876543210");
  assert.equal(sanitizePhoneNumber("91-9876-543210"), "919876543210");
});

test("getProductWhatsAppMessage formats expected English and Gujarati text", () => {
  const msgEn = getProductWhatsAppMessage("Royal Kundan Necklace", "SJ-GLD-101", "en");
  assert.equal(msgEn, "Hello Shakti Jewellers, I am interested in Royal Kundan Necklace (Item Ref: SJ-GLD-101). Please share more details and pricing.");

  const msgGu = getProductWhatsAppMessage("રોયલ કુંદન નેકલેસ", "SJ-GLD-101", "gu");
  assert.equal(msgGu, "નમસ્તે શક્તિ જ્વેલર્સ, મને રોયલ કુંદન નેકલેસ (સંદર્ભ: SJ-GLD-101) માં રસ છે. કૃપા કરીને વધુ વિગતો અને ભાવ જણાવશો.");
});

test("createWhatsAppUrl produces valid WhatsApp click-to-chat URL with encoded text", () => {
  const msg = getProductWhatsAppMessage("Kundan Choker", "SJ-GLD-001");
  const url = createWhatsAppUrl(msg, "919876543210");
  assert.match(url, /^https:\/\/wa\.me\/919876543210\?text=/);
  assert.ok(url.includes("Kundan%20Choker"));
  assert.ok(url.includes("SJ-GLD-001"));
});

test("getGeneralWhatsAppMessage handles with and without topic in English and Gujarati", () => {
  const generalEn = getGeneralWhatsAppMessage(undefined, "en");
  assert.ok(generalEn.includes("Hello Shakti Jewellers"));

  const specificGu = getGeneralWhatsAppMessage("બ્રાઇડલ કલેક્શન", "gu");
  assert.ok(specificGu.includes("બ્રાઇડલ કલેક્શન"));
});
