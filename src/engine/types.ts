export interface Attributes {
  stability: number;
  skill: number;
  finance: number;
  network: number;
  sanity: number;
}

export type AttributeKey = keyof Attributes;

export interface SwipeOutcome {
  id: string;
  text: { zh: string; en: string };
  effects: Partial<Attributes>;
  weight: number;
  careerWeightModifiers?: Partial<Record<string, number>>;
}

export interface CareerTalent {
  id: string;
  name: { zh: string; en: string };
  description: { zh: string; en: string };
  outcomeWeightModifiers: Record<string, number>;
}

export type Scene = 'universal' | 'office' | 'school';

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
    outcomes?: SwipeOutcome[];
  };
  rightChoice: {
    label: { zh: string; en: string };
    effects: Partial<Attributes>;
    outcomes?: SwipeOutcome[];
  };
  stage: 1 | 2 | 3;
  scene: Scene;
  careerIds?: string[];
  isEvent?: boolean;
}

export interface Career {
  id: string;
  name: { zh: string; en: string };
  description: { zh: string; en: string };
  startingAttributes: Attributes;
  icon: string;
  scenes: Scene[];
  talents?: CareerTalent[];
}

export interface SwipeHistory {
  cardIndex: number;
  cardId: string;
  direction: 'left' | 'right';
  attributesBefore: Attributes;
  attributesAfter: Attributes;
  outcomeId?: string;
  outcomeText?: { zh: string; en: string };
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
