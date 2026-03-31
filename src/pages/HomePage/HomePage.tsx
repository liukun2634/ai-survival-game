import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';
import { ui } from '../../i18n/translations';
import styles from './HomePage.module.css';

export function HomePage() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className={styles.background}>
        <div className={styles.gridOverlay} />
        <div className={styles.cityline} />
      </div>

      <div className={styles.content}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className={styles.badgeYear}>2024 – 2054</span>
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className={styles.titleZh}>{ui.appTitle.zh}</span>
          <span className={styles.titleSeparator}>/</span>
          <span className={styles.titleEn}>{ui.appTitle.en}</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t(ui.appSubtitle)}
        </motion.p>

        <motion.div
          className={styles.features}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>🏢</span>
            <span>{t(ui.featureCareers)}</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>📅</span>
            <span>{t(ui.featureYears)}</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>👆</span>
            <span>{t(ui.featureSwipe)}</span>
          </div>
        </motion.div>

        <motion.button
          className={styles.startButton}
          onClick={() => navigate('/select')}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className={styles.startButtonText}>{t(ui.startGame)}</span>
          <span className={styles.startButtonArrow}>→</span>
        </motion.button>

        <motion.p
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {t(ui.footerTagline)}
        </motion.p>
      </div>
    </motion.div>
  );
}
