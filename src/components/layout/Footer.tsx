import Link from "next/link";
import { Github, Twitter, Twitch, Disc } from "lucide-react";
import StranexLogo from "@/components/icons/StranexLogo";

const links = {
  Platform: [
    { label: "Leaderboard", href: "/leaderboard" },
    { label: "Top Player", href: "/players/player-001" },
    { label: "Season 4", href: "/leaderboard" },
    { label: "Tiers & Ranks", href: "/leaderboard" },
  ],
  Community: [
    { label: "Discord", href: "#" },
    { label: "Twitch", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Reddit", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Bug Report", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Status", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <StranexLogo size={28} />
              <div className="font-orbitron font-bold text-base tracking-wider">
                <span className="text-white">STRANEX</span>
                <span className="text-cyber-cyan ml-1">RANK</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              Own the leaderboard. Dominate the competition. The most advanced
              competitive ranking platform.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-slate-500 hover:text-cyber-purple transition-colors p-1.5 hover:bg-purple-500/10 rounded-lg">
                <Github size={16} />
              </a>
              <a href="#" className="text-slate-500 hover:text-cyber-cyan transition-colors p-1.5 hover:bg-cyan-500/10 rounded-lg">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-slate-500 hover:text-purple-400 transition-colors p-1.5 hover:bg-purple-500/10 rounded-lg">
                <Twitch size={16} />
              </a>
              <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors p-1.5 hover:bg-indigo-500/10 rounded-lg">
                <Disc size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4 font-orbitron tracking-wide">
                {category.toUpperCase()}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © 2026 Stranex Rank. All rights reserved. Season 4 Live.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-slate-600">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse2"></span>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
