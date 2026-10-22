import type { Metadata } from "next";
import { PortfolioLoadingBoundary } from "./components/portfolio-loading";
import "./globals.css";
// import { Analytics } from '@vercel/analytics/react';
import { Analytics } from '@vercel/analytics/next';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: "Jinjoo Moon | Product Designer",
  description: "Portfolio of Jinjoo Moon, a product designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PortfolioLoadingBoundary>{children}</PortfolioLoadingBoundary>
        <Analytics />
        <GoogleAnalytics gaId="G-TQ2P7DKNX3" />
      </body>
    </html>
  );
}
