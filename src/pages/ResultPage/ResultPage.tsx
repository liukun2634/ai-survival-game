import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { StatBar } from '../../components/StatBar/StatBar';
import { useLanguage } from '../../i18n/LanguageContext';
import { useGameContext } from '../../hooks/GameContext';
import { careers } from '../../data/careers';
import { titles } from '../../data/titles';
import { ui } from '../../i18n/translations';
import type { HistoryEntry, AttributeKey } from '../../engine/types';
import styles from './ResultPage.module.css';

function computeImpact(entry: HistoryEntry): number {
  const keys: AttributeKey[] = ['safety', 'skill', 'finance', 'network'];
  return keys.reduce((sum, k) => sum + Math.abs(entry.attributesAfter[k] - entry.attributesBefore[k]), 0);
}

export function ResultPage() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { lastResult } = useGameContext();

  if (!lastResult) {
    return (
      <div className={styles.noResult}>
        <p>{t({ zh: '没有游戏记录', en: 'No game record found' })}</p>
        <button className={styles.actionButton} onClick={() => navigate('/')}>
          {t(ui.startPlaying)}
        </button>
      </div>
    );
  }

  const career = careers.find((c) => c.id === lastResult.careerId);
  const titleEntry = titles.find((t) => t.id === lastResult.titleId) ?? titles[titles.length - 1];

  // Top 8-10 most impactful decisions
  const topDecisions = [...lastResult.history]
    .sort((a, b) => computeImpact(b) - computeImpact(a))
    .slice(0, 10)
    .sort((a, b) => a.year - b.year);

  const isWin = lastResult.finalYear >= 30;
  const attrs = lastResult.finalAttributes;

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.1 + i * 0.12, ease: 'easeOut' as const },
    }),
  };

  return (
    <div className={styles.page}>
      <div className={styles.reportCard}>
        {/* Header */}
        <motion.div
          className={styles.reportHeader}
          custom={0}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className={styles.careerBadge}>
            <span className={styles.careerIcon}>{career?.icon ?? '💼'}</span>
            <span className={styles.careerName}>{career ? t(career.name) : lastResult.careerId}</span>
          </div>
          <div className={styles.titleRow}>
            <h1 className={styles.titleEarned}>{t(titleEntry.name)}</h1>
            <span className={`${styles.outcomeTag} ${isWin ? styles.win : styles.lose}`}>
              {isWin ? t(ui.youWin) : t(ui.gameOver)}
            </span>
          </div>
          <p className={styles.reportSubtitle}>{t(ui.careerReport)}</p>
        </motion.div>

        {/* Score + years */}
        <motion.div
          className={styles.scoreSection}
          custom={1}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className={styles.scoreBox}>
            <span className={styles.scoreLabel}>{t(ui.finalScore)}</span>
            <span className={styles.scoreNumber}>{lastResult.score.toLocaleString()}</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.yearsBox}>
            <span className={styles.yearsLabel}>{t(ui.survivalYears)}</span>
            <span className={styles.yearsNumber}>{lastResult.finalYear}</span>
            <span className={styles.yearsUnit}>{t({ zh: '年', en: 'yrs' })}</span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className={styles.statsSection}
          custom={2}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className={styles.sectionTitle}>{t({ zh: '最终属性', en: 'Final Stats' })}</h2>
          <div className={styles.stats}>
            <StatBar label={t(ui.safety)} value={attrs.safety} color="var(--color-primary)" />
            <StatBar label={t(ui.skill)} value={attrs.skill} color="var(--color-success)" />
            <StatBar label={t(ui.finance)} value={attrs.finance} color="var(--color-accent)" />
            <StatBar label={t(ui.network)} value={attrs.network} color="#805ad5" />
          </div>
        </motion.div>

        {/* Timeline */}
        {topDecisions.length > 0 && (
          <motion.div
            className={styles.timelineSection}
            custom={3}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <h2 className={styles.sectionTitle}>{t(ui.keyDecisions)}</h2>
            <div className={styles.timeline}>
              {topDecisions.map((entry, idx) => {
                const chosenOption = entry.event.options.find((o) => o.id === entry.chosenOptionId);
                const impact = computeImpact(entry);
                const safetyDelta = entry.attributesAfter.safety - entry.attributesBefore.safety;
                return (
                  <motion.div
                    key={`${entry.year}-${entry.event.id}-${idx}`}
                    className={styles.timelineEntry}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.5 + idx * 0.05 }}
                  >
                    <div className={styles.timelineYear}>
                      {t({ zh: `第 ${entry.year} 年`, en: `Yr ${entry.year}` })}
                    </div>
                    <div className={styles.timelineContent}>
                      <p className={styles.timelineEvent}>{entry.event.title[language]}</p>
                      <p className={styles.timelineChoice}>
                        → {chosenOption?.text[language] ?? entry.chosenOptionId}
                      </p>
                    </div>
                    <div className={styles.timelineImpact}>
                      <span
                        className={styles.impactBadge}
                        style={{
                          color: safetyDelta < 0 ? 'var(--color-danger)' : safetyDelta > 0 ? 'var(--color-success)' : 'var(--color-text-light)',
                        }}
                      >
                        {safetyDelta !== 0
                          ? `安全 ${safetyDelta > 0 ? '+' : ''}${safetyDelta}`
                          : `±${impact}`}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Action buttons */}
        <motion.div
          className={styles.actions}
          custom={4}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <button className={`${styles.actionButton} ${styles.primary}`} onClick={() => navigate('/')}>
            🔄 {t(ui.playAgain)}
          </button>
          <button
            className={`${styles.actionButton} ${styles.secondary}`}
            onClick={() => alert(t({ zh: '海报功能即将开放', en: 'Poster feature coming soon' }))}
          >
            🖼 {t(ui.savePoster)}
          </button>
          <button
            className={`${styles.actionButton} ${styles.secondary}`}
            onClick={() => {
              navigator.clipboard.writeText(window.location.href).catch(() => {});
              alert(t(ui.linkCopied));
            }}
          >
            🔗 {t(ui.copyLink)}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
