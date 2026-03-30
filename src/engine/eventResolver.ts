import { GameEvent, AiMilestone, Attributes, EventOption } from './types';
import { applyEffects } from './attributeCalculator';

export function filterEventsForYear(
  events: GameEvent[],
  year: number,
  careerId: string
): GameEvent[] {
  return events.filter((e) => {
    if (e.minYear !== undefined && year < e.minYear) return false;
    if (e.maxYear !== undefined && year > e.maxYear) return false;
    if (e.careerIds && !e.careerIds.includes(careerId)) return false;
    return true;
  });
}

export function selectRandomEvents(
  events: GameEvent[],
  count: number,
  rng: () => number
): GameEvent[] {
  const shuffled = [...events].sort(() => rng() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function getMilestoneForYear(
  milestones: AiMilestone[],
  year: number
): AiMilestone | undefined {
  return milestones.find((m) => m.year === year);
}

export function resolveOption(
  attrs: Attributes,
  option: EventOption
): Attributes {
  return applyEffects(attrs, option.effects);
}
