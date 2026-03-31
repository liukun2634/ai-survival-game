import type { Attributes, AttributeKey, GameState, SwipeCard, SwipeHistory, GameResult } from './types';
import { endings } from '../data/endings';

const ATTR_KEYS: AttributeKey[] = ['safety', 'skill', 'finance', 'network'];

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function applyEffects(attrs: Attributes, effects: Partial<Attributes>): Attributes {
  const result = { ...attrs };
  for (const key of ATTR_KEYS) {
    if (effects[key] !== undefined) {
      result[key] = clamp(result[key] + effects[key], 0, 100);
    }
  }
  return result;
}

export function applySwipe(
  state: GameState,
  card: SwipeCard,
  direction: 'left' | 'right',
): GameState {
  const choice = direction === 'left' ? card.leftChoice : card.rightChoice;
  const newAttrs = applyEffects(state.attributes, choice.effects);

  const entry: SwipeHistory = {
    cardIndex: state.currentCard,
    cardId: card.id,
    direction,
    attributesBefore: { ...state.attributes },
    attributesAfter: { ...newAttrs },
  };

  return {
    ...state,
    attributes: newAttrs,
    currentCard: state.currentCard + 1,
    history: [...state.history, entry],
  };
}

export function checkGameOver(
  attrs: Attributes,
  cardNumber: number,
): { reason: 'attr_zero' | 'attr_max'; attr: AttributeKey } | { reason: 'won' } | null {
  for (const key of ATTR_KEYS) {
    if (attrs[key] <= 0) return { reason: 'attr_zero', attr: key };
    if (attrs[key] >= 100) return { reason: 'attr_max', attr: key };
  }
  if (cardNumber >= 30) return { reason: 'won' };
  return null;
}

export function buildResult(state: GameState): GameResult {
  const score = Math.round(
    state.attributes.safety * 1.5 +
    state.attributes.skill * 1.2 +
    state.attributes.finance * 1.0 +
    state.attributes.network * 0.8 +
    state.currentCard * 3
  );

  const ending = endings
    .sort((a, b) => b.priority - a.priority)
    .find(e => e.condition(state));

  return {
    careerId: state.careerId,
    finalYear: state.currentCard,
    finalAttributes: { ...state.attributes },
    endingId: ending?.id ?? 'quitter',
    score,
    history: state.history,
    gameOverReason: state.gameOverReason ?? 'won',
    gameOverAttr: state.gameOverAttr,
  };
}
