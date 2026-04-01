import { createRng } from './random';
import { allCards } from '../data/cards';
import type { SwipeCard, Scene } from './types';

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function buildDeck(careerId: string, scenes: Scene[], seed: number): SwipeCard[] {
  const rng = createRng(seed);

  const deck: SwipeCard[] = [];

  for (const stage of [1, 2, 3] as const) {
    const pool = allCards.filter(c =>
      c.stage === stage &&
      scenes.includes(c.scene) &&
      (!c.careerIds || c.careerIds.includes(careerId))
    );
    const events = pool.filter(c => c.isEvent);
    const regular = pool.filter(c => !c.isEvent);
    const shuffledEvents = shuffle(events, rng);
    const shuffledRegular = shuffle(regular, rng);
    const eventCount = Math.min(shuffledEvents.length, rng() < 0.5 ? 1 : 2);
    const pickedEvents = shuffledEvents.slice(0, eventCount);
    const pickedRegular = shuffledRegular.slice(0, 10 - pickedEvents.length);
    deck.push(...shuffle([...pickedEvents, ...pickedRegular], rng));
  }

  return deck;
}
