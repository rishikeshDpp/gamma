import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vibe Portfolio",
  description: "A beautiful portfolio showcasing creative work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors">
          <Header />
          <div className="fixed top-4 left-4 z-50 p-2 bg-blue-500 dark:bg-red-500 text-white text-xs">
            Test: Light=Blue, Dark=Red
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}