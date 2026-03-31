import { motion, useMotionValue, useTransform } from 'motion/react';
import { characters } from '../../data/characters';
import { useLanguage } from '../../i18n/LanguageContext';
import type { SwipeCard as SwipeCardType } from '../../engine/types';
import styles from './SwipeCard.module.css';

interface SwipeCardProps {
  card: SwipeCardType;
  onSwipe: (direction: 'left' | 'right') => void;
}

const SWIPE_THRESHOLD = 100;

export function SwipeCard({ card, onSwipe }: SwipeCardProps) {
  const { t } = useLanguage();
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-15, 0, 15]);
  const leftOpacity = useTransform(x, [-150, -50, 0], [1, 0.4, 0]);
  const rightOpacity = useTransform(x, [0, 50, 150], [0, 0.4, 1]);

  const character = characters.find(c => c.type === card.character);

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipeDistance = info.offset.x;
    const velocity = info.velocity.x;

    if (Math.abs(swipeDistance) > SWIPE_THRESHOLD || Math.abs(velocity) > 500) {
      onSwipe(swipeDistance > 0 ? 'right' : 'left');
    }
  };

  const effectIcons = (effects: Partial<Record<string, number>>) => {
    const icons: Record<string, string> = { safety: '🛡', skill: '⚡', finance: '💰', network: '🤝' };
    return Object.entries(effects)
      .filter(([, v]) => v !== undefined && v !== 0)
      .map(([key, val]) => `${icons[key] ?? key}${val! > 0 ? '↑' : '↓'}`)
      .join(' ');
  };

  return (
    <motion.div
      className={styles.card}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      style={{ x, rotate }}
      onDragEnd={handleDragEnd}
      initial={{ scale: 0.9, opacity: 0, y: 40 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      whileDrag={{ cursor: 'grabbing' }}
    >
      {/* Left hint */}
      <motion.div className={`${styles.hint} ${styles.hintLeft}`} style={{ opacity: leftOpacity }}>
        <span className={styles.hintLabel}>{t(card.leftChoice.label)}</span>
        <span className={styles.hintEffects}>{effectIcons(card.leftChoice.effects)}</span>
      </motion.div>

      {/* Right hint */}
      <motion.div className={`${styles.hint} ${styles.hintRight}`} style={{ opacity: rightOpacity }}>
        <span className={styles.hintLabel}>{t(card.rightChoice.label)}</span>
        <span className={styles.hintEffects}>{effectIcons(card.rightChoice.effects)}</span>
      </motion.div>

      {/* Character avatar */}
      <div className={styles.avatar}>
        {character?.icon ?? '👤'}
      </div>

      {/* Character name */}
      <div className={styles.characterName}>
        {character ? t(character.name) : card.character}
      </div>

      {/* Card text */}
      <div className={styles.text}>
        {t(card.text)}
      </div>

      {/* Choice buttons */}
      <div className={styles.choiceButtons}>
        <button
          className={`${styles.choiceBtn} ${styles.choiceBtnLeft}`}
          onClick={(e) => { e.stopPropagation(); onSwipe('left'); }}
        >
          ← {t(card.leftChoice.label)}
        </button>
        <button
          className={`${styles.choiceBtn} ${styles.choiceBtnRight}`}
          onClick={(e) => { e.stopPropagation(); onSwipe('right'); }}
        >
          {t(card.rightChoice.label)} →
        </button>
      </div>
    </motion.div>
  );
}
