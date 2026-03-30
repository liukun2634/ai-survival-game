import { applyEffects, applyAiImpact, isOptionAvailable, calculateScore } from '../attributeCalculator';
import type { Attributes, EventOption, AiMilestone } from '../types';

const baseAttrs: Attributes = { safety: 50, skill: 50, finance: 50, network: 50 };

// Test 1: applyEffects adds effects correctly
describe('applyEffects', () => {
  it('adds effects correctly', () => {
    const result = applyEffects(baseAttrs, { safety: 10, skill: -5, finance: 20 });
    expect(result.safety).toBe(60);
    expect(result.skill).toBe(45);
    expect(result.finance).toBe(70);
    expect(result.network).toBe(50);
  });

  // Test 2: clamps to 0-100
  it('clamps values to 0-100 (no overflow above 100, no underflow below 0)', () => {
    const high: Attributes = { safety: 95, skill: 95, finance: 95, network: 95 };
    const overflowed = applyEffects(high, { safety: 20, skill: 20, finance: 20, network: 20 });
    expect(overflowed.safety).toBe(100);
    expect(overflowed.skill).toBe(100);
    expect(overflowed.finance).toBe(100);
    expect(overflowed.network).toBe(100);

    const low: Attributes = { safety: 5, skill: 5, finance: 5, network: 5 };
    const underflowed = applyEffects(low, { safety: -20, skill: -20, finance: -20, network: -20 });
    expect(underflowed.safety).toBe(0);
    expect(underflowed.skill).toBe(0);
    expect(underflowed.finance).toBe(0);
    expect(underflowed.network).toBe(0);
  });

  // Test 3: empty effects returns unchanged attributes
  it('with empty effects returns unchanged attributes', () => {
    const result = applyEffects(baseAttrs, {});
    expect(result).toEqual(baseAttrs);
  });
});

// Test 4 & 5: applyAiImpact
describe('applyAiImpact', () => {
  const milestone: AiMilestone = {
    year: 3,
    title: { zh: 'AI测试', en: 'AI Test' },
    description: { zh: '描述', en: 'Description' },
    effects: { safety: -20, skill: -10 },
  };

  // Test 4: skill >= 70 halves negative safety damage
  it('with skill >= 70 halves negative safety damage', () => {
    const highSkillAttrs: Attributes = { safety: 80, skill: 70, finance: 50, network: 50 };
    const result = applyAiImpact(highSkillAttrs, milestone, 'default');
    // safety: -20 / 2 = -10 (Math.ceil(-20/2) = -10), so 80 - 10 = 70
    expect(result.safety).toBe(70);
    // skill: -10 full damage, 70 - 10 = 60
    expect(result.skill).toBe(60);
  });

  // Test 5: skill < 70 applies full damage
  it('with skill < 70 applies full damage', () => {
    const lowSkillAttrs: Attributes = { safety: 80, skill: 60, finance: 50, network: 50 };
    const result = applyAiImpact(lowSkillAttrs, milestone, 'default');
    // safety: -20 full damage, 80 - 20 = 60
    expect(result.safety).toBe(60);
    expect(result.skill).toBe(50);
  });

  // Test 6: uses career-specific effects when present
  it('uses career-specific effects when present', () => {
    const milestoneWithCareer: AiMilestone = {
      year: 3,
      title: { zh: 'AI测试', en: 'AI Test' },
      description: { zh: '描述', en: 'Description' },
      effects: { safety: -20 },
      careerEffects: {
        engineer: { safety: -5, skill: 10 },
      },
    };
    const attrs: Attributes = { safety: 80, skill: 60, finance: 50, network: 50 };
    const result = applyAiImpact(attrs, milestoneWithCareer, 'engineer');
    // career-specific: safety -5, skill +10; skill < 70 so full damage on safety
    // safety: 80 - 5 = 75, skill: 60 + 10 = 70
    expect(result.safety).toBe(75);
    expect(result.skill).toBe(70);
  });
});

// Tests 7-9: isOptionAvailable
describe('isOptionAvailable', () => {
  const makeOption = (requiresFinance?: number, requiresNetwork?: number): EventOption => ({
    id: 'test',
    text: { zh: '测试', en: 'Test' },
    effects: {},
    feedback: { zh: '反馈', en: 'Feedback' },
    requiresFinance,
    requiresNetwork,
  });

  // Test 7: returns false when finance too low
  it('returns false when finance too low', () => {
    const option = makeOption(60, undefined);
    const attrs: Attributes = { safety: 50, skill: 50, finance: 40, network: 50 };
    expect(isOptionAvailable(attrs, option)).toBe(false);
  });

  // Test 8: returns false when network too low
  it('returns false when network too low', () => {
    const option = makeOption(undefined, 60);
    const attrs: Attributes = { safety: 50, skill: 50, finance: 50, network: 40 };
    expect(isOptionAvailable(attrs, option)).toBe(false);
  });

  // Test 9: returns true when all requirements met
  it('returns true when all requirements met', () => {
    const option = makeOption(40, 40);
    expect(isOptionAvailable(baseAttrs, option)).toBe(true);
  });
});

// Test 10: calculateScore
describe('calculateScore', () => {
  it('returns correct weighted value', () => {
    // safety*1.5 + skill*1.2 + finance*1.0 + network*0.8 + survivalYears*3
    // 50*1.5 + 50*1.2 + 50*1.0 + 50*0.8 + 5*3
    // 75 + 60 + 50 + 40 + 15 = 240
    expect(calculateScore(baseAttrs, 5)).toBe(240);

    // Edge case: all zeros, 0 years => 0
    const zeroAttrs: Attributes = { safety: 0, skill: 0, finance: 0, network: 0 };
    expect(calculateScore(zeroAttrs, 0)).toBe(0);

    // Rounding: 10*1.5 + 10*1.2 + 10*1.0 + 10*0.8 + 1*3 = 15+12+10+8+3 = 48
    const tenAttrs: Attributes = { safety: 10, skill: 10, finance: 10, network: 10 };
    expect(calculateScore(tenAttrs, 1)).toBe(48);
  });
});
