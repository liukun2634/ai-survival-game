export interface Attributes {
  safety: number;
  skill: number;
  finance: number;
  network: number;
}

export type AttributeKey = keyof Attributes;

export type CharacterType = 'boss' | 'colleague' | 'senior' | 'ai' | 'headhunter' | 'hr';

export interface Character {
  type: CharacterType;
  name: { zh: string; en: string };
  icon: string;
}

export interface SwipeCard {
  id: string;
  character: CharacterType;
  text: { zh: string; en: string };
  leftChoice: {
    label: { zh: string; en: string };
    effects: Partial<Attributes>;
  };
  rightChoice: {
    label: { zh: string; en: string };
    effects: Partial<Attributes>;
  };
  stage: 1 | 2 | 3;
  careerIds?: string[];
}

export interface Career {
  id: string;
  name: { zh: string; en: string };
  description: { zh: string; en: string };
  startingAttributes: Attributes;
  icon: string;
}

export interface SwipeHistory {
  cardIndex: number;
  cardId: string;
  direction: 'left' | 'right';
  attributesBefore: Attributes;
  attributesAfter: Attributes;
}

export interface GameState {
  careerId: string;
  currentCard: number;
  attributes: Attributes;
  history: SwipeHistory[];
  isGameOver: boolean;
  gameOverReason?: 'attr_zero' | 'attr_max' | 'won';
  gameOverAttr?: AttributeKey;
  seed: number;
  deck: SwipeCard[];
}

export interface GameResult {
  careerId: string;
  finalYear: number;
  finalAttributes: Attributes;
  endingId: string;
  score: number;
  history: SwipeHistory[];
  gameOverReason: 'attr_zero' | 'attr_max' | 'won';
  gameOverAttr?: AttributeKey;
}

export interface EndingTag {
  id: string;
  name: { zh: string; en: string };
  description: { zh: string; en: string };
  condition: (state: GameState) => boolean;
  priority: number;
}

export type Language = 'zh' | 'en';
