import type { Career } from '../engine/types';

export const careers: Career[] = [
  {
    id: 'programmer',
    name: { zh: '程序员', en: 'Programmer' },
    description: { zh: '高技能，低人脉，AI 冲击最直接', en: 'High skill, low network, most direct AI impact' },
    startingAttributes: { stability: 65, skill: 50, finance: 55, network: 35, sanity: 50 },
    icon: '💻',
    scenes: ['office', 'universal'],
    talents: [{
      id: 'tech_aptitude',
      name: { zh: '技术天赋', en: 'Tech Aptitude' },
      description: { zh: '技术相关好结果概率更高', en: 'Higher chance of good tech outcomes' },
      outcomeWeightModifiers: {},
    }],
  },
  {
    id: 'teacher',
    name: { zh: '教师', en: 'Teacher' },
    description: { zh: '前期安全，后期 AI 教育冲击', en: 'Safe early, AI education threat later' },
    startingAttributes: { stability: 80, skill: 35, finance: 35, network: 50, sanity: 65 },
    icon: '📚',
    scenes: ['school', 'universal'],
    talents: [{
      id: 'communication_skill',
      name: { zh: '沟通天赋', en: 'Communication Skill' },
      description: { zh: '沟通教学相关好结果概率更高', en: 'Higher chance of good communication outcomes' },
      outcomeWeightModifiers: {},
    }],
  },
];
