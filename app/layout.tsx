import type { Metadata } from "next";
import { PortfolioLoadingBoundary } from "./components/portfolio-loading";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

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
      </body>
    </html>
  );
}
