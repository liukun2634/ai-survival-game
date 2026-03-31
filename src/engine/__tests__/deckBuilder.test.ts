import { describe, it, expect } from 'vitest';
import { buildDeck } from '../deckBuilder';

describe('buildDeck', () => {
  it('returns exactly 30 cards', () => {
    const deck = buildDeck('programmer', 42);
    expect(deck).toHaveLength(30);
  });

  it('has 10 cards per stage', () => {
    const deck = buildDeck('programmer', 42);
    expect(deck.filter(c => c.stage === 1)).toHaveLength(10);
    expect(deck.filter(c => c.stage === 2)).toHaveLength(10);
    expect(deck.filter(c => c.stage === 3)).toHaveLength(10);
  });

  it('produces different decks for different seeds', () => {
    const deck1 = buildDeck('programmer', 1);
    const deck2 = buildDeck('programmer', 2);
    const ids1 = deck1.map(c => c.id).join(',');
    const ids2 = deck2.map(c => c.id).join(',');
    expect(ids1).not.toBe(ids2);
  });

  it('produces same deck for same seed', () => {
    const deck1 = buildDeck('programmer', 42);
    const deck2 = buildDeck('programmer', 42);
    expect(deck1.map(c => c.id)).toEqual(deck2.map(c => c.id));
  });

  it('includes career-specific cards for the chosen career', () => {
    const deck = buildDeck('programmer', 42);
    const hasCareerCard = deck.some(c => c.careerIds?.includes('programmer'));
    expect(hasCareerCard).toBe(true);
  });

  it('excludes career-specific cards for other careers', () => {
    const deck = buildDeck('programmer', 42);
    const hasWrongCareer = deck.some(c =>
      c.careerIds && c.careerIds.length > 0 && !c.careerIds.includes('programmer')
    );
    expect(hasWrongCareer).toBe(false);
  });
});
