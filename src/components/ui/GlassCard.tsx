import clsx from "clsx";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "purple" | "cyan" | "gold" | "none";
  hover?: boolean;
  padding?: boolean;
}

export default function GlassCard({
  children,
  className,
  glowColor = "none",
  hover = false,
  padding = true,
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        "glass rounded-xl border border-white/[0.06]",
        padding && "p-6",
        hover && "transition-all duration-300 hover:border-cyber-purple/30 hover:scale-[1.005] cursor-pointer",
        glowColor === "purple" && "shadow-[0_0_30px_rgba(139,92,246,0.15)] border-purple-500/20",
        glowColor === "cyan" && "shadow-[0_0_30px_rgba(6,182,212,0.15)] border-cyan-500/20",
        glowColor === "gold" && "shadow-[0_0_30px_rgba(245,158,11,0.2)] border-yellow-500/20",
        className
      )}
    >
      {children}
    </div>
  );
}
