import type { GameEvent, AiMilestone, Attributes } from '../types';
import { filterEventsForYear, selectRandomEvents, getMilestoneForYear, resolveOption } from '../eventResolver';
import { createRng } from '../random';

// --- Fixtures ---

const universalEvent: GameEvent = {
  id: 'universal_1',
  type: 'life',
  title: { zh: '通用事件', en: 'Universal Event' },
  description: { zh: '描述', en: 'Desc' },
  options: [],
};

const careerEvent: GameEvent = {
  id: 'career_1',
  type: 'opportunity',
  title: { zh: '职业事件', en: 'Career Event' },
  description: { zh: '描述', en: 'Desc' },
  options: [],
  careerIds: ['engineer'],
};

const rangedEvent: GameEvent = {
  id: 'ranged_1',
  type: 'crisis',
  title: { zh: '限年事件', en: 'Ranged Event' },
  description: { zh: '描述', en: 'Desc' },
  options: [],
  minYear: 3,
  maxYear: 7,
};

const milestones: AiMilestone[] = [
  {
    year: 5,
    title: { zh: 'AI里程碑', en: 'AI Milestone' },
    description: { zh: '描述', en: 'Desc' },
    effects: { safety: -10, skill: 5 },
  },
];

const baseAttrs: Attributes = { safety: 50, skill: 30, finance: 20, network: 10 };

const allEvents = [universalEvent, careerEvent, rangedEvent];

// --- filterEventsForYear ---

describe('filterEventsForYear', () => {
  it('returns valid events for year/career', () => {
    const result = filterEventsForYear(allEvents, 5, 'engineer');
    expect(result).toContain(universalEvent);
    expect(result).toContain(careerEvent);
    expect(result).toContain(rangedEvent);
  });

  it('excludes events with non-matching careerIds', () => {
    const result = filterEventsForYear(allEvents, 5, 'designer');
    expect(result).not.toContain(careerEvent);
  });

  it('includes universal events (no careerIds field)', () => {
    const result = filterEventsForYear([universalEvent, careerEvent], 5, 'designer');
    expect(result).toContain(universalEvent);
  });

  it('respects minYear', () => {
    const result = filterEventsForYear([rangedEvent], 2, 'engineer');
    expect(result).toHaveLength(0);
  });

  it('respects maxYear', () => {
    const result = filterEventsForYear([rangedEvent], 8, 'engineer');
    expect(result).toHaveLength(0);
  });

  it('includes ranged event when year is within range', () => {
    const result = filterEventsForYear([rangedEvent], 5, 'engineer');
    expect(result).toContain(rangedEvent);
  });
});

// --- selectRandomEvents ---

describe('selectRandomEvents', () => {
  it('returns correct count', () => {
    const rng = createRng(42);
    const result = selectRandomEvents(allEvents, 2, rng);
    expect(result).toHaveLength(2);
  });

  it('is deterministic with same seed', () => {
    const result1 = selectRandomEvents(allEvents, 2, createRng(99));
    const result2 = selectRandomEvents(allEvents, 2, createRng(99));
    expect(result1.map((e) => e.id)).toEqual(result2.map((e) => e.id));
  });

  it('returns all events when count exceeds length', () => {
    const rng = createRng(1);
    const result = selectRandomEvents(allEvents, 10, rng);
    expect(result).toHaveLength(allEvents.length);
  });
});

// --- getMilestoneForYear ---

describe('getMilestoneForYear', () => {
  it('returns milestone on matching year', () => {
    const result = getMilestoneForYear(milestones, 5);
    expect(result).toBeDefined();
    expect(result?.year).toBe(5);
  });

  it('returns undefined on non-milestone year', () => {
    const result = getMilestoneForYear(milestones, 3);
    expect(result).toBeUndefined();
  });
});

// --- resolveOption ---

describe('resolveOption', () => {
  it('returns correct new attributes after applying effects', () => {
    const option = {
      id: 'opt_1',
      text: { zh: '选项', en: 'Option' },
      effects: { safety: -5, skill: 10 },
      feedback: { zh: '反馈', en: 'Feedback' },
    };
    const result = resolveOption(baseAttrs, option);
    expect(result.safety).toBe(45);
    expect(result.skill).toBe(40);
    expect(result.finance).toBe(20);
    expect(result.network).toBe(10);
  });
});
