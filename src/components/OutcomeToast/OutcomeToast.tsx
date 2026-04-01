import { useEffect } from 'react';
import { motion, useMotionValue } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';
import { ui } from '../../i18n/translations';
import { playOutcomeGood, playOutcomeMid, playOutcomeBad } from '../../engine/soundManager';
import type { SwipeOutcome } from '../../engine/types';
import styles from './OutcomeToast.module.css';

interface OutcomeToastProps {
  outcome: SwipeOutcome;
  onDismiss: () => void;
}

const ATTR_META: Record<string, { icon: string; label: string }> = {
  stability: { icon: '🛡', label: '稳定' },
  skill: { icon: '⚡', label: '技能' },
  finance: { icon: '💰', label: '财务' },
  network: { icon: '🤝', label: '人脉' },
  sanity: { icon: '🧠', label: '心态' },
};

const SWIPE_DISMISS_THRESHOLD = 80;

export function OutcomeToast({ outcome, onDismiss }: OutcomeToastProps) {
  const { t } = useLanguage();
  const y = useMotionValue(0);

  useEffect(() => {
    const netEffect = Object.values(outcome.effects).reduce((sum, v) => sum + (v ?? 0), 0);
    if (netEffect > 5) {
      playOutcomeGood();
    } else if (netEffect < -5) {
      playOutcomeBad();
    } else {
      playOutcomeMid();
    }
  }, [outcome]);

  const effects = Object.entries(outcome.effects)
    .filter(([, v]) => v !== undefined && v !== 0)
    .map(([key, val]) => {
      const meta = ATTR_META[key];
      return { key, icon: meta?.icon ?? key, label: meta?.label ?? key, val: val! };
    });

  const handleDragEnd = (_: unknown, info: { offset: { y: number }; velocity: { y: number } }) => {
    if (Math.abs(info.offset.y) > SWIPE_DISMISS_THRESHOLD || Math.abs(info.velocity.y) > 400) {
      onDismiss();
    }
  };

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onDismiss}
    >
      <motion.div
        className={styles.toast}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.6}
        style={{ y }}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -60, scale: 0.9, transition: { duration: 0.2 } }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        <p className={styles.toastText}>{t(outcome.text)}</p>
        {effects.length > 0 && (
          <div className={styles.toastEffects}>
            {effects.map(e => (
              <span
                key={e.key}
                className={`${styles.effectTag} ${e.val > 0 ? styles.effectUp : styles.effectDown}`}
              >
                {e.icon} {e.label} {e.val > 0 ? '+' : ''}{e.val}
              </span>
            ))}
          </div>
        )}
        <p className={styles.hint}>{t(ui.tapToContinue)}</p>
      </motion.div>
    </motion.div>
  );
}
