import { describe, it, expect } from 'vitest';
import { encodeShareData, decodeShareData } from '../shareEncoder';
import type { GameResult } from '../../engine/types';

const mockResult: GameResult = {
  careerId: 'programmer',
  finalYear: 25,
  score: 1234,
  titleId: 'lifelong_learner',
  finalAttributes: {
    safety: 72,
    skill: 88,
    finance: 55,
    network: 40,
  },
  history: [],
};

describe('encodeShareData', () => {
  it('produces a non-empty string', () => {
    const encoded = encodeShareData(mockResult);
    expect(typeof encoded).toBe('string');
    expect(encoded.length).toBeGreaterThan(0);
  });
});

describe('decodeShareData', () => {
  it('roundtrips correctly through encode then decode', () => {
    const encoded = encodeShareData(mockResult);
    const decoded = decodeShareData(encoded);
    expect(decoded).not.toBeNull();
    expect(decoded?.careerId).toBe(mockResult.careerId);
    expect(decoded?.finalYear).toBe(mockResult.finalYear);
    expect(decoded?.score).toBe(mockResult.score);
    expect(decoded?.titleId).toBe(mockResult.titleId);
    expect(decoded?.safety).toBe(mockResult.finalAttributes.safety);
    expect(decoded?.skill).toBe(mockResult.finalAttributes.skill);
    expect(decoded?.finance).toBe(mockResult.finalAttributes.finance);
    expect(decoded?.network).toBe(mockResult.finalAttributes.network);
  });

  it('returns null for invalid base64', () => {
    const result = decodeShareData('!!!not-valid-base64!!!');
    expect(result).toBeNull();
  });

  it('returns null for invalid JSON (valid base64 but not JSON)', () => {
    // btoa('not json')
    const notJson = btoa('not valid json {{{{');
    const result = decodeShareData(notJson);
    expect(result).toBeNull();
  });

  it('returns null for missing required fields', () => {
    // Missing careerId
    const missingField = btoa(JSON.stringify({ finalYear: 10, score: 500 }));
    const result = decodeShareData(missingField);
    expect(result).toBeNull();
  });
});
