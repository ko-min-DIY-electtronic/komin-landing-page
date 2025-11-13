import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ko-MIn D.I.Y Store - Myanmar Electric Parts & Tools",
  description:
    "Download Ko-MIn D.I.Y Store app for the easiest way to buy electric parts, tools, and DIY supplies in Myanmar. Fast delivery, secure KBZ Pay, Myanmar language support.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/komin.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/komin.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/komin.jpg",
        type: "image/jpg",
      },
    ],
    apple: "/images/komin.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2e4d" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
