import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { SwipeCard } from '../../components/SwipeCard/SwipeCard';
import { AttributePanel } from '../../components/AttributePanel/AttributePanel';
import { OutcomeToast } from '../../components/OutcomeToast/OutcomeToast';
import { useLanguage } from '../../i18n/LanguageContext';
import { useGameContext } from '../../hooks/GameContext';
import { useSwipeGame } from '../../hooks/useSwipeGame';
import { ui } from '../../i18n/translations';
import { isMuted, setMuted } from '../../engine/soundManager';
import type { GameResult } from '../../engine/types';
import styles from './GamePage.module.css';

export function GamePage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { selectedCareer, setLastResult } = useGameContext();
  const { state, currentCard, startGame, swipe, pendingOutcome, clearOutcome } = useSwipeGame();
  const pendingResultRef = useRef<GameResult | null>(null);
  const [muted, setMutedState] = useState(isMuted);
  const toggleMute = useCallback(() => {
    const next = !muted;
    setMuted(next);
    setMutedState(next);
  }, [muted]);

  useEffect(() => {
    if (!selectedCareer) {
      navigate('/select');
      return;
    }
    startGame(selectedCareer);
  }, [selectedCareer, startGame, navigate]);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (pendingOutcome) return;
    const result = swipe(direction);
    if (result) {
      pendingResultRef.current = result;
    }
  };

  const handleOutcomeDismiss = () => {
    clearOutcome();
    if (pendingResultRef.current) {
      setLastResult(pendingResultRef.current);
      pendingResultRef.current = null;
      setTimeout(() => navigate('/result'), 300);
    }
  };

  if (!state) return null;

  const yearText = t(ui.yearN).replace('{n}', String(state.currentCard + 1));

  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Mute toggle */}
      <button className={styles.muteBtn} onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
        {muted ? '🔇' : '🔊'}
      </button>

      {/* Attribute bars */}
      <div className={styles.topBar}>
        <AttributePanel attributes={state.attributes} />
      </div>

      {/* Year indicator */}
      <div className={styles.yearIndicator}>{yearText}</div>

      {/* Card area */}
      <div className={styles.cardArea}>
        <AnimatePresence mode="wait">
          {currentCard && !pendingOutcome && (
            <SwipeCard
              key={currentCard.id + '-' + state.currentCard}
              card={currentCard}
              onSwipe={handleSwipe}
            />
          )}
        </AnimatePresence>

        {state.isGameOver && !pendingOutcome && (
          <motion.div
            className={styles.gameOverOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.gameOverText}>
              {state.gameOverReason === 'won' ? '🎉' : '💀'}
            </span>
          </motion.div>
        )}
      </div>

      {/* Swipe hints */}
      {!state.isGameOver && !pendingOutcome && (
        <div className={styles.swipeHints}>
          <span className={styles.hintLeft}>{t(ui.swipeLeftHint)}</span>
          <span className={styles.hintRight}>{t(ui.swipeRightHint)}</span>
        </div>
      )}

      {/* Outcome toast overlay */}
      <AnimatePresence>
        {pendingOutcome && (
          <OutcomeToast outcome={pendingOutcome} onDismiss={handleOutcomeDismiss} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
