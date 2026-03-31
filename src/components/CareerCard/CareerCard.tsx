import { motion } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';
import { ui } from '../../i18n/translations';
import type { Career } from '../../engine/types';
import styles from './CareerCard.module.css';

interface CareerCardProps {
  career: Career;
  selected: boolean;
  onClick: () => void;
}

export function CareerCard({ career, selected, onClick }: CareerCardProps) {
  const { t } = useLanguage();
  const attrs = career.startingAttributes;

  const bars: Array<{ key: string; label: string; value: number; color: string }> = [
    { key: 'safety', label: t(ui.safety), value: attrs.safety, color: '#4299e1' },
    { key: 'skill', label: t(ui.skill), value: attrs.skill, color: '#48bb78' },
    { key: 'finance', label: t(ui.finance), value: attrs.finance, color: '#d69e2e' },
    { key: 'network', label: t(ui.network), value: attrs.network, color: '#805ad5' },
  ];

  return (
    <motion.div
      className={`${styles.card} ${selected ? styles.selected : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className={styles.icon}>{career.icon}</div>
      <div className={styles.name}>{t(career.name)}</div>
      <div className={styles.desc}>{t(career.description)}</div>
      <div className={styles.bars}>
        {bars.map(b => (
          <div key={b.key} className={styles.barRow}>
            <span className={styles.barLabel}>{b.label}</span>
            <div className={styles.barTrack}>
              <div className={styles.barFill} style={{ width: `${b.value}%`, backgroundColor: b.color }} />
            </div>
            <span className={styles.barValue}>{b.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
