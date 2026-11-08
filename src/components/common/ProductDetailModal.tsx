import React, { useState, useEffect } from "react";
import { X, MessageCircle, Sparkles, ArrowRight, Share2, Check } from "lucide-react";
import { JewelleryProduct } from "../../types/jewellery";
import { ProductImage } from "./ProductImage";
import { createWhatsAppUrl, getProductWhatsAppMessage } from "../../utils/whatsapp";
import { SAMPLE_PRODUCTS } from "../../data/products";
import { useLanguage } from "../../i18n/LanguageContext";

interface ProductDetailModalProps {
  product: JewelleryProduct | null;
  onClose: () => void;
  onSelectProduct: (product: JewelleryProduct) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onSelectProduct,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [copiedLink, setCopiedLink] = useState(false);
  const { language, t } = useLanguage();

  useEffect(() => {
    if (product) {
      setSelectedImage(product.primaryImage);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [product]);

  if (!product) return null;

  const displayName = language === "gu" && product.nameGu ? product.nameGu : product.name;
  const displayDescription = language === "gu" && product.descriptionGu ? product.descriptionGu : product.description;
  const displaySubCategory = language === "gu" && product.subCategoryGu ? product.subCategoryGu : product.subCategory;
  const displayPrice = language === "gu" && product.priceDisplayGu ? product.priceDisplayGu : product.priceDisplay;

  const categoryLabel = language === "gu" 
    ? (product.category === "Gold" ? "સોનું" : product.category === "Silver" ? "ચાંદી" : product.category === "Diamond" ? "હીરા" : "બ્રાઇડલ")
    : product.category;

  const whatsappMessage = getProductWhatsAppMessage(displayName, product.id, language);
  const whatsappUrl = createWhatsAppUrl(whatsappMessage);

  // Related products from the same category
  const relatedProducts = SAMPLE_PRODUCTS
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const allImages = Array.from(new Set([product.primaryImage, ...(product.galleryImages || [])]));

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-detail-title"
    >
      <div
        className="w-full max-w-5xl bg-[#161411] border border-[#2D2720] shadow-2xl relative my-8 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#11100E]/80 hover:bg-[#11100E] text-[#A8A29A] hover:text-white border border-[#2D2720] transition-colors"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Image Gallery (lg: 7 cols) */}
          <div className="lg:col-span-7 bg-[#11100E] p-6 lg:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#26211A]">
            {/* Primary Display */}
            <div className="relative overflow-hidden aspect-[4/3] bg-[#181613] border border-[#2B2620]">
              <ProductImage
                src={selectedImage || product.primaryImage}
                alt={displayName}
                category={product.category}
                subCategory={product.subCategory}
                aspectRatio="custom"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gallery Thumbnails */}
            {allImages.length > 1 && (
              <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-1">
                {allImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`relative w-20 h-16 shrink-0 overflow-hidden border transition-all ${
                      selectedImage === imgUrl
                        ? "border-[#C6A15B] scale-102"
                        : "border-[#2B2620] opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`${displayName} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Demonstration Notice */}
            <div className="mt-6 p-3 bg-[#181613] border border-[#2B2620] flex items-center gap-2.5 text-xs text-[#A8A29A]">
              <Sparkles className="w-4 h-4 text-[#C6A15B] shrink-0" />
              <span>{t.product.sampleCatalogueNotice}</span>
            </div>
          </div>

          {/* Right Column: Product Information & WhatsApp Enquiry (lg: 5 cols) */}
          <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              {/* Category & Item ID */}
              <div className="flex items-center justify-between text-xs text-[#A8A29A] pr-10">
                <div className="flex items-center gap-2">
                  <span className="uppercase tracking-widest text-[#C6A15B] font-semibold">
                    {categoryLabel}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{displaySubCategory}</span>
                </div>
                <span className="font-mono text-[11px] text-[#A8A29A]">{t.product.ref}: {product.id}</span>
              </div>

              {/* Product Title */}
              <h2
                id="product-detail-title"
                className="text-2xl sm:text-3xl font-serif-luxury font-normal text-[#F7F4EE] leading-snug"
              >
                {displayName}
              </h2>

              {/* Price Display */}
              <div className="py-2 border-y border-[#26211A] flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#A8A29A] block">
                    {language === "gu" ? "ભાવ" : "Pricing"}
                  </span>
                  <span className="text-lg font-serif-luxury font-semibold text-[#E5CC91]">
                    {displayPrice}
                  </span>
                </div>
                <span className="text-[11px] text-[#C6A15B] bg-[#1E1B17] px-2.5 py-1 border border-[#C6A15B]/30 uppercase tracking-wider font-medium">
                  {t.product.bespokeQuote}
                </span>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-[#A8A29A] font-semibold">
                  {t.product.designNarrative}
                </h4>
                <p className="text-xs sm:text-sm text-[#D5CEBF] font-light leading-relaxed">
                  {displayDescription}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs uppercase tracking-wider text-[#A8A29A] font-semibold">
                  {t.product.artisanalDetails}
                </h4>
                <div className="bg-[#11100E] p-3.5 border border-[#26211A] space-y-2 text-xs">
                  <div className="flex justify-between py-0.5 border-b border-[#1E1B17]">
                    <span className="text-[#A8A29A]">{t.product.preciousMetal}</span>
                    <span className="text-[#F7F4EE] font-medium">{product.specs.metal}</span>
                  </div>
                  {product.specs.metalPurity && (
                    <div className="flex justify-between py-0.5 border-b border-[#1E1B17]">
                      <span className="text-[#A8A29A]">{t.product.purityStandard}</span>
                      <span className="text-[#F7F4EE] font-medium">{product.specs.metalPurity}</span>
                    </div>
                  )}
                  {product.specs.approxWeight && (
                    <div className="flex justify-between py-0.5 border-b border-[#1E1B17]">
                      <span className="text-[#A8A29A]">{t.product.approxWeight}</span>
                      <span className="text-[#F7F4EE] font-medium">{product.specs.approxWeight}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-0.5 border-b border-[#1E1B17]">
                    <span className="text-[#A8A29A]">{t.product.craftStyle}</span>
                    <span className="text-[#F7F4EE] font-medium">{product.specs.craftsmanshipStyle}</span>
                  </div>
                  {product.specs.stoneSetting && (
                    <div className="flex justify-between py-0.5 border-b border-[#1E1B17]">
                      <span className="text-[#A8A29A]">{t.product.stoneSetting}</span>
                      <span className="text-[#F7F4EE] font-medium">{product.specs.stoneSetting}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-0.5">
                    <span className="text-[#A8A29A]">{t.product.customization}</span>
                    <span className="text-[#E5CC91] font-medium">{t.product.availableOnRequest}</span>
                  </div>
                </div>
              </div>

              {product.occasion && (
                <div className="text-xs text-[#A8A29A]">
                  <span className="text-[#C6A15B] font-medium">{t.product.recommendedFor}: </span>
                  <span>{product.occasion}</span>
                </div>
              )}

            </div>

            {/* Actions & WhatsApp Conversion */}
            <div className="pt-4 border-t border-[#26211A] space-y-3">
              {/* Primary WhatsApp Conversion Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-gradient-to-r from-[#E5CC91] to-[#C6A15B] text-[#11100E] text-xs font-semibold uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(198,161,91,0.25)]"
                aria-label={`Enquire for Price on WhatsApp for ${displayName}`}
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.product.enquireWhatsAppBtn}</span>
              </a>

              <div className="flex items-center justify-between text-xs text-[#A8A29A]">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 hover:text-[#E5CC91] transition-colors py-1 cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? t.product.linkCopied : t.product.shareDesign}</span>
                </button>
                <span className="text-[11px] text-[#A8A29A]">Gujarat, India</span>
              </div>
            </div>

          </div>

        </div>

        {/* Related Products Bar */}
        {relatedProducts.length > 0 && (
          <div className="p-6 bg-[#11100E] border-t border-[#26211A]">
            <h4 className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold mb-3">
              {t.product.similarCreations} ({categoryLabel})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {relatedProducts.map((rel) => {
                const relName = language === "gu" && rel.nameGu ? rel.nameGu : rel.name;
                const relPrice = language === "gu" && rel.priceDisplayGu ? rel.priceDisplayGu : rel.priceDisplay;
                return (
                  <div
                    key={rel.id}
                    onClick={() => onSelectProduct(rel)}
                    className="flex items-center gap-3 p-2.5 bg-[#181613] hover:bg-[#201D18] border border-[#2B2620] cursor-pointer transition-all group"
                  >
                    <div className="w-12 h-12 shrink-0 overflow-hidden bg-black">
                      <img
                        src={rel.primaryImage}
                        alt={relName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-serif-luxury text-[#F7F4EE] group-hover:text-[#E5CC91] truncate block">
                        {relName}
                      </span>
                      <span className="text-[11px] text-[#E5CC91] font-semibold">
                        {relPrice}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A8A29A] group-hover:text-[#C6A15B] shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
