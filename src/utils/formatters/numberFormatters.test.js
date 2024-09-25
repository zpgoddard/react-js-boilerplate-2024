/* eslint-disable no-magic-numbers */

import { thousandSeperator } from './numberFormatters';

describe('thousandSeperator', () => {
  test('should format number with thousand separators', () => {
    expect(thousandSeperator(1234)).toBe('1,234');
    expect(thousandSeperator(123456789)).toBe('123,456,789');
    expect(thousandSeperator(1000)).toBe('1,000');
  });

  test('should handle negative numbers', () => {
    expect(thousandSeperator(-1234567)).toBe('-1,234,567');
  });

  test('should handle decimal numbers', () => {
    expect(thousandSeperator(1234.56)).toBe('1,234.56');
  });

  test('should return the number as-is for invalid inputs (non-number)', () => {
    expect(thousandSeperator(NaN)).toBe(NaN);
    expect(thousandSeperator('string')).toBe('string');
    expect(thousandSeperator(undefined)).toBe(undefined);
  });

  test('should format zero correctly', () => {
    expect(thousandSeperator(0)).toBe('0');
  });
});