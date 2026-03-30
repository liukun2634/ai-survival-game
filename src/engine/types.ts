export interface Attributes {
  safety: number;
  skill: number;
  finance: number;
  network: number;
}

export type AttributeKey = keyof Attributes;

export interface Career {
  id: string;
  name: { zh: string; en: string };
  description: { zh: string; en: string };
  startingAttributes: Attributes;
  icon: string;
}

export type EventType = 'opportunity' | 'crisis' | 'life' | 'ai_milestone';

export interface EventOption {
  id: string;
  text: { zh: string; en: string };
  effects: Partial<Attributes>;
  feedback: { zh: string; en: string };
  requiresFinance?: number;
  requiresNetwork?: number;
}

export interface GameEvent {
  id: string;
  type: EventType;
  title: { zh: string; en: string };
  description: { zh: string; en: string };
  options: EventOption[];
  careerIds?: string[];
  minYear?: number;
  maxYear?: number;
}

export interface AiMilestone {
  year: number;
  title: { zh: string; en: string };
  description: { zh: string; en: string };
  effects: Partial<Attributes>;
  careerEffects?: Record<string, Partial<Attributes>>;
}

export interface Title {
  id: string;
  name: { zh: string; en: string };
  condition: (state: GameState) => boolean;
  priority: number;
}

export interface HistoryEntry {
  year: number;
  event: GameEvent;
  chosenOptionId: string;
  attributesBefore: Attributes;
  attributesAfter: Attributes;
  milestone?: AiMilestone;
}

export interface GameState {
  careerId: string;
  currentYear: number;
  attributes: Attributes;
  history: HistoryEntry[];
  isGameOver: boolean;
  gameOverReason?: 'safety_zero' | 'won';
  seed: number;
}

export interface GameResult {
  careerId: string;
  finalYear: number;
  finalAttributes: Attributes;
  titleId: string;
  score: number;
  history: HistoryEntry[];
}

export type Language = 'zh' | 'en';
