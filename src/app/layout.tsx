import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UniTech",
  description: "Unleash Possibilities, Explore Technology's Realm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth customize-scrollbar">
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
