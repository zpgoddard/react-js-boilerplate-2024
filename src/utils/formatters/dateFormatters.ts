/* eslint-disable no-magic-numbers */

export const formatMonth = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

/** Formats a given day index into a string with a suffix (st, nd, rd, th) */
export const formatDay = (dayIndex: number) => {

  const day = dayIndex + 1;
  const dayLastDigit = day % 10;
  const dayLastTwoDigits = day % 100;

  if (dayLastTwoDigits >= 11 && dayLastTwoDigits <= 13) {
    return `${day}th`; // Handle 11th, 12th, 13th
  }

  switch (dayLastDigit) {
  case 1:
    return `${day}st`; 
  case 2:
    return `${day}nd`; 
  case 3:
    return `${day}rd`; 
  default:
    return `${day}th`; 
  }
};

/** 
 * Formats given hour and minute index into a readable time.
 * Example: 12:45pm, 1:50am, 4pm 
 */
export const formatTime = (hourIndex: number, minuteIndex = 0) => {
  if (hourIndex < 0 || hourIndex > 23 || minuteIndex < 0 || minuteIndex > 59) {
    throw new Error('Invalid time input');
  }

  const period = hourIndex >= 12 ? 'pm' : 'am';
  const adjustedHour = hourIndex % 12 === 0 ? 12 : hourIndex % 12; // Handle 12-hour format
  const formattedMinute = minuteIndex < 10 ? `0${minuteIndex}` : minuteIndex;

  return `${adjustedHour}${minuteIndex ? `:${formattedMinute}` : ''}${period}`;
};
/** 
 * Calculates how many days have passed from the given timestamp until today.
 * @param timestamp The timestamp to calculate the difference from
 */
export const howManyDaysBefore = (timestamp: number) => {
  const now = new Date();
  const givenDate = new Date(timestamp);

  if (isNaN(givenDate.getTime())) {
    throw new Error('Invalid timestamp');
  }

  const msPerDay = 1000 * 60 * 60 * 24;
  const daysDifference = Math.floor((now.getTime() - givenDate.getTime()) / msPerDay);

  return daysDifference;
};

/** 
 * Formats a given timestamp into a string representing the date, 
 * including month, day, and time.
 * Example: "Jan 5th 2:30pm"
 */
export const formatIntoDate = (timestamp: number) => {
  const date = new Date(timestamp);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid timestamp');
  }

  return `${formatMonth[date.getMonth()]} ${formatDay(date.getDate() - 1)} ${formatTime(date.getHours(), date.getMinutes())}`;
};

export default { formatDay, formatIntoDate, formatMonth, formatTime, howManyDaysBefore };