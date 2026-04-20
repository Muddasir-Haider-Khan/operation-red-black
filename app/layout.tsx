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
  metadataBase: new URL('https://operation-red-black.vercel.app'),
  title: {
    default: "OPERATION: RED_BLACK | Classified Production Archive",
    template: "%s | OP:RED_BLACK"
  },
  description:
    "Secure digital archive for Operation Red & Black. A high-stakes cinematic thriller experience. Access production logs, bts footage, and confidential script data.",
  keywords: ["Operation Red & Black", "Cinematic Thriller", "Habibullah Wahaaj", "Film Production", "Classified Dossier", "Media Studies"],
  authors: [{ name: "Habibullah Wahaaj" }],
  creator: "Habibullah Wahaaj",
  openGraph: {
    title: "OPERATION: RED_BLACK | Classified Production Archive",
    description: "Access the confidential production logs of Habibullah Wahaaj's cinematic thriller.",
    url: '/',
    siteName: 'Operation Red & Black',
    images: [
      {
        url: '/mood-board.png',
        width: 1200,
        height: 630,
        alt: 'Operation Red & Black - Tactical Mood Board',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OPERATION: RED_BLACK',
    description: 'Classified cinematic production logs.',
    images: ['/mood-board.png'],
  },
  robots: {
    index: true,
    follow: true,
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