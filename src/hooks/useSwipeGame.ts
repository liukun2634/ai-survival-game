import { useState, useCallback, useRef } from 'react';
import type { Career, GameState, GameResult, SwipeCard, SwipeOutcome, CareerTalent } from '../engine/types';
import { buildDeck } from '../engine/deckBuilder';
import { applySwipe, checkGameOver, buildResult } from '../engine/swipeEngine';
import { createRng } from '../engine/random';

export function useSwipeGame() {
  const [state, setState] = useState<GameState | null>(null);
  const [pendingOutcome, setPendingOutcome] = useState<SwipeOutcome | null>(null);
  const rngRef = useRef<(() => number) | null>(null);
  const talentsRef = useRef<CareerTalent[]>([]);

  const startGame = useCallback((career: Career, seed?: number) => {
    const gameSeed = seed ?? Math.floor(Math.random() * 2147483647);
    const rng = createRng(gameSeed + 1);
    rngRef.current = rng;
    talentsRef.current = career.talents ?? [];
    const deck = buildDeck(career.id, career.scenes, gameSeed);
    setPendingOutcome(null);
    setState({
      careerId: career.id,
      currentCard: 0,
      attributes: { ...career.startingAttributes },
      history: [],
      isGameOver: false,
      seed: gameSeed,
      deck,
    });
  }, []);

  const swipe = useCallback((direction: 'left' | 'right'): GameResult | null => {
    if (!state || state.isGameOver) return null;

    const card = state.deck[state.currentCard];
    const { newState, outcome } = applySwipe(
      state, card, direction, talentsRef.current, rngRef.current ?? undefined
    );

    if (outcome) {
      setPendingOutcome(outcome);
    }

    const gameOver = checkGameOver(newState.attributes, newState.currentCard);

    if (gameOver) {
      const finalState: GameState = {
        ...newState,
        isGameOver: true,
        gameOverReason: gameOver.reason,
        gameOverAttr: 'attr' in gameOver ? gameOver.attr : undefined,
      };
      setState(finalState);
      return buildResult(finalState);
    }

    setState(newState);
    return null;
  }, [state]);

  const clearOutcome = useCallback(() => setPendingOutcome(null), []);

  const currentCard: SwipeCard | null = state && !state.isGameOver
    ? state.deck[state.currentCard] ?? null
    : null;

  return {
    state,
    currentCard,
    startGame,
    swipe,
    pendingOutcome,
    clearOutcome,
  };
}
