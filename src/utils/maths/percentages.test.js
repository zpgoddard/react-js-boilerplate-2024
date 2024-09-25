/* eslint-disable no-magic-numbers */

import { findPercentageValue } from './percentages';

describe('findPercentageValue', () => {
  test('should return 50 when thisMuch is 50 and outOfThis is 100', () => {
    const result = findPercentageValue(50, 100);
    expect(result).toBe(50);
  });

  test('should return 100 when thisMuch is 100 and outOfThis is 100', () => {
    const result = findPercentageValue(100, 100);
    expect(result).toBe(100);
  });

  test('should return 0 when thisMuch is 0', () => {
    const result = findPercentageValue(0, 100);
    expect(result).toBe(0);
  });

  test('should handle dividing by zero and return 0', () => {
    const result = findPercentageValue(100, 0);
    expect(result).toBe(0);
  });

  test('should round the percentage to the nearest whole number', () => {
    const result = findPercentageValue(25, 123); // 25/123 ≈ 20.3252 => 20
    expect(result).toBe(20);
  });

  test('should return negative percentage when thisMuch is negative', () => {
    const result = findPercentageValue(-50, 100);
    expect(result).toBe(-50);
  });

  test('should return 0 when both inputs are zero', () => {
    const result = findPercentageValue(0, 0);
    expect(result).toBe(0);
  });
});