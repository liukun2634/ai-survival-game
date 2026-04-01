import type { Attributes, AttributeKey, GameState, SwipeCard, SwipeHistory, GameResult, SwipeOutcome, CareerTalent } from './types';
import { endings } from '../data/endings';

const ATTR_KEYS: AttributeKey[] = ['stability', 'skill', 'finance', 'network', 'sanity'];

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

export function pickOutcome(
  outcomes: SwipeOutcome[],
  careerId: string,
  talents: CareerTalent[],
  rng: () => number,
): SwipeOutcome {
  const weights = outcomes.map(outcome => {
    let w = outcome.weight;
    if (outcome.careerWeightModifiers?.[careerId] !== undefined) {
      w *= outcome.careerWeightModifiers[careerId]!;
    }
    for (const talent of talents) {
      if (talent.outcomeWeightModifiers[outcome.id] !== undefined) {
        w *= talent.outcomeWeightModifiers[outcome.id];
      }
    }
    return Math.max(w, 0);
  });

  const total = weights.reduce((sum, w) => sum + w, 0);
  let roll = rng() * total;
  for (let i = 0; i < outcomes.length; i++) {
    roll -= weights[i];
    if (roll <= 0) return outcomes[i];
  }
  return outcomes[outcomes.length - 1];
}

export interface SwipeResult {
  newState: GameState;
  outcome?: SwipeOutcome;
}

export function applySwipe(
  state: GameState,
  card: SwipeCard,
  direction: 'left' | 'right',
  talents?: CareerTalent[],
  rng?: () => number,
): SwipeResult {
  const choice = direction === 'left' ? card.leftChoice : card.rightChoice;

  let effects: Partial<Attributes>;
  let outcome: SwipeOutcome | undefined;

  if (choice.outcomes && choice.outcomes.length > 0 && rng) {
    outcome = pickOutcome(choice.outcomes, state.careerId, talents ?? [], rng);
    effects = outcome.effects;
  } else {
    effects = choice.effects;
  }

  const newAttrs = applyEffects(state.attributes, effects);

  const entry: SwipeHistory = {
    cardIndex: state.currentCard,
    cardId: card.id,
    direction,
    attributesBefore: { ...state.attributes },
    attributesAfter: { ...newAttrs },
    outcomeId: outcome?.id,
    outcomeText: outcome?.text,
  };

  return {
    newState: {
      ...state,
      attributes: newAttrs,
      currentCard: state.currentCard + 1,
      history: [...state.history, entry],
    },
    outcome,
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
    state.attributes.stability * 1.5 +
    state.attributes.skill * 0.8 +
    state.attributes.finance * 1.0 +
    state.attributes.network * 0.8 +
    state.attributes.sanity * 1.3 +
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
