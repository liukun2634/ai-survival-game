import { createInitialState, advanceYear, applyChoice, getAvailableOptions, generateResult } from '../gameEngine';
import { Career, GameEvent, AiMilestone, Title, GameState } from '../types';

const mockCareer: Career = {
  id: 'programmer',
  name: { zh: '程序员', en: 'Programmer' },
  description: { zh: '写代码', en: 'Write code' },
  startingAttributes: { safety: 70, skill: 60, finance: 50, network: 30 },
  icon: '💻',
};

const mockEvent: GameEvent = {
  id: 'test_event',
  type: 'crisis',
  title: { zh: '测试事件', en: 'Test Event' },
  description: { zh: '测试', en: 'Test' },
  options: [
    {
      id: 'opt_a',
      text: { zh: '选A', en: 'Choose A' },
      effects: { safety: 10, skill: 5 },
      feedback: { zh: '好', en: 'Good' },
    },
    {
      id: 'opt_b',
      text: { zh: '选B', en: 'Choose B' },
      effects: { safety: -80, finance: -10 },
      feedback: { zh: '差', en: 'Bad' },
    },
    {
      id: 'opt_locked',
      text: { zh: '选C', en: 'Choose C' },
      effects: { skill: 20 },
      feedback: { zh: '锁', en: 'Locked' },
      requiresFinance: 999,
    },
  ],
};

const mockMilestone: AiMilestone = {
  year: 2,
  title: { zh: 'AI写作成熟', en: 'AI Writing Matures' },
  description: { zh: '描述', en: 'Description' },
  effects: { safety: -25 },
  careerEffects: { programmer: { safety: -30 } },
};

const mockTitles: Title[] = [
  { id: 'winner', name: { zh: '赢家', en: 'Winner' }, condition: (s) => s.currentYear >= 30 && s.gameOverReason === 'won', priority: 100 },
  { id: 'survivor', name: { zh: '幸存者', en: 'Survivor' }, condition: (s) => s.currentYear >= 20, priority: 50 },
  { id: 'fallback', name: { zh: '淘汰者', en: 'Eliminated' }, condition: () => true, priority: 0 },
];

describe('createInitialState', () => {
  it('sets correct attributes from career', () => {
    const state = createInitialState(mockCareer, 42);
    expect(state.attributes).toEqual({ safety: 70, skill: 60, finance: 50, network: 30 });
  });

  it('sets year to 1 and isGameOver to false', () => {
    const state = createInitialState(mockCareer, 42);
    expect(state.currentYear).toBe(1);
    expect(state.isGameOver).toBe(false);
    expect(state.history).toEqual([]);
    expect(state.careerId).toBe('programmer');
  });

  it('generates seed if not provided', () => {
    const state = createInitialState(mockCareer);
    expect(typeof state.seed).toBe('number');
  });
});

describe('advanceYear', () => {
  it('increments year and returns events', () => {
    const state = createInitialState(mockCareer, 42);
    const events = [mockEvent];
    const result = advanceYear(state, events, []);
    expect(result.stateAfterMilestone.currentYear).toBe(2);
    expect(result.events.length).toBeGreaterThanOrEqual(1);
  });

  it('includes milestone on milestone years', () => {
    const state = createInitialState(mockCareer, 42);
    const result = advanceYear(state, [mockEvent], [mockMilestone]);
    // Year advances from 1 to 2, which is a milestone year
    expect(result.milestone).toBeDefined();
    expect(result.milestone?.year).toBe(2);
  });

  it('applies milestone effects to state', () => {
    const state = createInitialState(mockCareer, 42);
    const result = advanceYear(state, [mockEvent], [mockMilestone]);
    // Programmer career-specific: safety -30, but skill < 70 so full damage
    expect(result.stateAfterMilestone.attributes.safety).toBe(70 - 30);
  });
});

describe('applyChoice', () => {
  it('updates attributes from option effects', () => {
    const state = createInitialState(mockCareer, 42);
    const newState = applyChoice(state, mockEvent, 'opt_a');
    expect(newState.attributes.safety).toBe(80);
    expect(newState.attributes.skill).toBe(65);
  });

  it('adds history entry', () => {
    const state = createInitialState(mockCareer, 42);
    const newState = applyChoice(state, mockEvent, 'opt_a');
    expect(newState.history).toHaveLength(1);
    expect(newState.history[0].chosenOptionId).toBe('opt_a');
    expect(newState.history[0].event.id).toBe('test_event');
  });

  it('triggers game over when safety drops to 0', () => {
    const state = createInitialState(mockCareer, 42);
    const newState = applyChoice(state, mockEvent, 'opt_b');
    // safety: 70 - 80 = clamped to 0
    expect(newState.attributes.safety).toBe(0);
    expect(newState.isGameOver).toBe(true);
    expect(newState.gameOverReason).toBe('safety_zero');
  });

  it('triggers win when year reaches 30', () => {
    const state: GameState = {
      ...createInitialState(mockCareer, 42),
      currentYear: 30,
    };
    const newState = applyChoice(state, mockEvent, 'opt_a');
    expect(newState.isGameOver).toBe(true);
    expect(newState.gameOverReason).toBe('won');
  });
});

describe('getAvailableOptions', () => {
  it('filters out locked options', () => {
    const state = createInitialState(mockCareer, 42);
    const options = getAvailableOptions(state, mockEvent);
    expect(options).toHaveLength(2);
    expect(options.find(o => o.id === 'opt_locked')).toBeUndefined();
  });
});

describe('generateResult', () => {
  it('returns correct title and score', () => {
    const state: GameState = {
      ...createInitialState(mockCareer, 42),
      currentYear: 30,
      isGameOver: true,
      gameOverReason: 'won',
    };
    const result = generateResult(state, mockTitles);
    expect(result.titleId).toBe('winner');
    expect(result.careerId).toBe('programmer');
    expect(result.finalYear).toBe(30);
    expect(typeof result.score).toBe('number');
    expect(result.score).toBeGreaterThan(0);
  });

  it('returns fallback title when no special condition met', () => {
    const state: GameState = {
      ...createInitialState(mockCareer, 42),
      currentYear: 3,
      isGameOver: true,
      gameOverReason: 'safety_zero',
    };
    const result = generateResult(state, mockTitles);
    expect(result.titleId).toBe('fallback');
  });
});
