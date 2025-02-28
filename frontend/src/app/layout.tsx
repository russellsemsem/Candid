import type { Metadata } from "next";
import { Roboto, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Nav from "../components/layout/navbar";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Candid: The casual networking platform.",
  description: "Where Authenticity Meets Talent, The casual networking platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${geistMono.variable}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
