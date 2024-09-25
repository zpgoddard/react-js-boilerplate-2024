const HUNDRED_PERCENT = 100;

/** Takes two values and returns what percentage the first value is out of the second. */
export const findPercentageValue = (thisMuch: number, outOfThis: number) => {
  // Handle cases where outOfThis is 0 to avoid division by zero.
  if (outOfThis === 0) {
    return 0;
  }

  const percentage = (thisMuch / outOfThis) * HUNDRED_PERCENT;

  // Handle cases where the result might be NaN or infinite.
  if (isNaN(percentage) || !isFinite(percentage)) {
    return 0;
  }

  return Math.round(percentage);
};

export default findPercentageValue;