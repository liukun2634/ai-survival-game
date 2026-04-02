const STORAGE_KEY = 'sound_muted';

let ctx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!ctx) {
    ctx = new AudioContext();
  }
  return ctx;
}

export function isMuted(): boolean {
  const val = localStorage.getItem(STORAGE_KEY);
  if (val === null) return true; // default muted
  return val === 'true';
}

export function setMuted(muted: boolean): void {
  localStorage.setItem(STORAGE_KEY, String(muted));
}

function playTone(frequency: number, duration: number, gain: number, type: OscillatorType = 'sine', startTime?: number): void {
  if (isMuted()) return;
  const ac = getCtx();
  const osc = ac.createOscillator();
  const vol = ac.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  const start = startTime ?? ac.currentTime;
  vol.gain.setValueAtTime(gain, start);
  vol.gain.exponentialRampToValueAtTime(0.001, start + duration);
  osc.connect(vol);
  vol.connect(ac.destination);
  osc.start(start);
  osc.stop(start + duration);
}

/** Light "ding" when a new card appears */
export function playCardAppear(): void {
  playTone(800, 0.08, 0.3, 'sine');
}

/** Rising two-note sequence for good outcome */
export function playOutcomeGood(): void {
  const ac = getCtx();
  playTone(523, 0.1, 0.3, 'sine', ac.currentTime);
  playTone(659, 0.1, 0.3, 'sine', ac.currentTime + 0.12);
}

/** Single flat tone for neutral outcome */
export function playOutcomeMid(): void {
  playTone(440, 0.12, 0.2, 'triangle');
}

/** Descending low tone for bad outcome */
export function playOutcomeBad(): void {
  const ac = getCtx();
  playTone(330, 0.12, 0.3, 'triangle', ac.currentTime);
  playTone(220, 0.12, 0.3, 'triangle', ac.currentTime + 0.14);
}

/** Upward three-note arpeggio for victory */
export function playEndingWon(): void {
  const ac = getCtx();
  playTone(523, 0.15, 0.35, 'sine', ac.currentTime);
  playTone(659, 0.15, 0.35, 'sine', ac.currentTime + 0.18);
  playTone(784, 0.15, 0.35, 'sine', ac.currentTime + 0.36);
}

/** Two descending notes for defeat */
export function playEndingLost(): void {
  const ac = getCtx();
  playTone(294, 0.2, 0.3, 'triangle', ac.currentTime);
  playTone(220, 0.2, 0.3, 'triangle', ac.currentTime + 0.25);
}
