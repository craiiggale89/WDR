import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Websites Done Right | Websites for Birmingham and West Midlands Businesses",
    template: "%s | Websites Done Right",
  },
  description:
    "We build simple, professional websites for Birmingham and West Midlands trades, coaches and therapists, and we handle everything for you.",
  keywords: [
    "website design Birmingham",
    "web design West Midlands",
    "tradesman website",
    "plumber website",
    "electrician website",
    "therapist website Birmingham",
    "coach website West Midlands",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
