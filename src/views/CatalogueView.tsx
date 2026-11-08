import React, { useState, useMemo } from "react";
import { Search, Filter, RotateCcw, Sparkles } from "lucide-react";
import { JewelleryProduct, MetalType, SubCategory, FilterState } from "../types/jewellery";
import { SAMPLE_PRODUCTS } from "../data/products";
import { filterProducts, getAvailableSubCategories } from "../utils/catalogFilter";
import { ProductCard } from "../components/common/ProductCard";
import { useLanguage } from "../i18n/LanguageContext";

interface CatalogueViewProps {
  initialCategory?: "all" | MetalType;
  initialQuery?: string;
  onViewProductDetails: (product: JewelleryProduct) => void;
}

export const CatalogueView: React.FC<CatalogueViewProps> = ({
  initialCategory = "all",
  initialQuery = "",
  onViewProductDetails,
}) => {
  const { language, t } = useLanguage();
  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory,
    subCategory: "all",
    searchQuery: initialQuery,
    sortBy: "featured",
  });

  // Keep filters in sync when initial props change
  React.useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      category: initialCategory,
      searchQuery: initialQuery,
      subCategory: "all",
    }));
  }, [initialCategory, initialQuery]);

  const availableSubCategories = useMemo(() => {
    return getAvailableSubCategories(SAMPLE_PRODUCTS, filters.category);
  }, [filters.category]);

  const filteredProducts = useMemo(() => {
    return filterProducts(SAMPLE_PRODUCTS, filters);
  }, [filters]);

  const categories: ("all" | MetalType)[] = ["all", "Gold", "Silver", "Diamond", "Bridal"];

  const getCategoryLabel = (cat: "all" | MetalType) => {
    if (cat === "all") return t.catalogue.allCollections;
    if (cat === "Gold") return t.catalogue.goldJewellery;
    if (cat === "Silver") return t.catalogue.silverJewellery;
    if (cat === "Diamond") return t.catalogue.diamondJewellery;
    if (cat === "Bridal") return t.catalogue.bridalJewellery;
    return cat;
  };

  const handleCategoryChange = (cat: "all" | MetalType) => {
    setFilters((prev) => ({
      ...prev,
      category: cat,
      subCategory: "all", // reset subcategory on category switch
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      category: "all",
      subCategory: "all",
      searchQuery: "",
      sortBy: "featured",
    });
  };

  const hasActiveFilters =
    filters.category !== "all" ||
    filters.subCategory !== "all" ||
    filters.searchQuery.trim() !== "" ||
    filters.sortBy !== "featured";

  return (
    <div className="py-12 lg:py-20 bg-[#11100E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>{t.catalogue.kicker}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-[#F7F4EE]">
            {t.catalogue.heading}
          </h1>

          <p className="text-sm text-[#A8A29A] font-light leading-relaxed">
            {t.catalogue.description}
          </p>

          {/* Sample Catalogue Notice */}
          <div className="inline-block bg-[#1B1916] border border-[#2D2720] px-4 py-1.5 text-xs text-[#E5CC91]">
            <span>{t.catalogue.sampleNotice}</span>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-[#181613] border border-[#26211A] p-4 sm:p-6 space-y-5">
          
          {/* Row 1: Search Input & Sort Selection */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#C6A15B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={filters.searchQuery}
                onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
                placeholder={t.catalogue.searchPlaceholder}
                className="w-full bg-[#11100E] border border-[#2D2720] focus:border-[#C6A15B] text-xs sm:text-sm text-[#F7F4EE] placeholder-[#A8A29A] pl-10 pr-10 py-3 outline-none transition-colors"
              />
              {filters.searchQuery && (
                <button
                  onClick={() => setFilters((prev) => ({ ...prev, searchQuery: "" }))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#A8A29A] hover:text-white cursor-pointer"
                  aria-label="Clear search input"
                >
                  {t.catalogue.clear}
                </button>
              )}
            </div>

            {/* Sort Dropdown & Reset */}
            <div className="flex items-center gap-3 shrink-0">
              <label htmlFor="sort-select" className="text-xs text-[#A8A29A] uppercase tracking-wider shrink-0">
                {t.catalogue.sortBy}
              </label>
              <select
                id="sort-select"
                value={filters.sortBy}
                onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value as any }))}
                className="bg-[#11100E] border border-[#2D2720] text-xs text-[#F7F4EE] px-3 py-2.5 outline-none cursor-pointer focus:border-[#C6A15B]"
              >
                <option value="featured">{t.catalogue.sortFeatured}</option>
                <option value="name-asc">{t.catalogue.sortNameAsc}</option>
                <option value="name-desc">{t.catalogue.sortNameDesc}</option>
              </select>

              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs text-[#C6A15B] hover:text-white bg-[#221D17] hover:bg-[#2A241C] border border-[#3A3226] transition-colors cursor-pointer"
                  title="Clear all filters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t.catalogue.reset}</span>
                </button>
              )}
            </div>
          </div>

          {/* Row 2: Category Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar border-t border-[#221D17]">
            <span className="text-xs text-[#A8A29A] uppercase tracking-wider shrink-0 mr-2 flex items-center gap-1">
              <Filter className="w-3 h-3 text-[#C6A15B]" />
              <span>{t.catalogue.metalLabel}</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
                  filters.category === cat
                    ? "bg-[#C6A15B] text-[#11100E] shadow-[0_2px_10px_rgba(198,161,91,0.2)]"
                    : "bg-[#11100E] text-[#A8A29A] hover:text-[#F7F4EE] hover:bg-[#201C17] border border-[#2B2620]"
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>

          {/* Row 3: Subcategory Pills (interactive filters) */}
          {availableSubCategories.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
              <span className="text-xs text-[#A8A29A] uppercase tracking-wider shrink-0 mr-1">
                {t.catalogue.typeLabel}
              </span>
              <button
                onClick={() => setFilters((prev) => ({ ...prev, subCategory: "all" }))}
                className={`px-3 py-1 text-xs transition-colors rounded-none whitespace-nowrap cursor-pointer ${
                  filters.subCategory === "all"
                    ? "text-[#E5CC91] font-semibold border-b border-[#E5CC91]"
                    : "text-[#A8A29A] hover:text-white"
                }`}
              >
                {t.catalogue.allTypes}
              </button>
              {availableSubCategories.map((subCat) => (
                <button
                  key={subCat}
                  onClick={() => setFilters((prev) => ({ ...prev, subCategory: subCat as SubCategory }))}
                  className={`px-3 py-1 text-xs transition-colors rounded-none whitespace-nowrap cursor-pointer ${
                    filters.subCategory === subCat
                      ? "text-[#E5CC91] font-semibold border-b border-[#E5CC91]"
                      : "text-[#A8A29A] hover:text-white"
                  }`}
                >
                  {subCat}
                </button>
              ))}
            </div>
          )}

        </div>

        {/* Results Count & Current Active Filters Summary */}
        <div className="flex items-center justify-between text-xs text-[#A8A29A] px-1">
          <div>
            {t.catalogue.showing} <strong className="text-[#F7F4EE] font-medium">{filteredProducts.length}</strong> {t.catalogue.designsIn}{" "}
            {filters.category !== "all" && <span className="text-[#E5CC91]">{getCategoryLabel(filters.category)}</span>}
            {filters.subCategory !== "all" && <span> · <span className="text-[#E5CC91]">{filters.subCategory}</span></span>}
            {filters.searchQuery && <span> {t.catalogue.matching} &ldquo;<span className="text-white">{filters.searchQuery}</span>&rdquo;</span>}
          </div>

          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="text-[#C6A15B] hover:text-white underline underline-offset-2 cursor-pointer"
            >
              {t.catalogue.clearFilters}
            </button>
          )}
        </div>

        {/* Products Grid or Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewProductDetails}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-20 text-center bg-[#161411] border border-[#26211A] p-8 space-y-4">
            <Search className="w-12 h-12 text-[#C6A15B]/30 mx-auto" />
            <h3 className="text-2xl font-serif-luxury text-[#F7F4EE]">
              {t.catalogue.emptyTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A29A] max-w-md mx-auto leading-relaxed">
              {t.catalogue.emptyDesc}
            </p>
            <div className="pt-2">
              <button
                onClick={handleResetFilters}
                className="px-6 py-2.5 bg-gradient-to-r from-[#E5CC91] to-[#C6A15B] text-[#11100E] text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                {t.catalogue.resetFiltersBtn}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
