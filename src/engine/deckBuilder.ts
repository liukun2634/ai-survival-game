import { createRng } from './random';
import { allCards } from '../data/cards';
import type { SwipeCard } from './types';

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function buildDeck(careerId: string, seed: number): SwipeCard[] {
  const rng = createRng(seed);

  const deck: SwipeCard[] = [];

  for (const stage of [1, 2, 3] as const) {
    const pool = allCards.filter(c =>
      c.stage === stage && (!c.careerIds || c.careerIds.includes(careerId))
    );
    const shuffled = shuffle(pool, rng);
    deck.push(...shuffled.slice(0, 10));
  }

  return deck;
}
