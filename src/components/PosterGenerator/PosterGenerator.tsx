import { useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import html2canvas from 'html2canvas';
import type { GameResult } from '../../engine/types';
import { careers } from '../../data/careers';
import { titles } from '../../data/titles';
import styles from './PosterGenerator.module.css';

export interface PosterGeneratorHandle {
  capturePoster: () => Promise<void>;
}

interface PosterGeneratorProps {
  result: GameResult;
  language: 'zh' | 'en';
  t: (textObj: { zh: string; en: string }) => string;
}

export const PosterGenerator = forwardRef<PosterGeneratorHandle, PosterGeneratorProps>(
  function PosterGenerator({ result, language, t }, ref) {
    const posterRef = useRef<HTMLDivElement>(null);
    const career = careers.find((c) => c.id === result.careerId);
    const titleEntry = titles.find((ti) => ti.id === result.titleId);
    const isWin = result.finalYear >= 30;

    const capturePoster = useCallback(async () => {
      if (!posterRef.current) return;
      const el = posterRef.current;
      el.style.position = 'fixed';
      el.style.left = '0';
      el.style.top = '0';
      el.style.zIndex = '-9999';
      el.style.opacity = '1';
      el.style.pointerEvents = 'none';
      try {
        const canvas = await html2canvas(el, {
          scale: 2,
          backgroundColor: '#1a365d',
          width: 375,
          height: 667,
        });
        const link = document.createElement('a');
        link.download = `ai-survival-${result.careerId}-${result.score}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      } finally {
        el.style.position = '';
        el.style.left = '';
        el.style.top = '';
        el.style.zIndex = '';
        el.style.opacity = '';
        el.style.pointerEvents = '';
      }
    }, [result]);

    useImperativeHandle(ref, () => ({ capturePoster }), [capturePoster]);

    return (
      <div ref={posterRef} className={styles.poster}>
        <div className={styles.posterHeader}>
          <h2 className={styles.posterTitle}>
            {t({ zh: 'AI 生存挑战', en: 'AI Survival Challenge' })}
          </h2>
        </div>
        <div className={styles.posterCareer}>
          <span className={styles.posterIcon}>{career?.icon ?? '💼'}</span>
          <span className={styles.posterCareerName}>
            {career ? career.name[language] : result.careerId}
          </span>
        </div>
        <div className={styles.posterTitleEarned}>
          {titleEntry ? titleEntry.name[language] : result.titleId}
        </div>
        <div className={styles.posterOutcome}>
          {isWin
            ? t({ zh: '🎉 成功退休！', en: '🎉 Made it to retirement!' })
            : t({ zh: '💀 被AI替代', en: '💀 Replaced by AI' })}
        </div>
        <div className={styles.posterStats}>
          <div className={styles.posterStatRow}>
            <span>{t({ zh: '存活年数', en: 'Years' })}</span>
            <span className={styles.posterStatValue}>{result.finalYear}</span>
          </div>
          <div className={styles.posterStatRow}>
            <span>{t({ zh: '最终得分', en: 'Score' })}</span>
            <span className={styles.posterStatValue}>{result.score}</span>
          </div>
          <div className={styles.posterStatRow}>
            <span>{t({ zh: '安全值', en: 'Safety' })}</span>
            <span className={styles.posterStatValue}>{result.finalAttributes.safety}</span>
          </div>
          <div className={styles.posterStatRow}>
            <span>{t({ zh: '技能', en: 'Skill' })}</span>
            <span className={styles.posterStatValue}>{result.finalAttributes.skill}</span>
          </div>
        </div>
        <div className={styles.posterFooter}>
          <p>{t({ zh: '你能在AI时代存活多久？', en: 'How long can you survive the AI era?' })}</p>
        </div>
      </div>
    );
  }
);
