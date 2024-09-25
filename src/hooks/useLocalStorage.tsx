import loggers from '../utils/loggers'; 
import { useState } from 'react';

export const useLocalStorage = <T extends string | number | object | unknown[]>(keyName: string, defaultValue: T)  => {

  const [storedValue, setStoredValue] = useState<string | number | [] | object>(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        loggers.log(`${keyName} already exists:`, JSON.parse(value) );
        return JSON.parse(value);
      } else {
        loggers.log(`Initing ${keyName} in local storage to:`, { value: defaultValue });
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      loggers.logError(`Error initing ${keyName} local storage`, {keyName, defaultValue, returndErr: err});
      return defaultValue;
    }
  });

  
  const setValue = (newValue: T) => {
    try {
      loggers.log(`Setting ${keyName} in local storage to:`, { value: newValue });
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      loggers.logError(`Error setting ${keyName} in local storage`, {keyName, newValue, returndErr: err});
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue] as const;
};