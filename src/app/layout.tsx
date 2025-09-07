import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalHeader from "@/components/ConditionalHeader";

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
          <ConditionalHeader />
          {children}
        </div>
      </body>
    </html>
  );
}