import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { EventCard } from '../../components/EventCard/EventCard';
import { StatBar } from '../../components/StatBar/StatBar';
import { AiProgressBar } from '../../components/AiProgressBar/AiProgressBar';
import { useLanguage } from '../../i18n/LanguageContext';
import { useGameContext } from '../../hooks/GameContext';
import { useGameState } from '../../hooks/useGameState';
import { milestones } from '../../data/milestones';
import { careers } from '../../data/careers';
import { ui } from '../../i18n/translations';
import type { GameEvent, EventOption, Attributes } from '../../engine/types';
import styles from './GamePage.module.css';

type GamePhase = 'init' | 'milestone' | 'event' | 'feedback' | 'year_transition';

interface StatChanges {
  safety: number;
  skill: number;
  finance: number;
  network: number;
}

const MILESTONE_YEARS = milestones.map((m) => m.year);

export function GamePage() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { selectedCareer, setLastResult } = useGameContext();
  const { state, currentEvents, currentMilestone, startGame, nextYear, selectOption, getResult, getAvailableOptionsForEvent } = useGameState();

  const [phase, setPhase] = useState<GamePhase>('init');
  const [eventIndex, setEventIndex] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [statChanges, setStatChanges] = useState<StatChanges>({ safety: 0, skill: 0, finance: 0, network: 0 });
  const [milestoneShown, setMilestoneShown] = useState(false);

  const initializedRef = useRef(false);
  const feedbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Redirect if no career selected
  useEffect(() => {
    if (!selectedCareer) {
      navigate('/select');
    }
  }, [selectedCareer, navigate]);

  // Init game on mount
  useEffect(() => {
    if (!selectedCareer || initializedRef.current) return;
    initializedRef.current = true;
    startGame(selectedCareer);
  }, [selectedCareer, startGame]);

  // Advance to first year after startGame sets state
  useEffect(() => {
    if (!state || currentEvents.length > 0 || phase !== 'init') return;
    nextYear();
  }, [state, currentEvents.length, phase, nextYear]);

  // When new events arrive (year started), check for milestone then show event
  useEffect(() => {
    if (currentEvents.length === 0) return;
    if (phase === 'init' || phase === 'year_transition') {
      setEventIndex(0);
      setMilestoneShown(false);
      if (currentMilestone && !milestoneShown) {
        setPhase('milestone');
      } else {
        setPhase('event');
      }
    }
  }, [currentEvents]); // eslint-disable-line react-hooks/exhaustive-deps

  // Cleanup feedback timer
  useEffect(() => {
    return () => {
      if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
    };
  }, []);

  const handleOptionSelect = (event: GameEvent, optionId: string) => {
    if (!state) return;

    const option = event.options.find((o) => o.id === optionId) as EventOption;

    selectOption(event, optionId);

    // Compute stat changes from option effects
    const changes: StatChanges = {
      safety: option.effects.safety ?? 0,
      skill: option.effects.skill ?? 0,
      finance: option.effects.finance ?? 0,
      network: option.effects.network ?? 0,
    };
    setStatChanges(changes);
    setFeedbackText(option.feedback[language]);
    setPhase('feedback');

    // Auto-advance after feedback
    feedbackTimerRef.current = setTimeout(() => {
      advanceAfterFeedback(event);
    }, 2200);
  };

  const advanceAfterFeedback = (_currentEvent: GameEvent) => {
    if (feedbackTimerRef.current) {
      clearTimeout(feedbackTimerRef.current);
      feedbackTimerRef.current = null;
    }
    setStatChanges({ safety: 0, skill: 0, finance: 0, network: 0 });

    // Check if this was the last event for this year
    const nextIdx = eventIndex + 1;
    if (nextIdx < currentEvents.length) {
      setEventIndex(nextIdx);
      setPhase('event');
    } else {
      // All events done for this year - check game over via state
      setPhase('year_transition');
    }
  };

  // When phase switches to year_transition, check if game over
  useEffect(() => {
    if (phase !== 'year_transition') return;
    if (!state) return;

    if (state.isGameOver) {
      const result = getResult();
      if (result) {
        setLastResult(result);
      }
      navigate('/result');
    } else {
      nextYear();
      setPhase('init');
    }
  }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  const dismissMilestone = () => {
    setMilestoneShown(true);
    setPhase('event');
  };

  const handleManualNext = () => {
    if (!currentEvents[eventIndex]) return;
    advanceAfterFeedback(currentEvents[eventIndex]);
  };

  if (!selectedCareer || !state) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingSpinner} />
        <p>{t({ zh: '加载中...', en: 'Loading...' })}</p>
      </div>
    );
  }

  const currentEvent = currentEvents[eventIndex];
  const availableOptionIds = currentEvent
    ? getAvailableOptionsForEvent(currentEvent).map((o) => o.id)
    : [];

  const displayAttributes = state.attributes;
  const career = careers.find((c) => c.id === selectedCareer.id) ?? selectedCareer;

  // Format year label
  const yearLabel = t(ui.year).replace('{n}', String(state.currentYear));

  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Header: Year + AI Progress */}
      <div className={styles.topBar}>
        <div className={styles.yearInfo}>
          <span className={styles.careerIcon}>{career.icon}</span>
          <span className={styles.yearLabel}>{yearLabel}</span>
        </div>
        <div className={styles.progressWrapper}>
          <AiProgressBar currentYear={state.currentYear} milestoneYears={MILESTONE_YEARS} />
        </div>
      </div>

      {/* Main content */}
      <div className={styles.main}>
        <AnimatePresence mode="wait">
          {phase === 'event' && currentEvent && (
            <motion.div
              key={`event-${currentEvent.id}-${eventIndex}`}
              className={styles.eventWrapper}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              {currentEvents.length > 1 && (
                <div className={styles.eventCounter}>
                  {t({ zh: `事件 ${eventIndex + 1}/${currentEvents.length}`, en: `Event ${eventIndex + 1}/${currentEvents.length}` })}
                </div>
              )}
              <EventCard
                event={currentEvent}
                availableOptionIds={availableOptionIds}
                onSelect={(optionId) => handleOptionSelect(currentEvent, optionId)}
                language={language}
              />
            </motion.div>
          )}

          {phase === 'feedback' && currentEvent && (
            <motion.div
              key={`feedback-${currentEvent.id}-${eventIndex}`}
              className={styles.feedbackWrapper}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.feedbackCard}>
                <div className={styles.feedbackHeader}>
                  <span className={styles.feedbackIcon}>📋</span>
                  <span className={styles.feedbackTitle}>
                    {t({ zh: '决策结果', en: 'Decision Result' })}
                  </span>
                </div>
                <p className={styles.feedbackText}>{feedbackText}</p>

                <div className={styles.feedbackChanges}>
                  {(Object.entries(statChanges) as [keyof StatChanges, number][])
                    .filter(([, v]) => v !== 0)
                    .map(([key, value]) => (
                      <motion.div
                        key={key}
                        className={styles.changeItem}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <span className={styles.changeLabel}>{t(ui[key as keyof typeof ui] as { zh: string; en: string })}</span>
                        <span
                          className={styles.changeValue}
                          style={{ color: value > 0 ? 'var(--color-success)' : 'var(--color-danger)' }}
                        >
                          {value > 0 ? `+${value}` : value}
                        </span>
                      </motion.div>
                    ))}
                </div>

                <button className={styles.nextButton} onClick={handleManualNext}>
                  {t({ zh: '继续', en: 'Continue' })} →
                </button>
              </div>
            </motion.div>
          )}

          {(phase === 'init' || phase === 'year_transition') && (
            <motion.div
              key="transition"
              className={styles.transitionMsg}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className={styles.loadingSpinner} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Stat bars */}
      <div className={styles.statsPanel}>
        <StatBar
          label={t(ui.safety)}
          value={displayAttributes.safety}
          color="var(--color-primary)"
          change={phase === 'feedback' ? statChanges.safety || undefined : undefined}
        />
        <StatBar
          label={t(ui.skill)}
          value={displayAttributes.skill}
          color="var(--color-success)"
          change={phase === 'feedback' ? statChanges.skill || undefined : undefined}
        />
        <StatBar
          label={t(ui.finance)}
          value={displayAttributes.finance}
          color="var(--color-accent)"
          change={phase === 'feedback' ? statChanges.finance || undefined : undefined}
        />
        <StatBar
          label={t(ui.network)}
          value={displayAttributes.network}
          color="#805ad5"
          change={phase === 'feedback' ? statChanges.network || undefined : undefined}
        />
      </div>

      {/* Milestone overlay */}
      <AnimatePresence>
        {phase === 'milestone' && currentMilestone && (
          <motion.div
            className={styles.milestoneOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.milestoneCard}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <div className={styles.milestoneHeader}>
                <span className={styles.milestoneIcon}>🤖</span>
                <span className={styles.milestoneBadge}>{t(ui.milestoneAlert)}</span>
              </div>
              <h2 className={styles.milestoneTitle}>{t(currentMilestone.title)}</h2>
              <p className={styles.milestoneDescription}>{t(currentMilestone.description)}</p>

              {/* Show effects summary */}
              <div className={styles.milestoneEffects}>
                {(Object.entries(currentMilestone.effects) as [keyof Attributes, number][])
                  .filter(([, v]) => v !== 0)
                  .map(([key, value]) => (
                    <span key={key} className={styles.milestoneEffect} style={{ color: value > 0 ? 'var(--color-success)' : 'var(--color-danger-light)' }}>
                      {t(ui[key as keyof typeof ui] as { zh: string; en: string })} {value > 0 ? `+${value}` : value}
                    </span>
                  ))}
              </div>

              <button className={styles.milestoneContinue} onClick={dismissMilestone}>
                {t(ui.continue)}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
