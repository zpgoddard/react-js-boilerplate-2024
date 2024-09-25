export const sortArrByKey = (array: [], key: string, isReversed?: boolean) => array.sort(function(a, b) {
  if (isReversed) {
    const x = b[key]; const y = a[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  } else {
    const x = a[key]; const y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  }
});

export const shuffleArray = (a: []) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const getArrayAverage = (arr: []) => {
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
};

export default { getArrayAverage, shuffleArray, sortArrByKey };