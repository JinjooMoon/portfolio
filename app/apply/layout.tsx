import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--application-font",
  display: "swap",
});

export default function ApplicationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className={inter.variable}>{children}</div>;
}