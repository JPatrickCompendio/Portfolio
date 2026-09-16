import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jpatrickcompendio.github.io"),
  title: {
    default: "John Patrick Robles Compendio | Full-stack Developer",
    template: "%s | John Patrick Robles Compendio",
  },
  description:
    "Portfolio of John Patrick Robles Compendio, a full-stack developer building scalable systems, web applications, and mobile solutions that solve real-world problems.",
  keywords: [
    "John Patrick Robles Compendio",
    "Full-stack Developer",
    "Freelance Developer",
    "Web Developer Portfolio",
    "Mobile App Developer",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "TypeScript",
    "Firebase",
    "Portfolio",
  ],
  authors: [{ name: "John Patrick Robles Compendio", url: "https://github.com/JPatrickCompendio" }],
  creator: "John Patrick Robles Compendio",
  publisher: "John Patrick Robles Compendio",
  alternates: {
    canonical: "/",
  },
  category: "technology",
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
    title: "John Patrick Robles Compendio | Full-stack Developer",
    description:
      "I go beyond coding by creating scalable systems, apps, and web solutions that solve real problems.",
    url: "https://jpatrickcompendio.github.io",
    siteName: "John Patrick Robles Compendio Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Patrick Robles Compendio | Full-stack Developer",
    description:
      "Scalable full-stack, web, and mobile solutions built with modern technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
