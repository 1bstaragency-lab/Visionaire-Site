import React from 'react';

interface BrandLogoProps {
  brand: string;
  className?: string;
}

export function BrandLogo({ brand, className = "" }: BrandLogoProps) {
  const brandUpper = brand.toUpperCase();
  
  // Map brands to their official domains to fetch their real logos
  const brandDomains: Record<string, string> = {
    "ASICS": "asics.com",
    "CONVERSE": "converse.com",
    "CDG X CONVERSE": "converse.com",
    "ADIDAS": "adidas.com",
    "LEVI'S": "levi.com",
    "SKIMS": "skims.com",
    "AGENT PROVOCATEUR": "agentprovocateur.com",
    "TIMBERLAND": "timberland.com"
  };

  const domain = brandDomains[brandUpper];

  if (domain) {
    return (
      <img 
        src={`https://logo.clearbit.com/${domain}`} 
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

  // Fallback for any other brand without a known domain
  return (
    <div className={`font-blocky tracking-widest uppercase ${className}`}>
      {brandUpper}
    </div>
  );
}
