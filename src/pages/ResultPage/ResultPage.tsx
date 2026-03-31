import { useRef } from 'react';
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
  const cardRef = useRef<HTMLDivElement>(null);

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

  // Pick key story moments from history (ones with outcomeText)
  const storyMoments = lastResult.history
    .filter(h => h.outcomeText)
    .map((h, _i) => ({
      year: h.cardIndex + 1,
      text: t(h.outcomeText!),
    }));

  // Select up to 5 most spread-out moments
  const keyMoments = selectKeyMoments(storyMoments, 5);

  const handleShare = async () => {
    const node = cardRef.current;
    if (!node) return;
    try {
      const { default: html2canvas } = await import('html2canvas');
      const canvas = await html2canvas(node, {
        backgroundColor: '#fefcf3',
        scale: 2,
        useCORS: true,
      });
      canvas.toBlob((blob) => {
        if (!blob) return;
        if (navigator.share && navigator.canShare?.({ files: [new File([blob], 'result.png', { type: 'image/png' })] })) {
          navigator.share({
            files: [new File([blob], 'ai-career-result.png', { type: 'image/png' })],
            title: t(ui.appTitle),
          });
        } else {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'ai-career-result.png';
          a.click();
          URL.revokeObjectURL(url);
        }
      }, 'image/png');
    } catch {
      // html2canvas not available — fallback: do nothing
    }
  };

  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className={styles.card} ref={cardRef}>
        {/* Title banner */}
        <div className={styles.banner}>
          <span className={styles.bannerIcon}>{career?.icon ?? '👤'}</span>
          <span className={styles.bannerTitle}>{t(ui.appTitle)}</span>
        </div>

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

        {/* Summary stats */}
        <motion.div
          className={styles.statsSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.summaryRow}>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>{career ? t(career.name) : ''}</span>
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
                      width: `${Math.min(Math.max(bar.value, 0), 100)}%`,
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

        {/* Career journey — story highlights */}
        {keyMoments.length > 0 && (
          <motion.div
            className={styles.journeySection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <h2 className={styles.journeyTitle}>{t(ui.careerJourney)}</h2>
            <div className={styles.timeline}>
              {keyMoments.map((m, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <span className={styles.timelineYear}>
                      {t(ui.yearLabel).replace('{n}', String(m.year))}
                    </span>
                    <p className={styles.timelineText}>{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Watermark for screenshot */}
        <div className={styles.watermark}>{t(ui.appTitle)} — {t(ui.appSubtitle)}</div>
      </div>

      {/* Actions — outside the screenshot card */}
      <motion.div
        className={styles.actions}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button className={styles.shareBtn} onClick={handleShare}>
          📸 {t(ui.shareResult)}
        </button>
        <button className={styles.primaryBtn} onClick={() => navigate('/')}>
          🔄 {t(ui.playAgain)}
        </button>
      </motion.div>
    </motion.div>
  );
}

/** Pick N evenly-spaced moments from the list */
function selectKeyMoments(moments: { year: number; text: string }[], max: number) {
  if (moments.length <= max) return moments;
  const step = moments.length / max;
  const result: typeof moments = [];
  for (let i = 0; i < max; i++) {
    result.push(moments[Math.floor(i * step)]);
  }
  return result;
}
