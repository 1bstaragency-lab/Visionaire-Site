import React from 'react';

interface BrandLogoProps {
  brand: string;
  className?: string;
}

export function BrandLogo({ brand, className = "" }: BrandLogoProps) {
  const brandUpper = brand.toUpperCase();

  // We use carefully selected typographic styles to emulate the minimalist brand logos,
  // since exact SVGs for all these brands aren't locally available. 
  // This approach is incredibly clean, fast, and fits the aesthetic perfectly.
  
  if (brandUpper === "ASICS") {
    return (
      <div className={`font-blocky italic tracking-tight ${className}`}>
        ASICS
      </div>
    );
  }

  if (brandUpper === "CONVERSE" || brandUpper === "CDG X CONVERSE") {
    return (
      <div className={`font-blocky tracking-widest ${className}`}>
        {brandUpper}
      </div>
    );
  }

  if (brandUpper === "ADIDAS") {
    return (
      <div className={`font-blocky tracking-normal lowercase ${className}`}>
        adidas
      </div>
    );
  }

  if (brandUpper === "LEVI'S") {
    return (
      <div className={`font-blocky tracking-tighter uppercase ${className}`}>
        LEVI'S
      </div>
    );
  }

  if (brandUpper === "SKIMS") {
    return (
      <div className={`font-sans font-medium tracking-[0.2em] uppercase ${className}`}>
        SKIMS
      </div>
    );
  }

  if (brandUpper === "AGENT PROVOCATEUR") {
    return (
      <div className={`font-serif font-light tracking-[0.1em] uppercase ${className}`}>
        AGENT PROVOCATEUR
      </div>
    );
  }

  if (brandUpper === "TIMBERLAND") {
    return (
      <div className={`font-blocky tracking-wide uppercase ${className}`}>
        TIMBERLAND
      </div>
    );
  }

  // Fallback for any other brand
  return (
    <div className={`font-blocky tracking-widest uppercase ${className}`}>
      {brandUpper}
    </div>
  );
}
