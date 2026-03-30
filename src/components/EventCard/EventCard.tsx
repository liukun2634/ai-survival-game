import { motion } from 'motion/react';
import type { GameEvent, EventType } from '../../engine/types';
import styles from './EventCard.module.css';

interface EventCardProps {
  event: GameEvent;
  availableOptionIds: string[];
  onSelect: (optionId: string) => void;
  language: 'zh' | 'en';
}

const TYPE_LABELS: Record<EventType, { zh: string; en: string }> = {
  opportunity: { zh: '机遇', en: 'OPPORTUNITY' },
  crisis: { zh: '危机', en: 'CRISIS' },
  life: { zh: '生活', en: 'LIFE' },
  ai_milestone: { zh: 'AI里程碑', en: 'AI MILESTONE' },
};

export function EventCard({ event, availableOptionIds, onSelect, language }: EventCardProps) {
  const typeLabel = TYPE_LABELS[event.type][language];
  const title = event.title[language];
  const description = event.description[language];

  return (
    <motion.div
      className={`${styles.card} ${styles[event.type]}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className={styles.typeLabel}>{typeLabel}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.options}>
        {event.options.map((option) => {
          const isAvailable = availableOptionIds.includes(option.id);
          const optionText = option.text[language];
          return (
            <button
              key={option.id}
              className={`${styles.optionButton} ${!isAvailable ? styles.locked : ''}`}
              onClick={() => isAvailable && onSelect(option.id)}
              disabled={!isAvailable}
            >
              {!isAvailable && <span className={styles.lockIcon}>🔒</span>}
              {optionText}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
