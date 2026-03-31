import { useState, useCallback } from 'react';
import type { Career, GameState, GameResult, SwipeCard } from '../engine/types';
import { buildDeck } from '../engine/deckBuilder';
import { applySwipe, checkGameOver, buildResult } from '../engine/swipeEngine';

export function useSwipeGame() {
  const [state, setState] = useState<GameState | null>(null);

  const startGame = useCallback((career: Career, seed?: number) => {
    const gameSeed = seed ?? Math.floor(Math.random() * 2147483647);
    const deck = buildDeck(career.id, gameSeed);
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
    const newState = applySwipe(state, card, direction);
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

  const currentCard: SwipeCard | null = state && !state.isGameOver
    ? state.deck[state.currentCard] ?? null
    : null;

  return {
    state,
    currentCard,
    startGame,
    swipe,
  };
}
