import { describe, it, expect } from 'vitest';
import { applySwipe, checkGameOver, buildResult, pickOutcome } from '../swipeEngine';
import type { Attributes, GameState, SwipeCard, SwipeOutcome, CareerTalent } from '../types';

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
    const { newState } = applySwipe(state, makeCard({ leftChoice: { label: { zh: '左', en: 'l' }, effects: { safety: 10 } } }), 'left');
    expect(newState.attributes.safety).toBe(100);
    expect(newState.currentCard).toBe(1);
    expect(newState.history).toHaveLength(1);
    expect(newState.history[0].direction).toBe('left');
  });

  it('applies right choice effects', () => {
    const state = makeState();
    const { newState } = applySwipe(state, makeCard(), 'right');
    expect(newState.attributes.safety).toBe(40);
    expect(newState.attributes.skill).toBe(65);
  });

  it('clamps attributes to minimum 0', () => {
    const state = makeState({ safety: 5 });
    const { newState } = applySwipe(state, makeCard({ rightChoice: { label: { zh: '右', en: 'r' }, effects: { safety: -20 } } }), 'right');
    expect(newState.attributes.safety).toBe(0);
  });

  it('returns outcome undefined when card has no outcomes', () => {
    const state = makeState();
    const { outcome } = applySwipe(state, makeCard(), 'right');
    expect(outcome).toBeUndefined();
  });

  it('uses outcome effects when outcomes are present', () => {
    const outcomes: SwipeOutcome[] = [
      { id: 'o1', text: { zh: '好', en: 'good' }, effects: { skill: 20 }, weight: 100 },
    ];
    const card = makeCard({
      rightChoice: { label: { zh: '右', en: 'r' }, effects: { skill: 5 }, outcomes },
    });
    const state = makeState();
    let callCount = 0;
    const mockRng = () => { callCount++; return 0.5; };
    const { newState, outcome } = applySwipe(state, card, 'right', [], mockRng);
    expect(outcome).toBeDefined();
    expect(outcome!.id).toBe('o1');
    expect(newState.attributes.skill).toBe(70); // 50 + 20
    expect(newState.history[0].outcomeId).toBe('o1');
  });
});

describe('pickOutcome', () => {
  const outcomes: SwipeOutcome[] = [
    { id: 'good', text: { zh: '好', en: 'good' }, effects: { skill: 10 }, weight: 50 },
    { id: 'bad', text: { zh: '差', en: 'bad' }, effects: { skill: -10 }, weight: 50 },
  ];

  it('selects first outcome when rng returns 0', () => {
    const result = pickOutcome(outcomes, 'programmer', [], () => 0);
    expect(result.id).toBe('good');
  });

  it('selects last outcome when rng returns near 1', () => {
    const result = pickOutcome(outcomes, 'programmer', [], () => 0.99);
    expect(result.id).toBe('bad');
  });

  it('applies career weight modifiers', () => {
    const modifiedOutcomes: SwipeOutcome[] = [
      { id: 'good', text: { zh: '好', en: 'good' }, effects: { skill: 10 }, weight: 50, careerWeightModifiers: { programmer: 3 } },
      { id: 'bad', text: { zh: '差', en: 'bad' }, effects: { skill: -10 }, weight: 50 },
    ];
    // programmer good weight = 50*3 = 150, bad = 50, total = 200
    // rng = 0.5 → roll = 100, 100 - 150 = -50 ≤ 0 → good
    const result = pickOutcome(modifiedOutcomes, 'programmer', [], () => 0.5);
    expect(result.id).toBe('good');
  });

  it('applies talent weight modifiers', () => {
    const talent: CareerTalent = {
      id: 'tech',
      name: { zh: '技术', en: 'tech' },
      description: { zh: '技术天赋', en: 'tech talent' },
      outcomeWeightModifiers: { good: 3 },
    };
    // good weight = 50*3 = 150, bad = 50, total = 200
    const result = pickOutcome(outcomes, 'programmer', [talent], () => 0.5);
    expect(result.id).toBe('good');
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
