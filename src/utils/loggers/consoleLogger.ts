/* eslint-disable no-console */

import { getLocalTime } from '../time/time';

// Don't pass literally everything that can be logged through here since too many logs make things unreadable. Just log the imoprtant stuff that we want to keep and track how things are going.

/** Singular point for all permanent console logs. Displays message for console alongside a deepcloned object timestamped. */
export const log = (consoleMessage: string, consoleObj: Record<string, unknown>) => {
  if (consoleObj) {
    const deepClonedObj = JSON.parse(JSON.stringify(consoleObj)); // deep clones in order to log a snapshot instead of an updating reference.
    console.log(`${getLocalTime(true, true, true)} \n`, consoleMessage, deepClonedObj); // comment this out if you want to turn off permanent console logs.
  } else {
    console.log(`${getLocalTime(true, true, true)} \n`, consoleMessage); 
  }
};