import Loggers from '../loggers';

export const thousandSeperator = (x: number) => {
  if (typeof x !== 'number' || isNaN(x)) {
    Loggers.logError('Invalid number input', { value: x });
    return x;
  }

  // Use Intl.NumberFormat for more robust and internationalized formatting
  return new Intl.NumberFormat('en-US').format(x);
};

export default { thousandSeperator };