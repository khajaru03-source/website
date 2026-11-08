import React from "react";

export interface BrandLogoProps {
  variant?: "full" | "monogram" | "horizontal";
  theme?: "dark" | "light" | "transparent";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

/**
 * SHAKTI JEWELLERS Redesigned Luxury Identity
 * Features a bespoke sculpted "S" monogram inside an imperial milgrain octagonal jewellery crest.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "full",
  theme = "dark",
  size = "md",
  className = "",
  onClick,
}) => {
  const isLight = theme === "light";

  const sizeConfigs = {
    sm: { emblem: "w-8 h-8", title: "text-sm tracking-[0.22em]", sub: "text-[8px] tracking-[0.25em]" },
    md: { emblem: "w-10 h-10", title: "text-base sm:text-lg tracking-[0.25em]", sub: "text-[9px] tracking-[0.3em]" },
    lg: { emblem: "w-14 h-14 sm:w-16 sm:h-16", title: "text-xl sm:text-2xl tracking-[0.28em]", sub: "text-[10px] sm:text-[11px] tracking-[0.35em]" },
  }[size];

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none group cursor-pointer transition-transform duration-300 ${className}`}
      role="banner"
      aria-label="Shakti Jewellers Luxury Identity"
    >
      {/* Imperial Sculpted S Monogram Emblem */}
      <div className={`relative shrink-0 ${sizeConfigs.emblem}`}>
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full drop-shadow-[0_4px_16px_rgba(212,175,55,0.22)] transition-transform duration-500 ease-out group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Multi-stop metallic royal gold gradient */}
            <linearGradient id="luxuryGoldPlate" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF8E7" />
              <stop offset="25%" stopColor="#E5C778" />
              <stop offset="50%" stopColor="#C99B3B" />
              <stop offset="75%" stopColor="#E5C778" />
              <stop offset="100%" stopColor="#8A6318" />
            </linearGradient>

            <linearGradient id="innerGoldStroke" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF7" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#5E430D" />
            </linearGradient>

            <radialGradient id="sealBackdrop" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1E1A14" />
              <stop offset="85%" stopColor="#110F0C" />
              <stop offset="100%" stopColor="#0B0907" />
            </radialGradient>
          </defs>

          {/* Outer Royal Octagon Seal with Micro-Beaded Corners */}
          <path
            d="M 38 6 L 82 6 L 114 38 L 114 82 L 82 114 L 38 114 L 6 82 L 6 38 Z"
            fill={isLight ? "#FFFFFF" : "url(#sealBackdrop)"}
            stroke="url(#luxuryGoldPlate)"
            strokeWidth="1.75"
          />

          {/* Inner Inset Milgrain Hairline */}
          <path
            d="M 40 12 L 80 12 L 108 40 L 108 80 L 80 108 L 40 108 L 12 40 L 12 40 Z"
            fill="none"
            stroke="url(#innerGoldStroke)"
            strokeWidth="0.75"
            strokeDasharray="2 1.5"
            strokeOpacity="0.75"
          />

          {/* Four Cardinal Jewel Facets */}
          <circle cx="60" cy="12" r="1.5" fill="#FFF8E7" />
          <circle cx="108" cy="60" r="1.5" fill="#FFF8E7" />
          <circle cx="60" cy="108" r="1.5" fill="#FFF8E7" />
          <circle cx="12" cy="60" r="1.5" fill="#FFF8E7" />

          {/* Master Sculpted S Monogram */}
          {/* Top curve */}
          <path
            d="M 72 40 C 72 30 48 28 44 40 C 40 52 78 50 74 76 C 70 90 44 88 40 76"
            stroke="url(#luxuryGoldPlate)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Core filigree flourish loop linking the 'S' */}
          <path
            d="M 49 43 C 55 35 68 36 67 48 C 65 60 52 64 53 74 C 54 81 63 82 68 76"
            stroke="url(#innerGoldStroke)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeOpacity="0.9"
          />

          {/* Center Jewel Brilliant Spark */}
          <path
            d="M 60 55 L 61.5 59 L 65.5 60 L 61.5 61 L 60 65 L 58.5 61 L 54.5 60 L 58.5 59 Z"
            fill="#FFF8E7"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {variant !== "monogram" && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span
              className={`font-display-luxury font-medium ${sizeConfigs.title} ${
                isLight ? "text-[#110F0C]" : "text-[#FDFBF7]"
              } transition-colors group-hover:text-[#E5C778]`}
            >
              SHAKTI
            </span>
            <span
              className={`font-display-luxury font-light ${sizeConfigs.title} text-[#C99B3B]`}
            >
              JEWELLERS
            </span>
          </div>

          <div className="flex items-center gap-2 mt-0.5">
            <span
              className={`font-sans uppercase font-medium ${sizeConfigs.sub} ${
                isLight ? "text-[#6E665B]" : "text-[#9E9689]"
              }`}
            >
              GUJARAT · INDIA
            </span>
            <span className="w-1 h-1 rounded-full bg-[#C99B3B]/60 shrink-0" />
            <span className={`font-serif-luxury italic text-xs tracking-wider text-[#C99B3B]`}>
              Haute Joaillerie
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
