import React, { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { JewelleryProduct, MetalType } from "../../types/jewellery";
import { SAMPLE_PRODUCTS } from "../../data/products";
import { filterProducts } from "../../utils/catalogFilter";
import { ProductImage } from "./ProductImage";
import { useLanguage } from "../../i18n/LanguageContext";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: JewelleryProduct) => void;
  onViewAllInCatalogue: (query: string, category: "all" | MetalType) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onViewAllInCatalogue,
}) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | MetalType>("all");
  const inputRef = useRef<HTMLInputElement>(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
      setCategory("all");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const results = filterProducts(SAMPLE_PRODUCTS, {
    category,
    subCategory: "all",
    searchQuery: query,
    sortBy: "featured",
  });

  const categories: ("all" | MetalType)[] = ["all", "Gold", "Silver", "Diamond", "Bridal"];

  const getCategoryLabel = (cat: "all" | MetalType) => {
    if (cat === "all") return t.catalogue.allCollections;
    if (language === "gu") {
      if (cat === "Gold") return "સોનું";
      if (cat === "Silver") return "ચાંદી";
      if (cat === "Diamond") return "હીરા";
      if (cat === "Bridal") return "બ્રાઇડલ";
    }
    return cat;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search Jewellery Catalogue"
    >
      <div
        className="w-full max-w-3xl bg-[#161411] border border-[#2D2720] shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#26211A] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#C6A15B] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.catalogue.searchPlaceholder}
            className="w-full bg-transparent text-sm sm:text-base text-[#F7F4EE] placeholder-[#A8A29A] outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-[#A8A29A] hover:text-white p-1 text-xs cursor-pointer"
              aria-label="Clear search query"
            >
              {t.catalogue.clear}
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-[#A8A29A] hover:text-white rounded hover:bg-[#221D17] cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters Bar */}
        <div className="px-4 sm:px-6 py-3 bg-[#11100E] border-b border-[#26211A] flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-xs text-[#A8A29A] uppercase tracking-wider shrink-0 mr-1">
            {t.catalogue.metalLabel}
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 text-xs font-medium tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
                category === cat
                  ? "bg-[#C6A15B] text-[#11100E] font-semibold"
                  : "bg-[#1B1916] text-[#A8A29A] hover:text-[#F7F4EE] hover:bg-[#221D17]"
              }`}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3 flex-1">
          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {results.slice(0, 8).map((product) => {
                const displayName = language === "gu" && product.nameGu ? product.nameGu : product.name;
                const displaySub = language === "gu" && product.subCategoryGu ? product.subCategoryGu : product.subCategory;
                const displayPrice = language === "gu" && product.priceDisplayGu ? product.priceDisplayGu : product.priceDisplay;
                return (
                  <div
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="flex items-center gap-3 p-3 bg-[#181613] hover:bg-[#201D18] border border-[#26211A] hover:border-[#C6A15B]/40 cursor-pointer transition-all group"
                  >
                    <div className="w-16 h-16 shrink-0 overflow-hidden bg-[#11100E]">
                      <ProductImage
                        src={product.primaryImage}
                        alt={displayName}
                        category={product.category}
                        subCategory={product.subCategory}
                        aspectRatio="1:1"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 text-[10px] text-[#A8A29A] uppercase tracking-wider">
                        <span className="text-[#C6A15B] font-semibold">{product.category}</span>
                        <span>·</span>
                        <span>{displaySub}</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-serif-luxury text-[#F7F4EE] group-hover:text-[#E5CC91] truncate font-medium">
                        {displayName}
                      </h4>
                      <span className="text-[11px] text-[#E5CC91] font-semibold">
                        {displayPrice}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#A8A29A] group-hover:text-[#C6A15B] group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="py-12 text-center space-y-3">
              <Search className="w-10 h-10 text-[#C6A15B]/30 mx-auto" />
              <p className="text-sm text-[#F7F4EE] font-serif-luxury text-lg">
                {t.catalogue.emptyTitle}
              </p>
              <p className="text-xs text-[#A8A29A] max-w-sm mx-auto">
                {t.catalogue.emptyDesc}
              </p>
              <button
                onClick={() => {
                  setQuery("");
                  setCategory("all");
                }}
                className="mt-2 text-xs uppercase tracking-wider text-[#C6A15B] hover:underline cursor-pointer"
              >
                {t.catalogue.resetFiltersBtn}
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        {results.length > 0 && (
          <div className="p-4 bg-[#11100E] border-t border-[#26211A] flex items-center justify-between text-xs text-[#A8A29A]">
            <span>{t.catalogue.showing} {Math.min(results.length, 8)} / {results.length}</span>
            <button
              onClick={() => {
                onViewAllInCatalogue(query, category);
                onClose();
              }}
              className="text-[#E5CC91] hover:text-white font-medium flex items-center gap-1.5 cursor-pointer"
            >
              <span>{language === "gu" ? "કેટલોગમાં બધા પરિણામો જુઓ" : "View All Results in Catalogue"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
