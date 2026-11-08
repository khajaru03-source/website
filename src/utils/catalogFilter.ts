import { JewelleryProduct, FilterState } from "../types/jewellery";

/**
 * Filter and sort products deterministically
 */
export function filterProducts(products: JewelleryProduct[], filters: FilterState): JewelleryProduct[] {
  return products.filter((product) => {
    // Category match
    if (filters.category !== "all" && product.category !== filters.category) {
      return false;
    }

    // Subcategory match
    if (filters.subCategory !== "all" && product.subCategory !== filters.subCategory) {
      return false;
    }

    // Search query match (search by name, description, category, subcategory, or item id)
    if (filters.searchQuery.trim() !== "") {
      const q = filters.searchQuery.toLowerCase().trim();
      const inName = product.name.toLowerCase().includes(q);
      const inNameGu = (product.nameGu || "").toLowerCase().includes(q);
      const inDesc = product.description.toLowerCase().includes(q);
      const inDescGu = (product.descriptionGu || "").toLowerCase().includes(q);
      const inTagline = product.tagline.toLowerCase().includes(q);
      const inTaglineGu = (product.taglineGu || "").toLowerCase().includes(q);
      const inCategory = product.category.toLowerCase().includes(q);
      const inSubCategory = product.subCategory.toLowerCase().includes(q);
      const inSubCategoryGu = (product.subCategoryGu || "").toLowerCase().includes(q);
      const inId = product.id.toLowerCase().includes(q);

      if (!inName && !inNameGu && !inDesc && !inDescGu && !inTagline && !inTaglineGu && !inCategory && !inSubCategory && !inSubCategoryGu && !inId) {
        return false;
      }
    }

    return true;
  }).sort((a, b) => {
    if (filters.sortBy === "name-asc") {
      return a.name.localeCompare(b.name);
    }
    if (filters.sortBy === "name-desc") {
      return b.name.localeCompare(a.name);
    }
    // "featured" default: featured items first, then id
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return a.id.localeCompare(b.id);
  });
}

/**
 * Get distinct subcategories for a given category
 */
export function getAvailableSubCategories(products: JewelleryProduct[], category: FilterState["category"]): string[] {
  const filtered = category === "all" ? products : products.filter((p) => p.category === category);
  const set = new Set(filtered.map((p) => p.subCategory));
  return Array.from(set);
}
