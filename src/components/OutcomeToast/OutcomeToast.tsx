import { useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';
import { ui } from '../../i18n/translations';
import type { SwipeOutcome } from '../../engine/types';
import styles from './OutcomeToast.module.css';

interface OutcomeToastProps {
  outcome: SwipeOutcome;
  onDismiss: () => void;
}

const ATTR_META: Record<string, { icon: string; label: string }> = {
  safety: { icon: '🛡', label: '安全' },
  skill: { icon: '⚡', label: '技能' },
  finance: { icon: '💰', label: '财务' },
  network: { icon: '🤝', label: '人脉' },
};

export function OutcomeToast({ outcome, onDismiss }: OutcomeToastProps) {
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(onDismiss, 5000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  const effects = Object.entries(outcome.effects)
    .filter(([, v]) => v !== undefined && v !== 0)
    .map(([key, val]) => {
      const meta = ATTR_META[key];
      return { key, icon: meta?.icon ?? key, label: meta?.label ?? key, val: val! };
    });

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
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
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
