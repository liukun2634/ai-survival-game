import { describe, it, expect, beforeEach } from 'vitest';
import { isMuted, setMuted } from '../soundManager';

beforeEach(() => {
  localStorage.clear();
});

describe('soundManager mute control', () => {
  it('defaults to muted when no localStorage value', () => {
    expect(isMuted()).toBe(true);
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
