import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Operation Red & Black | A Cinematic Thriller Experience",
  description:
    "A thrilling cinematic experience inspired by Mission Impossible and John Wick. Explore the world of Operation Red & Black.",
  keywords: ["Operation Red & Black", "cinematic", "thriller", "film", "short film"],
  authors: [{ name: "Habibullah" }],
  openGraph: {
    title: "Operation Red & Black",
    description: "A cinematic thriller experience inspired by Mission Impossible and John Wick.",
    type: "website",
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
    >
      <body className="min-h-full flex flex-col bg-black-primary text-white">
        {children}
      </body>
    </html>
  );
}