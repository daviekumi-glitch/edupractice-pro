import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduPractice Pro - Master 6 Subjects",
  description: "Practice Biology, Physics, Chemistry, English, Mathematics, and Agriculture with AI-powered learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <Navigation />
          <main className="container mx-auto px-4 py-6 max-w-7xl">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
