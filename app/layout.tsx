import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
