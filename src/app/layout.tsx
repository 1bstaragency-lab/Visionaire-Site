import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Visionaire Productions — Miami Music Videos, Commercials, Short Form',
  description: 'Cinematic video production for artists and brands. Clients include Converse, ASICS, GAP.',
  openGraph: {
    title: 'Visionaire Productions',
    description: 'Miami-based video production — music videos, commercials, short form.',
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
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
