export interface Match {
  id: string;
  date: string;
  map: string;
  mode: string;
  result: "WIN" | "LOSS" | "DRAW";
  kills: number;
  deaths: number;
  assists: number;
  damage: number;
  duration: string;
  rankChange: number;
}

const MAPS = [
  "Neon District",
  "Void Sector",
  "Grid Zero",
  "Plasma Rift",
  "Crystal Spire",
  "Omega Station",
];
const MODES = ["Ranked", "Ranked", "Ranked", "Tournament", "Scrimmage"];

function seededRand(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function generateMatchHistory(playerId: string, winRate: number, kda: number): Match[] {
  const seed = playerId.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const matches: Match[] = [];

  for (let i = 0; i < 15; i++) {
    const r = seededRand(seed + i * 7);
    const isWin = r < winRate / 100;
    const isDraw = !isWin && seededRand(seed + i * 13) < 0.05;
    const result: "WIN" | "LOSS" | "DRAW" = isDraw ? "DRAW" : isWin ? "WIN" : "LOSS";

    const baseKills = Math.round(kda * 3 * (0.7 + seededRand(seed + i * 3) * 0.6));
    const deaths = Math.max(1, Math.round(baseKills / kda * (0.8 + seededRand(seed + i * 5) * 0.4)));
    const assists = Math.round(baseKills * (0.5 + seededRand(seed + i * 11) * 0.8));
    const damage = Math.round((baseKills * 400 + assists * 150) * (0.9 + seededRand(seed + i * 17) * 0.2));

    const daysAgo = i * 2 + Math.round(seededRand(seed + i) * 2);
    const matchDate = new Date(2026, 2, 25 - daysAgo);

    const rankChange = result === "WIN" ? Math.round(20 + seededRand(seed + i * 19) * 15)
      : result === "LOSS" ? -Math.round(15 + seededRand(seed + i * 23) * 12)
      : Math.round(seededRand(seed + i) * 5 - 2);

    const mins = Math.round(18 + seededRand(seed + i * 29) * 14);
    const secs = Math.round(seededRand(seed + i * 31) * 59);

    matches.push({
      id: `match-${playerId}-${i}`,
      date: matchDate.toISOString().split("T")[0],
      map: MAPS[Math.floor(seededRand(seed + i * 37) * MAPS.length)],
      mode: MODES[Math.floor(seededRand(seed + i * 41) * MODES.length)],
      result,
      kills: baseKills,
      deaths,
      assists,
      damage,
      duration: `${mins}:${secs.toString().padStart(2, "0")}`,
      rankChange,
    });
  }

  return matches;
}
