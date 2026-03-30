import type { Title } from '../engine/types';

export const titles: Title[] = [
  {
    id: 'all_rounder',
    name: { zh: '全能王', en: 'All-Rounder' },
    condition: (s) =>
      s.attributes.safety > 70 &&
      s.attributes.skill > 70 &&
      s.attributes.finance > 70 &&
      s.attributes.network > 70,
    priority: 110,
  },
  {
    id: 'lifelong_learner',
    name: { zh: '终身学习者', en: 'Lifelong Learner' },
    condition: (s) => s.attributes.skill > 90,
    priority: 105,
  },
  {
    id: 'social_butterfly',
    name: { zh: '社交达人', en: 'Social Butterfly' },
    condition: (s) => s.attributes.network > 90,
    priority: 105,
  },
  {
    id: 'financially_free',
    name: { zh: '财务自由', en: 'Financially Free' },
    condition: (s) => s.attributes.finance > 90,
    priority: 105,
  },
  {
    id: 'last_human_standing',
    name: { zh: '人类最后的赢家', en: 'Last Human Standing' },
    condition: (s) => s.currentYear >= 30 && s.gameOverReason === 'won',
    priority: 100,
  },
  {
    id: 'ai_survivor',
    name: { zh: 'AI 时代幸存者', en: 'AI Era Survivor' },
    condition: (s) => s.currentYear >= 21,
    priority: 50,
  },
  {
    id: 'veteran',
    name: { zh: '职场老兵', en: 'Veteran Professional' },
    condition: (s) => s.currentYear >= 11,
    priority: 40,
  },
  {
    id: 'struggling',
    name: { zh: '苦苦挣扎的打工人', en: 'Struggling Worker' },
    condition: (s) => s.currentYear >= 6,
    priority: 30,
  },
  {
    id: 'first_to_fall',
    name: { zh: 'AI 时代的第一批淘汰者', en: 'First to Fall in the AI Era' },
    condition: () => true,
    priority: 0,
  },
];
