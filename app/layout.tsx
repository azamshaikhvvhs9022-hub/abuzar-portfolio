import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THORFIN — Developer & Builder",
  description:
    "Personal portfolio of Thorfinn — developer, AI enthusiast, and builder.",
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