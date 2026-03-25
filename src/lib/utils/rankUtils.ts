import { Tier, TIER_COLORS } from "@/lib/data/players";

export function getTier(rankPoints: number): Tier {
  if (rankPoints >= 8500) return "GRANDMASTER";
  if (rankPoints >= 7000) return "MASTER";
  if (rankPoints >= 5500) return "DIAMOND";
  if (rankPoints >= 4000) return "PLATINUM";
  if (rankPoints >= 2500) return "GOLD";
  if (rankPoints >= 1000) return "SILVER";
  return "BRONZE";
}

export function getTierColors(tier: Tier) {
  return TIER_COLORS[tier];
}

export function getRankPercentile(rank: number, total: number = 50): string {
  const pct = (rank / total) * 100;
  if (pct <= 2) return "Top 2%";
  if (pct <= 5) return "Top 5%";
  if (pct <= 10) return "Top 10%";
  if (pct <= 20) return "Top 20%";
  if (pct <= 40) return "Top 40%";
  if (pct <= 60) return "Top 60%";
  return "Top 80%";
}

export function getWinRateColor(winRate: number): string {
  if (winRate >= 65) return "text-emerald-400";
  if (winRate >= 55) return "text-green-400";
  if (winRate >= 45) return "text-yellow-400";
  if (winRate >= 35) return "text-orange-400";
  return "text-red-400";
}

export function getKdaColor(kda: number): string {
  if (kda >= 4) return "text-emerald-400";
  if (kda >= 3) return "text-green-400";
  if (kda >= 2) return "text-yellow-400";
  if (kda >= 1) return "text-orange-400";
  return "text-red-400";
}

export function getTierIcon(tier: Tier): string {
  return TIER_COLORS[tier].icon;
}

export function formatRankPoints(points: number): string {
  return points.toLocaleString();
}

export function getTierOrder(tier: Tier): number {
  const order: Record<Tier, number> = {
    GRANDMASTER: 7,
    MASTER: 6,
    DIAMOND: 5,
    PLATINUM: 4,
    GOLD: 3,
    SILVER: 2,
    BRONZE: 1,
  };
  return order[tier];
}
