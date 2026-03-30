import type { GameState, GameResult, Career, GameEvent, AiMilestone, EventOption, HistoryEntry, Title } from './types';
import { applyEffects, applyAiImpact, isOptionAvailable, calculateScore } from './attributeCalculator';
import { filterEventsForYear, selectRandomEvents, getMilestoneForYear } from './eventResolver';
import { createRng } from './random';

export function createInitialState(career: Career, seed?: number): GameState {
  return {
    careerId: career.id,
    currentYear: 1,
    attributes: { ...career.startingAttributes },
    history: [],
    isGameOver: false,
    seed: seed ?? Math.floor(Math.random() * 2147483647),
  };
}

export interface YearAdvanceResult {
  events: GameEvent[];
  milestone?: AiMilestone;
  stateAfterMilestone: GameState;
}

export function advanceYear(
  state: GameState,
  allEvents: GameEvent[],
  milestones: AiMilestone[]
): YearAdvanceResult {
  const nextYear = state.currentYear + 1;
  const rng = createRng(state.seed + nextYear);

  // Check for milestone
  const milestone = getMilestoneForYear(milestones, nextYear);

  // Apply milestone effects if present
  let newAttrs = state.attributes;
  if (milestone) {
    newAttrs = applyAiImpact(state.attributes, milestone, state.careerId);
  }

  // Filter and select random events
  const filtered = filterEventsForYear(allEvents, nextYear, state.careerId);
  const eventCount = rng() > 0.5 ? 2 : 1;
  const events = selectRandomEvents(filtered, eventCount, rng);

  const stateAfterMilestone: GameState = {
    ...state,
    currentYear: nextYear,
    attributes: newAttrs,
  };

  return { events, milestone, stateAfterMilestone };
}

export function applyChoice(
  state: GameState,
  event: GameEvent,
  optionId: string,
  milestone?: AiMilestone
): GameState {
  const option = event.options.find(o => o.id === optionId);
  if (!option) return state;

  const attributesBefore = { ...state.attributes };
  const attributesAfter = applyEffects(state.attributes, option.effects);

  const entry: HistoryEntry = {
    year: state.currentYear,
    event,
    chosenOptionId: optionId,
    attributesBefore,
    attributesAfter,
    milestone,
  };

  const isGameOver = attributesAfter.safety <= 0 || state.currentYear >= 30;
  let gameOverReason: GameState['gameOverReason'];
  if (attributesAfter.safety <= 0) {
    gameOverReason = 'safety_zero';
  } else if (state.currentYear >= 30) {
    gameOverReason = 'won';
  }

  return {
    ...state,
    attributes: attributesAfter,
    history: [...state.history, entry],
    isGameOver,
    gameOverReason,
  };
}

export function getAvailableOptions(
  state: GameState,
  event: GameEvent
): EventOption[] {
  return event.options.filter(option => isOptionAvailable(state.attributes, option));
}

export function generateResult(
  state: GameState,
  titles: Title[]
): GameResult {
  const sortedTitles = [...titles].sort((a, b) => b.priority - a.priority);
  const matchedTitle = sortedTitles.find(t => t.condition(state));
  const score = calculateScore(state.attributes, state.currentYear);

  return {
    careerId: state.careerId,
    finalYear: state.currentYear,
    finalAttributes: { ...state.attributes },
    titleId: matchedTitle?.id ?? 'unknown',
    score,
    history: state.history,
  };
}
