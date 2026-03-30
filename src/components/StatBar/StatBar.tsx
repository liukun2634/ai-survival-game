import { motion } from 'motion/react';
import styles from './StatBar.module.css';

interface StatBarProps {
  label: string;
  value: number;
  maxValue?: number;
  color: string;
  change?: number;
}

export function StatBar({ label, value, maxValue = 100, color, change }: StatBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / maxValue) * 100));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <div className={styles.valueWrapper}>
          <span className={styles.value}>{value}</span>
          {change !== undefined && change !== 0 && (
            <span
              className={styles.change}
              style={{ color: change > 0 ? 'var(--color-success)' : 'var(--color-danger)' }}
            >
              {change > 0 ? `+${change}` : `${change}`}
            </span>
          )}
        </div>
      </div>
      <div className={styles.track}>
        <motion.div
          className={styles.fill}
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
