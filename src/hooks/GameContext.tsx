import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Career, GameResult } from '../engine/types';

interface GameContextValue {
  selectedCareer: Career | null;
  setSelectedCareer: (career: Career) => void;
  lastResult: GameResult | null;
  setLastResult: (result: GameResult) => void;
}

const GameContext = createContext<GameContextValue>({
  selectedCareer: null,
  setSelectedCareer: () => {},
  lastResult: null,
  setLastResult: () => {},
});

export function GameProvider({ children }: { children: ReactNode }) {
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [lastResult, setLastResult] = useState<GameResult | null>(null);
  return (
    <GameContext.Provider value={{ selectedCareer, setSelectedCareer, lastResult, setLastResult }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(GameContext);
}
