/** Log's error message and object to console before sending to backend to notify us and be stored for future refernece. */
export const logError = (errorMsg: string, errorObj: Record<string, unknown>) => {
  console.error(errorMsg, errorObj);
  // TODO: log to backend
};