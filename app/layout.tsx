import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABUZAR — Developer · Builder · AI Enthusiast",

  description:
    "ABUZAR is a developer portfolio focused on software, AI, intelligent systems and experimental ideas.",

  keywords: [
    "ABUZAR",
    "developer",
    "software developer",
    "AI enthusiast",
    "Python developer",
    "FOCUS-X",
    "portfolio",
  ],

  authors: [
    {
      name: "ABUZAR",
    },
  ],

  creator: "ABUZAR",

  metadataBase: new URL("https://abuzar-portfolio-ten.vercel.app"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "ABUZAR — Developer · Builder · AI Enthusiast",

    description:
      "Code, curiosity and a little bit of mystery. Explore ABUZAR's work and projects.",

    url: "https://abuzar-portfolio-ten.vercel.app",

    siteName: "ABUZAR",

    type: "website",

    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",

    title: "ABUZAR — Developer · Builder · AI Enthusiast",

    description:
      "Developer, builder and AI enthusiast. Building digital things.",
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

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060608",
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