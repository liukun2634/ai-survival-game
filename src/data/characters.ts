import type { Character } from '../engine/types';

export const characters: Character[] = [
  { type: 'boss', name: { zh: '直属老板', en: 'Your Boss' }, icon: '👨‍💼' },
  { type: 'colleague', name: { zh: '卷王同事', en: 'Workaholic Colleague' }, icon: '👩‍💻' },
  { type: 'senior', name: { zh: '老前辈', en: 'Senior Veteran' }, icon: '🧓' },
  { type: 'ai', name: { zh: 'AI 系统', en: 'AI System' }, icon: '🤖' },
  { type: 'headhunter', name: { zh: '猎头', en: 'Headhunter' }, icon: '💼' },
  { type: 'hr', name: { zh: 'HR', en: 'HR' }, icon: '📢' },
];
