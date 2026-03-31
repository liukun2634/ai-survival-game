import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useGameContext } from '../../hooks/GameContext';
import { careers } from '../../data/careers';
import { endings } from '../../data/endings';
import { ui } from '../../i18n/translations';
import styles from './ResultPage.module.css';

export function ResultPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { lastResult } = useGameContext();

  if (!lastResult) {
    return (
      <motion.div
        className={styles.page}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className={styles.noResult}>
          <p>{t({ zh: '没有游戏记录', en: 'No game record' })}</p>
          <button className={styles.primaryBtn} onClick={() => navigate('/')}>
            {t(ui.startGame)}
          </button>
        </div>
      </motion.div>
    );
  }

  const career = careers.find(c => c.id === lastResult.careerId);
  const ending = endings.find(e => e.id === lastResult.endingId) ?? endings[endings.length - 1];
  const attrs = lastResult.finalAttributes;

  const attrBars = [
    { label: t(ui.safety), icon: '🛡', value: attrs.safety, color: '#4299e1' },
    { label: t(ui.skill), icon: '⚡', value: attrs.skill, color: '#48bb78' },
    { label: t(ui.finance), icon: '💰', value: attrs.finance, color: '#d69e2e' },
    { label: t(ui.network), icon: '🤝', value: attrs.network, color: '#805ad5' },
  ];

  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className={styles.card}>
        {/* Persona */}
        <motion.div
          className={styles.personaSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className={styles.personaLabel}>{t(ui.yourPersona)}</p>
          <h1 className={styles.personaName}>{t(ending.name)}</h1>
          <p className={styles.personaDesc}>{t(ending.description)}</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className={styles.statsSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className={styles.summaryRow}>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>{career?.icon} {career ? t(career.name) : ''}</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryValue}>{lastResult.finalYear}</span>
              <span className={styles.summaryLabel}>/ 30 {t(ui.yearsUnit)}</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>{t(ui.finalScore)}</span>
              <span className={styles.summaryValue}>{lastResult.score}</span>
            </div>
          </div>

          <div className={styles.attrBars}>
            {attrBars.map(bar => (
              <div key={bar.label} className={styles.attrRow}>
                <span className={styles.attrIcon}>{bar.icon}</span>
                <span className={styles.attrLabel}>{bar.label}</span>
                <div className={styles.attrTrack}>
                  <div
                    className={styles.attrFill}
                    style={{
                      width: `${bar.value}%`,
                      backgroundColor: (bar.value <= 0 || bar.value >= 100) ? 'var(--color-danger)' : bar.color,
                    }}
                  />
                </div>
                <span className={`${styles.attrValue} ${(bar.value <= 0 || bar.value >= 100) ? styles.attrDanger : ''}`}>
                  {bar.value}
                  {bar.value <= 0 || bar.value >= 100 ? ' !' : ''}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button className={styles.primaryBtn} onClick={() => navigate('/')}>
            🔄 {t(ui.playAgain)}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
