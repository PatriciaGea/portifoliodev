import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { seoConfig, siteConfig } from "@/lib/portfolio-data";

const siteUrl = siteConfig.website;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoConfig.title,
    template: "%s | Patricia Gea",
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  applicationName: "Patricia Gea Portfolio",
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: seoConfig.title,
    description: seoConfig.description,
    type: "website",
    url: siteUrl,
    siteName: "Patricia Gea Portfolio",
    locale: seoConfig.locale,
  },
  twitter: {
    card: "summary",
    title: seoConfig.title,
    description: seoConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
