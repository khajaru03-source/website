import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { MetalType, SubCategory } from "../../types/jewellery";

interface ProductImageProps {
  src: string;
  alt: string;
  category: MetalType;
  subCategory?: SubCategory;
  productId?: string;
  className?: string;
  aspectRatio?: "4:3" | "16:9" | "1:1" | "3:4" | "custom";
}

/**
 * High-End Luxury Jewellery Visual Renderer
 * Guarantees zero broken images and strict category separation (Gold, Silver, Diamond, Bridal).
 */
export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  category,
  subCategory = "Necklace",
  productId = "SJ-001",
  className = "",
  aspectRatio = "4:3",
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const hasPhotoSrc = Boolean(src && (src.startsWith("/") || src.startsWith("http")));

  const aspectClass = {
    "4:3": "aspect-[4/3]",
    "16:9": "aspect-[16/9]",
    "1:1": "aspect-square",
    "3:4": "aspect-[3/4]",
    custom: "",
  }[aspectRatio];

  // Specific bespoke vector silhouette renderer for distinct products
  const renderBespokeJewelleryCanvas = () => {
    // Unique seed for slight variations per item
    const idNum = parseInt(productId.replace(/\D/g, "") || "1", 10);

    const metalConfig = {
      Gold: {
        bg: "from-[#191612] via-[#12100D] to-[#0A0907]",
        plate: "#E5C778",
        plateSecondary: "#C99B3B",
        deepShadow: "#705114",
        highlight: "#FFF8E7",
        velvet: "#14110E",
        accent: "#C99B3B",
      },
      Silver: {
        bg: "from-[#17181A] via-[#111214] to-[#0B0C0D]",
        plate: "#E8EBED",
        plateSecondary: "#C1C7CD",
        deepShadow: "#686E74",
        highlight: "#FFFFFF",
        velvet: "#121416",
        accent: "#D0D6DC",
      },
      Diamond: {
        bg: "from-[#131417] via-[#0E0F12] to-[#08090B]",
        plate: "#F4F6F8",
        plateSecondary: "#B8C0C8",
        deepShadow: "#48525D",
        highlight: "#FFFFFF",
        velvet: "#0C0D10",
        accent: "#7DF9FF", // Ice diamond caustics
      },
      Bridal: {
        bg: "from-[#2A1116] via-[#1A0A0E] to-[#0E0507]", // Royal Crimson velvet
        plate: "#E8C87A",
        plateSecondary: "#C69733",
        deepShadow: "#6B4910",
        highlight: "#FFF8E7",
        velvet: "#1F0A0E",
        accent: "#10B981", // Emerald & Polki droplets
      },
    }[category];

    return (
      <div className={`w-full h-full relative overflow-hidden bg-gradient-to-br ${metalConfig.bg} flex items-center justify-center p-6 select-none`}>
        {/* Subtle velvet cushion texture & radial lighting caustics */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-soft-light"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 35%, rgba(255,255,255,0.15) 0%, transparent 65%)",
          }}
        />

        {/* Studio spotlight glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent blur-2xl pointer-events-none" />

        {/* Vector Jewellery Illustration */}
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full max-w-[220px] max-h-[220px] drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-transform duration-700 ease-out group-hover:scale-108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`grad-metal-${productId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={metalConfig.highlight} />
              <stop offset="35%" stopColor={metalConfig.plate} />
              <stop offset="70%" stopColor={metalConfig.plateSecondary} />
              <stop offset="100%" stopColor={metalConfig.deepShadow} />
            </linearGradient>

            <linearGradient id={`grad-gem-${productId}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor={metalConfig.accent} />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>

          {/* Subcategory specific high-fidelity vector styling */}
          {(subCategory === "Necklace" || subCategory === "Choker" || subCategory === "Bridal Set") && (
            <g>
              {/* Drapery curve chain */}
              <path
                d="M 40 45 C 50 145 150 145 160 45"
                stroke={`url(#grad-metal-${productId})`}
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 48 55 C 58 135 142 135 152 55"
                stroke={`url(#grad-metal-${productId})`}
                strokeWidth="2"
                strokeDasharray="4 3"
              />
              {/* Central pendant medallion */}
              <circle
                cx="100"
                cy="140"
                r="18"
                fill={`url(#grad-metal-${productId})`}
                stroke={metalConfig.highlight}
                strokeWidth="1.5"
              />
              <circle
                cx="100"
                cy="140"
                r="12"
                fill="#161411"
                stroke={`url(#grad-metal-${productId})`}
                strokeWidth="1"
              />
              {/* Central gemstone */}
              <polygon
                points="100,132 107,140 100,148 93,140"
                fill={category === "Bridal" ? "#EF4444" : category === "Diamond" ? "#E0F7FA" : metalConfig.highlight}
              />
              {/* Hanging drop pearls or beads */}
              <circle cx="100" cy="164" r="4" fill={category === "Bridal" ? "#10B981" : metalConfig.highlight} />
              <circle cx="85" cy="158" r="3" fill={category === "Bridal" ? "#10B981" : metalConfig.highlight} />
              <circle cx="115" cy="158" r="3" fill={category === "Bridal" ? "#10B981" : metalConfig.highlight} />
            </g>
          )}

          {(subCategory === "Earrings" || subCategory === "Matha Patti") && (
            <g>
              {/* Pair of earrings / jhumka bells */}
              <g transform="translate(45, 30)">
                <circle cx="25" cy="20" r="10" fill={`url(#grad-metal-${productId})`} />
                <circle cx="25" cy="20" r="4" fill="#FFFFFF" />
                <path d="M 25 32 L 25 45" stroke={`url(#grad-metal-${productId})`} strokeWidth="2" />
                {/* Jhumka dome */}
                <path d="M 10 70 C 10 48 40 48 40 70 Z" fill={`url(#grad-metal-${productId})`} />
                <circle cx="15" cy="76" r="2.5" fill={metalConfig.highlight} />
                <circle cx="25" cy="77" r="3" fill={metalConfig.highlight} />
                <circle cx="35" cy="76" r="2.5" fill={metalConfig.highlight} />
              </g>
              <g transform="translate(85, 30)">
                <circle cx="25" cy="20" r="10" fill={`url(#grad-metal-${productId})`} />
                <circle cx="25" cy="20" r="4" fill="#FFFFFF" />
                <path d="M 25 32 L 25 45" stroke={`url(#grad-metal-${productId})`} strokeWidth="2" />
                <path d="M 10 70 C 10 48 40 48 40 70 Z" fill={`url(#grad-metal-${productId})`} />
                <circle cx="15" cy="76" r="2.5" fill={metalConfig.highlight} />
                <circle cx="25" cy="77" r="3" fill={metalConfig.highlight} />
                <circle cx="35" cy="76" r="2.5" fill={metalConfig.highlight} />
              </g>
            </g>
          )}

          {(subCategory === "Bangles" || subCategory === "Kada" || subCategory === "Bracelet") && (
            <g transform="translate(0, 10)">
              {/* Layered luxury bangles or cuff */}
              <ellipse
                cx="100"
                cy="75"
                rx="65"
                ry="30"
                fill="none"
                stroke={`url(#grad-metal-${productId})`}
                strokeWidth="6"
              />
              <ellipse
                cx="100"
                cy="95"
                rx="65"
                ry="30"
                fill="none"
                stroke={`url(#grad-metal-${productId})`}
                strokeWidth="7"
              />
              <ellipse
                cx="100"
                cy="115"
                rx="65"
                ry="30"
                fill="none"
                stroke={`url(#grad-metal-${productId})`}
                strokeWidth="6"
              />
              {/* Gemstone / floral embossing rivets */}
              <circle cx="100" cy="125" r="3.5" fill={metalConfig.highlight} />
              <circle cx="60" cy="115" r="3.5" fill={metalConfig.highlight} />
              <circle cx="140" cy="115" r="3.5" fill={metalConfig.highlight} />
            </g>
          )}

          {(subCategory === "Ring" || subCategory === "Hathphool") && (
            <g transform="translate(0, 5)">
              {/* Solitaire or cocktail ring band */}
              <ellipse
                cx="100"
                cy="125"
                rx="48"
                ry="22"
                fill="none"
                stroke={`url(#grad-metal-${productId})`}
                strokeWidth="6"
              />
              {/* Ring crown prongs */}
              <path
                d="M 85 108 L 88 78 L 112 78 L 115 108 Z"
                fill={`url(#grad-metal-${productId})`}
              />
              {/* Brilliant cut diamond/gem faceted crown */}
              <polygon
                points="76,78 88,60 112,60 124,78 100,102"
                fill={category === "Diamond" ? "#FFFFFF" : category === "Gold" ? metalConfig.plate : "#F8FAFC"}
                stroke={category === "Diamond" ? "#7DF9FF" : metalConfig.plateSecondary}
                strokeWidth="1.5"
              />
              {/* Prismatic sparkle flare */}
              <polygon
                points="100,45 103,56 114,59 103,62 100,73 97,62 86,59 97,56"
                fill="#FFFFFF"
                className="animate-pulse"
              />
            </g>
          )}

          {(subCategory === "Pendant" || subCategory === "Chain" || subCategory === "Mangalsutra") && (
            <g>
              {/* V-neck chain with pendant */}
              <path
                d="M 45 30 L 100 110 L 155 30"
                stroke={`url(#grad-metal-${productId})`}
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Medallion */}
              <circle cx="100" cy="128" r="22" fill={`url(#grad-metal-${productId})`} />
              <circle cx="100" cy="128" r="16" fill="#14110E" />
              <polygon
                points="100,118 108,128 100,138 92,128"
                fill={metalConfig.highlight}
              />
              <circle cx="100" cy="155" r="4" fill={category === "Bridal" ? "#EF4444" : metalConfig.highlight} />
            </g>
          )}

          {subCategory === "Anklet" && (
            <g transform="translate(0, 15)">
              {/* Silver woven payal wave */}
              <path
                d="M 30 70 Q 100 130 170 70"
                stroke={`url(#grad-metal-${productId})`}
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M 32 78 Q 100 138 168 78"
                stroke={`url(#grad-metal-${productId})`}
                strokeWidth="2.5"
                strokeDasharray="4 3"
              />
              {/* Hanging Ghungroo bells */}
              {[45, 65, 85, 100, 115, 135, 155].map((x, i) => {
                const y = 80 + Math.sin((i / 6) * Math.PI) * 32;
                return (
                  <g key={i}>
                    <line x1={x} y1={y} x2={x} y2={y + 8} stroke={metalConfig.plate} strokeWidth="1.5" />
                    <circle cx={x} cy={y + 11} r="3.5" fill={metalConfig.highlight} />
                  </g>
                );
              })}
            </g>
          )}

          {/* Luxury Light Sheen Caustic */}
          <path
            d="M 10 190 L 190 10"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="30"
            strokeLinecap="round"
          />
        </svg>

        {/* Category Watermark Seal */}
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#C99B3B]">
            {category}
          </span>
          <span className="text-[10px] text-[#A8A29A]">·</span>
          <span className="text-[10px] tracking-wider text-[#A8A29A]">
            {subCategory}
          </span>
        </div>

        <div className="absolute bottom-3 right-4">
          <span className="text-[9px] tracking-widest uppercase font-mono text-[#A8A29A]/80">
            {productId}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#161411] ${aspectClass} ${className}`}
      data-testid="product-image-container"
    >
      {/* If this is a valid photography image path, load it */}
      {hasPhotoSrc && !hasError ? (
        <>
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setHasError(true);
              setIsLoading(false);
            }}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
              isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          />
          {isLoading && (
            <div className="absolute inset-0 bg-[#1B1916] animate-pulse flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#C99B3B]/40 animate-spin" />
            </div>
          )}
        </>
      ) : (
        /* Guaranteed Zero-Broken-Image Bespoke Luxury Jewellery Rendering */
        renderBespokeJewelleryCanvas()
      )}

      {/* Subtle luxury vignette gradient overlay for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#11100E]/70 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
    </div>
  );
};
