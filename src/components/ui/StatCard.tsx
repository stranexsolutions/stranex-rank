import clsx from "clsx";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: number;
  color?: "purple" | "cyan" | "gold" | "red";
  subtitle?: string;
}

const colorMap = {
  purple: {
    icon: "bg-purple-900/40 text-purple-400",
    value: "text-purple-300",
    glow: "shadow-[0_0_20px_rgba(139,92,246,0.1)]",
  },
  cyan: {
    icon: "bg-cyan-900/40 text-cyan-400",
    value: "text-cyan-300",
    glow: "shadow-[0_0_20px_rgba(6,182,212,0.1)]",
  },
  gold: {
    icon: "bg-yellow-900/40 text-yellow-400",
    value: "text-yellow-300",
    glow: "shadow-[0_0_20px_rgba(245,158,11,0.1)]",
  },
  red: {
    icon: "bg-red-900/40 text-red-400",
    value: "text-red-300",
    glow: "shadow-[0_0_20px_rgba(239,68,68,0.1)]",
  },
};

export default function StatCard({
  label,
  value,
  icon,
  trend,
  color = "purple",
  subtitle,
}: StatCardProps) {
  const colors = colorMap[color];
  return (
    <div
      className={clsx(
        "glass rounded-xl border border-white/[0.06] p-4 transition-all duration-300 hover:border-white/10",
        colors.glow
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={clsx("p-2 rounded-lg", colors.icon)}>{icon}</div>
        {trend !== undefined && (
          <span
            className={clsx(
              "text-xs font-medium flex items-center gap-0.5",
              trend > 0 ? "text-emerald-400" : trend < 0 ? "text-red-400" : "text-slate-400"
            )}
          >
            {trend > 0 ? "↑" : trend < 0 ? "↓" : "—"}
            {trend !== 0 && Math.abs(trend)}
          </span>
        )}
      </div>
      <div className={clsx("text-xl font-bold font-orbitron", colors.value)}>
        {value}
      </div>
      <div className="text-xs text-slate-400 mt-1">{label}</div>
      {subtitle && <div className="text-xs text-slate-500 mt-0.5">{subtitle}</div>}
    </div>
  );
}
