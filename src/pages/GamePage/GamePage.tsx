import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { SwipeCard } from '../../components/SwipeCard/SwipeCard';
import { AttributePanel } from '../../components/AttributePanel/AttributePanel';
import { useLanguage } from '../../i18n/LanguageContext';
import { useGameContext } from '../../hooks/GameContext';
import { useSwipeGame } from '../../hooks/useSwipeGame';
import { ui } from '../../i18n/translations';
import styles from './GamePage.module.css';

export function GamePage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { selectedCareer, setLastResult } = useGameContext();
  const { state, currentCard, startGame, swipe } = useSwipeGame();

  useEffect(() => {
    if (!selectedCareer) {
      navigate('/select');
      return;
    }
    startGame(selectedCareer);
  }, [selectedCareer, startGame, navigate]);

  const handleSwipe = (direction: 'left' | 'right') => {
    const result = swipe(direction);
    if (result) {
      setLastResult(result);
      setTimeout(() => navigate('/result'), 600);
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
      {/* Attribute bars */}
      <div className={styles.topBar}>
        <AttributePanel attributes={state.attributes} />
      </div>

      {/* Year indicator */}
      <div className={styles.yearIndicator}>{yearText}</div>

      {/* Card area */}
      <div className={styles.cardArea}>
        <AnimatePresence mode="wait">
          {currentCard && (
            <SwipeCard
              key={currentCard.id + '-' + state.currentCard}
              card={currentCard}
              onSwipe={handleSwipe}
            />
          )}
        </AnimatePresence>

        {state.isGameOver && (
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
      {!state.isGameOver && (
        <div className={styles.swipeHints}>
          <span className={styles.hintLeft}>{t(ui.swipeLeftHint)}</span>
          <span className={styles.hintRight}>{t(ui.swipeRightHint)}</span>
        </div>
      )}
    </motion.div>
  );
}
