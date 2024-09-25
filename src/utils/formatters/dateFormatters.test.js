/* eslint-disable no-magic-numbers */

import { formatDay, formatIntoDate, formatTime, howManyDaysBefore } from './dateFormatters';

describe('formatDay', () => {
  test('should return "1st" for day index 0', () => {
    expect(formatDay(0)).toBe('1st');
  });

  test('should return "2nd" for day index 1', () => {
    expect(formatDay(1)).toBe('2nd');
  });

  test('should return "3rd" for day index 2', () => {
    expect(formatDay(2)).toBe('3rd');
  });

  test('should return "4th" for day index 3', () => {
    expect(formatDay(3)).toBe('4th');
  });

  test('should return "21st" for day index 20', () => {
    expect(formatDay(20)).toBe('21st');
  });
});

describe('formatTime', () => {
  test('should format time correctly for 12-hour am/pm format', () => {
    expect(formatTime(0, 0)).toBe('12am'); // Midnight
    expect(formatTime(1, 30)).toBe('1:30am');
    expect(formatTime(12, 0)).toBe('12pm'); // Noon
    expect(formatTime(15, 5)).toBe('3:05pm');
  });
});

describe('howManyDaysBefore', () => {
  test('should return 0 if the timestamp is today', () => {
    const today = Date.now();
    expect(howManyDaysBefore(today)).toBe(0);
  });

  test('should return 1 for a timestamp 1 day before today', () => {
    const oneDayBefore = Date.now() - 1000 * 60 * 60 * 24; // 1 day ago
    expect(howManyDaysBefore(oneDayBefore)).toBe(1);
  });
});

describe('formatIntoDate', () => {
  test('should format timestamp into correct date string', () => {
    const timestamp = new Date('2023-01-05T14:30:00').getTime();
    expect(formatIntoDate(timestamp)).toBe('Jan 5th 2:30pm');
  });

  test('should format midnight timestamp correctly', () => {
    const timestamp = new Date('2023-01-01T00:00:00').getTime();
    expect(formatIntoDate(timestamp)).toBe('Jan 1st 12am');
  });
});