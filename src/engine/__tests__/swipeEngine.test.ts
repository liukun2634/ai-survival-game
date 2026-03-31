import { describe, it, expect } from 'vitest';
import { applySwipe, checkGameOver, buildResult } from '../swipeEngine';
import type { Attributes, GameState, SwipeCard } from '../types';

const makeCard = (overrides?: Partial<SwipeCard>): SwipeCard => ({
  id: 'test_card',
  character: 'boss',
  text: { zh: '测试', en: 'test' },
  leftChoice: { label: { zh: '拒绝', en: 'reject' }, effects: { safety: 5 } },
  rightChoice: { label: { zh: '接受', en: 'accept' }, effects: { safety: -10, skill: 15 } },
  stage: 1,
  ...overrides,
});

const makeState = (attrs?: Partial<Attributes>): GameState => ({
  careerId: 'programmer',
  currentCard: 0,
  attributes: { safety: 50, skill: 50, finance: 50, network: 50, ...attrs },
  history: [],
  isGameOver: false,
  seed: 1,
  deck: [makeCard()],
});

describe('applySwipe', () => {
  it('applies left choice effects and clamps to 0-100', () => {
    const state = makeState({ safety: 98 });
    const result = applySwipe(state, makeCard({ leftChoice: { label: { zh: '左', en: 'l' }, effects: { safety: 10 } } }), 'left');
    expect(result.attributes.safety).toBe(100);
    expect(result.currentCard).toBe(1);
    expect(result.history).toHaveLength(1);
    expect(result.history[0].direction).toBe('left');
  });

  it('applies right choice effects', () => {
    const state = makeState();
    const result = applySwipe(state, makeCard(), 'right');
    expect(result.attributes.safety).toBe(40);
    expect(result.attributes.skill).toBe(65);
  });

  it('clamps attributes to minimum 0', () => {
    const state = makeState({ safety: 5 });
    const result = applySwipe(state, makeCard({ rightChoice: { label: { zh: '右', en: 'r' }, effects: { safety: -20 } } }), 'right');
    expect(result.attributes.safety).toBe(0);
  });
});

describe('checkGameOver', () => {
  it('returns null when all attributes in range', () => {
    expect(checkGameOver({ safety: 50, skill: 50, finance: 50, network: 50 }, 15)).toBeNull();
  });

  it('detects attr_zero', () => {
    const result = checkGameOver({ safety: 0, skill: 50, finance: 50, network: 50 }, 5);
    expect(result).toEqual({ reason: 'attr_zero', attr: 'safety' });
  });

  it('detects attr_max', () => {
    const result = checkGameOver({ safety: 50, skill: 100, finance: 50, network: 50 }, 5);
    expect(result).toEqual({ reason: 'attr_max', attr: 'skill' });
  });

  it('detects won at card 30', () => {
    const result = checkGameOver({ safety: 50, skill: 50, finance: 50, network: 50 }, 30);
    expect(result).toEqual({ reason: 'won' });
  });
});

describe('buildResult', () => {
  it('returns a GameResult with score', () => {
    const state = makeState();
    state.currentCard = 30;
    state.isGameOver = true;
    state.gameOverReason = 'won';
    const result = buildResult(state);
    expect(result.finalYear).toBe(30);
    expect(result.score).toBeGreaterThan(0);
    expect(result.endingId).toBeDefined();
  });
});
