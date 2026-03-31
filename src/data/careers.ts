import type { Career } from '../engine/types';

export const careers: Career[] = [
  {
    id: 'programmer',
    name: { zh: '程序员', en: 'Programmer' },
    description: { zh: '高技能，低人脉，AI 冲击最直接', en: 'High skill, low network, most direct AI impact' },
    startingAttributes: { safety: 60, skill: 70, finance: 50, network: 30 },
    icon: '💻',
  },
  {
    id: 'designer',
    name: { zh: '设计师', en: 'Designer' },
    description: { zh: '创意型，AI 绘图威胁大', en: 'Creative type, high AI art threat' },
    startingAttributes: { safety: 55, skill: 65, finance: 35, network: 40 },
    icon: '🎨',
  },
  {
    id: 'teacher',
    name: { zh: '教师', en: 'Teacher' },
    description: { zh: '前期安全，后期 AI 教育冲击', en: 'Safe early, AI education threat later' },
    startingAttributes: { safety: 80, skill: 45, finance: 30, network: 50 },
    icon: '📚',
  },
  {
    id: 'doctor',
    name: { zh: '医生', en: 'Doctor' },
    description: { zh: '最难替代，但属性起点偏高', en: 'Hardest to replace, but high starting stats' },
    startingAttributes: { safety: 85, skill: 60, finance: 55, network: 35 },
    icon: '🩺',
  },
  {
    id: 'content_creator',
    name: { zh: '内容创作者', en: 'Content Creator' },
    description: { zh: '人脉高但财务低，波动最大', en: 'High network, low finance, most volatile' },
    startingAttributes: { safety: 50, skill: 55, finance: 25, network: 65 },
    icon: '✍️',
  },
];
