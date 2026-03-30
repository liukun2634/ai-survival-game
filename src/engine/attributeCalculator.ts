import { Attributes, EventOption, AiMilestone } from './types';

export function clamp(value: number, min = 0, max = 100): number {
  return Math.max(min, Math.min(max, value));
}

export function applyEffects(attrs: Attributes, effects: Partial<Attributes>): Attributes {
  return {
    safety: clamp(attrs.safety + (effects.safety ?? 0)),
    skill: clamp(attrs.skill + (effects.skill ?? 0)),
    finance: clamp(attrs.finance + (effects.finance ?? 0)),
    network: clamp(attrs.network + (effects.network ?? 0)),
  };
}

export function applyAiImpact(
  attrs: Attributes,
  milestone: AiMilestone,
  careerId: string
): Attributes {
  const effects = milestone.careerEffects?.[careerId] ?? milestone.effects;
  const safetyDamage = effects.safety ?? 0;
  const reducedEffects = {
    ...effects,
    safety: attrs.skill >= 70 ? Math.ceil(safetyDamage / 2) : safetyDamage,
  };
  return applyEffects(attrs, reducedEffects);
}

export function isOptionAvailable(attrs: Attributes, option: EventOption): boolean {
  if (option.requiresFinance !== undefined && attrs.finance < option.requiresFinance) return false;
  if (option.requiresNetwork !== undefined && attrs.network < option.requiresNetwork) return false;
  return true;
}

export function calculateScore(attrs: Attributes, survivalYears: number): number {
  return Math.round(
    attrs.safety * 1.5 +
      attrs.skill * 1.2 +
      attrs.finance * 1.0 +
      attrs.network * 0.8 +
      survivalYears * 3
  );
}
