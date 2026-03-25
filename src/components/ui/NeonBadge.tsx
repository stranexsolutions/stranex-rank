import clsx from "clsx";
import { Tier, TIER_COLORS } from "@/lib/data/players";

interface NeonBadgeProps {
  tier: Tier;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}

const sizeClasses = {
  sm: "text-xs px-2 py-0.5",
  md: "text-xs px-2.5 py-1",
  lg: "text-sm px-3 py-1.5",
};

export default function NeonBadge({
  tier,
  size = "md",
  showIcon = true,
}: NeonBadgeProps) {
  const colors = TIER_COLORS[tier];
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full font-semibold border tracking-wide uppercase",
        colors.bg,
        colors.text,
        colors.border,
        sizeClasses[size]
      )}
    >
      {showIcon && <span>{colors.icon}</span>}
      {tier === "GRANDMASTER" ? "GM" : tier.charAt(0) + tier.slice(1).toLowerCase()}
    </span>
  );
}
