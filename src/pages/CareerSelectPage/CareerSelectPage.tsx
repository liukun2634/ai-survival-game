import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { CareerCard } from '../../components/CareerCard/CareerCard';
import { useLanguage } from '../../i18n/LanguageContext';
import { useGameContext } from '../../hooks/GameContext';
import { careers } from '../../data/careers';
import { ui } from '../../i18n/translations';
import type { Career } from '../../engine/types';
import styles from './CareerSelectPage.module.css';

export function CareerSelectPage() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { setSelectedCareer } = useGameContext();
  const [selected, setSelected] = useState<Career | null>(null);

  const handleConfirm = () => {
    if (!selected) return;
    setSelectedCareer(selected);
    navigate('/game');
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <motion.button
          className={styles.backButton}
          onClick={() => navigate('/')}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          ← {t({ zh: '返回', en: 'Back' })}
        </motion.button>

        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t(ui.selectCareer)}
        </motion.h1>

        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {t({
            zh: '每个职业都有不同的起始属性和AI冲击节奏',
            en: 'Each career has different starting attributes and AI disruption timing',
          })}
        </motion.p>
      </div>

      <div className={styles.grid}>
        {careers.map((career, index) => (
          <motion.div
            key={career.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: 'easeOut' }}
          >
            <CareerCard
              career={career}
              isSelected={selected?.id === career.id}
              onSelect={() => setSelected(career)}
              language={language}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className={styles.selectedBanner}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.selectedInfo}>
              <span className={styles.selectedIcon}>{selected.icon}</span>
              <span className={styles.selectedName}>{selected.name[language]}</span>
            </div>
            <button
              className={styles.confirmButton}
              onClick={handleConfirm}
            >
              {t(ui.confirmSelection)} →
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {!selected && (
        <div className={styles.confirmPlaceholder} />
      )}
    </div>
  );
}
