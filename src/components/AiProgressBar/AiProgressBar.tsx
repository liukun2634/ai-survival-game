import { motion } from 'motion/react';
import styles from './AiProgressBar.module.css';

interface AiProgressBarProps {
  currentYear: number;
  milestoneYears: number[];
}

const TOTAL_YEARS = 30;

export function AiProgressBar({ currentYear, milestoneYears }: AiProgressBarProps) {
  const progressPercent = Math.min(100, (currentYear / TOTAL_YEARS) * 100);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.label}>AI 进程 / AI Progress</span>
        <span className={styles.yearLabel}>Year {currentYear} / {TOTAL_YEARS}</span>
      </div>
      <div className={styles.trackWrapper}>
        {/* Year label above current position */}
        <motion.div
          className={styles.currentYearPin}
          animate={{ left: `${progressPercent}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className={styles.currentYearText}>{currentYear}</span>
          <div className={styles.pinLine} />
        </motion.div>
        {/* Main track */}
        <div className={styles.track}>
          <motion.div
            className={styles.fill}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          {/* Milestone markers */}
          {milestoneYears.map((year) => {
            const pos = (year / TOTAL_YEARS) * 100;
            const isPast = year <= currentYear;
            return (
              <div
                key={year}
                className={`${styles.milestone} ${isPast ? styles.milestonePast : ''}`}
                style={{ left: `${pos}%` }}
                title={`Year ${year}`}
              />
            );
          })}
        </div>
        {/* Year markers */}
        <div className={styles.yearMarkers}>
          <span className={styles.yearMark}>1</span>
          <span className={styles.yearMark}>10</span>
          <span className={styles.yearMark}>20</span>
          <span className={styles.yearMark}>30</span>
        </div>
      </div>
    </div>
  );
}
