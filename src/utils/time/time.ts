/** Returns string representing local time dependant on booleans set to true. */
export const getLocalTime = (includesHours: boolean, includesMinutes: boolean, includesSeconds: boolean) => {
  const stringToReturn: number[] = [];
  const now = new Date();
  if (includesHours) stringToReturn.push(now.getHours());
  if (includesMinutes) stringToReturn.push(now.getMinutes());
  if (includesSeconds) stringToReturn.push(now.getSeconds());
  return stringToReturn.join(':');
};

export default { getLocalTime };