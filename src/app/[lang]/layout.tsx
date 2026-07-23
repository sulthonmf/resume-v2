import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sulthon Maulana F - Senior Software Engineer Portfolio",
  description: "Senior Software Engineer portfolio specializing in React, Next.js, React Native, Expo & Angular.",
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<any>;
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps) {
  const { lang } = await params;
  
  return (
    <html lang={lang} className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}>
      <body className="min-h-screen bg-cyber-dark text-cyber-text antialiased flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
