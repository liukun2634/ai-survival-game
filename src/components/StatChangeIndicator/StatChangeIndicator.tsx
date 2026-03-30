import { motion } from 'motion/react';
import styles from './StatChangeIndicator.module.css';

interface StatChangeIndicatorProps {
  value: number;
}

export function StatChangeIndicator({ value }: StatChangeIndicatorProps) {
  if (value === 0) return null;

  return (
    <motion.span
      className={styles.indicator}
      style={{ color: value > 0 ? 'var(--color-success)' : 'var(--color-danger)' }}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 0, y: -24 }}
      transition={{ duration: 1.5 }}
    >
      {value > 0 ? `+${value}` : `${value}`}
    </motion.span>
  );
}
