import { motion } from 'motion/react';
import type { Career, Attributes } from '../../engine/types';
import styles from './CareerCard.module.css';

interface CareerCardProps {
  career: Career;
  isSelected: boolean;
  onSelect: () => void;
  language: 'zh' | 'en';
}

function RadarChart({ attrs }: { attrs: Attributes }) {
  const size = 100;
  const center = size / 2;
  const maxRadius = 35;

  const points = [
    { x: center, y: center - (attrs.safety / 100) * maxRadius }, // top
    { x: center + (attrs.skill / 100) * maxRadius, y: center },   // right
    { x: center, y: center + (attrs.finance / 100) * maxRadius }, // bottom
    { x: center - (attrs.network / 100) * maxRadius, y: center }, // left
  ];

  const polygon = points.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100" height="100" aria-hidden="true">
      {/* Background grid lines */}
      <polygon
        points={`${center},${center - maxRadius} ${center + maxRadius},${center} ${center},${center + maxRadius} ${center - maxRadius},${center}`}
        fill="none"
        stroke="var(--color-border)"
        strokeWidth="0.5"
      />
      {/* Half grid */}
      <polygon
        points={`${center},${center - maxRadius * 0.5} ${center + maxRadius * 0.5},${center} ${center},${center + maxRadius * 0.5} ${center - maxRadius * 0.5},${center}`}
        fill="none"
        stroke="var(--color-border)"
        strokeWidth="0.5"
      />
      {/* Data polygon */}
      <polygon
        points={polygon}
        fill="rgba(26,54,93,0.2)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      {/* Center dot */}
      <circle cx={center} cy={center} r="1.5" fill="var(--color-primary)" />
      {/* Axis labels */}
      <text x={center} y={center - maxRadius - 4} textAnchor="middle" fontSize="6" fill="var(--color-text-light)">安全</text>
      <text x={center + maxRadius + 4} y={center + 2} textAnchor="start" fontSize="6" fill="var(--color-text-light)">技能</text>
      <text x={center} y={center + maxRadius + 10} textAnchor="middle" fontSize="6" fill="var(--color-text-light)">财务</text>
      <text x={center - maxRadius - 4} y={center + 2} textAnchor="end" fontSize="6" fill="var(--color-text-light)">人脉</text>
    </svg>
  );
}

export function CareerCard({ career, isSelected, onSelect, language }: CareerCardProps) {
  return (
    <motion.button
      className={`${styles.card} ${isSelected ? styles.selected : ''}`}
      onClick={onSelect}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      whileTap={{ y: -2, transition: { duration: 0.1 } }}
    >
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{career.icon}</span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{career.name[language]}</h3>
        <p className={styles.description}>{career.description[language]}</p>
      </div>
      <div className={styles.chart}>
        <RadarChart attrs={career.startingAttributes} />
      </div>
    </motion.button>
  );
}
