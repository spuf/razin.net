import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairoSans = Cairo({
  variable: "--font-cairo-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "razin.net",
  description: "razin.net",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cairoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
