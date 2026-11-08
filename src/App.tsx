import React, { useState, useEffect } from "react";
import { AnnouncementBar } from "./components/layout/AnnouncementBar";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingActions } from "./components/common/FloatingActions";
import { ProductDetailModal } from "./components/common/ProductDetailModal";
import { SearchModal } from "./components/common/SearchModal";
import { HomeView } from "./views/HomeView";
import { CatalogueView } from "./views/CatalogueView";
import { AboutView } from "./views/AboutView";
import { ContactView } from "./views/ContactView";
import { ActiveView, JewelleryProduct, MetalType } from "./types/jewellery";
import { SAMPLE_PRODUCTS } from "./data/products";

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>("home");
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<"all" | MetalType>("all");
  const [searchQueryForCatalogue, setSearchQueryForCatalogue] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<JewelleryProduct | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync hash routing for seamless navigation and browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace("#", "");
      if (hash === "gold") {
        setActiveView("catalogue");
        setActiveCategoryFilter("Gold");
      } else if (hash === "silver") {
        setActiveView("catalogue");
        setActiveCategoryFilter("Silver");
      } else if (hash === "diamond") {
        setActiveView("catalogue");
        setActiveCategoryFilter("Diamond");
      } else if (hash === "bridal") {
        setActiveView("catalogue");
        setActiveCategoryFilter("Bridal");
      } else if (hash === "catalogue") {
        setActiveView("catalogue");
        setActiveCategoryFilter("all");
      } else if (hash === "about") {
        setActiveView("about");
      } else if (hash === "contact") {
        setActiveView("contact");
      } else if (hash === "home" || hash === "") {
        setActiveView("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (view: ActiveView, category?: "all" | MetalType) => {
    setActiveView(view);
    if (category !== undefined) {
      setActiveCategoryFilter(category);
    }
    setSearchQueryForCatalogue("");

    // Update URL hash cleanly
    if (view === "home") {
      window.history.pushState(null, "", "#home");
    } else if (view === "catalogue") {
      if (category && category !== "all") {
        window.history.pushState(null, "", `#${category.toLowerCase()}`);
      } else {
        window.history.pushState(null, "", "#catalogue");
      }
    } else {
      window.history.pushState(null, "", `#${view}`);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewAllInCatalogue = (query: string, category: "all" | MetalType) => {
    setSearchQueryForCatalogue(query);
    setActiveCategoryFilter(category);
    setActiveView("catalogue");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#11100E] text-[#F7F4EE] selection:bg-[#C6A15B] selection:text-[#11100E]">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Top Navbar */}
      <Navbar
        activeView={activeView}
        activeCategoryFilter={activeCategoryFilter}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Application Content Views */}
      <main className="flex-1" id="main-content">
        {activeView === "home" && (
          <HomeView
            onNavigate={handleNavigate}
            onViewProductDetails={(prod) => setSelectedProduct(prod)}
          />
        )}

        {activeView === "catalogue" && (
          <CatalogueView
            initialCategory={activeCategoryFilter}
            initialQuery={searchQueryForCatalogue}
            onViewProductDetails={(prod) => setSelectedProduct(prod)}
          />
        )}

        {activeView === "about" && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {activeView === "contact" && (
          <ContactView />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Buttons (Persistent WhatsApp Conversion + Back to Top) */}
      <FloatingActions />

      {/* Dedicated Product Details Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
        onViewAllInCatalogue={handleViewAllInCatalogue}
      />
    </div>
  );
}
