import type { GameResult } from '../engine/types';

interface ShareData {
  careerId: string;
  finalYear: number;
  score: number;
  titleId: string;
  safety: number;
  skill: number;
  finance: number;
  network: number;
}

export function encodeShareData(result: GameResult): string {
  const data: ShareData = {
    careerId: result.careerId,
    finalYear: result.finalYear,
    score: result.score,
    titleId: result.titleId,
    safety: result.finalAttributes.safety,
    skill: result.finalAttributes.skill,
    finance: result.finalAttributes.finance,
    network: result.finalAttributes.network,
  };
  return btoa(JSON.stringify(data));
}

export function decodeShareData(encoded: string): ShareData | null {
  try {
    const json = atob(encoded);
    const data = JSON.parse(json) as unknown;
    if (
      typeof data !== 'object' ||
      data === null ||
      !('careerId' in data) ||
      !('finalYear' in data) ||
      !('score' in data)
    ) {
      return null;
    }
    const d = data as Record<string, unknown>;
    if (typeof d.careerId !== 'string' || typeof d.finalYear !== 'number' || typeof d.score !== 'number') {
      return null;
    }
    return data as ShareData;
  } catch {
    return null;
  }
}
