import React from 'react';

interface BrandLogoProps {
  brand: string;
  className?: string;
}

export function BrandLogo({ brand, className = "" }: BrandLogoProps) {
  const brandUpper = brand.toUpperCase();
  
  // Brands that we have local SVG files for
  const localSvgBrands: Record<string, string> = {
    "ASICS": "asics.svg",
    "CONVERSE": "converse.svg",
    "CDG X CONVERSE": "converse.svg",
    "ADIDAS": "adidas.svg",
    "LEVI'S": "levis.svg",
  };

  const svgFile = localSvgBrands[brandUpper];

  if (svgFile) {
    return (
      <img 
        src={`/logos/${svgFile}`} 
        alt={`${brand} Logo`}
        className={`object-contain ${className}`}
        style={{ 
          filter: "brightness(0) invert(1)", 
          height: "1.5em", // Match the text size roughly
          width: "auto"
        }}
      />
    );
  }

  // Fallback typographic logos for brands without SVGs (loads instantly, no broken images)
  if (brandUpper === "SKIMS") {
    return <div className={`font-sans font-medium tracking-[0.2em] uppercase ${className}`}>SKIMS</div>;
  }
  if (brandUpper === "AGENT PROVOCATEUR") {
    return <div className={`font-serif font-light tracking-[0.1em] uppercase ${className}`}>AGENT PROVOCATEUR</div>;
  }
  if (brandUpper === "TIMBERLAND") {
    return <div className={`font-blocky tracking-wide uppercase ${className}`}>TIMBERLAND</div>;
  }

  // Generic fallback
  return (
    <div className={`font-blocky tracking-widest uppercase ${className}`}>
      {brandUpper}
    </div>
  );
}
