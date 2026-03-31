import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import styles from './AttributeBar.module.css';

interface AttributeBarProps {
  label: string;
  icon: string;
  value: number;
  color: string;
}

export function AttributeBar({ label, icon, value, color }: AttributeBarProps) {
  const [change, setChange] = useState<number | null>(null);
  const [prevValue, setPrevValue] = useState(value);

  useEffect(() => {
    const delta = value - prevValue;
    if (delta !== 0) {
      setChange(delta);
      setPrevValue(value);
      const timer = setTimeout(() => setChange(null), 1000);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  const isWarningLow = value <= 20;
  const isWarningHigh = value >= 80;
  const barColor = isWarningLow || isWarningHigh
    ? 'var(--color-danger)'
    : color;

  return (
    <div className={styles.bar}>
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.label}>{label}</span>
        <AnimatePresence>
          {change !== null && (
            <motion.span
              className={styles.change}
              style={{ color: change > 0 ? 'var(--color-success)' : 'var(--color-danger)' }}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {change > 0 ? `+${change}` : change}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <div className={styles.track}>
        <motion.div
          className={`${styles.fill} ${isWarningLow || isWarningHigh ? styles.warning : ''}`}
          style={{ backgroundColor: barColor }}
          animate={{ width: `${value}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
      </div>
    </div>
  );
}
