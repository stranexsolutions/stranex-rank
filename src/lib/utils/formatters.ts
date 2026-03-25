export function formatNumber(n: number): string {
  return n.toLocaleString();
}

export function formatKDA(k: number, d: number, a: number): string {
  return `${k}/${d}/${a}`;
}

export function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatRelative(iso: string): string {
  const date = new Date(iso);
  const now = new Date("2026-03-25");
  const diff = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  if (diff < 7) return `${diff} days ago`;
  if (diff < 30) return `${Math.floor(diff / 7)} weeks ago`;
  if (diff < 365) return `${Math.floor(diff / 30)} months ago`;
  return `${Math.floor(diff / 365)} years ago`;
}

export function formatDuration(hours: number): string {
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

export function formatWinRate(rate: number): string {
  return `${rate.toFixed(1)}%`;
}

export function formatKdaRatio(kda: number): string {
  return kda.toFixed(2);
}

export function formatDamage(dmg: number): string {
  if (dmg >= 1000) return `${(dmg / 1000).toFixed(1)}K`;
  return dmg.toString();
}
