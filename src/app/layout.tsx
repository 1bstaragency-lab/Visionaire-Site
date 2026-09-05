import type { Metadata } from "next";
import { Inter, Playfair_Display, Bebas_Neue, Martian_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-blocky",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Visionaire Productions — Music Videos, Commercials, Short Form',
  description: 'Cinematic video production for artists and brands. Clients include Converse, ASICS, GAP.',
  openGraph: {
    title: 'Visionaire Productions',
    description: 'Video production between New York, LA, and Miami — music videos, commercials, short form.',
    url: 'https://visionsaire.com',
    siteName: 'Visionaire Productions',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${bebas.variable} ${martianMono.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
