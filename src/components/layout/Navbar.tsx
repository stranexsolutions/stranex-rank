"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Bell, Zap } from "lucide-react";
import clsx from "clsx";
import StranexLogo from "@/components/icons/StranexLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/players/player-001", label: "Top Player" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-cyber-dark/80 border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <StranexLogo size={30} className="group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-all duration-300" />
            <div className="font-orbitron font-bold text-lg tracking-wider">
              <span className="text-white">STRANEX</span>
              <span className="text-cyber-cyan neon-text-cyan ml-1">RANK</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href.split("/").slice(0, 2).join("/")));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-cyber-purple bg-purple-500/10 border border-purple-500/20"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 relative">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-cyber-purple rounded-full animate-pulse2"></span>
            </button>
            <Link
              href="/leaderboard"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
              }}
            >
              <Zap size={14} />
              View Rankings
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/[0.05] animate-slide-down">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={clsx(
                    "block px-4 py-2.5 rounded-lg text-sm font-medium transition-all",
                    isActive
                      ? "text-cyber-purple bg-purple-500/10"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 pb-1">
              <Link
                href="/leaderboard"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}
              >
                <Zap size={14} />
                View Rankings
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
