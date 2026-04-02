# Sound Effects Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add programmatically generated sound effects (Web Audio API) for card appear, outcome results, and game endings, with a mute toggle button.

**Architecture:** A single `soundManager.ts` module wraps Web Audio API with lazy AudioContext creation. Components call exported functions directly. Mute state persists via localStorage.

**Tech Stack:** Web Audio API (built-in), React hooks for trigger points, CSS modules for mute button.

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `src/engine/soundManager.ts` | Create | All audio generation and mute state |
| `src/engine/__tests__/soundManager.test.ts` | Create | Unit tests for soundManager |
| `src/components/SwipeCard/SwipeCard.tsx` | Modify | Trigger `playCardAppear()` on card change |
| `src/components/OutcomeToast/OutcomeToast.tsx` | Modify | Trigger outcome sound on mount |
| `src/pages/ResultPage/ResultPage.tsx` | Modify | Trigger ending sound on mount |
| `src/pages/GamePage/GamePage.tsx` | Modify | Add mute toggle button |
| `src/pages/GamePage/GamePage.module.css` | Modify | Style mute button |

---

### Task 1: Create soundManager with mute control

**Files:**
- Create: `src/engine/soundManager.ts`
- Create: `src/engine/__tests__/soundManager.test.ts`

- [ ] **Step 1: Write the failing tests**

```typescript
// src/engine/__tests__/soundManager.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { isMuted, setMuted } from '../soundManager';

beforeEach(() => {
  localStorage.clear();
});

describe('soundManager mute control', () => {
  it('defaults to not muted', () => {
    expect(isMuted()).toBe(false);
  });

  it('can be muted', () => {
    setMuted(true);
    expect(isMuted()).toBe(true);
  });

  it('persists mute state to localStorage', () => {
    setMuted(true);
    expect(localStorage.getItem('sound_muted')).toBe('true');
  });

  it('reads mute state from localStorage', () => {
    localStorage.setItem('sound_muted', 'true');
    expect(isMuted()).toBe(true);
  });

  it('can be unmuted', () => {
    setMuted(true);
    setMuted(false);
    expect(isMuted()).toBe(false);
    expect(localStorage.getItem('sound_muted')).toBe('false');
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run src/engine/__tests__/soundManager.test.ts`
Expected: FAIL — module `../soundManager` has no exports `isMuted`, `setMuted`

- [ ] **Step 3: Implement soundManager**

```typescript
// src/engine/soundManager.ts
const STORAGE_KEY = 'sound_muted';

let ctx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!ctx) {
    ctx = new AudioContext();
  }
  return ctx;
}

export function isMuted(): boolean {
  return localStorage.getItem(STORAGE_KEY) === 'true';
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
  vol.gain.setValueAtTime(gain, ac.currentTime);
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
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run src/engine/__tests__/soundManager.test.ts`
Expected: PASS (all 5 tests)

- [ ] **Step 5: Commit**

```bash
git add src/engine/soundManager.ts src/engine/__tests__/soundManager.test.ts
git commit -m "feat: add soundManager with Web Audio API sound generation and mute control"
```

---

### Task 2: Trigger card appear sound in SwipeCard

**Files:**
- Modify: `src/components/SwipeCard/SwipeCard.tsx`

- [ ] **Step 1: Add useEffect to play card appear sound**

At the top of `SwipeCard.tsx`, add the import:

```typescript
import { useEffect } from 'react';
import { playCardAppear } from '../../engine/soundManager';
```

Inside the `SwipeCard` component function, before the `return`, add:

```typescript
  useEffect(() => {
    playCardAppear();
  }, [card.id]);
```

- [ ] **Step 2: Manually test in browser**

Run: `npm run dev`
Navigate to a game. Each new card should produce a short "ding" sound. Verify multiple card transitions each trigger a sound.

- [ ] **Step 3: Commit**

```bash
git add src/components/SwipeCard/SwipeCard.tsx
git commit -m "feat: play card appear sound on new card"
```

---

### Task 3: Trigger outcome sounds in OutcomeToast

**Files:**
- Modify: `src/components/OutcomeToast/OutcomeToast.tsx`

- [ ] **Step 1: Add useEffect to play outcome sound on mount**

At the top of `OutcomeToast.tsx`, add the import:

```typescript
import { useEffect } from 'react';
import { playOutcomeGood, playOutcomeMid, playOutcomeBad } from '../../engine/soundManager';
```

Inside the `OutcomeToast` component function, before the `return`, add:

```typescript
  useEffect(() => {
    const netEffect = Object.values(outcome.effects).reduce((sum, v) => sum + (v ?? 0), 0);
    if (netEffect > 5) {
      playOutcomeGood();
    } else if (netEffect < -5) {
      playOutcomeBad();
    } else {
      playOutcomeMid();
    }
  }, [outcome]);
```

- [ ] **Step 2: Manually test in browser**

Run: `npm run dev`
Play through cards. When an outcome toast appears, verify:
- Positive outcomes (net effects > 5) play a rising tone
- Negative outcomes (net effects < -5) play a descending tone
- Neutral outcomes play a flat tone

- [ ] **Step 3: Commit**

```bash
git add src/components/OutcomeToast/OutcomeToast.tsx
git commit -m "feat: play outcome sounds based on effect quality"
```

---

### Task 4: Trigger ending sounds in ResultPage

**Files:**
- Modify: `src/pages/ResultPage/ResultPage.tsx`

- [ ] **Step 1: Add useEffect to play ending sound on mount**

At the top of `ResultPage.tsx`, add the import:

```typescript
import { playEndingWon, playEndingLost } from '../../engine/soundManager';
```

`useEffect` is already imported. After the early return for `!lastResult`, add:

```typescript
  useEffect(() => {
    if (lastResult.gameOverReason === 'won') {
      playEndingWon();
    } else {
      playEndingLost();
    }
  }, [lastResult]);
```

Place this `useEffect` right after the `if (!lastResult)` block and before the `const career = ...` line.

- [ ] **Step 2: Manually test in browser**

Run: `npm run dev`
Play through to completion. Verify:
- Winning ending plays an upward arpeggio
- Losing ending (attr_zero or attr_max) plays descending notes

- [ ] **Step 3: Commit**

```bash
git add src/pages/ResultPage/ResultPage.tsx
git commit -m "feat: play ending sounds on result page"
```

---

### Task 5: Add mute toggle button to GamePage

**Files:**
- Modify: `src/pages/GamePage/GamePage.tsx`
- Modify: `src/pages/GamePage/GamePage.module.css`

- [ ] **Step 1: Add mute button to GamePage**

At the top of `GamePage.tsx`, add imports:

```typescript
import { useState, useCallback } from 'react';
import { isMuted, setMuted } from '../../engine/soundManager';
```

Note: `useEffect` and `useRef` are already imported. Update the import line to include `useState` and `useCallback`:

```typescript
import { useEffect, useRef, useState, useCallback } from 'react';
```

Inside `GamePage` function, after the existing `useRef` line (line 19), add:

```typescript
  const [muted, setMutedState] = useState(isMuted);
  const toggleMute = useCallback(() => {
    const next = !muted;
    setMuted(next);
    setMutedState(next);
  }, [muted]);
```

In the JSX, right after `<motion.div className={styles.page} ...>` and before the `{/* Attribute bars */}` comment, add:

```tsx
      {/* Mute toggle */}
      <button className={styles.muteBtn} onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
        {muted ? '🔇' : '🔊'}
      </button>
```

- [ ] **Step 2: Style the mute button**

Add to the end of `GamePage.module.css`:

```css
.muteBtn {
  position: fixed;
  top: 12px;
  right: 12px;
  z-index: 50;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  transition: background 0.2s;
}

.muteBtn:hover {
  background: rgba(255, 255, 255, 1);
}
```

- [ ] **Step 3: Manually test in browser**

Run: `npm run dev`
Verify:
- Mute button visible at top-right corner of GamePage
- Clicking toggles icon between 🔊 and 🔇
- When muted, no sounds play for card appear, outcomes, or endings
- Mute state persists after page refresh

- [ ] **Step 4: Run all tests**

Run: `npx vitest run`
Expected: All existing tests + new soundManager tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/pages/GamePage/GamePage.tsx src/pages/GamePage/GamePage.module.css
git commit -m "feat: add mute toggle button to GamePage"
```

---

### Task 6: Final verification

- [ ] **Step 1: Run full test suite**

Run: `npx vitest run`
Expected: All tests pass.

- [ ] **Step 2: Run build**

Run: `npm run build`
Expected: Build succeeds with no TypeScript errors.

- [ ] **Step 3: End-to-end manual test**

1. Open dev server, start a new game
2. Hear card appear "ding" on each new card
3. Swipe and get outcomes — hear good/mid/bad sounds
4. Click mute button — icon changes to 🔇
5. Continue playing — no sounds
6. Click unmute — sounds resume
7. Refresh page — mute state persists
8. Play to completion — hear ending sound (won or lost)

- [ ] **Step 4: Commit all changes if any remaining**

```bash
git status
# If anything unstaged, add and commit
```
