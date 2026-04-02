import { useState, useCallback } from 'react';
import { isMuted, setMuted } from '../../engine/soundManager';
import styles from './SoundToggle.module.css';

export function SoundToggle() {
  const [muted, setMutedState] = useState(isMuted);
  const toggleMute = useCallback(() => {
    const next = !muted;
    setMuted(next);
    setMutedState(next);
  }, [muted]);

  return (
    <button
      className={styles.button}
      onClick={toggleMute}
      aria-label={muted ? 'Unmute' : 'Mute'}
      title={muted ? 'Unmute' : 'Mute'}
    >
      {muted ? '🔇' : '🔊'}
    </button>
  );
}
