import { useState, useCallback } from 'react';
import type { GameState, GameResult, GameEvent, AiMilestone, Career, EventOption } from '../engine/types';
import { createInitialState, advanceYear, applyChoice, getAvailableOptions, generateResult } from '../engine/gameEngine';
import type { YearAdvanceResult } from '../engine/gameEngine';
import { allEvents } from '../data/events';
import { milestones } from '../data/milestones';
import { titles } from '../data/titles';

interface UseGameStateReturn {
  state: GameState | null;
  currentEvents: GameEvent[];
  currentMilestone: AiMilestone | undefined;
  startGame: (career: Career, seed?: number) => void;
  nextYear: () => void;
  selectOption: (event: GameEvent, optionId: string) => void;
  getResult: () => GameResult | null;
  getAvailableOptionsForEvent: (event: GameEvent) => EventOption[];
}

export function useGameState(): UseGameStateReturn {
  const [state, setState] = useState<GameState | null>(null);
  const [currentEvents, setCurrentEvents] = useState<GameEvent[]>([]);
  const [currentMilestone, setCurrentMilestone] = useState<AiMilestone | undefined>();

  const startGame = useCallback((career: Career, seed?: number) => {
    const initial = createInitialState(career, seed);
    setState(initial);
    setCurrentEvents([]);
    setCurrentMilestone(undefined);
  }, []);

  const nextYear = useCallback(() => {
    if (!state || state.isGameOver) return;
    const result: YearAdvanceResult = advanceYear(state, allEvents, milestones);
    setState(result.stateAfterMilestone);
    setCurrentEvents(result.events);
    setCurrentMilestone(result.milestone);
  }, [state]);

  const selectOption = useCallback((event: GameEvent, optionId: string) => {
    if (!state) return;
    const newState = applyChoice(state, event, optionId, currentMilestone);
    setState(newState);
  }, [state, currentMilestone]);

  const getResult = useCallback(() => {
    if (!state) return null;
    return generateResult(state, titles);
  }, [state]);

  const getAvailableOptionsForEvent = useCallback((event: GameEvent) => {
    if (!state) return [];
    return getAvailableOptions(state, event);
  }, [state]);

  return {
    state, currentEvents, currentMilestone,
    startGame, nextYear, selectOption, getResult, getAvailableOptionsForEvent,
  };
}
