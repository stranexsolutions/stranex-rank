import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Stranex Rank | Own the Leaderboard",
  description:
    "Track rankings, analyze performance, and climb to the top of the competitive ladder. Season 4 is live.",
  keywords: ["ranking", "leaderboard", "competitive", "esports", "stranex"],
  themeColor: "#0a0f1e",
  openGraph: {
    title: "Stranex Rank | Own the Leaderboard",
    description: "The most advanced competitive ranking platform. Season 4 is live.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="font-inter antialiased bg-cyber-dark text-slate-200 min-h-screen">
        {/* Background glow effects */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.3) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[600px] h-[400px] opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at 100% 100%, rgba(6,182,212,0.3) 0%, transparent 70%)",
            }}
          />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Scan line overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-50 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,1) 2px, rgba(0,0,0,1) 4px)",
          }}
        />

        <div className="relative z-10">
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
