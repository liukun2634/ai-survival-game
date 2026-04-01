# Sound Effects Design

## Overview

Add programmatically generated sound effects to the AI survival card game using the Web Audio API. Zero external dependencies, zero audio files.

## Sound Manager Module

**File:** `src/engine/soundManager.ts`

A pure module that wraps Web Audio API. Lazily creates an `AudioContext` on first use (required by browser autoplay policies). All functions are no-ops when muted.

### API

| Function | Trigger | Sound Description |
|----------|---------|-------------------|
| `playCardAppear()` | New card mounts | Short bright "ding" — sine wave ~800Hz, 100ms, quick fade |
| `playOutcomeGood()` | Good outcome toast | Rising two-note sequence, major interval, bright |
| `playOutcomeMid()` | Neutral outcome toast | Single tone, mid-frequency, flat |
| `playOutcomeBad()` | Bad outcome toast | Descending low tone, minor feel, slightly longer |
| `playEndingWon()` | Victory result page | Short upward three-note arpeggio, major chord |
| `playEndingLost()` | Defeat result page | Two descending low notes, minor interval |
| `setMuted(muted: boolean)` | Mute button click | Persists to `localStorage` key `sound_muted` |
| `isMuted(): boolean` | Component render | Reads from `localStorage` |

### Audio Generation Details

- **Oscillator types:** sine for gentle tones, triangle for warmer tones
- **Gain envelope:** quick attack (10ms), variable sustain, fade out to avoid clicks
- **Card appear:** sine 800Hz, 80ms duration, gain 0.3
- **Outcome good:** sine 523Hz -> 659Hz (C5 -> E5), 100ms each, gain 0.3
- **Outcome mid:** triangle 440Hz (A4), 120ms, gain 0.2
- **Outcome bad:** triangle 330Hz -> 220Hz (E4 -> A3), 120ms each, gain 0.3
- **Ending won:** sine 523Hz -> 659Hz -> 784Hz (C5 -> E5 -> G5), 150ms each, gain 0.35
- **Ending lost:** triangle 294Hz -> 220Hz (D4 -> A3), 200ms each, gain 0.3

## Mute Button

- Location: GamePage top-right corner (alongside existing UI)
- Icon: `🔊` when on, `🔇` when muted
- State persisted via `localStorage`
- No React Context needed — components call soundManager functions directly

## Trigger Points

### 1. Card Appear — `SwipeCard` component

On component mount (new card rendered), call `playCardAppear()`. Use a `useEffect` keyed on `card.id` to trigger only when the card changes.

### 2. Outcome Toast — `OutcomeToast` component

On mount, evaluate outcome quality from the `effects` object:
- Sum all effect values
- Net sum > 5 → `playOutcomeGood()`
- Net sum < -5 → `playOutcomeBad()`
- Otherwise → `playOutcomeMid()`

### 3. Result Page — `ResultPage` component

On mount, check `gameOverReason`:
- `'won'` → `playEndingWon()`
- `'attr_zero'` or `'attr_max'` → `playEndingLost()`

## Files Changed

| File | Change |
|------|--------|
| `src/engine/soundManager.ts` | **New** — all audio logic |
| `src/components/SwipeCard/SwipeCard.tsx` | Add `useEffect` calling `playCardAppear()` |
| `src/components/OutcomeToast/OutcomeToast.tsx` | Add `useEffect` calling outcome sounds |
| `src/pages/ResultPage/ResultPage.tsx` | Add `useEffect` calling ending sounds |
| `src/pages/GamePage/GamePage.tsx` | Add mute toggle button |

## Non-Goals

- Background music
- Volume slider (just mute/unmute)
- Audio file loading
- Sound configuration UI beyond mute button
