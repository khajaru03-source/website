import React from "react";
import { MessageCircle, Eye } from "lucide-react";
import { JewelleryProduct } from "../../types/jewellery";
import { ProductImage } from "./ProductImage";
import { createWhatsAppUrl, getProductWhatsAppMessage } from "../../utils/whatsapp";
import { useLanguage } from "../../i18n/LanguageContext";

interface ProductCardProps {
  product: JewelleryProduct;
  onViewDetails: (product: JewelleryProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
}) => {
  const { language, t } = useLanguage();

  const displayName = language === "gu" && product.nameGu ? product.nameGu : product.name;
  const displayTagline = language === "gu" && product.taglineGu ? product.taglineGu : product.tagline;
  const displaySubCategory = language === "gu" && product.subCategoryGu ? product.subCategoryGu : product.subCategory;
  const displayPrice = language === "gu" && product.priceDisplayGu ? product.priceDisplayGu : product.priceDisplay;

  const categoryLabel = language === "gu" 
    ? (product.category === "Gold" ? "સોનું" : product.category === "Silver" ? "ચાંદી" : product.category === "Diamond" ? "હીરા" : "બ્રાઇડલ")
    : product.category;

  const whatsappUrl = createWhatsAppUrl(
    getProductWhatsAppMessage(displayName, product.id, language)
  );

  return (
    <div
      className="group relative bg-[#181613] border border-[#2B2620]/60 hover:border-[#C6A15B]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
      data-testid={`product-card-${product.id}`}
    >
      {/* Product Image Container */}
      <div
        onClick={() => onViewDetails(product)}
        className="cursor-pointer relative overflow-hidden"
      >
        <ProductImage
          src={product.primaryImage}
          alt={displayName}
          category={product.category}
          subCategory={product.subCategory}
          aspectRatio="4:3"
        />

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="px-4 py-2 bg-[#11100E]/90 hover:bg-[#11100E] text-[#F7F4EE] border border-[#C6A15B]/40 text-xs font-medium tracking-wide flex items-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-[#E5CC91]" />
            <span>{t.product.viewDetails}</span>
          </button>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-1.5">
          {/* Zero-Pill Unboxed Metadata with Typographic Separator */}
          <div className="flex items-center gap-2 text-xs text-[#A8A29A]">
            <span className="uppercase tracking-wider font-semibold text-[#C6A15B]">
              {categoryLabel}
            </span>
            <span aria-hidden="true" className="text-[#C6A15B]/50">·</span>
            <span>{displaySubCategory}</span>
            {product.specs.metalPurity && (
              <>
                <span aria-hidden="true" className="text-[#C6A15B]/50">·</span>
                <span className="truncate">{product.specs.metalPurity.split(" ")[0]}</span>
              </>
            )}
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onViewDetails(product)}
            className="text-lg font-serif-luxury font-medium text-[#F7F4EE] group-hover:text-[#E5CC91] transition-colors cursor-pointer line-clamp-1"
            title={displayName}
          >
            {displayName}
          </h3>

          {/* Tagline / Subtitle */}
          <p className="text-xs text-[#A8A29A] line-clamp-2 font-light leading-relaxed">
            {displayTagline}
          </p>
        </div>

        {/* Price & Action Footer */}
        <div className="pt-3 border-t border-[#26221C] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs tracking-wider uppercase text-[#E5CC91] font-semibold">
              {displayPrice}
            </span>
            <span className="text-[10px] text-[#A8A29A]/80 tracking-tight font-mono">
              {t.product.ref}: {product.id}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* View Details Button */}
            <button
              onClick={() => onViewDetails(product)}
              className="w-full py-2 px-3 text-xs font-medium tracking-wider uppercase text-[#F7F4EE] bg-[#221F1B] hover:bg-[#2C2721] border border-[#3A332B] transition-colors flex items-center justify-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>{t.product.details}</span>
            </button>

            {/* WhatsApp Enquiry Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 text-xs font-semibold tracking-wider uppercase text-[#11100E] bg-gradient-to-r from-[#E5CC91] to-[#C6A15B] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
              aria-label={`Enquire about ${displayName} on WhatsApp`}
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>{t.product.enquire}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
